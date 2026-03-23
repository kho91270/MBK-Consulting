import React from 'react';
import ServiceLayout from '../components/ServiceLayout';
import SEO from '../components/SEO';
import { useLanguage } from '../context/LanguageContext';

const Audit = () => {
  const { t } = useLanguage();
  
  // Ta condition de sécurité d'origine
  if (!t || !t.services || !t.services.audit) return null;

  const auditImageUrl = "https://images.unsplash.com/photo-1454165833767-0274b24f6733?q=80&w=2000";

  return (
    <main>
      <SEO 
        title={t.services.audit.title} 
        description={t.services.audit.lead} 
      />
      <ServiceLayout 
        content={t.services.audit} 
        imageUrl={auditImageUrl} 
      />
    </main>
  );
};

export default Audit;
