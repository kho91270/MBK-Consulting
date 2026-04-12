import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';

const CaseStudies = () => {
  const { language } = useLanguage();

  const cases = [
    {
      id: 1,
      client: 'Kingfisher',
      sector: language === 'fr' ? 'Distribution & Retail' : 'Distribution & Retail',
      context: language === 'fr'
        ? "Groupe international de distribution spécialisée, présent dans plusieurs pays européens. La direction générale constatait un manque de visibilité sur la performance réelle de ses contrats Facility Management et une absence de pilotage structuré de ses fournisseurs stratégiques."
        : "International specialist retail group operating across several European countries. Senior management identified a lack of visibility on the actual performance of its Facility Management contracts and the absence of structured management of strategic suppliers.",
      mission: language === 'fr'
        ? "Prise en charge du management des appels d'offres européens sur les catégories Facility Management. Structuration de la gestion contractuelle fournisseurs : revue du parc de contrats, mise en place d'indicateurs de performance, pilotage des SLA et suivi de la conformité contractuelle. Accompagnement des équipes internes dans la conduite des négociations et la sécurisation des engagements."
        : "Management of European tenders across Facility Management categories. Structuring of supplier contract management: contract portfolio review, implementation of performance indicators, SLA monitoring and contractual compliance tracking. Support for internal teams in conducting negotiations and securing commitments.",
      results: [
        { value: '13% → 96%', label: language === 'fr' ? 'Conformité contractuelle' : 'Contractual compliance' },
        { value: '-23%', label: language === 'fr' ? "Sur appels d'offres européens" : 'On European tenders' },
        { value: '100%', label: language === 'fr' ? 'Couverture contractuelle FM' : 'FM contract coverage' }
      ]
    },
    {
      id: 2,
      client: 'Logista',
      sector: language === 'fr' ? 'Logistique & Distribution' : 'Logistics & Distribution',
      context: language === 'fr'
        ? "Leader européen de la distribution de proximité, Logista devait transférer l'ensemble de ses opérations logistiques d'un site historique vers un nouveau bâtiment. L'enjeu : assurer la continuité d'exploitation sans rupture de service, tout en respectant un calendrier serré et un budget contraint."
        : "European leader in proximity distribution, Logista needed to relocate its entire logistics operations from a legacy site to a new facility. The challenge: ensuring operational continuity without service disruption, while meeting a tight schedule and constrained budget.",
      mission: language === 'fr'
        ? "Pilotage end-to-end du projet de déménagement : coordination des prestataires de déménagement industriel, supervision de la restitution de l'ancien site aux normes contractuelles, sourcing et sélection des entreprises d'aménagement du nouveau bâtiment. Suivi de l'installation complète — du gros œuvre aux postes de travail — jusqu'à la validation de la mise en exploitation opérationnelle."
        : "End-to-end project management of the relocation: coordination of industrial moving contractors, supervision of former site handover to contractual standards, sourcing and selection of fit-out companies for the new building. Oversight of complete installation — from structural works to workstations — through to operational go-live validation.",
      results: [
        { value: '0', label: language === 'fr' ? "Jours d'interruption" : 'Days of disruption' },
        { value: '100%', label: language === 'fr' ? 'Délais respectés' : 'On-time delivery' },
        { value: language === 'fr' ? 'Budget maîtrisé' : 'Budget controlled', label: language === 'fr' ? 'Aucun dépassement' : 'No overrun' }
      ]
    },
    {
      id: 3,
      client: 'SBFM',
      sector: 'Facility Management',
      context: language === 'fr'
        ? "Acteur reconnu du Facility Management au Royaume-Uni, SBFM souhaitait accélérer son développement sur le marché européen continental. L'entreprise ne disposait pas du réseau de sous-traitants nécessaire pour répondre aux exigences locales de ses futurs clients grands comptes en Europe."
        : "An established Facility Management provider in the United Kingdom, SBFM sought to accelerate its expansion into the continental European market. The company lacked the subcontractor network required to meet the local requirements of its future enterprise clients in Europe.",
      mission: language === 'fr'
        ? "Sourcing stratégique de sous-traitants spécialisés en Facility Management sur les marchés cibles européens. Qualification des prestataires selon les standards de qualité, de conformité et de capacité opérationnelle requis. Constitution d'un panel fournisseurs opérationnel permettant à SBFM de répondre immédiatement aux appels d'offres européens avec une couverture locale crédible."
        : "Strategic sourcing of specialized Facility Management subcontractors across target European markets. Qualification of providers against required quality, compliance and operational capacity standards. Building of an operational supplier panel enabling SBFM to immediately respond to European tenders with credible local coverage.",
      results: [
        { value: '5', label: language === 'fr' ? 'Marchés européens ouverts' : 'European markets opened' },
        { value: '30+', label: language === 'fr' ? 'Sous-traitants qualifiés' : 'Qualified subcontractors' },
        { value: language === 'fr' ? 'Opérationnel' : 'Operational', label: language === 'fr' ? 'Panel actif en 4 mois' : 'Panel live in 4 months' }
      ]
    }
  ];

  return (
    <>
      <SEO
        title="Cas Clients"
        description="Découvrez nos cas clients : conformité contractuelle de 13% à 96%, déménagement logistique sans interruption, sourcing européen en Facility Management. Résultats concrets."
        canonical="https://www.mbkprocurement.com/case-studies"
        keywords="cas client procurement, résultats audit achats, économies achats, ROI consultant, appels offres européens, facility management"
      />
      <div className="min-h-screen bg-white font-sans text-[#0A192F]">
        <header className="pt-48 pb-20 px-8 max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-8xl !font-serif !font-bold tracking-tighter leading-[0.9] !italic mb-10">
            {language === 'fr' ? 'Cas Clients' : 'Case Studies'}<span className="text-blue-600">.</span>
          </h1>
          <p className="max-w-4xl text-xl md:text-2xl text-gray-500 font-light leading-relaxed !italic border-l-4 border-blue-50 pl-10">
            {language === 'fr'
              ? "Chaque mission part d'un problème réel. Voici comment nous l'avons résolu."
              : 'Every mission starts with a real problem. Here is how we solved it.'}
          </p>
        </header>

        <section className="relative w-full h-[65vh] bg-[#0A192F] overflow-hidden grayscale contrast-125 border-y border-gray-100">
          <img
            src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2000&fm=webp"
            alt={language === 'fr' ? 'Collaboration professionnelle illustrant les cas clients de MBK Procurement' : 'Professional collaboration illustrating MBK Procurement case studies'}
            loading="lazy"
            className="w-full h-full object-cover object-center opacity-60 scale-105 hover:scale-100 transition-transform duration-[4000ms] ease-out"
            onError={(e) => {
              e.target.src = 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2000&fm=webp';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-40"></div>
        </section>

        <section className="py-32 px-8 max-w-7xl mx-auto">
          <div className="space-y-32">
            {cases.map((caseItem, index) => (
              <div key={caseItem.id} className="border-t-2 border-gray-100 pt-16 group hover:border-blue-600 transition-colors duration-700">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-12 gap-4">
                  <div>
                    <span className="text-blue-600 text-[10px] font-bold uppercase tracking-[0.3em] block mb-4">{caseItem.sector}</span>
                    <h2 className="text-3xl md:text-5xl !font-serif !font-bold !italic tracking-tighter leading-tight">
                      {caseItem.client}<span className="text-blue-600">.</span>
                    </h2>
                  </div>
                  <span className="text-gray-200 text-7xl md:text-9xl !font-serif !italic leading-none">0{index + 1}</span>
                </div>

                <div className="grid md:grid-cols-2 gap-16 mb-16">
                  <div className="border-l-2 border-blue-50 pl-8">
                    <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-600 mb-4">{language === 'fr' ? 'Contexte' : 'Context'}</h3>
                    <p className="text-lg text-gray-500 font-light leading-relaxed !italic">{caseItem.context}</p>
                  </div>
                  <div className="border-l-2 border-blue-50 pl-8">
                    <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-600 mb-4">Mission</h3>
                    <p className="text-lg text-gray-500 font-light leading-relaxed !italic">{caseItem.mission}</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-8">
                  {caseItem.results.map((result, idx) => (
                    <div key={idx} className={`p-8 ${idx === 0 ? 'bg-[#0A192F]' : 'bg-gray-50 border border-gray-100'} hover:-translate-y-2 transition-transform duration-500`}>
                      <div className={`text-4xl md:text-5xl !font-serif !italic mb-2 ${idx === 0 ? 'text-white' : 'text-[#0A192F]'}`}>{result.value}</div>
                      <div className={`text-xs font-light uppercase tracking-wider ${idx === 0 ? 'text-gray-400' : 'text-gray-500'}`}>{result.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-gray-50 py-24 px-8 border-y border-gray-100">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
            <div>
              <h2 className="text-4xl md:text-5xl !font-serif !font-bold !italic tracking-tighter mb-4">
                {language === 'fr' ? 'Un projet, un enjeu achats' : 'A project, a procurement challenge'}<span className="text-blue-600"> ?</span>
              </h2>
              <p className="text-gray-500 text-lg font-light !italic">
                {language === 'fr' ? "Parlons-en. Chaque situation mérite une réponse sur mesure." : "Let's talk. Every situation deserves a tailored response."}
              </p>
            </div>
            <Link to="/contact" className="group flex items-center gap-4 px-10 py-5 bg-[#0A192F] text-white text-[11px] font-bold uppercase tracking-[0.3em] hover:bg-blue-600 transition-colors duration-300 whitespace-nowrap">
              {language === 'fr' ? 'Nous contacter' : 'Contact us'}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-500" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default CaseStudies;
