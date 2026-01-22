import React from 'react';
import { MapPin, Phone, Smartphone, Instagram, Clock, ShieldCheck } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" id="contato">
      <div className="container footer-grid">
        
        <div className="footer-col">
          <h3>Junin <span className="highlight">Cidade Jardim</span></h3>
          <p className="brand-desc">
            A maior rede de acessórios automotivos do Brasil. 🇧🇷<br/>
            Transformamos veículos com som de alta performance, Window Blue original e estética de luxo.
          </p>
          
          <div className="contact-list">
            <a 
              href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3822.062867087854!2d-49.3118019!3d-16.6816842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935e9789fd31f2b1%3A0xbcfdd11796181e42!2sJunin%20Auto%20Som-%20Cidade%20Jardim!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="info-item"
            >
              <MapPin className="text-brand-yellow" size={20} />
              <span>Av. Armando de Godói, 370 - Cidade Jardim</span>
            </a>

            {/* Telefone Fixo */}
            <a href="tel:+556236363610" className="info-item" title="Ligar no Fixo">
              <Phone className="text-brand-yellow" size={20} />
              <span>(62) 3636-3610</span>
            </a>

            {/* Celular / WhatsApp */}
            <a href="https://wa.me/5562996628238" target="_blank" className="info-item" title="Chamar no WhatsApp">
              <Smartphone className="text-brand-yellow" size={20} />
              <span>(62) 99662-8238</span>
            </a>

            <div className="info-item">
              <Clock className="text-brand-yellow" size={20} />
              <span>Seg-Sex: 08h-18h | Sáb: 08h-12h</span>
            </div>

            <a 
              href="https://www.instagram.com/junincidadejardim/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="info-item"
            >
              <Instagram className="text-brand-yellow" size={20} />
              <span>@junincidadejardim</span>
            </a>
          </div>
        </div>
        
        <div className="footer-col">
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px'}}>
             <h3>Localização</h3>
             <span style={{fontSize: '0.8rem', color: '#FFB800', border: '1px solid #FFB800', padding: '2px 8px', borderRadius: '4px'}}>
               <ShieldCheck size={12} style={{display:'inline', marginRight: 4}}/>Loja Oficial
             </span>
          </div>
          
          <div className="map-container">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3822.062867087854!2d-49.3118019!3d-16.6816842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935e9789fd31f2b1%3A0xbcfdd11796181e42!2sJunin%20Auto%20Som-%20Cidade%20Jardim!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr" 
              width="100%" 
              height="100%" 
              style={{border:0}} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa Junin Auto Som Cidade Jardim"
            ></iframe>
          </div>
          
          <a 
            href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3822.062867087854!2d-49.3118019!3d-16.6816842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935e9789fd31f2b1%3A0xbcfdd11796181e42!2sJunin%20Auto%20Som-%20Cidade%20Jardim!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr" 
            target="_blank"
            rel="noopener noreferrer"
            className="map-link-external"
          >
            Traçar rota no Google Maps ↗
          </a>
        </div>
      </div>

      <div className="copyright">
        <div className="container">
          <p>
            © {new Date().getFullYear()} Junin Auto Som Cidade Jardim. Todos os direitos reservados. 
            <span className="mobile-break" style={{display: 'block', marginTop: '5px', fontSize: '0.8em', color: '#444'}}>
              Desenvolvido por <a href="https://www.instagram.com/optima_sistemas" target="_blank" rel="noopener noreferrer" className="optima-link">Optima Sistemas</a>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;