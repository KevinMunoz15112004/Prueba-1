import React, { useState } from 'react';
import { dbFirebase } from '../../firebase.js';
import { collection, addDoc } from 'firebase/firestore';
import './Contacts.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Enviar los datos a Firestore
      const docRef = await addDoc(collection(dbFirebase, 'contactMessages'), {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        timestamp: new Date(),
      });

      console.log("Mensaje enviado con ID: ", docRef.id);
      setFormData({ name: '', email: '', message: '' }); // Limpiar formulario
      setIsSubmitting(false); // Terminar proceso de envío
    } catch (err) {
      console.error("Error añadiendo el mensaje: ", err);
      setError('Hubo un error al enviar el mensaje, por favor intenta de nuevo.');
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact">
      <h2>Contacto</h2>
      <p>¡Estamos aquí para ayudarte! Contáctanos a través de nuestras redes sociales o completa el formulario.</p>
      
      <div className="contact-icons">
        <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="icon whatsapp">
          <i className="fab fa-whatsapp"></i> WhatsApp
        </a>
        <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="icon facebook">
          <i className="fab fa-facebook"></i> Facebook
        </a>
        <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="icon instagram">
          <i className="fab fa-instagram"></i> Instagram
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="icon twitter">
          <i className="fab fa-twitter"></i> Twitter (X)
        </a>
      </div>

      <div className="contact-form">
        <h3>Formulario de Contacto</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <label htmlFor="email">Correo Electrónico</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <label htmlFor="message">Mensaje</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Enviando...' : 'Enviar'}
          </button>
        </form>
        {error && <p className="error-message">{error}</p>}
      </div>
    </section>
  );
};

export default Contact;
