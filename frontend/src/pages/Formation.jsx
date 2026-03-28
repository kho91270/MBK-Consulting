import React from 'react';
import ServiceLayout from '../components/ServiceLayout';
import { useLanguage } from '../context/LanguageContext';
import SEO from '../components/SEO';

const Formation = () => {
  const { t } = useLanguage();
  
  // Sécurité pour éviter le rond rouge
  if (!t || !t.services || !t.services.formation) return null;

  return (
    <>
   <SEO
  title="Académie Experts — Formation Achats"
  description="Négociation de haut niveau, analyse financière, leadership et risk management. Transformez vos collaborateurs en négociateurs d'élite."
  canonical="https://www.mbkprocurement.com/formation"
  keywords="formation achats, formation négociation, académie procurement, leadership achats"
/>
      />
    <ServiceLayout
      content={t.services.formation} 
      label={t.common.moduleLabel || "Module"} 
      imageUrl="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2000&auto=format&fit=crop"
      altText="Salle de séminaire moderne pour la formation continue des acheteurs et la montée en compétence achats."
    />
    </>
  );
};

export default Formation;
