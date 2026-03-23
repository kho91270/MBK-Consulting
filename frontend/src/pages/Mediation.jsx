import React from 'react';
import ServiceLayout from '../components/ServiceLayout';
import SEO from '../components/SEO';
import { useLanguage } from '../context/LanguageContext';

const Mediation = () => {
  const { t } = useLanguage();
  
  if (!t || !t.services || !t.services.mediation) return null;

  return (
    <React.Fragment>
      <SEO 
        title={t.services.mediation.title} 
        description={t.services.mediation.lead} 
      />
      <ServiceLayout 
        content={t.services.mediation} 
        label={t.common.pillarLabel || "Axe"} 
        indexNumber="04"
        imageUrl="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=2000" 
      />
    </React.Fragment>
  );
};

export default Mediation;
