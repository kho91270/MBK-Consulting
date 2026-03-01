import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Audit = () => {
  const { t } = useLanguage();
  const content = t?.services?.audit;

  return (
    <div className="min-h-screen bg-white font-sans">
      <header className="pt-48 pb-20 px-8 max-w-7xl mx-auto">
        <span className="text-[10px] uppercase tracking-[0.5em] text-blue-600 font-bold mb-4 block italic">
          {t.common?.analysis || 'Diagnostic'} // 02
        </span>
        <h1 className="text-5xl md:text-8xl font-serif font-bold text-[#0A192F] tracking-tighter uppercase leading-none">
          {content?.title}
        </h1>
      </header>

      {/* SECTION IMAGE NOIR ET BLANC HAUTE DÉFINITION */}
      <section className="w-full h-[50vh] bg-gray-900 grayscale contrast-125 brightness-75 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1454165833767-0274b24f6733?q=80&w=2000" 
          alt="Audit Expertise MBK" 
          className="w-full h-full object-cover opacity-80"
        />
      </section>

      <section className="py-24 px-8 max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
        {content?.items?.map((item, idx) => (
          <div key={idx} className="p-12 border-l border-gray-100 hover:border-blue-600 transition-all bg-gray-50/30 group">
            <span className="text-[9px] font-mono text-gray-400 mb-8 block tracking-[0.3em] uppercase">
              {t.common?.servicePrefix || 'Axe'} — 0{idx+1}
            </span>
            <p className="text-2xl font-serif text-[#0A192F] font-bold leading-snug italic group-hover:text-blue-600 transition-colors">
              {item}
            </p>
            <div className="mt-8 h-px w-12 bg-gray-200 group-hover:w-full transition-all duration-700"></div>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Audit;
