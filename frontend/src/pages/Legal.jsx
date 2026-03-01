import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import SEO from '../components/SEO';

const Legal = () => {
  const { t } = useLanguage();
  const l = t.legal;
  return (
    <div className="min-h-screen bg-white pt-32 pb-20 px-6">
      <SEO title={`${l.title} | MBK Procurement`} />
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-serif font-bold text-[#0A192F] mb-12 border-b pb-6">{l.title}</h1>
        <div className="space-y-8 text-gray-700 font-light">
          <section>
            <h2 className="text-xs font-bold uppercase text-blue-600 mb-2">Éditeur</h2>
            <p>{l.editorDesc}</p>
            <p className="font-bold mt-2">{l.registration}</p>
          </section>
          <section>
            <h2 className="text-xs font-bold uppercase text-blue-600 mb-2">Hébergement</h2>
            <p>{l.hostingDesc}</p>
          </section>
        </div>
      </div>
    </div>
  );
};
export default Legal;
