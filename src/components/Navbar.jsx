import React from 'react';
import { Phone, Smartphone } from 'lucide-react';
import logoImg from '../assets/logo junin.png';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container nav-container">
        <a href="/" className="logo-link">
          <img 
            src={logoImg} 
            alt="Junin Auto Som" 
            className="nav-logo" 
          />
        </a>

        <div className="nav-actions">
          <a 
            href="tel:+556236363610"
            className="btn-outline-nav hide-mobile"
          >
            <Phone size={16} /> (62) 3636-3610
          </a>

          <a 
            href="https://wa.me/5562996628238?text=Olá,%20vim%20pelo%20site%20e%20quero%20um%20orçamento!" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-cta" 
          >
            <span style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
              <Smartphone size={18} /> (62) 99662-8238
            </span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;