import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Scale } from 'lucide-react';

const Mediation = () => {
  const { t } = useLanguage();
  const content = t?.services?.mediation;

  return (
    <div className="min-h-screen bg-white">
      <section className="pt-48 pb-24 px-8">
        <div className="max-w-7xl mx-auto border-b border-[#0A192F]/10 pb-20">
          <span className="text-[10px] uppercase tracking-[0.5em] text-blue-600 font-bold mb-8 block">Neutrality & Resolution</span>
          <h1 className="text-5xl md:text-8xl font-serif font-bold text-[#0A192F] tracking-tighter uppercase leading-none">
            {content?.title}
          </h1>
        </div>
      </section>

      <section className="py-24 px-8 max-w-7xl mx-auto grid lg:grid-cols-3 gap-12">
        {content?.items?.map((item, idx) => (
          <div key={idx} className="relative p-12 bg-gray-50 hover:bg-white hover:shadow-2xl transition-all duration-500 group">
            <Scale className="w-6 h-6 text-blue-600 mb-8 opacity-20 group-hover:opacity-100 transition-opacity" />
            <p className="text-[#0A192F] font-bold text-sm uppercase tracking-widest leading-relaxed">
              {item}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Mediation;
