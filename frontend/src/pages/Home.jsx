import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Home = () => {
  const { t } = useLanguage();
  
  // Si les traductions ne sont pas là, on ne bloque pas l'affichage
  const content = t?.home;
  if (!content) return null;

  return (
    <div className="min-h-screen bg-white">
      {/* HERO SECTION */}
      <section className="pt-64 pb-32 px-8 max-w-7xl mx-auto">
        <h1 className="text-6xl md:text-9xl !font-serif !font-bold italic tracking-tighter leading-[0.85] text-[#0A192F] mb-12">
          {content.heroTitle}<span className="text-blue-600">.</span>
        </h1>
        <p className="max-w-3xl text-xl md:text-3xl font-light text-gray-500 italic border-l-4 border-blue-50 pl-10 leading-relaxed">
          {content.heroSubtitle}
        </p>
      </section>

      {/* PHILOSOPHY SECTION */}
      <section className="py-40 bg-[#0A192F] text-white overflow-hidden grayscale contrast-125 relative">
        <div className="max-w-7xl mx-auto px-8 relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl !font-serif italic font-bold leading-tight tracking-tight">
            "{content.philosophy}"
          </h2>
        </div>
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2000')] bg-cover bg-center"></div>
      </section>

      {/* SERVICES GRID */}
      <section className="py-40 px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-x-24 gap-y-32">
          {/* On boucle sur l'objet services directement comme avant */}
          {Object.entries(content.services).map(([key, service]) => (
            <div key={key} className="group border-t border-gray-100 pt-12">
              <h3 className="text-4xl !font-serif !font-bold italic text-[#0A192F] mb-6 tracking-tighter group-hover:translate-x-3 transition-transform duration-500">
                {service.title}<span className="text-blue-600">.</span>
              </h3>
              <p className="text-lg text-gray-400 font-light italic leading-relaxed border-l-2 border-gray-50 pl-6">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
