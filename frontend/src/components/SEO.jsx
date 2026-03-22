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
  
  const siteName = "MBK Procurement";
  const baseUrl = "https://mbkprocurement.com";
  const currentUrl = `${baseUrl}${window.location.pathname}`;

  // On récupère les données par défaut depuis ton objet 'hero'
  const defaultHero = t?.hero || {};

  // Construction dynamique des balises
  const seoTitle = title || defaultHero.title || "L'Ingénierie de la Performance Achats";
  const fullTitle = `${seoTitle} | ${siteName}`;
  const seoDescription = description || defaultHero.description || "Cabinet d'élite dédié à l'optimisation des structures de coûts.";

  const schemaOrg = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": siteName,
    "url": baseUrl,
    "logo": `${baseUrl}/logo.png`,
    "description": seoDescription,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Paris",
      "addressCountry": "FR"
    }
  };

  return (
    <Helmet>
      {/* Configuration de base */}
      <html lang={language} />
      <title>{fullTitle}</title>
      <meta name="description" content={seoDescription} />
      {keywords && <meta name="keywords" content={keywords} /> }
      <link rel="canonical" href={currentUrl} />

      {/* Hreflang : Crucial pour ne pas être pénalisé sur le bilingue */}
      <link rel="alternate" hrefLang="fr" href={currentUrl} />
      <link rel="alternate" hrefLang="en" href={currentUrl} />
      <link rel="alternate" hrefLang="x-default" href={currentUrl} />

      {/* Open Graph / LinkedIn */}
      <meta property="og:site_name" content={siteName} />
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:locale" content={language === 'fr' ? 'fr_FR' : 'en_US'} />

      {/* Données Structurées */}
      <script type="application/ld+json">
        {JSON.stringify(schemaOrg)}
      </script>
    </Helmet>
  );
};

export default SEO;
