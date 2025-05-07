import React, { useState, useEffect, useRef } from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import { authFirebase, dbFirebase } from "../../firebase.js"; 
import { useNavigate } from "react-router-dom";
import { collection, query, where, getDoc, doc } from "firebase/firestore";
import './Login.css';
import faceIO from '@faceio/fiojs';  

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const navigate = useNavigate();
  const faceio = useRef(null);

  useEffect(() => {
    faceio.current = new faceIO("");
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(authFirebase, email, password);
      
      navigate("/services");

    } catch (error) {
      console.log(error.message);
      setError(error.message);  
    }
  };

  const handleFaceLogin = async () => {

    if (!email || !password) {
      alert("Por favor completa el correo y la contraseña antes de iniciar sesión.");
      return;
    }

    try {
      await faceio.current.authenticate({ locale: "es" });
  
      await signInWithEmailAndPassword(authFirebase, email, password);
  
      navigate("/crud");
  
    } catch (err) {
      console.error("Error al iniciar sesión con el rostro:", err);
      setError("Fallo la autenticación facial o credenciales incorrectas.");
    }
  };  
  
  const handleRegisterRedirect = () => {
    navigate('/register');
  };

  return (
    <>
      <div className="welcome-container">
        <div className="welcome-message">
          <h2>Bienvenidos a RedVital</h2>
        </div>
      </div>

      <div className="login-container">
        <div className="login-box">
          <h2>LOGIN</h2>
          <form onSubmit={handleLogin}>
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
            
            {error && <p className="error-message">{"Usuario no encontrado"}</p>}

            <div className="buttons">
            <button type="button" className='btn-login' onClick={handleFaceLogin}>
              Iniciar Sesión
            </button>
              <button type="button" className="btn-register" onClick={handleRegisterRedirect}>Registrarse</button>
            </div>
          </form>

          <div id="error-message" className="error-message" style={{ display: 'none' }}>
            Usuario o contraseña incorrectos
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
