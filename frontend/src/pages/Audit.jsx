import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Audit = () => {
  const { t } = useLanguage();
  const content = t?.services?.audit;

  return (
    <div className="min-h-screen bg-white font-sans">
      <header className="pt-48 pb-20 px-8 max-w-7xl mx-auto">
        <span className="text-[10px] uppercase tracking-[0.5em] text-blue-600 font-bold">Diagnostics & Risk // 02</span>
        <h1 className="text-5xl md:text-8xl font-serif font-bold text-[#0A192F] mt-8 tracking-tighter uppercase leading-none">{content?.title}</h1>
      </header>

      <section className="py-12 px-8 max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
        {content?.items?.map((item, idx) => (
          <div key={idx} className="p-12 border border-gray-100 hover:border-blue-600 transition-all flex flex-col grayscale hover:grayscale-0 group">
            <span className="text-[9px] font-mono text-gray-400 mb-8 block">CONTROL_MATRIX_0{idx+1}</span>
            <p className="text-2xl font-serif text-[#0A192F] font-bold leading-snug italic">{item}</p>
          </div>
        ))}
      </section>
      
      <div className="h-[40vh] w-full bg-gray-50 mt-20 grayscale brightness-75">
        <img src="https://images.unsplash.com/photo-1454165833767-0274b24f6733?q=80&w=2000" alt="Audit" className="w-full h-full object-cover" />
      </div>
    </div>
  );
};

export default Audit;
