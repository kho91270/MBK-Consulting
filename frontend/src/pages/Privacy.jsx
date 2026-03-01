import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Privacy = () => {
  const { t, language } = useLanguage();
  const p = t.privacy;
  return (
    <div className="pt-40 pb-20 px-6 max-w-4xl mx-auto min-h-screen font-light">
      <h1 className="text-3xl font-serif font-bold mb-10">{p.title}</h1>
      <div className="bg-blue-50 p-6 border-l-4 border-blue-600 mb-8">
        <p className="italic text-sm">{p.intro}</p>
      </div>
      <section>
        <h2 className="font-bold uppercase text-xs mb-4">{p.dataTitle}</h2>
        <p className="text-sm leading-relaxed">{p.dataDesc}</p>
      </section>
    </div>
  );
};
export default Privacy;
