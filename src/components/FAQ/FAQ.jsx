import React from 'react'
import './FAQ.css'

const FAQ = () => {
  return (
    <>
    <main>
        <h1>Preguntas Frecuentes</h1>
        <section>
            <details>
                <summary>¿Qué es RedVital?</summary>
                <p>RedVital es una plataforma diseñada para conectar a las personas con servicios esenciales como atención médica, educación y empleo, ayudándoles a encontrar fácilmente los recursos disponibles en su comunidad.</p>
            </details>
            <details>
                <summary>¿Dónde se encuentra RedVital?</summary>
                <p>Estamos ubicados en la Escuela Politécnica Nacional, en la dirección Av. Ladrón de Guevara E11-253, Quito 170143. Puedes encontrar nuestra ubicación en el mapa interactivo en la página.</p>
            </details>
            <details>
                <summary>¿Qué servicios ofrece RedVital?</summary>
                <p>Ofrecemos información sobre servicios de salud, educación y empleo. Puedes encontrar clínicas, escuelas y centros de capacitación laboral en varias categorías.</p>
            </details>
            <details>
                <summary>¿Cómo puedo acceder a los servicios de salud?</summary>
                <p>Para encontrar servicios de salud, simplemente visita la sección "Medicina" y explora las opciones disponibles en tu zona, como hospitales y clínicas.</p>
            </details>
            <details>
                <summary>¿Cómo puedo encontrar una escuela o centro educativo cerca de mí?</summary>
                <p>En la sección "Educación", puedes ver las instituciones educativas en diferentes zonas de la ciudad. Selecciona la categoría que te interesa y consulta las opciones disponibles.</p>
            </details>
            <details>
                <summary>¿Cómo puedo acceder a oportunidades de trabajo?</summary>
                <p>En la sección "Trabajo", encontrarás diversas oportunidades laborales, junto con centros de capacitación profesional en diferentes áreas.</p>
            </details>
            <details>
                <summary>¿RedVital tiene contacto directo con las instituciones?</summary>
                <p>No, RedVital proporciona información sobre la ubicación y los horarios de los servicios, pero no gestiona directamente las solicitudes o servicios ofrecidos por las instituciones.</p>
            </details>
            <details>
                <summary>¿Cómo puedo contactar con RedVital?</summary>
                <p>Puedes contactarnos a través de los enlaces sociales en el pie de página, como Facebook, Twitter e Instagram, o enviándonos un correo electrónico si lo proporcionamos en la sección de contacto.</p>
            </details>
            <details>
                <summary>¿Puedo agregar servicios a la plataforma?</summary>
                <p>Actualmente, RedVital no permite agregar servicios de manera directa. Sin embargo, si deseas sugerir algún servicio, puedes hacerlo contactándonos a través de nuestras redes sociales.</p>
            </details>
            <details>
                <summary>¿El acceso a los servicios en la plataforma es gratuito?</summary>
                <p>Sí, el acceso a la información sobre los servicios de salud, educación y empleo es completamente gratuito. Simplemente navega por las categorías para ver las opciones disponibles.</p>
            </details>
        </section>
    </main>
    </>
  )
}

export default FAQ
