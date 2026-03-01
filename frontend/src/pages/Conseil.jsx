import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Conseil = () => {
  const { t } = useLanguage();
  const content = t?.services?.conseil;

  return (
    <div className="min-h-screen bg-white font-sans">
      <header className="pt-48 pb-20 px-8 max-w-7xl mx-auto">
        <span className="text-[10px] uppercase tracking-[0.5em] text-blue-600 font-bold">Strategy & Execution // 01</span>
        <h1 className="text-5xl md:text-8xl font-serif font-bold text-[#0A192F] mt-8 tracking-tighter uppercase leading-none">{content?.title}</h1>
      </header>
      
      <section className="w-full h-[50vh] bg-gray-100 grayscale contrast-125 overflow-hidden">
        <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000" alt="Consulting" className="w-full h-full object-cover" />
      </section>

      <section className="py-24 px-8 max-w-7xl mx-auto grid lg:grid-cols-12 gap-20">
        <div className="lg:col-span-5">
          <h2 className="text-3xl font-serif text-[#0A192F] leading-tight italic">Transformer la contrainte fournisseur en avantage compétitif.</h2>
        </div>
        <div className="lg:col-span-7 space-y-8 border-l border-gray-100 pl-12 md:pl-20">
          {content?.items?.map((item, idx) => (
            <div key={idx} className="flex gap-8 pb-6 border-b border-gray-50 group">
              <span className="text-blue-600 font-mono text-xs pt-1">0{idx+1} /</span>
              <p className="text-lg text-[#0A192F] font-light leading-tight group-hover:text-blue-600 transition-colors">{item}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Conseil;
