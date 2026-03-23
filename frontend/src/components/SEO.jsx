import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../context/LanguageContext';

const SEO = ({ 
  title, 
  description, 
  keywords, 
  ogImage = "https://mbkprocurement.com/og-image.jpg",
  ogType = "website"
}) => {
  const { t, language } = useLanguage();
  
  // Sécurité : si t ou t.hero n'existe pas, on définit des valeurs vides pour éviter le crash
  const hero = t?.hero || {};
  
  const siteName = "MBK Procurement";
  const currentUrl = window.location.href;

  // Utilisation des clés EXACTES de ton fichier translations.js
  const seoTitle = title || hero.title || "L'Ingénierie de la Performance Achats";
  const fullTitle = `${seoTitle} | ${siteName}`;
  const seoDescription = description || hero.description || "Cabinet d'élite dédié à l'optimisation des structures de coûts.";

  return (
    <Helmet>
      <html lang={language || 'fr'} />
      <title>{fullTitle}</title>
      <meta name="description" content={seoDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={currentUrl} />

      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={currentUrl} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={seoDescription} />
    </Helmet>
  );
};

export default SEO;
