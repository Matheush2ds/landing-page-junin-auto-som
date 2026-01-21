import React from 'react';
import { Phone } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container nav-container">
        <div className="logo">JUNIN <span className="highlight">AUTO SOM</span></div>
        <a 
          href="https://wa.me/556236363610?text=Olá,%20vim%20pelo%20site%20e%20quero%20um%20orçamento!" 
          target="_blank" 
          className="btn-cta"
        >
          <span style={{display: 'flex', alignItems: 'center', gap: '8px'}}>
            <Phone size={18} /> (62) 3636-3610
          </span>
        </a>
      </div>
    </nav>
  );
};
export default Navbar;