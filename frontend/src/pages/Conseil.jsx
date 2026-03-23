import React from 'react';
import ServiceLayout from '../components/ServiceLayout';
import { useLanguage } from '../context/LanguageContext';

const Conseil = () => {
  const { t } = useLanguage();
  if (!t) return null;
  return (
    <ServiceLayout 
      content={t.services.conseil} 
      label={t.common.strategyLabel} 
      imageUrl="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000" 
      altText="Espace de travail collaboratif pour le conseil stratégique en optimisation des coûts et performance achats."
    />
  );
};
export default Conseil;
