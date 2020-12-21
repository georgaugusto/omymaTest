import React from 'react';

import whatsapp from '../../assets/whatsapp.png';
import './Clinic.css';

export default function Clinic({ clinic }) {
  return (
    <section>
      <div>
        <div className="vertical">
          <span>Clínica</span>
        </div>
        <div className="info">
          <h3>{clinic.name}</h3>
          <span>{clinic.address}</span>
          <div>
            <span>{clinic.zipcode}</span>
            <span>{clinic.email}</span>
          </div>
        </div>
        
      </div>
      <div>
        <div className="exam">
          <span>Exame Clínico</span>
          <span>Complementar</span>
          <span>PCMSO</span>
          <span>PPRA</span>
        </div>
        <div className="contact">
          <div>
            <img src={whatsapp} alt="whatsapp" />
            <span>WhatsApp</span>
          </div>
          <span className="tel">{clinic.whatsapp}</span>
        </div>
      </div>
    </section>
  );
}