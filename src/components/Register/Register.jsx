import React, { useState, useEffect, useRef } from 'react';
import { createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { authFirebase, dbFirebase } from "../../firebase.js";
import { setDoc, doc } from 'firebase/firestore';
import { useNavigate } from "react-router";
import { collection, query, where, getDocs } from "firebase/firestore";
import './Register.css';
import faceIO from '@faceio/fiojs';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const faceio = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    faceio.current = new faceIO("");
  }, []);

  const handleFaceOnlyRegister = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Por favor completa el correo y la contraseña antes de registrarte.");
      return;
    }
    
    try {
      const userInfo = await faceio.current.enroll({
        locale: "auto",
        payload: {}
      });
  
      const facialUID = userInfo.facialId;
      console.log("Usuario registrado solo con rostro:", userInfo);
  
      const userCredential = await createUserWithEmailAndPassword(authFirebase, email, password);
      const user = userCredential.user;
  
      await setDoc(doc(dbFirebase, "Users", user.uid), {
        email: user.email,
        rol: "admin", 
        facialId: facialUID,
      });
  
      alert("¡Registro exitoso!");
      navigate("/login");
  
    } catch (err) {
      console.error("Error durante el registro:", err);
      setError("Hubo un error durante el registro.");
    }
  };
  
  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(authFirebase, email, password);
      const user = userCredential.user;

      if (user) {
        await setDoc(doc(dbFirebase, "Users", user.uid), {
          email: user.email,
          rol: "admin", 
        });
      }

      await signOut(authFirebase);
      navigate("/login");

    } catch (error) {
      console.log(error.message);
      setError(error.message);
    }
  }

  return (
    <>
      <div className="welcome-container">
        <div className="welcome-message">
          <h2>Bienvenidos a RedVital</h2>
        </div>
      </div>
      <main>
        <section className="registro">
          <div className="registro-container">
            <h2>REGISTRO</h2>
            <form onSubmit={handleRegister}>
              <label htmlFor="email">Correo</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Introduce tu correo"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <label htmlFor="password">Contraseña</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Introduce tu contraseña"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              {error && <p className="error-message">Error</p>} 

            </form>
            <div id='fio-camera'></div>
            <button className='register-face' onClick={handleFaceOnlyRegister}>Registrarse</button> 
          </div>
        </section>
      </main>
    </>
  );
};

export default Register;
