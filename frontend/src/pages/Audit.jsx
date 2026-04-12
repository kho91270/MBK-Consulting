import React from 'react';
import ServiceLayout from '../components/ServiceLayout';
import { useLanguage } from '../context/LanguageContext';
import SEO from '../components/SEO';

const Audit = () => {
  const { t, language } = useLanguage();
  if (!t || !t.services || !t.services.audit) return null;

  const faq = language === 'fr' ? [
    { q: "Quels sont les livrables d'un audit de maturité achats ?", a: "Un rapport complet incluant la cartographie des dépenses, l'évaluation du niveau de maturité par catégorie, l'analyse des risques fournisseurs, les écarts de conformité contractuelle et une feuille de route priorisée avec les gains rapides identifiés." },
    { q: "Combien de temps prend un diagnostic 360° ?", a: "Entre 4 et 8 semaines selon la taille de l'organisation. Cela inclut les entretiens avec les parties prenantes, l'analyse des données d'achat, la revue des contrats et la restitution au comité de direction." },
    { q: "L'audit perturbe-t-il les opérations courantes ?", a: "Non. Nous travaillons en parallèle de vos équipes. Les entretiens durent 45 minutes maximum par interlocuteur et l'extraction des données se fait sur vos outils existants sans migration ni installation." },
    { q: "Que se passe-t-il après l'audit ?", a: "Nous présentons les résultats au comité de direction avec des recommandations chiffrées. Vous décidez ensuite si vous souhaitez un accompagnement sur la mise en œuvre. Beaucoup de nos clients enchaînent directement avec une mission de conseil sur les catégories prioritaires identifiées." }
  ] : [
    { q: "What are the deliverables of a procurement maturity audit?", a: "A comprehensive report including spend mapping, maturity assessment by category, supplier risk analysis, contractual compliance gaps and a prioritized roadmap with identified quick wins." },
    { q: "How long does a 360° diagnosis take?", a: "Between 4 and 8 weeks depending on organization size. This includes stakeholder interviews, procurement data analysis, contract review and presentation to the executive committee." },
    { q: "Does the audit disrupt day-to-day operations?", a: "No. We work alongside your teams. Interviews last 45 minutes maximum per stakeholder and data extraction uses your existing tools without migration or installation." },
    { q: "What happens after the audit?", a: "We present results to the executive committee with quantified recommendations. You then decide whether you want support for implementation. Many clients move directly into a consulting engagement on the priority categories identified." }
  ];

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
        faq={faq}
      />
    </>
  );
};

export default Audit;
