import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import SEO from '../components/SEO';

const Legal = () => {
  const { t } = useLanguage();
  const l = t.legal;

  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <SEO title={`${l.title} | MBK Procurement`} />
      
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="text-4xl font-serif font-bold text-[#0A192F] mb-12 border-b border-gray-100 pb-6">
          {l.title}
        </h1>

        <div className="space-y-12">
          {/* SECTION ÉDITEUR */}
          <section>
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-blue-600 mb-4">
              {l.editorTitle}
            </h2>
            <p className="text-gray-700 leading-relaxed font-light">
              {l.editorDesc}
            </p>
            <p className="text-gray-900 font-bold mt-2">
              {l.registration}
            </p>
          </section>

          {/* SECTION HÉBERGEMENT */}
          <section>
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-blue-600 mb-4">
              {l.hostingTitle}
            </h2>
            <p className="text-gray-700 leading-relaxed font-light">
              {l.hostingDesc}
            </p>
          </section>

          {/* SECTION CONTACT */}
          <section>
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-blue-600 mb-4">
              {l.contactTitle}
            </h2>
            <p className="text-gray-700 leading-relaxed font-light">
              {l.contactDesc}
            </p>
          </section>

          {/* PROPRIÉTÉ INTELLECTUELLE */}
          <section className="pt-8 border-t border-gray-100">
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-blue-600 mb-4">
              Copyright
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed font-light italic">
              {t.common.ctaTitle.includes('Libérez') 
                ? "Toute reproduction ou représentation, intégrale ou partielle, du contenu de ce site est interdite sans autorisation préalable."
                : "Any reproduction or representation, in whole or in part, of the content of this site is prohibited without prior authorization."}
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Legal;
