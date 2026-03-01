import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import SEO from '../components/SEO';

const Privacy = () => {
  const { t } = useLanguage();
  const p = t.privacy;

  return (
    <div className="min-h-screen bg-white pt-32 pb-20">
      <SEO title={p.title} />
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-4xl font-serif font-bold text-[#0A192F] mb-8">{p.title}</h1>
        <p className="text-gray-600 mb-12 italic">{p.intro}</p>
        
        <div className="space-y-12">
          <section>
            <h2 className="text-xl font-bold uppercase tracking-widest text-blue-600 mb-4">{p.dataTitle}</h2>
            <p className="text-gray-700 leading-relaxed font-light">{p.dataDesc}</p>
          </section>

          <section>
            <h2 className="text-xl font-bold uppercase tracking-widest text-blue-600 mb-4">{p.rightsTitle}</h2>
            <p className="text-gray-700 leading-relaxed font-light">{p.rightsDesc}</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
