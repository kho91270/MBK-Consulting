import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Contact = () => {
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen bg-[#0A192F] text-white pt-48 pb-32 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Label standardisé */}
        <span className="text-blue-500 font-bold tracking-[0.4em] uppercase text-sm mb-8 block">
          {t.common.ctaTitle} // 05
        </span>
        {/* Titre H1 plus équilibré */}
        <h1 className="text-6xl md:text-7xl font-serif font-bold mb-20 tracking-tighter uppercase italic leading-none">
          {t.nav.contact}<span className="text-blue-600">.</span>
        </h1>
        
        <div className="grid lg:grid-cols-2 gap-24">
          <div className="space-y-12">
            <div className="border-l-4 border-blue-600 pl-10 py-6">
              <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-4 font-bold">Email Strategy</h3>
              <a href="mailto:contact@mbkprocurement.com" className="text-2xl md:text-3xl font-light hover:text-blue-400 transition-all">
                contact@mbkprocurement.com
              </a>
            </div>
            {/* Reste des infos... */}
          </div>
          {/* Formulaire... */}
        </div>
      </div>
    </div>
  );
};
