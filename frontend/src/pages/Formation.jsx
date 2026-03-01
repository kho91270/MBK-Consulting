import React from 'react';
import ServiceLayout from '../components/ServiceLayout';
import { useLanguage } from '../context/LanguageContext';

const Formation = () => {
  const { t } = useLanguage();
  if (!t || !t.services || !t.services.formation) return null;

  return (
    <ServiceLayout 
      content={t.services.formation} 
      label={t.common.moduleLabel || "Module"} 
      indexNumber="03"
      imageUrl="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2000" 
    />
  );
};

export default Formation;
