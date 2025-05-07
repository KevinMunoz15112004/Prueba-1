import React from 'react';
import "./Home.css";
import { NavLink } from 'react-router';

const Home = () => {

  return (
    <>
      <div className="welcome-container">
        <div className="welcome-message">
          <h2>Bienvenidos a RedVital</h2>
        </div>
      </div>
      <section className="about">
        <div className="map-container map-container-1">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1587.2198377665359!2d-78.49118700780784!3d-0.21232030147801026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d59a107e1cd44b%3A0x88a284f66939ed4!2sESCUELA%20POLIT%C3%89CNICA%20NACIONAL!5e0!3m2!1ses!2sec!4v1732400558510!5m2!1ses!2sec" 
            width="600" 
            height="450" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade" 
          ></iframe>
        </div>
        <div className="info-container">
          <div className="info">
            <div className="title-box">
              <h2>¿Quiénes somos?</h2>
            </div>
            <p>
              En RedVital, nos dedicamos a conectar a las personas de varias comunidades que no tienen una idea clara de la disponibilidad a los servicios esenciales para el bienestar de los mismos, ayudándoles a encontrar ubicaciones de atención médica, instituciones educativas, y oportunidades laborales. Nuestra misión es facilitar el acceso a estos servicios vitales, promoviendo el bienestar, la educación y el crecimiento profesional de nuestra comunidad.
            </p>
            <p>
              A través de una plataforma accesible e intuitiva, ofrecemos un mapa interactivo y diversas opciones para identificar clínicas, escuelas y centros de capacitación laboral. Trabajamos con la visión de que todos puedan localizar fácilmente el apoyo que necesitan para mejorar su calidad de vida, encontrar oportunidades de desarrollo, y acceder a servicios de manera rápida y confiable.
            </p>
          </div>
          <div className="info">
            <div className="title-box">
              <h2>¿Dónde Estamos Ubicados?</h2>
            </div>
            <p>Nos encontramos en la Escuela Politécnica Nacional, específicamente nos pueden encontrar con la siguiente dirección, o con la ayuda del mapa otorgado:</p>
            <p>Av. Ladrón de Guevara E11-253, Quito 170143</p>
          </div>
        </div>
      </section>
      <div className="main">
        <ul className="cards">
          <li className="cards_item">
            <div className="card" tabIndex="0">
              <div className="card_image">
                <img 
                  src="https://img.freepik.com/vector-gratis/estudiantes-interactuando-si-haciendo-amigos-universidad-visitas-al-campus-universitario-eventos-campus-universitario-concepto-aprendizaje-campus_335657-823.jpg?t=st=1737302935~exp=1737306535~hmac=374ca07253d6a2de108920b30fb5ee7542f8614316ef705c7afbde9ef874259b&w=996" 
                  alt="mixed vegetable salad in a mason jar."
                />
              </div>
              <div className="card_content">
              <NavLink to='/services' className="card_title">Sección Servicios</NavLink>
                <div className="card_text">
                  <span className="note">Educación</span>
                  <p>La educación es un derecho fundamental que va más allá de ser solo una herramienta para adquirir conocimientos; es la base para el desarrollo personal y colectivo. Un sistema educativo accesible y de calidad empodera a los individuos, brindándoles las habilidades necesarias para enfrentar los desafíos del mundo moderno.</p>
                </div>
              </div>
            </div>
          </li>
  
          <li className="cards_item">
            <div className="card" tabIndex="0">
              <div className="card_image">
                <img 
                  src="https://media.istockphoto.com/id/1387057507/es/vector/peque%C3%B1os-m%C3%A9dicos-y-pacientes-cerca-del-hospital-ilustraci%C3%B3n-vectorial-plana.jpg?s=2048x2048&w=is&k=20&c=UpZH1fCvJtlrhujrscUdFQhbjNY3z1KYGOcGDrBLa_s=" 
                  alt="a Reuben sandwich on wax paper."
                />
              </div>
              <div className="card_content">
              <NavLink to='/services' className="card_title">Sección Servicios</NavLink>
                <div className="card_text">
                  <span className="note">Medicina</span>
                  <p>El acceso a servicios médicos de calidad es un derecho fundamental para cualquier individuo. La salud es la base para una vida plena y productiva, y sin acceso a atención médica oportuna, las personas pueden enfrentar serias dificultades.</p>
                  <p>Los servicios médicos no solo permiten tratar enfermedades, sino también prevenirlas, lo que resulta en una comunidad más saludable y fuerte.</p>
                </div>
              </div>
            </div>
          </li>
  
          <li className="cards_item">
            <div className="card" tabIndex="0">
              <div className="card_image">
                <img 
                  src="https://img.freepik.com/vector-premium/texto-oferta-trabajo-icono-dibujos-animados-plano-documento-sobre-correo_101884-493.jpg?w=740" 
                  alt="A side view of a plate of figs and berries."
                />
              </div>
              <div className="card_content">
              <NavLink to='/services' className="card_title">Sección Servicios</NavLink>
                <div className="card_text">
                  <span className="note">Trabajo</span>
                  <p>El empleo es uno de los pilares fundamentales que sostiene la estructura económica y social de cualquier comunidad. A través del trabajo, las personas no solo obtienen los ingresos necesarios para subsistir, sino que también desarrollan habilidades, ganan experiencia y desarrollo.</p>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className="FAQ">
        <h2>¿Dudas?</h2>
        <span>Si presentas dudas, puedes pedir ayuda a través de la sección </span>
        <NavLink to='/contacts' className="button-1">Contactos</NavLink>,
        <span> o si lo prefieres puedes visitar el apartado de </span>
        <NavLink to="/faq" className="button-2">Preguntas Frecuentes</NavLink>
        <span> y solventar cualquier inconveniente que presentes.</span>
        <p>Estamos para servirte.</p>
      </div>
    </>
  );
};

export default Home;
