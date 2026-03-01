import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Audit = () => {
  const { t } = useLanguage();
  const content = t?.services?.audit;

  return (
    <div className="min-h-screen bg-[#F8F9FA]">
      <section className="pt-48 pb-20 px-8">
        <div className="max-w-7xl mx-auto border-l border-[#0A192F] pl-12">
          <h1 className="text-5xl md:text-8xl font-serif font-bold text-[#0A192F] mb-12 tracking-tighter">
            {content?.title}
          </h1>
          <p className="text-[11px] uppercase tracking-[0.5em] font-bold text-blue-600 mb-20">Diagnostic de Performance Achats</p>
        </div>
      </section>

      <section className="pb-32 px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-1">
          {content?.items?.map((item, idx) => (
            <div key={idx} className="bg-white p-12 border border-gray-100 hover:shadow-2xl transition-all duration-700">
              <div className="w-8 h-px bg-blue-600 mb-8"></div>
              <p className="text-[#0A192F] font-serif text-xl mb-4 italic">Analysis Point</p>
              <p className="text-gray-500 font-light text-sm leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Audit;
