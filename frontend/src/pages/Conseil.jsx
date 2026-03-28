import React from 'react';
import ServiceLayout from '../components/ServiceLayout';
import { useLanguage } from '../context/LanguageContext';
import SEO from '../components/SEO';

const Conseil = () => {
  const { t } = useLanguage();
  if (!t) return null;
    return (
    <>
    <SEO
      title="Ingénierie Sourcing — Conseil Achats"
      description="Optimisation du TCO, Design-to-Cost, stratégies catégorielles. MBK Procurement aligne vos ressources externes sur vos ambitions stratégiques."
      canonical="https://www.mbkprocurement.com/conseil"
      keywords="conseil achats, optimisation TCO, design to cost, stratégie catégorielle, sourcing"
    />
    <ServiceLayout
      content={t.services.conseil} 
      label={t.common.strategyLabel} 
      imageUrl="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000" 
      altText="Espace de travail collaboratif pour le conseil stratégique en optimisation des coûts et performance achats."
    />
    </>
  );
};
export default Conseil;
