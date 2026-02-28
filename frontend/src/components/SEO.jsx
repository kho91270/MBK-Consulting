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
  const currentUrl = window.location.href;
  const linkedinUrl = "https://linkedin.com/company/mbkprocurement";

  // Construction du titre : Priorité au titre passé en prop, sinon titre du mockData
  const seoTitle = title || t.hero.title;
  const fullTitle = `${seoTitle} | ${siteName}`;
  
  // Description : Priorité prop, sinon description du mockData (hero par défaut)
  const seoDescription = description || t.hero.description;

  // Données structurées (JSON-LD) pour rassurer les algorithmes Google sur l'autorité du cabinet
  const schemaOrg = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": siteName,
    "url": "https://mbkprocurement.com",
    "logo": "https://mbkprocurement.com/logo.png",
    "sameAs": [linkedinUrl],
    "description": seoDescription,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Paris",
      "addressCountry": "FR"
    }
  };

  return (
    <Helmet>
      {/* 1. CONFIGURATION DE BASE */}
      <html lang={language} />
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={seoDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={currentUrl} />

      {/* 2. INTERNATIONALISATION (Hreflang) - Crucial pour le bilingue */}
      <link rel="alternate" hrefLang="fr" href={currentUrl} />
      <link rel="alternate" hrefLang="en" href={currentUrl} />
      <link rel="alternate" hrefLang="x-default" href={currentUrl} />

      {/* 3. OPEN GRAPH (LinkedIn & Facebook) */}
      <meta property="og:site_name" content={siteName} />
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:locale" content={language === 'fr' ? 'fr_FR' : 'en_US'} />
      <meta property="og:see_also" content={linkedinUrl} />

      {/* 4. TWITTER CARDS */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={seoDescription} />
      <meta name="twitter:image" content={ogImage} />

      {/* 5. DONNÉES STRUCTURÉES (JSON-LD) - Qualité Institutionnelle */}
      <script type="application/ld+json">
        {JSON.stringify(schemaOrg)}
      </script>
    </Helmet>
  );
};

export default SEO;
