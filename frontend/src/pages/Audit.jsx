import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import SEO from '../components/SEO';

const Audit = () => {
  // Sécurité : on extrait bien t et language
  const { t, language } = useLanguage();
  const a = t.audit;

  return (
    <div className="min-h-screen bg-white pt-32 pb-20 px-6">
      <SEO title={`${t.nav.audit} | MBK Procurement`} />
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-[#0A192F] mb-8">{t.nav.audit}</h1>
        <p className="text-xl text-gray-600 font-light max-w-3xl leading-relaxed italic">
          {a.intro}
        </p>
        <div className="mt-16 grid md:grid-cols-2 gap-12">
            <div className="p-8 border border-gray-100 bg-gray-50">
                <h3 className="font-bold uppercase text-xs tracking-widest text-blue-600 mb-4">
                    {language === 'fr' ? "Diagnostic 360°" : "360° Diagnosis"}
                </h3>
                <p className="text-sm text-gray-500 font-light leading-relaxed">
                    {language === 'fr' ? "Analyse profonde de votre maturité." : "Deep analysis of your procurement maturity."}
                </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Audit;
