import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import SEO from '../components/SEO';

const Conseil = () => {
  // Extraction sécurisée pour éviter le bug d'affichage
  const { t, language } = useLanguage();
  const content = t.conseil;

  return (
    <div className="pt-32 pb-20 px-6 min-h-screen">
      <SEO title={`${t.nav.conseil} | MBK`} />
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-[#0A192F] mb-8">
          {t.nav.conseil}
        </h1>
        <p className="text-xl text-gray-600 font-light max-w-3xl leading-relaxed">
          {content.intro}
        </p>
        {/* Ajoute ici tes sections de contenu spécifiques au conseil */}
      </div>
    </div>
  );
};

export default Conseil;
