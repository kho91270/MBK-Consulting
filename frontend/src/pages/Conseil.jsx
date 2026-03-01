import React from 'react';
import ServiceLayout from '../components/ServiceLayout';
import { useLanguage } from '../context/LanguageContext';

const Conseil = () => {
  const { t } = useLanguage();
  return (
    <ServiceLayout 
      content={t.services.conseil} 
      label={t.common.strategyLabel} 
      indexNumber="01"
      imageUrl="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format" 
    />
  );
};
export default Conseil;
