import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "AutoPartsStore", // Ou AutoRepair
    "name": "Junin Auto Som - Cidade Jardim",
    "image": "https://junincidadejardim.com.br/logo.png", // Substitua por uma URL real depois
    "description": "Especialistas em Som Automotivo, Window Blue, PPF e Estética Automotiva em Goiânia. Garantia e qualidade premium.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Av. Armando de Godói, 370",
      "addressLocality": "Goiânia",
      "addressRegion": "GO",
      "postalCode": "74423-010",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -16.6800, // Aproximado para Cidade Jardim
      "longitude": -49.2900
    },
    "url": "https://junincidadejardim.com.br",
    "telephone": "+556236363610",
    "priceRange": "$$"
  };

  return (
    <Helmet>
      <title>Junin Auto Som | Cidade Jardim - Som, PPF e Window Blue</title>
      <meta name="description" content="A melhor loja de estética automotiva e som em Goiânia. Window Blue original, vitrificação e acessórios com garantia total. Fale conosco!" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href="https://junincidadejardim.com.br/" />
      {/* Dados Estruturados para o Google */}
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

export default SEO;