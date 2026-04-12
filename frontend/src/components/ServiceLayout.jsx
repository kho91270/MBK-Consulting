import React from 'react';
import ServiceLayout from '../components/ServiceLayout';
import { useLanguage } from '../context/LanguageContext';
import SEO from '../components/SEO';

const Conseil = () => {
  const { t, language } = useLanguage();
  if (!t) return null;

  const faq = language === 'fr' ? [
    { q: "Combien de temps dure une mission de conseil achats ?", a: "Entre 3 et 12 mois selon le périmètre. Une mission de sourcing ciblée sur une catégorie peut aboutir en 8 semaines. Une refonte complète de la stratégie achats avec appels d'offres européens demande généralement 6 à 12 mois." },
    { q: "Intervenez-vous en régie ou au forfait ?", a: "Les deux. Pour les missions de transformation longues, nous privilégions un modèle hybride : un forfait cadré sur les livrables stratégiques, complété par de la régie sur le pilotage opérationnel au quotidien." },
    { q: "Quels types d'achats couvrez-vous ?", a: "Achats indirects principalement : Facility Management, prestations intellectuelles, services généraux, logistique, IT. Nous intervenons aussi sur les achats de production lorsqu'il s'agit de structurer des appels d'offres ou de renégocier des contrats-cadres." },
    { q: "Travaillez-vous avec les équipes internes ou en autonomie ?", a: "Toujours avec vos équipes. Notre objectif est le transfert de compétences. Nous co-construisons les stratégies catégorielles, formons vos acheteurs aux techniques de négociation et laissons des processus documentés à la fin de chaque mission." }
  ] : [
    { q: "How long does a procurement consulting engagement last?", a: "Between 3 and 12 months depending on scope. A targeted sourcing mission on a single category can deliver results in 8 weeks. A full procurement strategy overhaul with European tenders typically requires 6 to 12 months." },
    { q: "Do you work on a fixed-fee or time-and-materials basis?", a: "Both. For longer transformation programs, we favor a hybrid model: fixed fee on strategic deliverables, complemented by time-and-materials for day-to-day operational management." },
    { q: "What types of procurement do you cover?", a: "Primarily indirect procurement: Facility Management, professional services, general services, logistics, IT. We also work on direct procurement when it involves structuring tenders or renegotiating framework agreements." },
    { q: "Do you work with internal teams or independently?", a: "Always with your teams. Our goal is knowledge transfer. We co-build category strategies, train your buyers in negotiation techniques and leave documented processes at the end of every engagement." }
  ];

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
        faq={faq}
      />
    </>
  );
};

export default Conseil;
