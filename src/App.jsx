import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Services from './components/Services';
import Footer from './components/Footer';
import SEO from './components/SEO';

function App() {
  return (
    <HelmetProvider>
      <SEO />
      <div className="bg-brand-dark min-h-screen">
        <Navbar />
        <Hero />
        <Features />
        <Services />
        <Footer />
      </div>
    </HelmetProvider>
  );
}

export default App;