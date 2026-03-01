import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Scale, ShieldCheck } from 'lucide-react';

const Mediation = () => {
  const { t } = useLanguage();
  const content = t?.services?.mediation;

  return (
    <div className="min-h-screen bg-white">
      <section className="bg-[#0A192F] pt-48 pb-32 text-white px-8">
        <div className="max-w-7xl mx-auto">
          <span className="text-[10px] uppercase tracking-[0.5em] text-blue-400 font-bold mb-8 block">Conflict Resolution // 04</span>
          <h1 className="text-5xl md:text-8xl font-serif font-bold mb-12 tracking-tighter uppercase leading-[0.9]">
            {content?.title}
          </h1>
          <div className="h-1 w-24 bg-blue-600 mb-12"></div>
        </div>
      </section>

      <section className="py-32 px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-20">
          <div className="lg:col-span-4">
             <h2 className="text-2xl font-serif text-[#0A192F] italic mb-8">
               Sécuriser les relations critiques dans un écosystème de plus en plus volatile.
             </h2>
             <Scale className="w-12 h-12 text-blue-600 opacity-20" />
          </div>
          <div className="lg:col-span-8 space-y-6">
            {content?.items?.map((item, idx) => (
              <div key={idx} className="p-8 border border-gray-100 hover:border-blue-600 transition-all group">
                <div className="flex justify-between items-center">
                  <p className="text-[#0A192F] font-bold text-xs uppercase tracking-[0.2em]">{item}</p>
                  <ShieldCheck className="w-4 h-4 text-gray-200 group-hover:text-blue-600 transition-colors" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mediation;
