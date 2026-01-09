import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';
import { HandshakeIcon, ArrowRight, CheckCircle2 } from 'lucide-react';

const Mediation = () => {
  const { t } = useLanguage();

  const benefits = [
    t.hero.title.includes('partenaire')
      ? 'Approche neutre et impartiale'
      : 'Neutral and impartial approach',
    t.hero.title.includes('partenaire')
      ? 'Résolution rapide et efficace'
      : 'Fast and effective resolution',
    t.hero.title.includes('partenaire')
      ? 'Confidentialité absolue garantie'
      : 'Absolute confidentiality guaranteed',
    t.hero.title.includes('partenaire')
      ? 'Préservation des relations'
      : 'Preservation of relationships'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-sky-50 to-sky-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="inline-flex items-center space-x-2 bg-sky-200 px-4 py-2 rounded-full mb-6">
                <HandshakeIcon className="w-5 h-5 text-sky-800" />
                <span className="text-sky-800 font-semibold">{t.services.mediation.title}</span>
              </div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                {t.services.mediation.title}
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                {t.hero.title.includes('partenaire')
                  ? 'Des solutions amiables pour résoudre vos conflits et préserver vos relations professionnelles.'
                  : 'Amicable solutions to resolve your conflicts and preserve your professional relationships.'}
              </p>
              <Link to="/contact">
                <Button size="lg" className="bg-sky-600 hover:bg-sky-700">
                  {t.hero.cta}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  {t.hero.title.includes('partenaire') ? 'Nos services de médiation' : 'Our mediation services'}
                </h3>
                <ul className="space-y-4">
                  {t.services.mediation.items.map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle2 className="w-6 h-6 text-sky-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">
            {t.hero.title.includes('partenaire') ? 'Les avantages de la médiation' : 'The benefits of mediation'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gradient-to-br from-sky-50 to-white p-6 rounded-lg border border-sky-200 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-sky-600 rounded-full flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-xl">{index + 1}</span>
                </div>
                <p className="text-gray-900 font-semibold">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-sky-600 to-sky-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            {t.hero.title.includes('partenaire') ? 'Trouvons une solution ensemble' : 'Let\'s find a solution together'}
          </h2>
          <p className="text-xl mb-10 text-sky-100">
            {t.hero.title.includes('partenaire')
              ? 'Nos médiateurs certifiés vous aident à résoudre vos différends de manière constructive'
              : 'Our certified mediators help you resolve your disputes constructively'}
          </p>
          <Link to="/contact">
            <Button size="lg" variant="outline" className="bg-white text-sky-600 hover:bg-gray-100 border-0">
              {t.nav.contact}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Mediation;
