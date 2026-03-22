import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const ServiceLayout = ({ content, label, imageUrl, leadText }) => {
  const { language } = useLanguage();

  if (!content || !content.items) return null;

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* HEADER : Un seul label unique */}
      <header className="pt-48 pb-20 px-8 max-w-7xl mx-auto">
        <div className="flex items-center gap-6 mb-8">
          <span className="h-px w-16 bg-blue-600"></span>
          <span className="text-sm md:text-base uppercase tracking-[0.5em] text-blue-600 font-bold">
            {label}
          </span>
        </div>
        
        <h1 className="text-5xl md:text-8xl font-serif font-bold text-[#0A192F] tracking-tighter leading-[0.9] italic mb-10">
          {content.title}<span className="text-blue-600">.</span>
        </h1>
        
        <p className="max-w-4xl text-xl md:text-2xl text-gray-500 font-light leading-relaxed italic border-l-4 border-blue-50 border-pl-10">
          {leadText}
        </p>
      </header>

      {/* VISUEL */}
      <section className="relative w-full h-[60vh] bg-[#0A192F] overflow-hidden grayscale contrast-125">
        <img src={imageUrl} alt="Expertise MBK" className="w-full h-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
      </section>

      {/* CONTENU : Plus de répétition du label ici */}
      <section className="py-32 px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-x-32 gap-y-24">
          {content.items.map((item, idx) => (
            <div key={idx} className="flex flex-col border-t-2 border-gray-100 pt-12 group hover:border-blue-600 transition-colors duration-700">
              <h3 className="text-3xl md:text-4xl font-serif text-[#0A192F] font-bold leading-tight mb-8 italic">
                {item}<span className="text-blue-600">.</span>
              </h3>
              
              <div className="space-y-6 text-lg text-gray-600 font-light leading-relaxed italic">
                {/* Le contenu détaillé sera passé via le mockData ou injecté ici */}
                <p>
                  {content.descriptions && content.descriptions[idx] 
                    ? content.descriptions[idx] 
                    : (language === 'fr' ? "Analyse approfondie pour optimiser vos ressources." : "Deep analysis to optimize your resources.")}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ServiceLayout;
