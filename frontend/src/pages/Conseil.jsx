import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Conseil = () => {
  const { t } = useLanguage();
  const content = t?.services?.conseil;

  return (
    <div className="min-h-screen bg-white">
      <section className="pt-48 pb-24 px-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <span className="text-[10px] uppercase tracking-[0.5em] text-blue-600 font-bold">Capabilities // 01</span>
          <h1 className="text-5xl md:text-8xl font-serif font-bold text-[#0A192F] mt-8 tracking-tighter uppercase">
            {content?.title}
          </h1>
        </div>
      </section>

      <section className="py-24 px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-20">
          <div className="lg:col-span-5">
            <h2 className="text-3xl font-serif text-[#0A192F] leading-tight mb-8 italic">
              "L'ingénierie sourcing consiste à transformer la contrainte fournisseur en avantage compétitif structurel."
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-12">
            {content?.items?.map((item, idx) => (
              <div key={idx} className="flex gap-12 pb-8 border-b border-gray-50 group">
                <span className="text-blue-600 font-mono text-xs pt-1">0{idx+1}</span>
                <p className="text-lg text-gray-600 font-light leading-snug group-hover:text-[#0A192F] transition-colors">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Conseil;
