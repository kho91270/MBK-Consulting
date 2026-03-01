import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Conseil = () => {
  const { t } = useLanguage();
  const content = t?.services?.conseil;

  return (
    <div className="min-h-screen bg-white">
      {/* Header de Page */}
      <header className="pt-48 pb-20 px-8 max-w-7xl mx-auto">
        <span className="text-[10px] uppercase tracking-[0.5em] text-blue-600 font-bold">
          Strategy & Execution // 01
        </span>
        <h1 className="text-5xl md:text-8xl font-serif font-bold text-[#0A192F] mt-8 tracking-tighter uppercase leading-none">
          {content?.title}
        </h1>
      </header>
      
      {/* Section Image B&W Institutionnelle */}
      <section className="w-full h-[60vh] bg-gray-100 grayscale contrast-125 brightness-90 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000" 
          alt="MBK Strategic Consulting" 
          className="w-full h-full object-cover"
        />
      </section>

      {/* Contenu Analytique */}
      <section className="py-24 px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-20">
          <div className="lg:col-span-5">
            <h2 className="text-3xl font-serif text-[#0A192F] leading-tight mb-8 italic">
              "L'ingénierie sourcing consiste à transformer la contrainte fournisseur en avantage compétitif structurel."
            </h2>
            <p className="text-gray-500 font-light leading-relaxed">
              Nous interven dow sur l'ensemble du cycle de valeur, de la définition des stratégies catégorielles au pilotage de la performance TCO.
            </p>
          </div>
          
          <div className="lg:col-span-7 space-y-8 border-l border-gray-100 pl-12 md:pl-20">
            {content?.items?.map((item, idx) => (
              <div key={idx} className="flex gap-8 pb-6 border-b border-gray-50 group">
                <span className="text-blue-600 font-mono text-xs pt-1">
                  0{idx + 1} /
                </span>
                <p className="text-lg text-[#0A192F] font-light leading-tight group-hover:text-blue-600 transition-colors duration-500">
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
