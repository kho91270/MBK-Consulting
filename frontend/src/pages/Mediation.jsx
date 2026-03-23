import React from 'react';
import ServiceLayout from '../components/ServiceLayout';
import SEO from '../components/SEO';
import { useLanguage } from '../context/LanguageContext';

const Mediation = () => {
  const { t } = useLanguage();
  
  if (!t || !t.services || !t.services.mediation) return null;

  const imageUrl = "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2000";

  return (
    <>
      <SEO 
        title={t.services.mediation.title} 
        description={t.services.mediation.lead} 
      />
      <ServiceLayout 
        content={t.services.mediation} 
        imageUrl={imageUrl} 
      />
    </>
  );
};

export default Mediation;
