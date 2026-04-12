import React from 'react';
import ServiceLayout from '../components/ServiceLayout';
import { useLanguage } from '../context/LanguageContext';
import SEO from '../components/SEO';

const Mediation = () => {
  const { t, language } = useLanguage();
  if (!t || !t.services || !t.services.mediation) return null;

  const faq = language === 'fr' ? [
    { q: "À quel moment faire appel à une médiation commerciale ?", a: "Dès que le dialogue est rompu ou que les échanges tournent en boucle sans avancée. Plus tôt vous intervenez, plus les chances d'aboutir à un accord rapide sont élevées. Attendre le contentieux coûte toujours plus cher en temps, en argent et en relation commerciale." },
    { q: "La médiation est-elle confidentielle ?", a: "Strictement. Rien de ce qui est échangé pendant la médiation ne peut être utilisé dans une procédure ultérieure. C'est ce cadre de confidentialité qui permet aux parties de parler franchement et de trouver des solutions pragmatiques." },
    { q: "Quelle est la différence avec un arbitrage ?", a: "L'arbitrage impose une décision aux parties. La médiation les accompagne vers un accord qu'elles construisent elles-mêmes. Le taux de réussite est supérieur car les deux parties s'approprient la solution, ce qui préserve la relation commerciale à long terme." },
    { q: "Combien de temps dure une médiation ?", a: "Entre 2 et 6 semaines en moyenne. Les cas les plus simples se résolvent en une seule session de travail. Les situations complexes impliquant plusieurs contrats ou plusieurs juridictions peuvent nécessiter 3 à 4 sessions étalées sur un mois." }
  ] : [
    { q: "When should you consider commercial mediation?", a: "As soon as dialogue has broken down or exchanges are going in circles. The earlier you intervene, the higher the chances of reaching a swift agreement. Waiting for litigation always costs more in time, money and commercial relationship." },
    { q: "Is mediation confidential?", a: "Strictly. Nothing exchanged during mediation can be used in subsequent proceedings. This confidentiality framework is what allows parties to speak openly and find pragmatic solutions." },
    { q: "What is the difference with arbitration?", a: "Arbitration imposes a decision on the parties. Mediation guides them toward an agreement they build themselves. Success rates are higher because both parties own the solution, which preserves the long-term commercial relationship." },
    { q: "How long does a mediation take?", a: "Between 2 and 6 weeks on average. Simple cases can be resolved in a single working session. Complex situations involving multiple contracts or jurisdictions may require 3 to 4 sessions spread over a month." }
  ];

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
        imageUrl="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=2000"
        altText="Point de convergence symbolisant la médiation et la résolution de conflits fournisseurs."
        faq={faq}
      />
    </>
  );
};

export default Mediation;
