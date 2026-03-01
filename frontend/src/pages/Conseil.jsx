import React from 'react';
import ServiceLayout from '../components/ServiceLayout';
import { useLanguage } from '../context/LanguageContext';

const Conseil = () => {
  const { t } = useLanguage();
  
  if (!t || !t.services || !t.services.conseil) return null;

  return (
    <ServiceLayout 
      content={t.services.conseil} 
      label={t.common.strategyLabel || "Stratégie"} 
      indexNumber="01"
      imageUrl="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000" 
    />
  );
};

export default Conseil;
