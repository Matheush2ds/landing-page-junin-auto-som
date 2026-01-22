import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, MapPin, Star, ShieldCheck, Trophy } from 'lucide-react';
import './Hero.css';

import imgFachada from '../assets/fachada.webp';
import imgInterna from '../assets/internacarro.webp';
import imgPolimento from '../assets/polimentof.webp';

const backgroundImages = [imgFachada, imgInterna, imgPolimento];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % backgroundImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handleConversion = () => {
    if (typeof window.gtag !== 'undefined') {
      window.gtag('event', 'conversion', { 'send_to': 'AW-10962802224/' });
    }
  };

  return (
    <section className="hero">
      <AnimatePresence mode='wait'>
        <motion.div
          key={index}
          className="hero-bg"
          style={{ backgroundImage: `url(${backgroundImages[index]})` }}
          initial={{ opacity: 0, scale: 1.05 }} 
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />
      </AnimatePresence>
      
      <div className="hero-overlay"></div>

      <div className="container hero-content">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >

          <div className="national-badge">
            <span className="flag">🇧🇷</span>
            <span>A maior rede de acessórios automotivos do Brasil!</span>
          </div>

          <div className="trust-badge">
            <Star size={14} fill="#FFB800" stroke="none" />
            <span>Referência em Goiânia</span>
          </div>
          
          <h1>
            Seu carro merece <br/>
            <span className="highlight-text">Tratamento VIP</span>
          </h1>
          
          <p className="hero-description">
            Do som de alta fidelidade à proteção estética completa. 
            Transformamos veículos em máquinas de luxo com <strong>garantia total</strong>, agilidade e compromisso.
          </p>
          
          <div className="hero-actions">
            <a 
              href="https://wa.me/5562996628238?text=Olá,%20vi%20o%20site%20e%20gostaria%20de%20um%20orçamento%20VIP." 
              target="_blank" 
              className="btn-primary"
              onClick={handleConversion}
            >
              <MessageCircle size={20} /> ORÇAMENTO RÁPIDO
            </a>
            <a 
              href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3822.062867087854!2d-49.3118019!3d-16.6816842!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935e9789fd31f2b1%3A0xbcfdd11796181e42!2sJunin%20Auto%20Som-%20Cidade%20Jardim!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr" 
              target="_blank" 
              className="btn-outline"
            >
              <MapPin size={20} /> COMO CHEGAR
            </a>
          </div>

          <div className="hero-features">
            <span><ShieldCheck size={16} className="text-yellow-500"/> Revenda Oficial Window Blue</span>
            <span><Trophy size={16} className="text-yellow-500"/> Líder de Mercado</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;