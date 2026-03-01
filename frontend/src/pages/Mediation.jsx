import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import SEO from '../components/SEO';

const Mediation = () => {
  const { t, language } = useLanguage();
  const content = t?.mediation || {};

  return (
    <div className="min-h-screen bg-white pt-32 pb-20 px-6">
      <SEO title={`${t?.nav?.mediation || 'Médiation'} | MBK`} />
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-[#0A192F] mb-8">
          {t?.nav?.mediation}
        </h1>
        <p className="text-xl text-gray-600 font-light max-w-3xl leading-relaxed italic">
          {content?.intro || (language === 'fr' ? "Résolution de litiges..." : "Dispute resolution...")}
        </p>
      </div>
    </div>
  );
};

export default Mediation;
