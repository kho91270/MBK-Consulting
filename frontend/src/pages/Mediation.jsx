import React from 'react';
import ServiceLayout from '../components/ServiceLayout';
import { useLanguage } from '../context/LanguageContext';
import SEO from '../components/SEO';

const Mediation = () => {
  const { t } = useLanguage();
  if (!t || !t.services || !t.services.mediation) return null;

  return (
    <>
      <SEO
        title="Médiation Stratégique — Résolution de Conflits"
        description="Relations critiques, résolution de conflits, renégociation contrats et gestion de crise. Transformez les litiges en accords constructifs."
        canonical="https://www.mbkprocurement.com/mediation"
        keywords="médiation commerciale, résolution conflits achats, renégociation contrats, gestion crise fournisseur"
      />
      <ServiceLayout
        content={t.services.mediation}
        imageUrl="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=2000"
        altText="Point de convergence architecturale symbolisant la médiation et la résolution de conflits fournisseurs."
      />
    </>
  );
};

export default Mediation;
