import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Conseil = () => {
  const { t } = useLanguage();
  const content = t?.services?.conseil;

  return (
    <div className="min-h-screen bg-white">
      <section className="pt-48 pb-24 px-8 border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <span className="text-[10px] uppercase tracking-[0.5em] text-blue-600 font-bold">Strategy & Execution</span>
          <h1 className="text-5xl md:text-8xl font-serif font-bold text-[#0A192F] mt-8 tracking-tighter uppercase">
            {content?.title}
          </h1>
        </div>
      </section>

      <section className="py-24 px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-20">
          <div className="lg:col-span-5">
            <h2 className="text-3xl font-serif text-[#0A192F] leading-tight mb-8 italic">
              Optimiser la structure de coûts par l'ingénierie et la data.
            </h2>
            <p className="text-gray-500 font-light leading-relaxed">
              Nous intervenons sur l'ensemble du cycle Sourcing, de la définition de la stratégie catégorielle au pilotage opérationnel de la performance fournisseurs.
            </p>
          </div>
          <div className="lg:col-span-7 space-y-8">
            {content?.items?.map((item, idx) => (
              <div key={idx} className="flex gap-8 pb-6 border-b border-gray-50 group">
                <div className="h-2 w-2 bg-blue-600 rounded-full mt-2 group-hover:scale-150 transition-transform"></div>
                <p className="text-lg text-[#0A192F] font-light leading-tight">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Conseil;
