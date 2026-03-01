import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Conseil = () => {
  const { t, language } = useLanguage();
  const content = t?.services?.conseil;
  if (!content) return null;

  return (
    <div className="min-h-screen bg-white font-sans">
      <header className="pt-48 pb-16 px-8 max-w-7xl mx-auto">
        <span className="text-[10px] uppercase tracking-[0.6em] text-blue-600 font-bold mb-6 block">
          {t.common.strategyLabel} // 01
        </span>
        <h1 className="text-6xl md:text-8xl font-serif font-bold text-[#0A192F] tracking-tighter uppercase leading-[0.85]">
          {content.title}
        </h1>
      </header>
      <section className="relative w-full h-[60vh] bg-[#0A192F] overflow-hidden grayscale contrast-125">
        <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2000" alt="Strategic" className="w-full h-full object-cover opacity-60" />
      </section>
      <section className="py-24 px-8 max-w-7xl mx-auto grid md:grid-cols-2 gap-x-20 gap-y-16">
        {content.items.map((item, idx) => (
          <div key={idx} className="flex flex-col border-t border-gray-100 pt-10">
            <span className="text-[10px] text-blue-600 font-bold tracking-[0.4em] mb-6 block uppercase">
              {t.common.strategyLabel} // 0{idx + 1}
            </span>
            <h3 className="text-2xl md:text-3xl font-serif text-[#0A192F] font-bold leading-tight italic mb-4">{item}</h3>
            <p className="text-gray-500 font-light text-sm leading-relaxed">
              {language === 'fr' ? "Transformer la contrainte fournisseur en avantage compétitif." : "Transforming supplier constraints into competitive advantages."}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Conseil;
