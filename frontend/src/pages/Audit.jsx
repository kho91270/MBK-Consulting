import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';
import { FileSearch, ArrowRight, CheckCircle2 } from 'lucide-react';

const Audit = () => {
  const { t } = useLanguage();

  const benefits = [
    {
      title: t.hero.title.includes('partenaire')
        ? 'Méthodologie rigoureuse'
        : 'Rigorous methodology',
      description: t.hero.title.includes('partenaire')
        ? 'Une approche structurée basée sur les meilleures pratiques'
        : 'A structured approach based on best practices'
    },
    {
      title: t.hero.title.includes('partenaire')
        ? 'Analyse approfondie'
        : 'In-depth analysis',
      description: t.hero.title.includes('partenaire')
        ? 'Un diagnostic complet et objectif de vos processus'
        : 'A complete and objective diagnosis of your processes'
    },
    {
      title: t.hero.title.includes('partenaire')
        ? 'Recommandations concrètes'
        : 'Concrete recommendations',
      description: t.hero.title.includes('partenaire')
        ? 'Des plans d\'action prioritisés et opérationnels'
        : 'Prioritized and operational action plans'
    },
    {
      title: t.hero.title.includes('partenaire')
        ? 'Conformité garantie'
        : 'Guaranteed compliance',
      description: t.hero.title.includes('partenaire')
        ? 'Une mise en conformité avec les normes réglementaires'
        : 'Compliance with regulatory standards'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-rose-600 to-rose-800 py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1753955900083-b62ee8d97805?w=1920&q=80" 
            alt="Audit professionnel"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 text-white">
              <div className="inline-flex items-center space-x-2 bg-rose-500 px-4 py-2 rounded-full mb-6">
                <FileSearch className="w-5 h-5" />
                <span className="font-semibold">{t.services.audit.title}</span>
              </div>
              <h1 className="text-5xl font-bold mb-6">
                {t.services.audit.title}
              </h1>
              <p className="text-xl mb-8 leading-relaxed text-rose-50">
                {t.hero.title.includes('partenaire')
                  ? 'Des audits complets pour évaluer, améliorer et sécuriser vos processus et organisations.'
                  : 'Comprehensive audits to assess, improve and secure your processes and organizations.'}
              </p>
              <Link to="/contact">
                <Button size="lg" className="bg-white text-rose-600 hover:bg-gray-100">
                  {t.hero.cta}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-white rounded-2xl p-8 shadow-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  {t.hero.title.includes('propos') ? 'Nos services d\'audit' : 'Nos services d\'audit'}
                </h3>
                <ul className="space-y-4">
                  {t.services.audit.items.map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle2 className="w-6 h-6 text-rose-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <img 
              src="https://images.pexels.com/photos/267415/pexels-photo-267415.jpeg?w=800&q=80" 
              alt="Analyse de données"
              className="rounded-lg shadow-lg w-full h-64 object-cover"
            />
            <img 
              src="https://images.pexels.com/photos/7111590/pexels-photo-7111590.jpeg?w=800&q=80" 
              alt="Travail d'audit"
              className="rounded-lg shadow-lg w-full h-64 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-6">
            {t.hero.title.includes('partenaire') ? 'Les avantages de nos audits' : 'The benefits of our audits'}
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            {t.hero.title.includes('partenaire')
              ? 'Une approche systématique pour identifier les risques et opportunités d\'amélioration'
              : 'A systematic approach to identify risks and improvement opportunities'}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-12 h-12 bg-rose-600 rounded-full flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-xl">{index + 1}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-rose-600 to-rose-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            {t.hero.title.includes('partenaire') ? 'Planifiez votre audit' : 'Schedule your audit'}
          </h2>
          <p className="text-xl mb-10 text-rose-100">
            {t.hero.title.includes('partenaire')
              ? 'Nos experts sont à votre disposition pour réaliser un audit adapté à vos besoins'
              : 'Our experts are at your disposal to carry out an audit adapted to your needs'}
          </p>
          <Link to="/contact">
            <Button size="lg" variant="outline" className="bg-white text-rose-600 hover:bg-gray-100 border-0">
              {t.nav.contact}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Audit;
