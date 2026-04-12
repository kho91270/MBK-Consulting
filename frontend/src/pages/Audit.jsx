import React from 'react';
import ServiceLayout from '../components/ServiceLayout';
import { useLanguage } from '../context/LanguageContext';
import SEO from '../components/SEO';

const Audit = () => {
  const { t } = useLanguage();
  if (!t || !t.services || !t.services.audit) return null;

  return (
    <>
      <SEO
        title="Audit de Maturité — Diagnostic Achats"
        description="Diagnostic 360°, audit de conformité, performance fournisseur. Identifiez les zones de risques et gisements de profit cachés dans votre organisation."
        canonical="https://www.mbkprocurement.com/audit"
        keywords="audit achats, diagnostic procurement, conformité fournisseurs, audit maturité achats"
      />
      <ServiceLayout
        content={t.services.audit}
        label={t.common.analysisLabel}
        imageUrl="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2000"
        altText="Analyse détaillée et diagnostic de performance pour l'audit stratégique achats de MBK Procurement."
      />
    </>
  );
};

export default Audit;
