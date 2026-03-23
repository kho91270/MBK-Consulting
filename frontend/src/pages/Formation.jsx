import React from 'react';
import ServiceLayout from '../components/ServiceLayout';
import SEO from '../components/SEO';
import { useLanguage } from '../context/LanguageContext';

const Formation = () => {
  const { t } = useLanguage();
  
  if (!t || !t.services || !t.services.formation) return null;

  const imageUrl = "https://images.unsplash.com/photo-1507537297325-592be7d86f3f?q=80&w=2000";

  return (
    <>
      <SEO 
        title={t.services.formation.title} 
        description={t.services.formation.lead} 
      />
      <ServiceLayout 
        content={t.services.formation} 
        imageUrl={imageUrl} 
      />
    </>
  );
};

export default Formation;
