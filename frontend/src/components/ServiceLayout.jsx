import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const ServiceLayout = ({ content, label, imageUrl, indexNumber }) => {
  const { language } = useLanguage();

  // Sécurité critique : si content est indéfini, on ne rend rien pour éviter le crash
  if (!content || !content.items) return null;

  return (
    <div className="min-h-screen bg-white font-sans">
      <header className="pt-48 pb-20 px-8 max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <span className="h-px w-12 bg-blue-600"></span>
          <span className="text-sm md:text-base uppercase tracking-[0.4em] text-blue-600 font-bold">
            {label} // {indexNumber}
          </span>
        </div>
        <h1 className="text-5xl md:text-7xl font-serif font-bold text-[#0A192F] tracking-tighter uppercase leading-[1.05] italic">
          {content.title}<span className="text-blue-600">.</span>
        </h1>
      </header>

      <section className="relative w-full h-[55vh] bg-[#0A192F] overflow-hidden grayscale contrast-125 border-y border-gray-100">
        <img 
          src={imageUrl} 
          alt="MBK Service" 
          className="w-full h-full object-cover opacity-60"
        />
      </section>

      <section className="py-32 px-8 max-w-7xl mx-auto grid md:grid-cols-2 gap-x-24 gap-y-20">
        {content.items.map((item, idx) => (
          <div key={idx} className="flex flex-col border-t border-gray-100 pt-12">
            <span className="text-xs text-blue-500 font-bold tracking-[0.3em] mb-8 block uppercase">
              {label} // 0{idx + 1}
            </span>
            <h3 className="text-2xl md:text-3xl font-serif text-[#0A192F] font-bold leading-tight mb-6">
              {item}
            </h3>
            <p className="text-lg text-gray-500 font-light leading-relaxed italic">
              {language === 'fr' 
                ? "Déploiement de méthodologies rigoureuses pour transformer vos leviers opérationnels en valeur stratégique."
                : "Deploying rigorous methodologies to transform your operational levers into strategic value."}
            </p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default ServiceLayout;
