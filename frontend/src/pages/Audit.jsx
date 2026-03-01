import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import SEO from '../components/SEO';

const Audit = () => {
  const { t, language } = useLanguage();
  const content = t?.audit || {};

  return (
    <div className="min-h-screen bg-white pt-32 pb-20 px-6">
      <SEO title={`${t?.nav?.audit || 'Audit'} | MBK`} />
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-[#0A192F] mb-8">
          {t?.nav?.audit}
        </h1>
        <p className="text-xl text-gray-600 font-light max-w-3xl leading-relaxed italic border-l-4 border-blue-600 pl-6">
          {content?.intro || (language === 'fr' ? "Analyse de performance en cours..." : "Performance analysis in progress...")}
        </p>
      </div>
    </div>
  );
};

export default Audit;
