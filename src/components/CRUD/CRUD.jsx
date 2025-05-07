import React, { useState, useEffect } from "react";
import { dbFirebase, authFirebase } from "../../firebase.js";
import { collection, addDoc, onSnapshot, doc, updateDoc, deleteDoc } from "firebase/firestore";
import Modal from '../../Modal/Modal';
import { toast } from 'react-toastify';
import './CRUD.css';

const CRUD = () => {
  const [location, setLocation] = useState("");
  const [day, setDay] = useState("");
  const [time, setTime] = useState("");
  const [reason, setReason] = useState("");
  const [appointments, setAppointments] = useState([]);
  const [editing, setEditing] = useState(null);
  const [editLocation, setEditLocation] = useState("");
  const [editDay, setEditDay] = useState("");
  const [editTime, setEditTime] = useState("");
  const [editReason, setEditReason] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(dbFirebase, "Appointments"), (snapshot) => {
      const fetchedAppointments = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setAppointments(fetchedAppointments);
    });

    return () => unsubscribe();
  }, []);


  const handleRegister = async () => {
    if (!location || !day || !time || !reason) {
      alert("Por favor complete todos los campos.");
      return;
    }
  
    try {
      // Registrar la cita en Firestore
      const docRef = await addDoc(collection(dbFirebase, "Appointments"), {
        location,
        day,
        time,
        reason,
      });
  
      const newAppointment = {
        id: docRef.id,
        location,
        day,
        time,
        reason,
      };
  
      setAppointments([newAppointment, ...appointments]);
  
      // Limpiar los campos después de registrar la cita
      setLocation("");
      setDay("");
      setTime("");
      setReason("");
  
      const user = authFirebase.currentUser;
      if (user) {
        const userEmail = user.email;

        const emailData = {
          to: userEmail,
          template: "order-confirmation",
          templateVariables: {
            day: day,
            location: location,
            reason: reason,
            time: time,
            receipt: docRef.id, 
          },
        };
  
        // Enviar el correo
        fetch("https://api.enveloop.com/messages", {
          method: "POST",
          body: JSON.stringify(emailData),
          headers: {
            "Content-Type": "application/json",
            "Authorization": "", // Tu token de Enveloop
          },
        })
          .then(response => response.json())
          .then(json => console.log("Correo enviado: ", json))
          .catch(err => console.log("Error al enviar el correo: ", err));

          toast.success(`Correo enviado a ${userEmail}`);
      }

    } catch (error) {
      console.error("Error al registrar:", error);
    }

  };
  
  const handleEdit = (appointment) => {
    setEditing(appointment.id);
    setEditLocation(appointment.location);
    setEditDay(appointment.day);
    setEditTime(appointment.time);
    setEditReason(appointment.reason);
    setIsModalOpen(true);
  };

  const handleUpdate = async () => {
    if (!editLocation || !editDay || !editTime || !editReason) {
      alert("Por favor complete todos los campos.");
      return;
    }
    try {
      const docRef = doc(dbFirebase, "Appointments", editing);
      await updateDoc(docRef, {
        location: editLocation,
        day: editDay,
        time: editTime,
        reason: editReason,
      });
      setIsModalOpen(false);
      setEditing(null);
      setEditLocation("");
      setEditDay("");
      setEditTime("");
      setEditReason("");
    } catch (error) {
      console.error("Error al actualizar:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const docRef = doc(dbFirebase, "Appointments", id);
      await deleteDoc(docRef);

      setAppointments((prevAppointments) =>
        prevAppointments.filter((appointment) => appointment.id !== id)
      );
    } catch (error) {
      console.error("Error al eliminar:", error);
    }
  };

  return (
    <>
      <div className="welcome-container">
        <div className="welcome-message">
          <h2>Bienvenidos a RedVital</h2>
        </div>
      </div>
      <div className="crud-container">
        {/* Caja izquierda */}
        <div className="crud-left">
          <h3>Registrar Cita</h3>
          <label>Ubicación</label>
          <select value={location} onChange={(e) => setLocation(e.target.value)}>
            <option value="">Seleccione</option>
            <option value="Unidad Educativa María Auxiliadora">Unidad Educativa María Auxiliadora</option>
            <option value="Unidad Educativa Municipal Antonio José de Sucre">Unidad Educativa Municipal Antonio José de Sucre</option>
            <option value="Unidad Educativa Municipal Alfredo Pérez Guerrero">Unidad Educativa Municipal Alfredo Pérez Guerrero</option>
            <option value="Unidad Educativa Municipal Bicentenario">Unidad Educativa Municipal Bicentenario</option>
            <option value="Unidad Educativa Municipal Calderón">Unidad Educativa Municipal Calderón</option>
            <option value="Hospital de Especialidades de FF.AA">Hospital de Especialidades de FF.AA</option>
            <option value="Centro de Atención Ambulatoria Central de Quito">Centro de Atención Ambulatoria Central de Quito</option>
            <option value="CAA Central Quito">CAA Central Quito</option>
            <option value="Hospital San Francisco de Quito Nivel II">Hospital San Francisco de Quito Nivel II</option>
            <option value="Hospital del día Eloy Alfaro">Hospital del día Eloy Alfaro</option>
            <option value="Vendedor Canal Food Service - Quito">Vendedor Canal Food Service - Quito</option>
            <option value="Empacadores Quito">Empacadores Quito</option>
            <option value="Auxiliar de Convenios Ecuador">Auxiliar de Convenios Ecuador</option>
            <option value="Analista de Datos">Analista de Datos</option>
            <option value="Promotor de Ventas - Quito">Promotor de Ventas - Quito</option>
          </select>

          <label>Día</label>
          <select value={day} onChange={(e) => setDay(e.target.value)}>
            <option value="">Seleccione</option>
            <option value="Lunes">Lunes</option>
            <option value="Martes">Martes</option>
            <option value="Miércoles">Miércoles</option>
            <option value="Jueves">Jueves</option>
            <option value="Viernes">Viernes</option>
          </select>

          <label>Hora</label>
          <select value={time} onChange={(e) => setTime(e.target.value)}>
            <option value="">Seleccione</option>
            <option value="07:00 AM">07:00 AM</option>
            <option value="08:00 AM">08:00 AM</option>
            <option value="09:00 AM">09:00 AM</option>
            <option value="10:00 AM">10:00 AM</option>
            <option value="11:00 AM">11:00 AM</option>
            <option value="12:00 PM">12:00 PM</option>
            <option value="13:00 PM">13:00 PM</option>
            <option value="14:00 PM">14:00 PM</option>
            <option value="15:00 PM">15:00 PM</option>
            <option value="16:00 PM">16:00 PM</option>
            <option value="17:00 PM">17:00 PM</option>
          </select>

          <label>Motivo</label>
          <textarea
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            placeholder="Ingrese el motivo de la cita"
          />

          <button onClick={handleRegister} className="register-button">Registrar</button>

        </div>

        {/* Caja derecha */}
        <div className="crud-right">
          <h3>Información Registrada</h3>
          {appointments.map((appointment) => (
            <div key={appointment.id} className="appointment-item">
              <p><strong>Lugar Agendado:</strong> {appointment.location}</p>
              <p><strong>Día asignado:</strong> {appointment.day}</p>
              <p><strong>Hora asignada:</strong> {appointment.time}</p>
              <p><strong>Motivo:</strong> {appointment.reason}</p>
              <div className="buttons-crud">
                <button onClick={() => handleEdit(appointment)}>Actualizar</button>
                <button onClick={() => handleDelete(appointment.id)}>Eliminar</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal para editar cita */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onUpdate={handleUpdate}
        editData={{
          location: editLocation,
          setLocation: setEditLocation,
          day: editDay,
          setDay: setEditDay,
          time: editTime,
          setTime: setEditTime,
          reason: editReason,
          setReason: setEditReason,
        }}
      />
    </>
  );
};

export default CRUD;
