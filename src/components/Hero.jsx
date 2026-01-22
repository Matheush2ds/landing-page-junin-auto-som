import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, MapPin, Star, ShieldCheck } from 'lucide-react';
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
          initial={{ opacity: 0, scale: 1.1 }} 
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </AnimatePresence>
      
      <div className="hero-overlay"></div>

      <div className="container hero-content">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
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
            Transformamos veículos em máquinas de luxo com <strong>garantia total</strong> e padrão original.
          </p>
          
          <div className="hero-actions">
            <a 
              href="https://wa.me/556236363610?text=Olá,%20vi%20o%20site%20e%20gostaria%20de%20um%20orçamento%20VIP." 
              target="_blank" 
              className="btn-primary"
              onClick={handleConversion}
            >
              <MessageCircle size={20} /> ORÇAMENTO RÁPIDO
            </a>
            <a 
              href="https://maps.google.com/?q=Junin+Auto+Som+Cidade+Jardim" 
              target="_blank" 
              className="btn-outline"
            >
              <MapPin size={20} /> COMO CHEGAR
            </a>
          </div>

          <div className="hero-features">
            <span><ShieldCheck size={16} className="text-yellow-500"/> Venda e Aplicação Window Blue Original</span>
            <span><ShieldCheck size={16} className="text-yellow-500"/> Especialistas em Multimídia</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;