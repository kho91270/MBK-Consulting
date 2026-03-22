import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Home = () => {
  const { t, language } = useLanguage();

  // 1. Vérification ultime du contexte
  if (!t) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="w-12 h-px bg-blue-600 animate-pulse"></div>
      </div>
    );
  }

  // 2. Extraction sécurisée des données Home
  const home = t.home || {};
  
  // 3. Transformation sécurisée des services (Objet ou Tableau)
  const servicesData = home.services || [];
  const servicesList = Array.isArray(servicesData) 
    ? servicesData 
    : Object.values(servicesData);

  return (
    <div className="min-h-screen bg-white font-sans text-[#0A192F]">
      
      {/* HERO SECTION */}
      <section className="pt-64 pb-32 px-8 max-w-7xl mx-auto">
        <h1 className="text-6xl md:text-9xl !font-serif !font-bold italic tracking-tighter leading-[0.85] mb-12">
          {home.heroTitle || (language === 'fr' ? "Performance Achitect" : "Strategy Architect")}
          <span className="text-blue-600">.</span>
        </h1>
        <p className="max-w-3xl text-xl md:text-3xl font-light text-gray-500 italic border-l-4 border-blue-50 pl-10 leading-relaxed">
          {home.heroSubtitle || (language === 'fr' ? "Expertise en Achats & Stratégie." : "Procurement & Strategy Expertise.")}
        </p>
      </section>

      {/* PHILOSOPHY SECTION */}
      <section className="py-40 bg-[#0A192F] text-white overflow-hidden grayscale contrast-125 relative">
        <div className="max-w-7xl mx-auto px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl !font-serif italic font-bold leading-tight tracking-tight">
            "{home.philosophy || (language === 'fr' ? "L'excellence par la stratégie." : "Excellence through strategy.")}"
          </h2>
        </div>
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000')] bg-cover bg-center"></div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-40 px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-x-24 gap-y-32">
          {servicesList.length > 0 ? (
            servicesList.map((service, idx) => (
              <div key={idx} className="group border-t border-gray-100 pt-12">
                <h3 className="text-4xl !font-serif !font-bold italic mb-6 tracking-tighter group-hover:translate-x-3 transition-transform duration-500">
                  {service?.title || "Expertise"}<span className="text-blue-600">.</span>
                </h3>
                <p className="text-lg text-gray-400 font-light italic leading-relaxed border-l-2 border-gray-50 pl-6">
                  {service?.description || "Description de l'expertise MBK."}
                </p>
              </div>
            ))
          ) : (
            <p className="text-gray-300 italic uppercase tracking-widest text-xs">Loading expertises...</p>
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;
