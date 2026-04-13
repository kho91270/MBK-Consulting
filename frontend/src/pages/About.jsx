1. mockData.js — contenu complet mis à jour :

export const translations = {
  fr: {
    nav: { home: "Accueil", conseil: "Conseil", audit: "Audit", formation: "Formation", mediation: "Médiation", about: "Le Cabinet", contact: "Contact" },
    hero: {
      subtitle: "Performance Architect",
      title: "L'Ingénierie de la Performance Achats",
      description: "Vos achats représentent 60 à 80% du chiffre d'affaires de votre entreprise. Nous vous aidons à en reprendre le contrôle — et à transformer chaque euro dépensé en levier de performance.",
      cta: "Engager l'audit stratégique"
    },
    common: {
      serviceLabel: "Expertise",
      moduleLabel: "Module",
      strategyLabel: "Stratégie",
      analysisLabel: "Analyse",
      pillarLabel: "Axe",
      maintenance: "Système en maintenance",
      ctaTitle: "Contact"
    },
    services: {
      conseil: {
        title: "Ingénierie Sourcing",
        lead: "Vos fournisseurs sont-ils vraiment les meilleurs ? Vos contrats vous protègent-ils réellement ? Payez-vous le juste prix ? Si vous ne pouvez pas répondre à ces trois questions avec certitude, il est temps d'en parler.",
        items: ["Optimisation du TCO", "Design-to-Cost", "Stratégies catégorielles", "Make or Buy"],
        descriptions: [
          "Le prix d'achat ne représente souvent que 40% du coût réel. Transport, stockage, non-qualité, coûts administratifs — ces lignes invisibles érodent vos marges en silence. Nous les identifions, les chiffrons et les éliminons. Nos clients découvrent en moyenne 15 à 25% de coûts cachés sur leurs catégories principales.",
          "Le cahier des charges est souvent rédigé par ceux qui utiliseront le produit, rarement par ceux qui le paieront. Résultat : des spécifications trop riches, des fournisseurs qui facturent des options inutiles, et un budget qui explose. Nous intervenons avant l'appel d'offres pour challenger les besoins et construire un cahier des charges qui génère des économies dès la première consultation.",
          "Acheter du mobilier de bureau et négocier un contrat de maintenance industrielle, ce n'est pas le même métier. Pourtant, beaucoup d'entreprises traitent toutes leurs catégories de la même manière. Nous construisons une stratégie d'achat adaptée à chaque famille : qui mettre en concurrence, quand, comment, et avec quels objectifs de résultat.",
          "Faut-il internaliser ou externaliser ? La réponse n'est jamais simple et dépend de dizaines de variables : coûts sociaux, risques de dépendance, capacité interne, confidentialité. Nous posons les chiffres sur la table pour que votre comité de direction prenne une décision éclairée — pas une décision politique."
        ]
      },
      audit: {
        title: "Audit de Maturité",
        lead: "Vous avez le sentiment de payer trop cher mais vous ne savez pas exactement combien, ni où. Vos contrats traînent depuis des années sans avoir été renégociés. Vos fournisseurs dictent leurs conditions parce que personne n'a le temps de les challenger. Un audit, c'est mettre la lumière sur tout ce que vous ne voyez pas — et chiffrer ce que ça vous coûte.",
        items: ["Diagnostic 360°", "Audit de conformité", "Performance fournisseur", "Gisements de productivité"],
        descriptions: [
          "Quand un directeur financier nous appelle, c'est souvent parce qu'il voit la dépense mais pas la structure derrière. Qui achète quoi, auprès de qui, à quel prix, sous quel contrat ? Dans beaucoup d'organisations, personne n'a la réponse complète. Notre diagnostic cartographie l'ensemble de votre dépense en 4 à 8 semaines et livre une photographie claire : où part l'argent, qui décide, et où sont les leviers immédiats.",
          "Un contrat signé il y a trois ans protège-t-il encore votre entreprise aujourd'hui ? Les clauses de révision sont-elles appliquées ? Les pénalités de retard sont-elles activées ? Dans 80% des cas, la réponse est non. Notre audit vérifie chaque engagement, identifie les risques juridiques et vous donne un plan de remise en conformité pragmatique — pas un rapport de 200 pages.",
          "Un fournisseur stratégique qui livre en retard une fois, c'est un incident. Trois fois, c'est un risque pour votre production. Mais sans outil de suivi, personne ne s'en rend compte. Nous mesurons la performance réelle de vos fournisseurs clés — délais, qualité, réactivité — et vous donnons les données pour renégocier en position de force ou changer de partenaire en connaissance de cause.",
          "Chaque audit que nous avons conduit a révélé des économies réalisables à court terme. Pas dans 18 mois, pas après une transformation digitale — maintenant. Des contrats jamais mis en concurrence, des doublons de fournisseurs, des prix jamais renégociés depuis la signature. Ce sont des gains directs pour votre EBITDA, et nous les identifions dès les premières semaines."
        ]
      },
      formation: {
        title: "Academy Experts",
        lead: "Vos acheteurs connaissent vos produits. Mais savent-ils négocier un contrat de 2M€ face à un fournisseur qui a plus d'expérience qu'eux ? Savent-ils détecter un fournisseur en difficulté financière avant la rupture ? Nous formons vos équipes aux compétences qui ne s'apprennent pas dans les livres.",
        items: ["Négociation haut niveau", "Analyse financière", "Leadership", "Risk Management"],
        descriptions: [
          "La négociation achats, ce n'est pas demander 5% de remise. C'est comprendre la structure de coûts de votre fournisseur, identifier ses contraintes, et construire un accord où les deux parties ont intérêt à collaborer sur la durée. Nos modules sont basés sur des cas réels tirés de nos missions : des négociations de contrats FM à 8 chiffres, des renégociations de tarifs logistiques pan-européens, des situations de monopole fournisseur.",
          "Votre fournisseur principal affiche un résultat net de 1%. Est-ce sain ou alarmant ? Sa trésorerie lui permet-elle de tenir 6 mois en cas de baisse d'activité ? Si votre acheteur ne sait pas lire un bilan, il négocie à l'aveugle. Nous lui apprenons à décoder les comptes d'un fournisseur en 30 minutes et à en tirer des conclusions opérationnelles.",
          "Dans beaucoup d'entreprises, la fonction achats est perçue comme un service support. Les acheteurs subissent les décisions au lieu de les influencer. Nos modules de leadership apprennent à vos responsables achats à défendre leurs arbitrages devant un comité de direction, à fédérer les opérationnels autour d'un projet d'appel d'offres, et à faire reconnaître la valeur stratégique de leur fonction.",
          "La crise des semi-conducteurs a paralysé des industries entières. La guerre en Ukraine a fait exploser les coûts énergétiques. Le prochain choc est imprévisible, mais votre capacité à y répondre ne l'est pas. Nous enseignons une méthodologie concrète : identifier vos fournisseurs critiques, évaluer leur niveau de risque, et construire des plans B avant d'en avoir besoin."
        ]
      },
      mediation: {
        title: "Médiation Stratégique",
        lead: "Un fournisseur qui ne livre plus. Un contrat que chaque partie interprète différemment. Un prestataire qui menace de partir en plein projet critique. Avant d'appeler un avocat, appelez un médiateur. C'est plus rapide, moins cher, et ça préserve la relation.",
        items: ["Sécuriser les relations critiques", "Résolution de conflits", "Renégociation contrats", "Gestion de crise"],
        descriptions: [
          "Vous dépendez d'un fournisseur et la relation se dégrade. Les emails s'accumulent, les réunions tournent au reproche, les délais glissent. Personne ne veut rompre mais personne ne cède. Nous intervenons comme tiers de confiance pour remettre les deux parties autour de la table, clarifier les attentes, et reconstruire un cadre de collaboration clair.",
          "Un litige commercial coûte en moyenne 18 mois et 150K€ en procédure judiciaire. Une médiation coûte 2 à 6 semaines et une fraction de ce montant. Et surtout, elle aboutit à un accord que les deux parties acceptent — pas un jugement que l'une d'elles contestera. Nous avons résolu des situations où les échanges étaient rompus depuis des mois.",
          "Les matières premières ont augmenté de 30%. Votre fournisseur demande une révision tarifaire. Vous refusez. Il menace de réduire le service. Ce scénario se répète dans toutes les industries. Nous pilotons ces renégociations : vérification des justificatifs, analyse des clauses contractuelles, construction d'un avenant équilibré qui protège vos intérêts sans pousser le fournisseur vers la sortie.",
          "Votre prestataire logistique fait faillite un vendredi soir. Lundi matin, 200 salariés n'ont plus de navette pour aller travailler. Ce type de situation existe — et quand elle arrive, il faut agir dans les heures qui suivent. Nous mobilisons notre réseau pour trouver un prestataire de remplacement, sécuriser la continuité opérationnelle, et gérer la sortie de crise fournisseur en parallèle."
        ]
      }
    },
    about: {
      title: "Le Cabinet",
      philosophy: "Les achats ne sont pas un centre de coûts. Ce sont le moteur secret de votre rentabilité.",
      historyTitle: "Notre histoire",
      historyText: "MBK Procurement est né d'un constat simple : les entreprises dépensent des millions auprès de leurs fournisseurs, mais très peu investissent dans la manière dont elles achètent. Des contrats signés à la hâte, des appels d'offres mal structurés, des fournisseurs jamais challengés — et au bout du compte, des marges qui s'érodent sans que personne ne comprenne pourquoi.",
      historyText2: "Après 15 ans passés à diriger des transformations achats pour des groupes européens — de la grande distribution à la logistique en passant par le facility management — nous avons créé MBK avec une conviction : chaque entreprise, quelle que soit sa taille, mérite une fonction achats à la hauteur de ses ambitions.",
      adnTitle: "Identité Stratégique",
      adnDescription: "MBK Procurement est né d'une conviction : la fonction achats est le levier le plus sous-exploité de la performance financière. Nous ne sommes pas un cabinet généraliste qui fait de l'achat. Nous sommes des spécialistes achats qui comprennent la stratégie d'entreprise. Chaque mission est dirigée par un consultant senior avec plus de 15 ans d'expérience opérationnelle.",
      methodTitle: "Standards d'Excellence",
      methodDescription: "Notre méthode combine rigueur analytique et pragmatisme terrain. Nous ne livrons pas des rapports qui dorment dans un tiroir. Nous délivrons des résultats mesurables : des contrats renégociés, des processus implémentés, des équipes formées et autonomes. La performance achats n'est pas une promesse — c'est notre métrique de succès.",
      commitmentResultTitle: "Résultats mesurables",
      commitmentResultText: "Nous ne vendons pas du conseil à l'heure. Quand nous intervenons, c'est pour livrer un résultat concret : un contrat renégocié, un processus implémenté, une économie chiffrée. Si nous n'avons pas d'impact mesurable sur votre P&L, nous avons échoué.",
      commitmentTransferTitle: "Transfert de compétences",
      commitmentTransferText: "Notre objectif n'est pas de revenir chaque année. C'est de rendre vos équipes capables de faire sans nous. Chaque mission inclut un volet formation, des outils transférés, et des processus documentés. Le jour où nous partons, votre organisation est plus forte qu'avant notre arrivée.",
      commitmentConfidentialityTitle: "Confidentialité absolue",
      commitmentConfidentialityText: "Nous connaissons vos prix, vos fournisseurs, vos marges, vos faiblesses. Cette confiance ne se trahit pas. Aucune information n'est réutilisée, même anonymisée. Aucun nom de client n'apparaît sans accord explicite. C'est non négociable."
    }
  },
  en: {
    nav: { home: "Home", conseil: "Consulting", audit: "Audit", formation: "Academy", mediation: "Mediation", about: "The Firm", contact: "Contact" },
    hero: {
      subtitle: "Performance Architect",
      title: "Procurement Performance Engineering",
      description: "Your procurement represents 60 to 80% of your company's revenue. We help you take back control — and turn every euro spent into a performance lever.",
      cta: "Initiate Strategic Audit"
    },
    common: {
      serviceLabel: "Capability",
      moduleLabel: "Module",
      strategyLabel: "Strategy",
      analysisLabel: "Analysis",
      pillarLabel: "Pillar",
      maintenance: "System Maintenance",
      ctaTitle: "Contact"
    },
    services: {
      conseil: {
        title: "Sourcing Engineering",
        lead: "Are your suppliers really the best? Do your contracts actually protect you? Are you paying the right price? If you can't answer these three questions with certainty, it's time to talk.",
        items: ["TCO Optimization", "Design-to-Cost", "Category Strategies", "Make or Buy"],
        descriptions: [
          "The purchase price often represents only 40% of the real cost. Transport, storage, non-quality, administrative costs — these invisible lines erode your margins in silence. We identify them, quantify them and eliminate them. Our clients discover on average 15 to 25% of hidden costs on their main categories.",
          "Specifications are often written by those who will use the product, rarely by those who will pay for it. The result: over-engineered requirements, suppliers billing for unnecessary options, and budgets spiraling out of control. We intervene before the tender to challenge needs and build specifications that generate savings from the very first consultation.",
          "Buying office furniture and negotiating an industrial maintenance contract are not the same job. Yet many companies treat all their categories the same way. We build a purchasing strategy tailored to each category: who to put in competition, when, how, and with what performance targets.",
          "Should you insource or outsource? The answer is never simple and depends on dozens of variables: social costs, dependency risks, internal capacity, confidentiality. We put the numbers on the table so your executive committee makes an informed decision — not a political one."
        ]
      },
      audit: {
        title: "Maturity Audit",
        lead: "You have a feeling you're paying too much but you don't know exactly how much, or where. Your contracts have been sitting for years without renegotiation. Your suppliers dictate their terms because nobody has the time to challenge them. An audit shines a light on everything you can't see — and puts a number on what it's costing you.",
        items: ["360° Diagnosis", "Compliance Audit", "Supplier Performance", "Productivity Mapping"],
        descriptions: [
          "When a CFO calls us, it's usually because they see the spend but not the structure behind it. Who buys what, from whom, at what price, under what contract? In many organizations, nobody has the complete answer. Our diagnosis maps your entire spend in 4 to 8 weeks and delivers a clear picture: where the money goes, who decides, and where the immediate levers are.",
          "Does a contract signed three years ago still protect your business today? Are revision clauses being applied? Are late-delivery penalties being enforced? In 80% of cases, the answer is no. Our audit checks every commitment, identifies legal risks and gives you a pragmatic remediation plan — not a 200-page report.",
          "A strategic supplier that delivers late once is an incident. Three times is a risk to your production. But without tracking tools, nobody notices. We measure the actual performance of your key suppliers — lead times, quality, responsiveness — and give you the data to renegotiate from a position of strength or switch partners with full visibility.",
          "Every audit we have conducted has revealed short-term achievable savings. Not in 18 months, not after a digital transformation — now. Contracts never put to tender, duplicate suppliers, prices never renegotiated since signing. These are direct gains for your EBITDA, and we identify them within the first weeks."
        ]
      },
      formation: {
        title: "Academy Experts",
        lead: "Your buyers know your products. But can they negotiate a €2M contract against a supplier with more experience than them? Can they spot a supplier in financial difficulty before it collapses? We train your teams in the skills that can't be learned from books.",
        items: ["High-Level Negotiation", "Financial Analysis", "Leadership", "Risk Management"],
        descriptions: [
          "Procurement negotiation is not about asking for 5% off. It's about understanding your supplier's cost structure, identifying their constraints, and building an agreement where both parties benefit from long-term collaboration. Our modules are based on real cases from our engagements: 8-figure FM contract negotiations, pan-European logistics rate renegotiations, supplier monopoly situations.",
          "Your main supplier shows a 1% net margin. Is that healthy or alarming? Does their cash flow allow them to survive 6 months of downturn? If your buyer can't read a balance sheet, they're negotiating blind. We teach them to decode a supplier's financials in 30 minutes and draw operational conclusions.",
          "In many companies, procurement is seen as a support function. Buyers endure decisions instead of influencing them. Our leadership modules teach your procurement managers to defend their choices before an executive committee, rally operational teams around a tender project, and make the strategic value of their function recognized.",
          "The semiconductor crisis paralyzed entire industries. The war in Ukraine sent energy costs through the roof. The next shock is unpredictable, but your ability to respond to it is not. We teach a concrete methodology: identify your critical suppliers, assess their risk level, and build backup plans before you need them."
        ]
      },
      mediation: {
        title: "Strategic Mediation",
        lead: "A supplier that stops delivering. A contract that each party interprets differently. A provider threatening to walk out mid-project. Before calling a lawyer, call a mediator. It's faster, cheaper, and it preserves the relationship.",
        items: ["Securing critical relationships", "Supplier conflict resolution", "Master contract renegotiation", "Supply Chain crisis management"],
        descriptions: [
          "You depend on a supplier and the relationship is deteriorating. Emails pile up, meetings turn into blame sessions, deadlines slip. Nobody wants to break up but nobody gives in. We step in as a trusted third party to bring both sides back to the table, clarify expectations, and rebuild a clear framework for collaboration.",
          "A commercial dispute costs on average 18 months and €150K in legal proceedings. A mediation costs 2 to 6 weeks and a fraction of that amount. And most importantly, it results in an agreement both parties accept — not a ruling one of them will contest. We have resolved situations where communications had been broken for months.",
          "Raw materials have gone up 30%. Your supplier is asking for a price revision. You refuse. They threaten to reduce service. This scenario plays out in every industry. We manage these renegotiations: verifying supporting documents, analyzing contractual clauses, building a balanced amendment that protects your interests without pushing the supplier toward the exit.",
          "Your logistics provider goes bankrupt on a Friday evening. Monday morning, 200 employees have no shuttle to get to work. This kind of situation happens — and when it does, you need to act within hours. We mobilize our network to find a replacement provider, secure operational continuity, and manage the supplier crisis exit in parallel."
        ]
      }
    },
    about: {
      title: "The Firm",
      philosophy: "Procurement is not a cost center. It is the hidden engine of your profitability.",
      historyTitle: "Our story",
      historyText: "MBK Procurement was born from a simple observation: companies spend millions with their suppliers, but very few invest in how they buy. Contracts signed in haste, poorly structured tenders, suppliers never challenged — and ultimately, margins eroding without anyone understanding why.",
      historyText2: "After 15 years leading procurement transformations for European groups — from retail to logistics to facility management — we created MBK with one conviction: every company, regardless of size, deserves a procurement function that matches its ambitions.",
      adnTitle: "Strategic Identity",
      adnDescription: "MBK Procurement was born from a conviction: the procurement function is the most underutilized lever of financial performance. We are not a generalist consultancy that does procurement. We are procurement specialists who understand business strategy. Every engagement is led by a senior consultant with over 15 years of operational experience.",
      methodTitle: "Standards of Excellence",
      methodDescription: "Our method combines analytical rigor with field pragmatism. We do not deliver reports that gather dust in a drawer. We deliver measurable results: renegotiated contracts, implemented processes, trained and autonomous teams. Procurement performance is not a promise — it is our success metric.",
      commitmentResultTitle: "Measurable results",
      commitmentResultText: "We don't sell consulting by the hour. When we step in, it's to deliver a concrete result: a renegotiated contract, an implemented process, a quantified saving. If we don't have a measurable impact on your P&L, we have failed.",
      commitmentTransferTitle: "Knowledge transfer",
      commitmentTransferText: "Our goal is not to come back every year. It's to make your teams capable of doing it without us. Every engagement includes a training component, transferred tools, and documented processes. The day we leave, your organization is stronger than before we arrived.",
      commitmentConfidentialityTitle: "Absolute confidentiality",
      commitmentConfidentialityText: "We know your prices, your suppliers, your margins, your weaknesses. That trust is not to be broken. No information is reused, even anonymized. No client name appears without explicit consent. This is non-negotiable."
    }
  }
};
2. Home.jsx — intro Expertise + intro Références mises à jour :

