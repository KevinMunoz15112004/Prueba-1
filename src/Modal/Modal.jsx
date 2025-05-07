import React from 'react';
import './Modal.css'; // Asegúrate de tener estilos para el modal

const Modal = ({ isOpen, onClose, onUpdate, editData }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3>Editar Cita</h3>
        <label>Ubicación</label>
        <select value={editData.location} onChange={(e) => editData.setLocation(e.target.value)}>
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
        <select value={editData.day} onChange={(e) => editData.setDay(e.target.value)}>
          <option value="">Seleccione</option>
          <option value="Lunes">Lunes</option>
          <option value="Martes">Martes</option>
          <option value="Miércoles">Miércoles</option>
          <option value="Jueves">Jueves</option>
          <option value="Viernes">Viernes</option>
        </select>

        <label>Hora</label>
        <select value={editData.time} onChange={(e) => editData.setTime(e.target.value)}>
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
          value={editData.reason}
          onChange={(e) => editData.setReason(e.target.value)}
          placeholder="Ingrese el motivo de la cita"
        />

        <button onClick={onUpdate} className="register-button">Actualizar</button>
        <button onClick={onClose} className="close-button">Cerrar</button>
      </div>
    </div>
  );
};

export default Modal;