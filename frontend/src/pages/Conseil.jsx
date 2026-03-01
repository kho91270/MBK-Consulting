import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Conseil = () => {
  const { t } = useLanguage();
  const content = t?.services?.conseil;

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-[#0A192F] pt-48 pb-32 text-white px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl md:text-8xl font-serif font-bold mb-12 leading-[0.9] tracking-tighter">
            {content?.title}
          </h1>
          <div className="h-px w-full bg-white/10 mb-12"></div>
          <p className="max-w-3xl text-xl text-gray-400 font-light leading-relaxed">
            {t?.hero?.description}
          </p>
        </div>
      </section>

      <section className="py-32 px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-20">
          <div className="lg:col-span-4">
            <h2 className="text-[11px] uppercase tracking-[0.5em] font-bold text-blue-600 mb-6">Expertise Focus</h2>
            <p className="text-2xl font-serif text-[#0A192F] leading-tight italic">
              "Redéfinir la structure des coûts par l'excellence opérationnelle."
            </p>
          </div>
          <div className="lg:col-span-8 grid md:grid-cols-2 gap-12">
            {content?.items?.map((item, idx) => (
              <div key={idx} className="border-t border-gray-100 pt-8 group">
                <span className="text-[10px] text-gray-400 font-mono mb-4 block">0{idx + 1} //</span>
                <p className="text-[#0A192F] text-lg font-light leading-snug group-hover:pl-4 transition-all duration-500 border-blue-600 hover:border-l-2">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Conseil;