import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';

const Home = () => {
  const { t, language } = useLanguage();

  if (!t || !t.hero) return null;

  return (
    <>
      <SEO
        title="Accueil"
        description="MBK Procurement : Cabinet d'expertise en audit, conseil stratégique, formation et médiation achats. Optimisez votre performance achats et votre EBITDA."
        canonical="https://www.mbkprocurement.com/"
        keywords="cabinet conseil achats, audit procurement, formation négociation, médiation commerciale, optimisation coûts, Paris, Luxembourg"
      />
      <div className="min-h-screen bg-white font-sans">
        <section className="relative h-screen flex items-center bg-[#0A192F] px-8 overflow-hidden">
          <div className="absolute inset-0 opacity-25 grayscale contrast-125">
            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&fm=webp"
              alt="Structure architecturale moderne symbolisant la performance de MBK Procurement"
              fetchpriority="high"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="max-w-7xl mx-auto w-full relative z-10">
            <h1 className="text-5xl md:text-8xl font-serif font-bold text-white mb-10 leading-[1.05] tracking-tighter italic max-w-5xl">
              {t.hero.title}<span className="text-blue-600">.</span>
            </h1>

            <p className="max-w-2xl text-xl text-gray-400 font-light leading-relaxed mb-14 border-l-2 border-blue-600/50 pl-10 italic">
              {t.hero.description}
            </p>

            <Link to="/contact" className="group flex items-center gap-6 bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 text-[11px] font-bold uppercase tracking-[0.3em] transition-all w-fit shadow-2xl">
              {t.hero.cta}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-3 transition-transform duration-500" />
            </Link>
          </div>
        </section>

        <section className="py-32 bg-white px-8 border-t border-gray-100">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="space-y-12">
                <h2 className="text-4xl md:text-6xl !font-serif !font-bold italic tracking-tighter leading-tight text-[#0A192F]">
                  {language === 'fr' ? 'Expertise en Action' : 'Expertise in Action'}<span className="text-blue-600">.</span>
                </h2>
                <p className="text-lg text-gray-500 font-light italic leading-relaxed">
                  {language === 'fr'
                    ? "La plupart des entreprises savent qu'elles dépensent trop. Ce qu'elles ne savent pas, c'est où, pourquoi, et comment y remédier sans désorganiser l'existant. C'est là que nous intervenons. Pas avec des slides — avec des résultats."
                    : "Most companies know they're overspending. What they don't know is where, why, and how to fix it without disrupting what already works. That's where we come in. Not with slides — with results."}
                </p>
                <div className="space-y-8 border-l-2 border-blue-600 pl-8">
                  <h3 className="text-blue-600 text-[10px] font-bold uppercase tracking-[0.3em]">
                    {language === 'fr' ? 'Transformation & Gouvernance' : 'Transformation & Governance'}
                  </h3>
                  <p className="text-xl text-gray-600 font-light leading-relaxed italic">
                    {language === 'fr'
                      ? "Ingénierie d'un département achats complet : catégorisation des familles, structuration des équipes, implémentation de processus cibles et pilotage d'appels d'offres européens stratégiques."
                      : "Engineering of a procurement department: category management, team structuring, process implementation, and strategic European tender management."}
                  </p>
                  <p className="text-gray-500 text-lg font-light italic">
                    {language === 'fr'
                      ? "Définition de la politique achat et revue globale du parc contractuel."
                      : "Definition of procurement policy and global review of the contract portfolio."}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-[#0A192F] p-10 shadow-2xl group hover:-translate-y-2 transition-transform duration-500">
                  <div className="text-blue-500 text-[10px] font-bold tracking-[0.3em] mb-4">COMPLIANCE</div>
                  <div className="text-5xl font-serif italic text-white mb-2">13% <span className="text-blue-600">&rarr;</span> 96%</div>
                  <p className="text-gray-400 text-xs font-light tracking-wide uppercase">
                    {language === 'fr' ? 'Conformité Contractuelle' : 'Contractual Compliance'}
                  </p>
                </div>
                <div className="bg-gray-50 p-10 border border-gray-100 group hover:-translate-y-2 transition-transform duration-500">
                  <div className="text-blue-600 text-[10px] font-bold tracking-[0.3em] mb-4">SAVINGS</div>
                  <div className="text-5xl font-serif italic text-[#0A192F] mb-2">-23%</div>
                  <p className="text-gray-500 text-xs font-light tracking-wide uppercase">
                    {language === 'fr' ? "Sur appels d'offres Européens" : 'On European Tenders'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Références Clients */}
        <section className="py-32 bg-[#0A192F] px-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-20">
              <h2 className="text-4xl md:text-6xl font-serif font-bold italic tracking-tighter text-white mb-6">
                {language === 'fr' ? 'Références' : 'References'}<span className="text-blue-600">.</span>
              </h2>
              <p className="text-gray-500 text-lg font-light italic max-w-3xl">
                {language === 'fr'
                  ? "Nous ne publions pas de témoignages anonymes. Voici les entreprises que nous avons accompagnées, les problèmes qu'elles rencontraient, et ce que nous avons livré."
                  : "We don't publish anonymous testimonials. Here are the companies we have supported, the problems they faced, and what we delivered."}
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-0 border-t border-gray-800">
              <div className="border-r border-b md:border-b-0 border-gray-800 p-10">
                <div className="text-[10px] font-bold text-blue-500 tracking-[0.3em] uppercase mb-3">
                  {language === 'fr' ? 'Appels d\'offres & Contrats' : 'Tenders & Contracts'}
                </div>
                <h3 className="text-3xl font-serif italic font-bold text-white tracking-tight mb-6">
                  Kingfisher
                </h3>
                <p className="text-gray-400 font-light leading-relaxed italic text-sm">
                  {language === 'fr'
                    ? "Management d'appels d'offres européens, gestion contractuelle fournisseurs et pilotage de la performance des contrats Facility Management."
                    : "European tender management, supplier contract management and Facility Management contract performance monitoring."}
                </p>
              </div>

              <div className="border-r border-b md:border-b-0 border-gray-800 p-10">
                <div className="text-[10px] font-bold text-blue-500 tracking-[0.3em] uppercase mb-3">
                  {language === 'fr' ? 'Logistique & Transfert' : 'Logistics & Transfer'}
                </div>
                <h3 className="text-3xl font-serif italic font-bold text-white tracking-tight mb-6">
                  Logista
                </h3>
                <p className="text-gray-400 font-light leading-relaxed italic text-sm">
                  {language === 'fr'
                    ? "Pilotage end-to-end du déménagement d'un site logistique : restitution de l'ancien site, aménagement complet du nouveau jusqu'à son exploitation opérationnelle."
                    : "End-to-end management of a logistics site relocation: handover of the former site, full fit-out of the new facility through to operational launch."}
                </p>
              </div>

              <div className="border-b md:border-b-0 border-gray-800 p-10">
                <div className="text-[10px] font-bold text-blue-500 tracking-[0.3em] uppercase mb-3">
                  {language === 'fr' ? 'Sourcing & Développement' : 'Sourcing & Development'}
                </div>
                <h3 className="text-3xl font-serif italic font-bold text-white tracking-tight mb-6">
                  SBFM
                </h3>
                <p className="text-gray-400 font-light leading-relaxed italic text-sm">
                  {language === 'fr'
                    ? "Sourcing stratégique pour le développement d'un nouveau marché en Europe et identification de sous-traitants spécialisés en Facility Management."
                    : "Strategic sourcing for European market expansion and identification of specialized Facility Management subcontractors."}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 bg-white px-8 border-t border-gray-100">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-serif font-bold italic tracking-tighter text-[#0A192F] mb-6">
              {language === 'fr' ? 'Discutons de votre situation' : "Let's discuss your situation"}<span className="text-blue-600">.</span>
            </h2>
            <p className="text-gray-500 text-lg font-light italic mb-12 max-w-2xl mx-auto">
              {language === 'fr'
                ? "Contactez-nous dès aujourd'hui pour discuter de vos projets"
                : "Contact us today to discuss your projects"}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact" className="group flex items-center justify-center gap-4 bg-[#0A192F] hover:bg-blue-600 text-white px-10 py-5 text-[11px] font-bold uppercase tracking-[0.3em] transition-all shadow-xl">
                {language === 'fr' ? 'Nous contacter' : 'Contact us'}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-500" />
              </Link>
              <button
                onClick={() => window.open('https://koalendar.com/e/meet-with-mbk-procurement', 'koalendar-popup', 'width=800,height=700,scrollbars=yes,resizable=yes')}
                className="flex items-center justify-center gap-4 bg-transparent border-2 border-[#0A192F] text-[#0A192F] hover:bg-[#0A192F] hover:text-white px-10 py-5 text-[11px] font-bold uppercase tracking-[0.3em] transition-all"
              >
                {language === 'fr' ? 'Prendre rendez-vous' : 'Book a meeting'}
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
3. About.jsx — avec "Notre histoire" + engagements réécrits :

import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';

const About = () => {
  const { t, language } = useLanguage();
  const content = t?.about;
  if (!content) return null;

  return (
    <>
      <SEO
        title="Le Cabinet"
        description="MBK Procurement : identité stratégique et standards d'excellence. Cabinet né de la conviction que les achats sont le moteur secret de la rentabilité."
        canonical="https://www.mbkprocurement.com/about"
        keywords="cabinet conseil achats Paris, expertise procurement, consultant achats senior"
      />
      <div className="min-h-screen bg-white font-sans text-[#0A192F]">
        <header className="pt-48 pb-16 px-8 max-w-7xl mx-auto">
          <h1 className="text-6xl md:text-8xl !font-serif !font-bold tracking-tighter italic leading-[0.85]">
            {content.title}<span className="text-blue-600">.</span>
          </h1>
        </header>

        <section className="relative w-full h-[70vh] bg-[#0A192F] overflow-hidden grayscale contrast-125">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&fm=webp&auto=format&fit=crop"
            alt="Structure architecturale solide représentant les fondations et l'expertise stratégique du cabinet MBK Procurement."
            loading="lazy"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 flex items-center justify-center px-8">
            <p className="max-w-4xl text-center text-2xl md:text-5xl !font-serif italic text-white leading-tight">
              "{content.philosophy}"
            </p>
          </div>
        </section>

        {/* Notre histoire */}
        <section className="py-32 px-8 max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl !font-serif !font-bold italic tracking-tighter mb-12">
            {content.historyTitle}<span className="text-blue-600">.</span>
          </h2>
          <div className="grid lg:grid-cols-2 gap-16">
            <p className="text-xl text-gray-500 font-light leading-relaxed italic border-l-2 border-gray-100 pl-8">
              {content.historyText}
            </p>
            <p className="text-xl text-gray-500 font-light leading-relaxed italic border-l-2 border-gray-100 pl-8">
              {content.historyText2}
            </p>
          </div>
        </section>

        <section className="py-32 px-8 max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 border-t border-gray-100">
          <div className="flex flex-col border-t-2 border-[#0A192F] pt-12">
            <h2 className="text-4xl !font-serif !font-bold mb-8 italic tracking-tighter">
              {content.adnTitle}<span className="text-blue-600">.</span>
            </h2>
            <p className="text-xl text-gray-500 font-light leading-relaxed italic border-l-2 border-gray-100 pl-8">
              {content.adnDescription}
            </p>
          </div>
          <div className="flex flex-col border-t-2 border-[#0A192F] pt-12">
            <h2 className="text-4xl !font-serif !font-bold mb-8 italic tracking-tighter">
              {content.methodTitle}<span className="text-blue-600">.</span>
            </h2>
            <p className="text-xl text-gray-500 font-light leading-relaxed italic border-l-2 border-gray-100 pl-8">
              {content.methodDescription}
            </p>
          </div>
        </section>

        {/* Chiffres Clés */}
        <section className="py-24 bg-[#0A192F] px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif font-bold italic tracking-tighter text-white mb-16">
              {language === 'fr' ? 'En chiffres' : 'By the numbers'}<span className="text-blue-600">.</span>
            </h2>
            <div className="grid md:grid-cols-4 gap-0 border-t border-gray-800">
              <div className="border-r border-gray-800 p-10">
                <div className="text-5xl font-serif italic text-white mb-3">15+</div>
                <p className="text-gray-500 text-sm font-light uppercase tracking-wider">
                  {language === 'fr' ? "Années d'expérience" : 'Years of experience'}
                </p>
              </div>
              <div className="border-r border-gray-800 p-10">
                <div className="text-5xl font-serif italic text-white mb-3">50+</div>
                <p className="text-gray-500 text-sm font-light uppercase tracking-wider">
                  {language === 'fr' ? 'Missions réalisées' : 'Completed missions'}
                </p>
              </div>
              <div className="border-r border-gray-800 p-10">
                <div className="text-5xl font-serif italic text-white mb-3">8</div>
                <p className="text-gray-500 text-sm font-light uppercase tracking-wider">
                  {language === 'fr' ? 'Pays couverts' : 'Countries covered'}
                </p>
              </div>
              <div className="p-10">
                <div className="text-5xl font-serif italic text-white mb-3">96%</div>
                <p className="text-gray-500 text-sm font-light uppercase tracking-wider">
                  {language === 'fr' ? 'Conformité atteinte' : 'Compliance achieved'}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Secteurs d'intervention */}
        <section className="py-32 px-8 max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-bold italic tracking-tighter text-[#0A192F] mb-16">
            {language === 'fr' ? "Secteurs d'intervention" : 'Sectors of expertise'}<span className="text-blue-600">.</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-x-24 gap-y-16">
            <div className="border-t-2 border-gray-100 pt-8">
              <h3 className="text-2xl font-serif italic font-bold mb-4 tracking-tight">
                {language === 'fr' ? 'Distribution & Retail' : 'Distribution & Retail'}<span className="text-blue-600">.</span>
              </h3>
              <p className="text-gray-500 font-light italic leading-relaxed">
                {language === 'fr'
                  ? "Optimisation des achats indirects, gestion des appels d'offres multi-pays et pilotage de la performance fournisseurs pour les enseignes de distribution européennes."
                  : "Indirect procurement optimization, multi-country tender management and supplier performance monitoring for European retail chains."}
              </p>
            </div>
            <div className="border-t-2 border-gray-100 pt-8">
              <h3 className="text-2xl font-serif italic font-bold mb-4 tracking-tight">
                {language === 'fr' ? 'Logistique & Supply Chain' : 'Logistics & Supply Chain'}<span className="text-blue-600">.</span>
              </h3>
              <p className="text-gray-500 font-light italic leading-relaxed">
                {language === 'fr'
                  ? "Transfert de sites, sourcing de prestataires logistiques, aménagement d'entrepôts et optimisation des flux de distribution à l'échelle européenne."
                  : "Site relocation, logistics provider sourcing, warehouse fit-out and distribution flow optimization across Europe."}
              </p>
            </div>
            <div className="border-t-2 border-gray-100 pt-8">
              <h3 className="text-2xl font-serif italic font-bold mb-4 tracking-tight">
                Facility Management<span className="text-blue-600">.</span>
              </h3>
              <p className="text-gray-500 font-light italic leading-relaxed">
                {language === 'fr'
                  ? "Structuration et mise en concurrence des contrats FM, suivi de la performance opérationnelle et identification de sous-traitants spécialisés sur les marchés européens."
                  : "FM contract structuring and tendering, operational performance tracking and identification of specialized subcontractors across European markets."}
              </p>
            </div>
            <div className="border-t-2 border-gray-100 pt-8">
              <h3 className="text-2xl font-serif italic font-bold mb-4 tracking-tight">
                {language === 'fr' ? 'Industrie & Production' : 'Industry & Manufacturing'}<span className="text-blue-600">.</span>
              </h3>
              <p className="text-gray-500 font-light italic leading-relaxed">
                {language === 'fr'
                  ? "Sécurisation des chaînes d'approvisionnement critiques, négociation de contrats-cadres et audit de la maturité achats des organisations industrielles."
                  : "Critical supply chain security, framework agreement negotiation and procurement maturity audits for industrial organizations."}
              </p>
            </div>
          </div>
        </section>

        {/* Engagements */}
        <section className="bg-gray-50 py-24 px-8 border-y border-gray-100">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-serif font-bold italic tracking-tighter text-[#0A192F] mb-16">
              {language === 'fr' ? 'Nos engagements' : 'Our commitments'}<span className="text-blue-600">.</span>
            </h2>
            <div className="grid md:grid-cols-3 gap-16">
              <div>
                <h3 className="text-xl font-serif italic font-bold mb-4 tracking-tight">
                  {content.commitmentResultTitle}<span className="text-blue-600">.</span>
                </h3>
                <p className="text-gray-500 font-light italic leading-relaxed">
                  {content.commitmentResultText}
                </p>
              </div>
              <div>
                <h3 className="text-xl font-serif italic font-bold mb-4 tracking-tight">
                  {content.commitmentTransferTitle}<span className="text-blue-600">.</span>
                </h3>
                <p className="text-gray-500 font-light italic leading-relaxed">
                  {content.commitmentTransferText}
                </p>
              </div>
              <div>
                <h3 className="text-xl font-serif italic font-bold mb-4 tracking-tight">
                  {content.commitmentConfidentialityTitle}<span className="text-blue-600">.</span>
                </h3>
                <p className="text-gray-500 font-light italic leading-relaxed">
                  {content.commitmentConfidentialityText}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Citation + CTA */}
        <section className="py-24 bg-[#0A192F] px-8">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-gray-500 text-lg font-light italic leading-relaxed mb-12 max-w-2xl mx-auto">
              {language === 'fr'
                ? "L'excellence opérationnelle n'est pas une option, c'est le socle de notre engagement envers votre EBITDA."
                : "Operational excellence is not an option; it is the foundation of our commitment to your EBITDA."}
            </p>
            <span className="text-5xl !font-serif !font-bold italic tracking-tighter text-white">MBK<span className="text-blue-600">.</span></span>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-16">
              <Link to="/contact" className="group flex items-center justify-center gap-4 bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 text-[11px] font-bold uppercase tracking-[0.3em] transition-all shadow-xl">
                {language === 'fr' ? 'Nous contacter' : 'Contact us'}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-500" />
              </Link>
              <button
                onClick={() => window.open('https://koalendar.com/e/meet-with-mbk-procurement', 'koalendar-popup', 'width=800,height=700,scrollbars=yes,resizable=yes')}
                className="flex items-center justify-center gap-4 bg-transparent border-2 border-gray-700 text-white hover:border-white px-10 py-5 text-[11px] font-bold uppercase tracking-[0.3em] transition-all"
              >
                {language === 'fr' ? 'Prendre rendez-vous' : 'Book a meeting'}
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
