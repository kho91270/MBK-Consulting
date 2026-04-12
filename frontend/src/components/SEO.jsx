import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLanguage } from '../context/LanguageContext';

const SEO = ({ title, description, canonical, keywords, image, type = 'website' }) => {
  const { language } = useLanguage();
  const siteName = 'MBK Procurement';
  const defaultImage = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200';
  const baseUrl = 'https://www.mbkprocurement.com';

  const fullTitle = title ? `${title} | ${siteName}` : `${siteName} | L'Ingénierie de la Performance Achats`;
  const fullImage = image || defaultImage;
  const fullCanonical = canonical || baseUrl;

  return (
    <Helmet>
      <html lang={language} />
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={fullCanonical} />
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:url" content={fullCanonical} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content={language === 'fr' ? 'fr_FR' : 'en_US'} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "name": "MBK Procurement",
          "description": description,
          "url": baseUrl,
          "logo": baseUrl + "/logo192.png",
          "image": fullImage,
          "email": "contact@mbkprocurement.com",
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Paris",
            "addressCountry": "FR"
          },
          "areaServed": ["FR", "LU", "US", "AE"],
          "serviceType": ["Conseil Achats", "Audit Procurement", "Formation Négociation", "Médiation Commerciale"],
          "priceRange": "€€€",
          "sameAs": ["https://www.linkedin.com/company/mbkprocurement/"]
        })}
      </script>
    </Helmet>
  );
};

export default SEO;
