import React from 'react';
import ServiceLayout from '../components/ServiceLayout';
import { useLanguage } from '../context/LanguageContext';

const Audit = () => {
  const { t } = useLanguage();
  if (!t || !t.services || !t.services.audit) return null;

  return (
    <ServiceLayout 
      content={t.services.audit} 
      label={t.common.analysisLabel || "Analyse"} 
      indexNumber="02"
      imageUrl="https://images.unsplash.com/photo-1454165833767-0274b24f6733?q=80&w=2000" 
    />
  );
};

export default Audit;
