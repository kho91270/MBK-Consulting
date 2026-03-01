import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import SEO from '../components/SEO';

const Formation = () => {
  const { t, language } = useLanguage();
  
  // Sécurité : si t.formation n'existe pas, on crée un objet vide {}
  const content = t?.formation || {};

  return (
    <div className="min-h-screen bg-white pt-32 pb-20 px-6">
      <SEO title={`${t?.nav?.formation || 'Formation'} | MBK`} />
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-[#0A192F] mb-8">
          {t?.nav?.formation}
        </h1>
        <div className="bg-[#0A192F] p-12 text-white shadow-2xl">
          <p className="text-xl font-light italic leading-relaxed">
            {content?.intro || (language === 'fr' ? "Contenu en cours de rédaction..." : "Content coming soon...")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Formation;
