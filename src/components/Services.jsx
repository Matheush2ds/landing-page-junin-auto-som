import React from 'react';
import './Services.css';

import imgInsulfilm from '../assets/servicos/isufilm.webp';
import imgSom from '../assets/servicos/som.webp';
import imgMultimidia from '../assets/servicos/multimidia.webp';
import imgPPF from '../assets/servicos/ppf.webp';
import imgVitrificacao from '../assets/servicos/Vitrificação.webp';
import imgCouro from '../assets/servicos/Banco-de-couro.webp';

const services = [
  { img: imgInsulfilm, title: "Window Blue & Insulfilm", desc: "Redução de calor e privacidade com películas originais.", slug: "window-blue" },
  { img: imgSom, title: "Projetos de Som", desc: "Do básico ao som de competição de alta fidelidade.", slug: "som-automotivo" },
  { img: imgMultimidia, title: "Multimídia & Tech", desc: "Desbloqueio de tela, CarPlay e Android Auto.", slug: "multimidia" },
  { img: imgPPF, title: "PPF (Proteção)", desc: "Película invisível contra arranhões e pedras.", slug: "ppf" },
  { img: imgVitrificacao, title: "Estética & Vitrificação", desc: "Proteção cerâmica para brilho intenso e duradouro.", slug: "vitrificacao" },
  { img: imgCouro, title: "Bancos em Couro", desc: "Conforto e sofisticação com acabamento original.", slug: "bancos-couro" },
];

const Services = () => {
  return (
    <section className="services-section section-padding" id="servicos">
      <div className="container">
        <h2 className="section-title">Nossos <span className="highlight">Serviços</span></h2>
        <p className="section-subtitle">Soluções de alto padrão para quem exige o melhor.</p>
        
        <div className="services-grid">
          {services.map((item, index) => (
            <div className="service-card" key={index}>
              <div className="card-image">
                <img 
                  src={item.img} 
                  alt={`Serviço de ${item.title} em Goiânia`} 
                  title={item.title}
                  loading="lazy"
                  decoding="async" 
                  width="400" 
                  height="220"
                />
              </div>
              <div className="card-content">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <a 
                  href={`https://wa.me/556236363610?text=Olá,%20tenho%20interesse%20no%20serviço%20de%20*${item.title}*`} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-card-action"
                >
                  Solicitar Orçamento
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Services;