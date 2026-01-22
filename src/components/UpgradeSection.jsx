import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Settings, Music4, ArrowRight } from 'lucide-react';
import './UpgradeSection.css';
import imgMultimidia from '../assets/servicos/multimidia.webp'; 

const UpgradeSection = () => {
  return (
    <section className="upgrade-section section-padding">
      <div className="container">
        <div className="upgrade-grid">
          
          <motion.div 
            className="upgrade-content"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="badge-small">
              <span className="badge-dot"></span> Instalação Especializada
            </div>
            
            <h2>
              Comprou acessórios e <br/>
              <span className="text-gradient">não sabe instalar?</span>
            </h2>
            
            <p className="description">
              Não arrisque a parte elétrica do seu carro. Somos certificados para instalar multimidias e acessórios comprados na internet. Garantimos o funcionamento dos <strong>comandos de volante</strong> e sistemas originais.
            </p>

            <ul className="upgrade-list">
              <li>
                <div className="icon-wrapper"><CheckCircle2 size={20} /></div>
                <span>Instalação de Kit Multimídia (Android/Apple)</span>
              </li>
              <li>
                <div className="icon-wrapper"><Settings size={20} /></div>
                <span>Configuração de <strong>Comandos no Volante</strong></span>
              </li>
              <li>
                <div className="icon-wrapper"><Music4 size={20} /></div>
                <span>Calibração de Áudio Profissional</span>
              </li>
            </ul>

            <a 
              href="https://wa.me/556236363610?text=Comprei%20um%20acessório%20e%20preciso%20instalar" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary mt-6 btn-glow"
            >
              AGENDAR INSTALAÇÃO <ArrowRight size={18} />
            </a>
          </motion.div>

          <motion.div 
            className="upgrade-image-wrapper"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="glow-effect"></div>
            
            <img 
              src={imgMultimidia} 
              alt="Instalação de Multimídia Premium em Goiânia" 
              className="upgrade-img" 
              decoding="async"
              loading="lazy"
              width="500"
              height="350"
            />
            
            <div className="floating-card glass-card">
              <div className="flex items-center gap-3">
                <div className="check-circle-anim">
                  <CheckCircle2 size={20} color="#000" />
                </div>
                <div>
                  <span className="block text-white font-bold text-sm">Garantia Total</span>
                  <span className="block text-xs text-gray-400">Serviço Certificado</span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default UpgradeSection;