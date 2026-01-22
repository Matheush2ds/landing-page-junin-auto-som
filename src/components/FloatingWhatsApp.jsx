import React from 'react';
import { MessageCircle } from 'lucide-react';
import './FloatingWhatsApp.css';

const FloatingWhatsApp = () => {
  return (
    <div className="whatsapp-container">
      <div className="whatsapp-tooltip">Fale com um Especialista</div>
      <a 
        href="https://wa.me/556236363610?text=Olá,%20vi%20o%20site%20e%20quero%20um%20orçamento%20VIP."
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-btn"
        aria-label="Falar no WhatsApp"
      >
        <div className="notification-dot">1</div>
        <MessageCircle size={32} fill="white" className="whatsapp-icon" />
      </a>
    </div>
  );
};

export default FloatingWhatsApp;