import React from 'react';
import ServiceLayout from '../components/ServiceLayout';
import SEO from '../components/SEO';
import { useLanguage } from '../context/LanguageContext';

const Conseil = () => {
  const { t } = useLanguage();
  
  if (!t || !t.services || !t.services.conseil) return null;

  const imageUrl = "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000";

  return (
    <>
      <SEO 
        title={t.services.conseil.title} 
        description={t.services.conseil.lead} 
      />
      <ServiceLayout 
        content={t.services.conseil} 
        imageUrl={imageUrl} 
      />
    </>
  );
};

export default Conseil;
