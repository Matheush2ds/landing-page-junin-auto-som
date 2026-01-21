import React from 'react';
import { Disc, Layers, Zap, Shield, Sun, Gauge, Monitor, Music } from 'lucide-react';
import './Services.css';

const services = [
  { icon: Sun, title: "Window Blue", desc: "Película de alta performance com redução de calor." },
  { icon: Music, title: "Som Automotivo", desc: "Projetos de som interno e externo de alta fidelidade." },
  { icon: Monitor, title: "Kit Multimídia", desc: "Telas Android, Apple CarPlay e conectividade total." },
  { icon: Shield, title: "Vitrificação", desc: "Proteção cerâmica para pintura com brilho intenso." },
  { icon: Layers, title: "PPF", desc: "Paint Protection Film para proteção contra arranhões." },
  { icon: Zap, title: "Polimento", desc: "Correção de pintura e remoção de riscos superficiais." },
  { icon: Disc, title: "Bancos de Couro", desc: "Revestimento premium para conforto e sofisticação." },
  { icon: Gauge, title: "Personalização", desc: "Envelopamento e customização exclusiva." },
];

const Services = () => {
  return (
    <section className="services-section">
      <div className="container">
        <h2 className="section-title">Nossos <span className="highlight">Serviços</span></h2>
        <p className="section-subtitle">Tudo para equipar e proteger seu veículo em um só lugar.</p>
        
        <div className="grid-services">
          {services.map((item, index) => (
            <div className="card" key={index}>
              <item.icon size={40} color="var(--brand-yellow)" style={{margin: '0 auto'}}/>
              <h3>{item.title}</h3>
              <p style={{color: '#999', fontSize: '0.9rem'}}>{item.desc}</p>
              <a href="https://wa.me/556236363610" className="card-btn">Orçamento →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Services;