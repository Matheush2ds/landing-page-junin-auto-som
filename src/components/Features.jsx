import React from 'react';
import { ShieldCheck, CreditCard, Heart, Award } from 'lucide-react';
import { motion } from 'framer-motion';
import './Features.css';

const Features = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="features-section">
      <motion.div 
        className="container features-grid"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.div className="feature-box" variants={item}>
          <Award className="text-brand-yellow" size={32} />
          <div className="feature-text">
            <h4>Qualidade Premium</h4>
            <p>Acabamento impecável</p>
          </div>
        </motion.div>

        <motion.div className="feature-box" variants={item}>
          <CreditCard className="text-brand-yellow" size={32} />
          <div className="feature-text">
            <h4>Parcele no Cartão</h4>
            <p>Facilidade no pagamento</p>
          </div>
        </motion.div>

        <motion.div className="feature-box" variants={item}>
          <Heart className="text-brand-yellow" size={32} />
          <div className="feature-text">
            <h4>Paixão por Carros</h4>
            <p>Cuidamos como se fosse nosso</p>
          </div>
        </motion.div>

        {/* Diferencial Forte de Garantia */}
        <motion.div className="feature-box highlight-box" variants={item}>
          <ShieldCheck className="text-brand-yellow" size={32} />
          <div className="feature-text">
            <h4>Garantia Total</h4>
            <p>Suporte e segurança no serviço</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Features;