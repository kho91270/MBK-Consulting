import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';
import { Briefcase, ArrowRight, CheckCircle2 } from 'lucide-react';

const Conseil = () => {
  const { t } = useLanguage();

  const benefits = [
    t.hero.title.includes('partenaire') 
      ? 'Accompagnement personnalisé et sur mesure'
      : 'Personalized and tailored support',
    t.hero.title.includes('partenaire')
      ? 'Expertise reconnue et éprouvée'
      : 'Recognized and proven expertise',
    t.hero.title.includes('partenaire')
      ? 'Résultats mesurables et durables'
      : 'Measurable and sustainable results',
    t.hero.title.includes('partenaire')
      ? 'Méthodologie agile et collaborative'
      : 'Agile and collaborative methodology'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-50 to-emerald-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="inline-flex items-center space-x-2 bg-emerald-200 px-4 py-2 rounded-full mb-6">
                <Briefcase className="w-5 h-5 text-emerald-800" />
                <span className="text-emerald-800 font-semibold">{t.services.conseil.title}</span>
              </div>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                {t.services.conseil.title}
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                {t.hero.title.includes('partenaire')
                  ? 'Nous accompagnons votre entreprise dans sa transformation stratégique et opérationnelle pour créer de la valeur durable.'
                  : 'We support your company in its strategic and operational transformation to create sustainable value.'}
              </p>
              <Link to="/contact">
                <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                  {t.hero.cta}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-white rounded-2xl p-8 shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  {t.hero.title.includes('partenaire') ? 'Nos expertises' : 'Our expertise'}
                </h3>
                <ul className="space-y-4">
                  {t.services.conseil.items.map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle2 className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-0.5" />
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
            {t.hero.title.includes('partenaire') ? 'Pourquoi choisir MBK Consulting ?' : 'Why choose MBK Consulting?'}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-gradient-to-br from-emerald-50 to-white p-6 rounded-lg border border-emerald-200 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-xl">{index + 1}</span>
                </div>
                <p className="text-gray-900 font-semibold">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-600 to-emerald-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            {t.hero.title.includes('partenaire') ? 'Discutons de votre projet' : 'Let\'s discuss your project'}
          </h2>
          <p className="text-xl mb-10 text-emerald-100">
            {t.hero.title.includes('partenaire')
              ? 'Notre équipe est prête à vous accompagner dans votre transformation'
              : 'Our team is ready to support you in your transformation'}
          </p>
          <Link to="/contact">
            <Button size="lg" variant="outline" className="bg-white text-emerald-600 hover:bg-gray-100 border-0">
              {t.nav.contact}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Conseil;
