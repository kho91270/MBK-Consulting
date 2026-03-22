import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Contact = () => {
  const { t, language } = useLanguage();
  
  // Sécurité si translations.js est incomplet
  const content = t?.contact || {};

  return (
    <div className="min-h-screen bg-[#0A192F] font-sans text-white relative overflow-hidden">
      
      {/* SECTION VISUELLE : L'Image Exclusive "Le Lien Stratégique" */}
      <section className="absolute inset-0 w-full h-full bg-[#0A192F] overflow-hidden grayscale contrast-125 border-b border-gray-800">
        <img 
          src="https://images.unsplash.com/photo-1512411604-d73117498c8c?q=80&w=2500" // Image d'architecture prestige à Paris avec ligne de lumière
          alt="MBK Connection Architecture" 
          className="w-full h-full object-cover object-center opacity-30 scale-105 hover:scale-100 transition-transform duration-[6s] ease-out"
          onError={(e) => {
            e.target.src = "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2500";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-transparent to-transparent opacity-60"></div>
      </section>

      {/* HEADER ÉPURÉ (Même style que le Hero de la Home) */}
      <header className="relative z-10 pt-48 pb-10 px-8 max-w-7xl mx-auto text-left">
        <h1 className="text-6xl md:text-9xl !font-serif !font-bold italic tracking-tighter leading-[0.85] mb-4 text-white">
          {language === 'fr' ? "L'Engagement Stratégique" : "Strategic Engagement"}<span className="text-blue-600">.</span>
        </h1>
      </header>

      {/* COLONNES INFOS & FORMULAIRE */}
      <section className="relative z-10 pb-32 pt-16 px-8 max-w-7xl mx-auto grid lg:grid-cols-2 gap-32">
        {/* COLONNE INFOS */}
        <div className="space-y-16">
          <div className="border-t-2 border-white pt-12 group hover:border-blue-600 transition-colors duration-700">
            <h2 className="text-4xl !font-serif !font-bold italic mb-8 tracking-tighter text-white group-hover:translate-x-3 transition-transform duration-500">
              {language === 'fr' ? 'Définir la trajectoire' : 'Define the trajectory'}<span className="text-blue-600">.</span>
            </h2>
            <div className="space-y-6 text-2xl !font-serif italic text-gray-300">
              <p className="hover:text-blue-600 transition-colors cursor-pointer duration-500">
                contact@mbkprocurement.com
              </p>
              <p className="text-gray-400">Paris — Luxembourg - New-York - Dubaï</p>
            </div>
          </div>
        </div>

        {/* FORMULAIRE SIMPLE ET CHIC (Adapté pour fond sombre) */}
        <div className="bg-white/10 p-12 border border-white/10 shadow-2xl backdrop-blur-sm">
          <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2 border-b border-white/20 pb-4 focus-within:border-blue-600 transition-colors duration-500">
              <input 
                type="text" 
                placeholder={language === 'fr' ? "NOM" : "NAME"} 
                className="w-full bg-transparent outline-none text-[10px] font-bold tracking-[0.3em] uppercase text-white placeholder:text-gray-500"
              />
            </div>
            <div className="space-y-2 border-b border-white/20 pb-4 focus-within:border-blue-600 transition-colors duration-500">
              <input 
                type="email" 
                placeholder="EMAIL" 
                className="w-full bg-transparent outline-none text-[10px] font-bold tracking-[0.3em] uppercase text-white placeholder:text-gray-500"
              />
            </div>
            <div className="space-y-2 border-b border-white/20 pb-4 focus-within:border-blue-600 transition-colors duration-500">
              <textarea 
                rows="4" 
                placeholder="MESSAGE" 
                className="w-full bg-transparent outline-none text-[10px] font-bold tracking-[0.3em] uppercase resize-none text-white placeholder:text-gray-500"
              ></textarea>
            </div>
            
            <button 
              type="submit"
              className="w-full py-6 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-[0.5em] hover:bg-blue-700 transition-all duration-700 ease-in-out"
            >
              {language === 'fr' ? 'ENVOYER LE MESSAGE' : 'SEND MESSAGE'}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
