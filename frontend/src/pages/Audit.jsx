import React from 'react';
import ServiceLayout from '../components/ServiceLayout';
import SEO from '../components/SEO';
import { useLanguage } from '../context/LanguageContext';

const Audit = () => {
  const { t, language } = useLanguage();
  
  // Sécurité d'accès aux données
  if (!t || !t.services || !t.services.audit) return null;

  const content = t.services.audit;

  // L'URL de l'image (Expertise / Bureau / Analyse)
  const auditImageUrl = "https://images.unsplash.com/photo-1454165833767-0274b24f6733?q=80&w=2000";

  return (
    <>
      {/* OPTIMISATION SEO DYNAMIQUE */}
      <SEO 
        title={content.title} 
        description={content.lead} 
        keywords={language === 'fr' 
          ? "Audit Achats, Maturité Achats, Diagnostic Performance, EBITDA, MBK Procurement" 
          : "Procurement Audit, Maturity Audit, Performance Diagnosis, EBITDA, MBK"} 
      />

      {/* LAYOUT DE LA PAGE (Label supprimé pour standardisation) */}
      <ServiceLayout 
        content={content} 
        imageUrl={auditImageUrl} 
      />
    </>
  );
};

export default Audit;
