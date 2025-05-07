import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router';
import { authFirebase } from '../../firebase';
import './Navbar.css'

const Navbar = ({user}) => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
      const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
      };

      const handleLogout = async () => {
        try {
            await authFirebase.signOut()
            window.location.href = "/"
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <>
        <header>
                <div className="logo">
                  <img src='/images/logo.png' alt="Logo de RedVital" />
                  <h1>
                    <a href="/">RedVital</a>
                  </h1>
                </div>
                <nav id="navbar" className={isMenuOpen ? "mobile-menu" : ""}>
                  <NavLink to='/'>Inicio</NavLink>
                  <NavLink to='/services'>Servicios</NavLink>
                  <NavLink to='/contacts'>Contactos</NavLink>
                  <NavLink to='/download'>Descargar</NavLink>
                  {!user && (
                  <>
                    <NavLink to='/register' className="button">Registrarse</NavLink>
                    <NavLink to='/login' className="button">Iniciar Sesión</NavLink>
                  </>
                  )}

                  {user && (
                    <button onClick={handleLogout} className="button-cerrar">Cerrar Sesión</button>
                  )}

                </nav>
                <div id="hamburger-menu" className="mobile-nav" onClick={toggleMenu}>
                  <span className="bar"></span>
                  <span className="bar"></span>
                  <span className="bar"></span>
                </div>
        </header>
    </>
  )
}

export default Navbar
