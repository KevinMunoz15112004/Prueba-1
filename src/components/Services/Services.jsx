import React from 'react';
import { useEffect, useRef } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import './Services.css'

const locations = {

  // EDUCACION

  "educacion": {
      "Unidad Educativa María Auxiliadora": {
          coords: [-0.2172998, -78.4953913,19.38],
          description1:"La Unidad Educativa Particular “María Auxiliadora”, con renovado entusiasmo, acoge la invitación del Papa Francisco para “dialogar sobre el modo en que estamos construyendo el futuro del planeta y sobre la necesidad de invertir los talentos de todos, porque cada cambio requiere un camino educativo que haga madurar una nueva solidaridad universal y una sociedad más acogedora”.\n\n La institución se pone en camino para la construcción de personas maduras, capaces de superar fragmentaciones y contraposiciones, reconstruyendo el tejido de las relaciones por una humanidad más fraterna.",
          description: "Unidad Educativa María Auxiliadora",
          schedule: "Lunes: 08:00 A.M. - 17:00 P.M.\n Martes:    07:00 A.M. - 10:00 A.M.\n Miércoles: 09:00 A.M. - 11:00 A.M. \nJueves:    07:00 A.M. - 10:00 A.M.\n Viernes:   11:00 A.M. - 14:00 P.M."
      },
      "Unidad Educativa Municipal Antonio José de Sucre": {
          coords: [-0.304167,-78.5511054,18.94],
          description1: "En la Unidad Educativa Municipal Antonio José de Sucre, formamos líderes íntegros con valores de excelencia, respeto y compromiso con la sociedad. Inspirados en el espíritu del Gran Mariscal de Ayacucho, nuestra institución se enfoca en brindar una educación de calidad que fomente el pensamiento crítico, la innovación y el desarrollo integral de cada estudiante. A través de programas académicos sólidos y actividades extracurriculares dinámicas, preparamos a los jóvenes para los desafíos de un mundo en constante cambio.\n\n Descubre tu potencial y construye un futuro brillante con nosotros. ¡Aquí formamos ciudadanos con valores y visión!",
          description: "Unidad Educativa Municipal Antonio José de Sucre",
          schedule: "Lunes: 07:00 A.M. - 10:00 P.M.\n Martes:    07:00 A.M. - 10:00 A.M.\n Miércoles: 10:00 A.M. - 11:00 A.M. \nJueves:    09:00 A.M. - 10:00 A.M.\n Viernes:   12:00 A.M. - 14:00 P.M."
      },
      "Unidad Educativa Municipal Alfredo Pérez Guerrero": {
          coords: [0.1711339, -78.4116155,18.64],
          description1: "La Unidad Educativa Municipal Alfredo Pérez Guerrero se destaca como un espacio donde la educación y los sueños se encuentran. Nuestra misión es inspirar a cada estudiante a superar sus límites y alcanzar sus metas personales y académicas. Con una enseñanza centrada en la creatividad, el trabajo en equipo y el liderazgo, brindamos a los jóvenes herramientas esenciales para transformar su entorno y construir una sociedad más equitativa.\n\n Juntos construimos sueños, creamos oportunidades y cambiamos el mundo. ¡Sé parte del cambio!",
          description: "Unidad Educativa Municipal Alfredo Pérez Guerrero",
          schedule: "Lunes: 11:00 A.M. - 17:00 P.M.\n Martes:    10:00 A.M. - 11:30 A.M.\n Miércoles: 8:00 A.M. - 11:00 A.M. \nJueves:    09:00 A.M. - 10:00 A.M.\n Viernes:   11:00 A.M. - 13:00 P.M."
      },
      "Unidad Educativa Municipal Bicentenario": {
          coords: [-0.3168438, -78.5435268,17.41],
          description1: "En la Unidad Educativa Municipal Bicentenario, celebramos los valores patrióticos y educativos que construyen una nación fuerte. Nuestra institución es un homenaje a la libertad, la independencia y la educación como pilares del progreso. Ofrecemos un entorno inclusivo, innovador y participativo donde los estudiantes pueden explorar su creatividad, desarrollar habilidades técnicas y convertirse en agentes de cambio social.\n\n En el Bicentenario, honramos el pasado mientras construimos el futuro. ¡Tu educación es nuestra revolución!",
          description: "Unidad Educativa Municipal Bicentenario",
          schedule: "Lunes: 07:00 A.M.- 11:00 P.M.\n Martes:    10:30 A.M. - 12:00 P.M.\n Miércoles: 09:00 A.M. - 11:00 A.M. \nJueves:    09:00 A.M. - 10:00 A.M.\n Viernes:   11:30 A.M. - 14:00 P.M."
      },
      "Unidad Educativa Municipal Calderón": {
          coords: [-0.0757194, -78.4161966,18.73],
          description1: "La Unidad Educativa Municipal Calderón se enorgullece de ser un referente en educación integral en la zona norte de la ciudad. Aquí, combinamos la tradición con la innovación para formar estudiantes capaces de contribuir al bienestar de sus comunidades. Nuestra oferta académica incluye programas especializados en ciencias, artes y tecnología, que se complementan con valores éticos y ciudadanos.\n\n En Calderón, tus sueños encuentran un camino. ¡Educamos con pasión, formamos con visión!",
          description: "Unidad Educativa Municipal Calderón",
          schedule: "Lunes: 11:00 A.M. - 16:00P.M.\n Martes:    09:00 A.M. - 10:00 A.M.\n Miércoles: 11:00 A.M. - 12:00 P.M. \nJueves:    07:00 A.M. - 10:00 A.M.\n Viernes:   11:00 A.M. - 14:30 P.M."
      }
  },

  // MEDICINA

  "medicina": {
      "Hospital de Especialidades de FF.AA": {
          coords: [-0.2153, -78.4918],
          description1: "El Hospital de Especialidades de las Fuerzas Armadas es un centro de referencia en salud integral, donde la excelencia médica y el compromiso con el bienestar de nuestros pacientes son nuestra prioridad. Con especialistas altamente capacitados y tecnología de punta, brindamos atención médica personalizada en diversas áreas, desde cardiología hasta neurocirugía. Nuestro enfoque se basa en el respeto, la ética y el cuidado, sirviendo tanto a miembros de las FF.AA. como a la ciudadanía en general.\n\n Comprometidos con tu salud, dedicados a tu bienestar. Aquí, cada vida cuenta.",
          description: "Hospital de especialidades en el norte de Quito.",
          schedule: "ATENDEMOS DE LUNES A DOMINGO DURANTE LAS 24 HORAS DE LA SEMANA"
      },
      "Centro de Atención Ambulatoria Central de Quito": {
          coords: [-0.179522, -78.480989],
          description1: "El Centro de Atención Ambulatoria Central de Quito ofrece una solución accesible y eficiente para tus necesidades de salud. Desde consultas médicas especializadas hasta servicios de laboratorio e imágenes diagnósticas, trabajamos para garantizar una atención ágil y de calidad. Nuestra misión es brindar un servicio cálido y humano, asegurando que cada paciente reciba el cuidado que merece.\n\n Tu bienestar, nuestra prioridad. Atención cercana, ágil y confiable para todos.",
          description: "Centro de atención médica en el centro de Quito.",
          schedule: "ATENDEMOS DE LUNES A DOMINGO DURANTE LAS 24 HORAS DE LA SEMANA"
      },
      "CAA Central Quito": {
          coords: [-0.188423, -78.480017],
          description1: "El CAA Central de Quito se destaca por ser un punto clave en la red de salud de la ciudad. Aquí combinamos tecnología avanzada, profesionales comprometidos y un ambiente acogedor para ofrecer atención médica de calidad. Con servicios que abarcan desde medicina general hasta especialidades, somos tu aliado en el cuidado de la salud de tu familia.\n\n Salud accesible, atención confiable. En el CAA Central Quito, cuidamos de ti y de los tuyos.",
          description: "CAA Central Quito",
          schedule: "ATENDEMOS DE LUNES A DOMINGO DURANTE LAS 24 HORAS DE LA SEMANA"
      },
      "Hospital San Francisco de Quito Nivel II": {
          coords: [-0.0898037, -78.4775081,18.16],
          description1: "El Hospital San Francisco de Quito Nivel II es un pilar en la atención médica de nuestra comunidad. Con un enfoque integral, ofrecemos hospitalización, cirugía y cuidados especializados para diversas patologías. Nuestro equipo de profesionales combina experiencia y dedicación para garantizar una atención segura y oportuna. Aquí no solo tratamos enfermedades, sino que también cuidamos a las personas con empatía y respeto.\n\n Tu salud es nuestra misión. En el Hospital San Francisco, te cuidamos como en casa.",
          description: "Hospital San Francisco de Quito Nivel II",
          schedule: "ATENDEMOS DE LUNES A DOMINGO DURANTE LAS 24 HORAS DE LA SEMANA"
      },
      "Hospital del día Eloy Alfaro": {
          coords: [-0.2727118, -78.5371602,18.35],
          description1: "El Hospital del Día Eloy Alfaro está diseñado para ofrecerte atención médica eficiente y de alta calidad en un entorno de calidez humana. Especializado en procedimientos ambulatorios y consultas especializadas, este centro combina innovación médica y atención personalizada para resolver tus necesidades de salud en el menor tiempo posible.\n\n Cuidamos tu tiempo, protegemos tu salud. En el Hospital del Día Eloy Alfaro, estás en buenas manos.",
          description: "Hospital del día Eloy Alfaro",
          schedule: "ATENDEMOS DE LUNES A DOMINGO DURANTE LAS 24 HORAS DE LA SEMANA"
      },
  },

  // TRABAJO

  "trabajo": {
      "Vendedor Canal Food Service - Quito": {
          coords: [-0.211389, -78.523285],
          description1: "Únete a nuestro equipo como Vendedor en el Canal Food Service en Quito. Serás el puente entre nuestros productos de alta calidad y los clientes del sector gastronómico, desde restaurantes hasta cadenas de alimentación. Este rol es ideal para personas dinámicas y apasionadas por las ventas, con habilidades de negociación y orientación al servicio. Ofrecemos capacitación constante y la oportunidad de crecer en una industria llena de sabor y desafíos.\n\n Sé parte de un equipo que transforma la experiencia gastronómica en cada rincón de Quito. ¡Tu talento en ventas es el ingrediente que buscamos!",
          description: "Trabajo en ventas en la zona norte de Quito.",
          schedule: "Lunes: 10:00 A.M. - 17:00 P.M.\n Martes:    10:00 A.M. - 13:30 P.M.\n Miércoles: 09:00 A.M. - 11:00 A.M. \nJueves:    09:00 A.M. - 18:00 P.M.\n Viernes:   11:00 A.M. - 20:00 P.M."
      },
      "EmpacadoresQuito": {
          coords: [-0.181896, -78.356047],
          description1: "Buscamos empacadores comprometidos y detallistas para unirse a nuestro equipo en Quito. Serás responsable de garantizar que nuestros productos lleguen a los clientes en perfectas condiciones, desempeñando un papel clave en nuestra cadena de suministro. Valoramos la responsabilidad, la organización y la actitud positiva. Ofrecemos un ambiente laboral seguro y oportunidades de desarrollo personal.\n\n Tu dedicación marca la diferencia en cada entrega. ¡Forma parte de nuestro equipo y crece con nosotros!",
          description: "Trabajo en empaques en el centro de Quito.",
          schedule: "Lunes: 11:00 A.M. - 15:00 P.M.\n Martes:    10:00 A.M. - 12:30 P.M.\n Miércoles: 09:00 A.M. - 17:00 A.M. \nJueves:    10:00 A.M. - 18:00 P.M.\n Viernes:   11:00 A.M. - 13:00 P.M."
      },
      "Auxiliar de Convenios Ecuador": {
          coords: [-0.122734, -78.480226],
          description1: "Si te apasiona trabajar con acuerdos estratégicos y brindar soporte administrativo, esta es tu oportunidad. Como Auxiliar de Convenios, apoyarás en la gestión y seguimiento de acuerdos importantes para nuestra empresa. Este rol requiere habilidades organizativas, atención al detalle y la capacidad de trabajar en equipo. Ofrecemos un entorno dinámico donde cada tarea contribuye al éxito colectivo.\n\n Tu organización y compromiso impulsan grandes alianzas. ¡Únete a nosotros y haz historia!",
          description: "Auxiliar de Convenios Ecuador",
          schedule: "Lunes: 11:00 A.M. - 19:00 P.M.\n Martes:    12:00 A.M. - 19:30 P.M.\n Miércoles: 08:00 A.M. - 11:00 A.M. \nJueves:    13:00 P.M. - 21:00 P.M.\n Viernes:   11:00 A.M. - 20:00 P.M."
      },
      "Analista de Datos": {
          coords: [-0.207545, -78.489121],
          description1: "Estamos en busca de un Analista de Datos que transforme números en estrategias. En este rol, analizarás información clave para la toma de decisiones en diferentes áreas de la empresa. Si eres curioso, meticuloso y te apasiona encontrar patrones en los datos, este es tu lugar. Ofrecemos un entorno de innovación, herramientas avanzadas y la oportunidad de crecer profesionalmente en un área de alta demanda.\n\n Convierte datos en oportunidades. ¡Sé el cerebro detrás de las decisiones estratégicas!",
          description: "Analista de Datos",
          schedule: "Lunes: 11:00 A.M. - 17:00 P.M.\n Martes:    10:00 A.M. - 11:30 A.M.\n Miércoles: 07:00 A.M. - 18:00 P.M. \nJueves:    09:00 A.M. - 11:00 A.M.\n Viernes:   11:00 A.M. - 16:00 P.M."
      },
      "Promotor de Ventas - Quito": {
          coords: [-0.175653, -78.476617],
          description1: "Como Promotor de Ventas en Quito, serás el rostro de nuestra marca, impulsando nuestras soluciones directamente a los clientes. Este rol combina habilidades de comunicación, persuasión y conocimiento del mercado para lograr objetivos comerciales. Si te apasiona interactuar con personas y generar resultados, ofrecemos un ambiente dinámico, capacitación constante y la oportunidad de crecer profesionalmente.\n\n Impulsa ventas, construye conexiones, deja tu huella. ¡Conviértete en nuestro próximo promotor estrella!",
          description: "Promotor de Ventas - Quito",
          schedule: "Lunes: 11:00 A.M. - 14:00 P.M.\n Martes:    11:00 A.M. - 14:30 P.M.\n Miércoles: 06:00 A.M. - 11:00 A.M. \nJueves:    09:00 A.M. - 11:30 A.M.\n Viernes:   11:00 A.M. - 19:00 P.M."
      },
  }
};

