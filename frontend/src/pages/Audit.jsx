import React from 'react';
import ServiceLayout from '../components/ServiceLayout';
import { useLanguage } from '../context/LanguageContext';
import SEO from '../components/SEO';

const Audit = () => {
  const { t, language } = useLanguage();
  
  if (!t || !t.services || !t.services.audit) return null;

  // L'URL stable et optimisée
  const auditImageUrl = "https://images.unsplash.com/photo-1454165833767-0274b24f6733?q=80&w=2000";

   return (
    <>
    <SEO
      title="Ingénierie Sourcing — Conseil Achats"
      description="Optimisation du TCO, Design-to-Cost, stratégies catégorielles. MBK Procurement aligne vos ressources externes sur vos ambitions stratégiques."
      canonical="https://www.mbkprocurement.com/conseil"
      keywords="conseil achats, optimisation TCO, design to cost, stratégie catégorielle, sourcing"
    />
    <ServiceLayout
      content={t.services.audit} 
      label={t.common.analysisLabel} 
      imageUrl={auditImageUrl}
      altText="Analyse détaillée et diagnostic de performance pour l'audit stratégique achats de MBK Procurement."
    />
    </>
  );
};

export default Audit;
