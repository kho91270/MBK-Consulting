import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { TrendingUp, Users, Target } from 'lucide-react';

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
    <div className="min-h-screen bg-black text-white">
      {/* HERO */}
      <div className="text-center py-20 px-6 border-b border-gray-900">
        <h1 className="text-7xl font-serif italic font-bold mb-6">
          {language === 'fr' ? 'Cas Clients' : 'Case Studies'}.
        </h1>
        <p className="text-gray-400 text-xl max-w-2xl mx-auto">
          {language === 'fr'
            ? 'Résultats concrets. Impact mesurable. Excellence délivrée.'
            : 'Concrete results. Measurable impact. Excellence delivered.'}
        </p>
      </div>

      {/* CASES */}
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="space-y-16">
          {cases.map((caseItem, index) => (
            <div 
              key={caseItem.id}
              className="border border-gray-900 p-8 hover:border-gray-700 transition-all duration-300"
            >
              {/* HEADER */}
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-3xl font-serif italic mb-2">{caseItem.client}</h2>
                  <span className="text-sm text-gray-600 uppercase tracking-wider">{caseItem.sector}</span>
                </div>
                <span className="text-gray-700 text-5xl font-serif">0{index + 1}</span>
              </div>

              {/* CONTENT */}
              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-white font-medium mb-2 uppercase text-sm tracking-wider">
                    {language === 'fr' ? 'Défi' : 'Challenge'}
                  </h3>
                  <p className="text-gray-400">{caseItem.challenge}</p>
                </div>
                <div>
                  <h3 className="text-white font-medium mb-2 uppercase text-sm tracking-wider">
                    Solution
                  </h3>
                  <p className="text-gray-400">{caseItem.solution}</p>
                </div>
              </div>

              {/* RESULTS */}
              <div className="border-t border-gray-900 pt-6">
                <h3 className="text-white font-medium mb-4 uppercase text-sm tracking-wider">
                  {language === 'fr' ? 'Résultats' : 'Results'}
                </h3>
                <div className="grid grid-cols-3 gap-6">
                  {caseItem.results.map((result, idx) => (
                    <div key={idx} className="text-center">
                      <result.icon className="w-6 h-6 text-gray-600 mx-auto mb-2" />
                      <div className="text-3xl font-serif italic text-white mb-1">{result.value}</div>
                      <div className="text-xs text-gray-600 uppercase tracking-wider">{result.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="border-t border-gray-900 py-20 text-center">
        <h2 className="text-4xl font-serif italic mb-6">
          {language === 'fr' ? 'Prêt à transformer vos achats ?' : 'Ready to transform your procurement?'}
        </h2>
        <a 
          href="/contact"
          className="inline-block px-8 py-4 border border-gray-700 hover:border-white transition-all duration-300"
        >
          {language === 'fr' ? 'Discutons de votre projet' : 'Let\'s discuss your project'}
        </a>
      </div>
    </div>
  );
};

export default CaseStudies;