const Services = () => {

  const mapRef = useRef(null);

  useEffect(() => {
    // Inicializar el mapa
    mapRef.current = L.map('map-container').setView([-0.2372369, -78.5139183], 13);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mapRef.current);

    // Limpiar el mapa al desmontar el componente
    return () => {
        mapRef.current.remove();
    };
  }, []);

  const updateMap = (category, place) => {
    // Limpiar el mapa
    mapRef.current.eachLayer(function(layer) {
        if (layer instanceof L.Marker) {
            mapRef.current.removeLayer(layer);
        }
    });

    // Obtener la información de la ubicación seleccionada
    const location = locations[category][place];

    // Actualizar el mapa
    const lat = location.coords[0];
    const lon = location.coords[1];
    mapRef.current.setView([lat, lon], 14);

    // Crear un marcador en el mapa
    L.marker([lat, lon]).addTo(mapRef.current)
        .bindPopup(`<b>${place}</b><br>${location.description}`)
        .openPopup();

    // Actualizar la información del lugar
    document.getElementById('place-name').innerText = place;
    document.getElementById('place-description').innerText = location.description1;
    document.getElementById('schedule').innerText = location.schedule;

    // Llamar a la función para hacer scroll
    scrollToDetails();
};

function scrollToDetails() {
  var infoContainer = document.querySelector('.details');
  if (infoContainer) {
      infoContainer.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
      });
  }
}

  return (
    <div>
      <div className="title-services">
        <h1>Nuestros Servicios</h1>
      </div>

      <section className="services-section">
        <div className="servicios-container">
          <div className="titulo-y-descripcion">
            <p>
              En RedVital, nos enfocamos en conectar a las personas con los servicios esenciales que necesitan para mejorar su calidad de vida. A través de nuestra plataforma, puedes acceder fácilmente a un mapa interactivo que te ayudará a ubicar: Centros médicos prioritarios, Oportunidades laborales e Instituciones educativas. Nuestra misión es simplificar el acceso a estos recursos clave, ayudándote a tomar decisiones informadas y priorizar lo que realmente importa. Descubre cómo podemos facilitar tu camino hacia un futuro mejor.
            </p>
          </div>
        </div>
      </section>

<section className="categories">
        <div className="category">
          <div className="title-box">
            <h3>EDUCACIÓN</h3>
          </div>
        <details>
      <summary>Ver opciones</summary>
      <div className="item" onClick={() => updateMap('educacion', 'Unidad Educativa María Auxiliadora')}>
        <span style={{ color: 'black' }}>Centro - Norte</span><br />
        <span style={{ color: 'black' }}>Unidad Educativa María Auxiliadora</span>
      </div>
      <div className="item" onClick={() => updateMap('educacion', 'Unidad Educativa Municipal Antonio José de Sucre')}>
        <span style={{ color: 'black' }}>Centro</span><br />
        <span style={{ color: 'black' }}>Unidad Educativa Municipal Antonio José de Sucre</span>
      </div>
      <div className="item" onClick={() => updateMap('educacion', 'Unidad Educativa Municipal Alfredo Pérez Guerrero')}>
        <span style={{ color: 'black' }}>Sur</span><br />
        <span style={{ color: 'black' }}>Unidad Educativa Municipal Alfredo Pérez Guerrero</span>
      </div>
      <div className="item" onClick={() => updateMap('educacion', 'Unidad Educativa Municipal Bicentenario')}>
        <span style={{ color: 'black' }}>Centro - Sur</span><br />
        <span style={{ color: 'black' }}>Unidad Educativa Municipal Bicentenario</span>
      </div>
      <div className="item" onClick={() => updateMap('educacion', 'Unidad Educativa Municipal Calderón')}>
        <span style={{ color: 'black' }}>Norte</span><br />
        <span style={{ color: 'black' }}>Unidad Educativa Municipal Calderón</span>
      </div>
    </details>
  </div>

  <div className="category">
    <div className="title-box">
      <h3>MEDICINA</h3>
    </div>
    <details>
      <summary>Ver opciones</summary>
      <div className="item" onClick={() => updateMap('medicina', 'Hospital de Especialidades de FF.AA')}>
        <span style={{ color: 'black' }}>Centro - Norte</span><br />
        <span style={{ color: 'black' }}>Hospital de Especialidades de FF.AA</span>
      </div>
      <div className="item" onClick={() => updateMap('medicina', 'Centro de Atención Ambulatoria Central de Quito')}>
        <span style={{ color: 'black' }}>Centro</span><br />
        <span style={{ color: 'black' }}>Centro de Atención Ambulatoria Central de Quito</span>
      </div>
      <div className="item" onClick={() => updateMap('medicina', 'CAA Central Quito')}>
        <span style={{ color: 'black' }}>Sur</span><br />
        <span style={{ color: 'black' }}>CAA Central Quito</span>
      </div>
      <div className="item" onClick={() => updateMap('medicina', 'Hospital San Francisco de Quito Nivel II')}>
        <span style={{ color: 'black' }}>Centro - Sur</span><br />
        <span style={{ color: 'black' }}>Hospital San Francisco de Quito Nivel II</span>
      </div>
      <div className="item" onClick={() => updateMap('medicina', 'Hospital del día Eloy Alfaro')}>
        <span style={{ color: 'black' }}>Norte</span><br />
        <span style={{ color: 'black' }}>Hospital del día Eloy Alfaro</span>
      </div>
    </details>
  </div>

  <div className="category">
    <div className="title-box">
      <h3>TRABAJO</h3>
    </div>
    <details>
      <summary>Ver opciones</summary>
      <div className="item" onClick={() => updateMap('trabajo', 'Vendedor Canal Food Service - Quito')}>
        <span style={{ color: 'black' }}>Centro - Norte</span><br />
        <span style={{ color: 'black' }}>Vendedor Canal Food Service - Quito</span>
      </div>
      <div className="item" onClick={() => updateMap('trabajo', 'EmpacadoresQuito')}>
        <span style={{ color: 'black' }}>Centro</span><br />
        <span style={{ color: 'black' }}>EmpacadoresQuito</span>
      </div>
      <div className="item" onClick={() => updateMap('trabajo', 'Auxiliar de Convenios Ecuador')}>
        <span style={{ color: 'black' }}>Sur</span><br />
        <span style={{ color: 'black' }}>Auxiliar de Convenios Ecuador</span>
      </div>
      <div className="item" onClick={() => updateMap('trabajo', 'Analista de Datos')}>
        <span style={{ color: 'black' }}>Centro - Sur</span><br />
        <span style={{ color: 'black' }}>Analista de Datos</span>
      </div>
      <div className="item" onClick={() => updateMap('trabajo', 'Promotor de Ventas - Quito')}>
        <span style={{ color: 'black' }}>Norte</span><br />
        <span style={{ color: 'black' }}>Promotor de Ventas - Quito</span>
      </div>
    </details>
  </div>
</section>

      <section className="details">
        <div id="map-container" className="map-container map-container-2"></div>
        <div className="info">
          <div className="title-box">
            <h2 id="place-name">Información</h2>
          </div>
          <p id="place-description">Para desplegar información crucial del sitio, primero seleccione una opción de los diferentes cuadros de opciones: EDUCACION, MEDICINA, TRABAJO </p>
          <div className="title-box">
            <h2>Horario de Atención</h2>
          </div>
          <p id="schedule">Para obtener la información de los horarios del sitio, primero debe seleccionar una opción de los diferentes cuadros de opciones: EDUCACION, MEDICINA, TRABAJO</p>
        </div>
      </section>

      <div className='CRUD-section'>
        <p>Puedes agendar citas según sea tu preferencia en </p>
        <NavLink to='/crud' className="boton">Agendar Cita</NavLink>
      </div>
      
    </div>
  );
};

export default Services;
