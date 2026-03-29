import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { TrendingUp, Users, Target, ArrowRight } from 'lucide-react';
import SEO from '../components/SEO';

const CaseStudies = () => {
  const { language } = useLanguage();

  const cases = [
    {
      id: 1,
      client: language === 'fr' ? 'Groupe Industriel International' : 'International Industrial Group',
      sector: language === 'fr' ? 'Industrie' : 'Industry',
      challenge: language === 'fr'
        ? 'Optimiser la supply chain et réduire les coûts d\'approvisionnement'
        : 'Optimize supply chain and reduce procurement costs',
      solution: language === 'fr'
        ? 'Audit complet, négociation fournisseurs, digitalisation des processus'
        : 'Complete audit, supplier negotiation, process digitalization',
      results: [
        { icon: TrendingUp, value: '€2.3M', label: language === 'fr' ? 'économisés' : 'saved' },
        { icon: Users, value: '45%', label: language === 'fr' ? 'gain de temps' : 'time saved' },
        { icon: Target, value: '12', label: language === 'fr' ? 'mois' : 'months' }
      ]
    },
    {
      id: 2,
      client: language === 'fr' ? 'Entreprise Technologique' : 'Technology Company',
      sector: 'Tech',
      challenge: language === 'fr'
        ? 'Structurer la fonction achats inexistante'
        : 'Structure non-existent procurement function',
      solution: language === 'fr'
        ? 'Création département achats, formation équipes, mise en place outils'
        : 'Create procurement department, train teams, implement tools',
      results: [
        { icon: TrendingUp, value: '€850K', label: language === 'fr' ? 'économisés' : 'saved' },
        { icon: Users, value: '100%', label: language === 'fr' ? 'conformité' : 'compliance' },
        { icon: Target, value: '6', label: language === 'fr' ? 'mois' : 'months' }
      ]
    },
    {
      id: 3,
      client: language === 'fr' ? 'Groupe Retail Européen' : 'European Retail Group',
      sector: 'Retail',
      challenge: language === 'fr'
        ? 'Harmoniser les achats multi-pays'
        : 'Harmonize multi-country procurement',
      solution: language === 'fr'
        ? 'Stratégie globale, contrats-cadres, centralisation des achats'
        : 'Global strategy, framework agreements, procurement centralization',
      results: [
        { icon: TrendingUp, value: '€4.1M', label: language === 'fr' ? 'économisés' : 'saved' },
        { icon: Users, value: '8', label: language === 'fr' ? 'pays' : 'countries' },
        { icon: Target, value: '18', label: language === 'fr' ? 'mois' : 'months' }
      ]
    }
  ];

  return (
       <>
    <SEO
      title="Cas Clients"
      description="Découvrez nos cas clients : €2.3M économisés, conformité contractuelle de 13% à 96%, harmonisation achats multi-pays. Résultats concrets et mesurables."
      canonical="https://www.mbkprocurement.com/case-studies"
      keywords="cas client procurement, résultats audit achats, économies achats, ROI consultant"
    />
    <div className="min-h-screen bg-white font-sans text-[#0A192F]">

      {/* HEADER */}
      <header className="pt-48 pb-20 px-8 max-w-7xl mx-auto">
        <h1 className="text-5xl md:text-8xl !font-serif !font-bold tracking-tighter leading-[0.9] !italic mb-10">
          {language === 'fr' ? 'Cas Clients' : 'Case Studies'}<span className="text-blue-600">.</span>
        </h1>
        <p className="max-w-4xl text-xl md:text-2xl text-gray-500 font-light leading-relaxed !italic border-l-4 border-blue-50 pl-10">
          {language === 'fr'
            ? 'Résultats concrets. Impact mesurable. Excellence délivrée.'
            : 'Concrete results. Measurable impact. Excellence delivered.'}
        </p>
      </header>

      {/* IMAGE SECTION */}
      <section className="relative w-full h-[65vh] bg-[#0A192F] overflow-hidden grayscale contrast-125 border-y border-gray-100">
        <img
          src="https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=2000"
          alt={language === 'fr'
            ? 'Collaboration professionnelle illustrant les cas clients de MBK Procurement'
            : 'Professional collaboration illustrating MBK Procurement case studies'}
          className="w-full h-full object-cover object-center opacity-60 scale-105 hover:scale-100 transition-transform duration-[4000ms] ease-out"
          onError={(e) => {
            e.target.src = 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2000';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-40"></div>
      </section>

      {/* CASE STUDIES */}
      <section className="py-32 px-8 max-w-7xl mx-auto">
        <div className="space-y-32">
          {cases.map((caseItem, index) => (
            <div key={caseItem.id} className="border-t-2 border-gray-100 pt-16 group hover:border-blue-600 transition-colors duration-700">

              {/* CASE HEADER */}
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-12 gap-4">
                <div>
                  <span className="text-blue-600 text-[10px] font-bold uppercase tracking-[0.3em] block mb-4">
                    {caseItem.sector}
                  </span>
                  <h2 className="text-3xl md:text-5xl !font-serif !font-bold !italic tracking-tighter leading-tight">
                    {caseItem.client}<span className="text-blue-600">.</span>
                  </h2>
                </div>
                <span className="text-gray-200 text-7xl md:text-9xl !font-serif !italic leading-none">
                  0{index + 1}
                </span>
              </div>

              {/* CHALLENGE & SOLUTION */}
              <div className="grid md:grid-cols-2 gap-16 mb-16">
                <div className="border-l-2 border-blue-50 pl-8">
                  <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-600 mb-4">
                    {language === 'fr' ? 'Défi' : 'Challenge'}
                  </h3>
                  <p className="text-xl text-gray-500 font-light leading-relaxed !italic">
                    {caseItem.challenge}
                  </p>
                </div>
                <div className="border-l-2 border-blue-50 pl-8">
                  <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-blue-600 mb-4">
                    Solution
                  </h3>
                  <p className="text-xl text-gray-500 font-light leading-relaxed !italic">
                    {caseItem.solution}
                  </p>
                </div>
              </div>

              {/* KPI RESULTS */}
              <div className="grid grid-cols-3 gap-8">
                {caseItem.results.map((result, idx) => (
                  <div key={idx} className={`p-8 ${idx === 0 ? 'bg-[#0A192F]' : 'bg-gray-50 border border-gray-100'} group/card hover:-translate-y-2 transition-transform duration-500`}>
                    <result.icon className={`w-5 h-5 mb-4 ${idx === 0 ? 'text-blue-500' : 'text-blue-600'}`} />
                    <div className={`text-4xl md:text-5xl !font-serif !italic mb-2 ${idx === 0 ? 'text-white' : 'text-[#0A192F]'}`}>
                      {result.value}
                    </div>
                    <div className={`text-xs font-light uppercase tracking-wider ${idx === 0 ? 'text-gray-400' : 'text-gray-500'}`}>
                      {result.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 py-24 px-8 border-y border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <div>
            <h2 className="text-4xl md:text-5xl !font-serif !font-bold !italic tracking-tighter mb-4">
              {language === 'fr' ? 'Prêt à transformer vos achats' : 'Ready to transform your procurement'}<span className="text-blue-600"> ?</span>
            </h2>
            <p className="text-gray-500 text-lg font-light !italic">
              {language === 'fr'
                ? 'Discutons de votre projet et construisons ensemble votre trajectoire.'
                : 'Let\'s discuss your project and build your trajectory together.'}
            </p>
          </div>
          <Link
            to="/contact"
            className="group flex items-center gap-4 px-10 py-5 bg-[#0A192F] text-white text-[11px] font-bold uppercase tracking-[0.3em] hover:bg-blue-600 transition-colors duration-300 whitespace-nowrap"
          >
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
