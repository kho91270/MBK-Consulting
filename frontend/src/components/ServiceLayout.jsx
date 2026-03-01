import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const ServiceLayout = ({ content, label, imageUrl, indexNumber }) => {
  const { language } = useLanguage();

  if (!content || !content.items) return null;

  return (
    <div className="min-h-screen bg-white font-sans">
      <header className="pt-48 pb-20 px-8 max-w-7xl mx-auto">
        <div className="flex items-center gap-6 mb-8">
          <span className="h-px w-16 bg-blue-600"></span>
          <span className="text-sm md:text-base uppercase tracking-[0.5em] text-blue-600 font-bold">
            {label} // {indexNumber}
          </span>
        </div>
        <h1 className="text-5xl md:text-8xl font-serif font-bold text-[#0A192F] tracking-tighter uppercase leading-[0.9] italic mb-8">
          {content.title}<span className="text-blue-600">.</span>
        </h1>
        <p className="max-w-3xl text-xl text-gray-500 font-light leading-relaxed italic">
          {language === 'fr' 
            ? "Approche méthodologique fondée sur l'excellence analytique et l'optimisation des structures de coûts complexes."
            : "Methodological approach based on analytical excellence and the optimization of complex cost structures."}
        </p>
      </header>

      <section className="relative w-full h-[65vh] bg-[#0A192F] overflow-hidden grayscale contrast-125">
        <img 
          src={imageUrl} 
          alt="MBK Strategy" 
          className="w-full h-full object-cover opacity-60 scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent"></div>
      </section>

      <section className="py-32 px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-x-32 gap-y-24">
          {content.items.map((item, idx) => (
            <div key={idx} className="flex flex-col border-t-2 border-[#0A192F] pt-12 group">
              <span className="text-sm text-blue-600 font-bold tracking-[0.4em] mb-8 block uppercase">
                {label} // 0{idx + 1}
              </span>
              <h3 className="text-3xl md:text-4xl font-serif text-[#0A192F] font-bold leading-tight mb-8">
                {item}
              </h3>
              <div className="space-y-6 text-lg text-gray-600 font-light leading-relaxed">
                <p>
                  {language === 'fr' 
                    ? "Nous déstructurons les modèles de coûts existants pour identifier les inefficacités structurelles et les leviers de négociation inexploités."
                    : "We deconstruct existing cost models to identify structural inefficiencies and untapped negotiation levers."}
                </p>
                <p className="text-sm text-gray-400 border-l-2 border-gray-100 pl-6 uppercase tracking-widest font-bold">
                  {language === 'fr' ? "Livrable : Rapport d'impact EBITDA" : "Deliverable: EBITDA Impact Report"}
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
