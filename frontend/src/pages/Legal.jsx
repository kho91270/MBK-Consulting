import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Legal = () => {
  const { t, language } = useLanguage();
  const l = t.legal;
  return (
    <div className="pt-40 pb-20 px-6 max-w-4xl mx-auto min-h-screen font-light">
      <h1 className="text-3xl font-serif font-bold mb-10">{l.title}</h1>
      <div className="space-y-8">
        <section>
          <h2 className="font-bold text-blue-600 uppercase text-xs mb-2">Éditeur</h2>
          <p>{l.editorDesc}</p>
          <p className="font-bold mt-2">{l.registration}</p>
        </section>
      </div>
    </div>
  );
};
export default Legal;
