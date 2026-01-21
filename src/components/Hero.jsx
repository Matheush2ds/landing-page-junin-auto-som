import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, ShieldCheck } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const handleConversion = () => {
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', 'conversion', {
        'send_to': 'AW-10962802224/'
      });
    }
  };

  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="badge">REFERÊNCIA EM GOIÂNIA</span>
          <h1>
            Seu carro merece <br/>
            <span className="highlight">Tratamento VIP.</span>
          </h1>
          <p>
            Especialistas em transformar veículos com segurança. Do som de alta fidelidade à proteção de pintura (PPF). Garantia de serviço e instalação técnica certificada.
          </p>
          
          <div className="services-list">
            <span className="tag">Window Blue Oficial</span>
            <span className="tag">Som Premium</span>
            <span className="tag">PPF & Estética</span>
          </div>

          <motion.a 
            href="https://wa.me/556236363610?text=Olá,%20vi%20o%20site%20e%20gostaria%20de%20um%20orçamento%20VIP." 
            target="_blank" 
            className="btn-primary"
            onClick={handleConversion}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <MessageCircle size={24} /> QUERO UM ORÇAMENTO
          </motion.a>
          
          <p className="mt-4 text-sm text-gray-400 flex items-center gap-2">
            <ShieldCheck size={16} className="text-brand-yellow"/> Garantia em todos os serviços
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;