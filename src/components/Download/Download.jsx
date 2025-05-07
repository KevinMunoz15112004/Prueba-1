import React from 'react';
import './Download.css'

const Download = () => {
  return (
    <>
    <div className="welcome-container">
        <div className="welcome-message">
          <h2>Descargas</h2>
        </div>
      </div>
      <div className="app-section">
        <div className="text-box">
          <p>Puedes descargar nuestra aplicación para dispositivos móvilles, disponible en:</p>
        </div>
        <div className="app-links">
          <a href="https://play.google.com/store/apps?hl=es_419"><img src="/images/Google_Play_Store_badge_EN.svg.webp" alt="Google Play" /></a>
          <a href="https://www.apple.com/la/app-store/"><img src="/images/Download_on_the_App_Store_RGB_blk.svg.png" alt="App Store" /></a>
        </div>
        <div className="text-box">
          <p>O también para computadoras, por el momento solo en sistemas operativos Windows</p>
        </div>
        <div className="windows-logo">
          <a href="https://apps.microsoft.com/home?hl=es-es&gl=ES"><img src="/images/logo-windows-bleu.png" alt="Windows Logo" /></a>
        </div>
      </div>
    </>
  );
};

export default Download;
