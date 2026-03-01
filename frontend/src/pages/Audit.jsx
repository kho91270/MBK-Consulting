import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Audit = () => {
  const { t } = useLanguage();
  const content = t?.services?.audit;

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Header : Typographie resserrée */}
      <header className="pt-48 pb-16 px-8 max-w-7xl mx-auto">
        <span className="text-[10px] uppercase tracking-[0.6em] text-blue-600 font-bold mb-6 block">
          {t.common?.analysis || 'Diagnostic'} // 02
        </span>
        <h1 className="text-6xl md:text-8xl font-serif font-bold text-[#0A192F] tracking-tighter uppercase leading-[0.85]">
          {content?.title}
        </h1>
      </header>

      {/* SECTION IMAGE : Utilisation d'un lien direct haute performance */}
      <section className="relative w-full h-[60vh] bg-[#0A192F] overflow-hidden grayscale contrast-125">
        <img 
          src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=2000&auto=format&fit=crop" 
          alt="Expertise Audit" 
          className="w-full h-full object-cover opacity-60"
          loading="eager" 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A192F]/20 to-white/10"></div>
      </section>

      {/* Grid de contenu : Épurement total */}
      <section className="py-24 px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-x-20 gap-y-16">
          {content?.items?.map((item, idx) => (
            <div key={idx} className="flex flex-col border-t border-gray-100 pt-10 group transition-all">
              <span className="text-[10px] text-blue-600 font-bold tracking-[0.4em] mb-6 block">
                0{idx + 1}
              </span>
              <h3 className="text-2xl md:text-3xl font-serif text-[#0A192F] font-bold leading-tight italic mb-4">
                {item}
              </h3>
              <p className="text-gray-500 font-light text-sm leading-relaxed max-w-md">
                Identification des leviers de performance et sécurisation des processus critiques par une approche d'audit financier rigoureuse.
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Audit;
