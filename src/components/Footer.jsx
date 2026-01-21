import React from 'react';
import { MapPin, Phone, Instagram, Clock } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" id="contato">
      <div className="container footer-grid">
        <div className="footer-col">
          <h3>Junin <span className="highlight">Cidade Jardim</span></h3>
          <p style={{color: '#aaa', marginBottom: '20px', lineHeight: '1.6'}}>
            Há anos entregando qualidade e sofisticação automotiva. Sua referência em Goiânia para quem é apaixonado por carros.
          </p>
          
          <div className="info-item">
            <MapPin className="text-brand-yellow" />
            <span>Av. Armando de Godói, 370 - Cidade Jardim, Goiânia - GO, 74423-010</span>
          </div>
          <div className="info-item">
            <Phone className="text-brand-yellow" />
            <span>(62) 3636-3610</span>
          </div>
          <div className="info-item">
            <Clock className="text-brand-yellow" />
            <span>Seg a Sex: 08h às 18h | Sáb: 08h às 12h</span>
          </div>
          <div className="info-item">
            <Instagram className="text-brand-yellow" />
            <a href="https://instagram.com/junin_cidadejardim" target="_blank" className="hover:text-white transition">@junin_cidadejardim</a>
          </div>
        </div>
        
        <div className="footer-col">
          <h3>Localização</h3>
          <div style={{borderRadius: '16px', overflow: 'hidden', border: '1px solid #333'}}>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.576219326442!2d-49.2944883240366!3d-16.68004744414167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935ef3316d91456d%3A0x62957f86f8a848c7!2sAv.%20Armando%20de%20God%C3%B3i%2C%20370%20-%20Cidade%20Jardim%2C%20Goi%C3%A2nia%20-%20GO%2C%2074423-010!5e0!3m2!1spt-BR!2sbr!4v1705680000000!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="250" 
              style={{border:0}} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <a 
            href="https://maps.app.goo.gl/seuLinkAqui" 
            target="_blank"
            className="block mt-4 text-center text-sm text-gray-400 hover:text-brand-yellow transition"
          >
            Abrir no Google Maps ↗
          </a>
        </div>
      </div>

      <div className="copyright">
        <p>
          © 2026 Junin Auto Som Cidade Jardim. Todos os direitos reservados. 
          <br />
          Desenvolvido por <a href="https://www.instagram.com/optima_sistemas?igsh=MWtrYThnZjFvNThwcA==" target="_blank" className="optima-link">Optima Sistemas</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;