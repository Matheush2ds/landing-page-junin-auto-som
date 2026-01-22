import React, { Suspense, lazy } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SEO from './components/SEO';
import FloatingWhatsApp from './components/FloatingWhatsApp';

const Features = lazy(() => import('./components/Features'));
const UpgradeSection = lazy(() => import('./components/UpgradeSection'));
const Services = lazy(() => import('./components/Services'));
const Footer = lazy(() => import('./components/Footer'));

const LoadingSpinner = () => (
  <div className="flex items-center justify-center h-20 bg-brand-dark">
    <div className="w-8 h-8 border-4 border-brand-yellow border-t-transparent rounded-full animate-spin"></div>
  </div>
);

function App() {
  return (
    <HelmetProvider>
      <SEO />
      <div className="bg-brand-dark min-h-screen">
        <Navbar />
        <Hero />
        
        <Suspense fallback={<LoadingSpinner />}>
          <Features />
          <UpgradeSection />
          <Services />
          <Footer />
        </Suspense>
        
        <FloatingWhatsApp />
      </div>
    </HelmetProvider>
  );
}

export default App;