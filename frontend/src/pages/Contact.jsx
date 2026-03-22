import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Contact = () => {
  const { t, language } = useLanguage();
  
  // Sécurité : on récupère l'objet contact s'il existe, sinon un objet vide
  const content = t?.contact || {};

  // Textes de secours si translations.js est incomplet
  const displayTitle = content.title || (language === 'fr' ? "Contact" : "Get in Touch");
  const displaySubtitle = language === 'fr' ? "Parlons de votre projet" : "Let's discuss your project";

  return (
    <div className="min-h-screen bg-white font-sans text-[#0A192F]">
      {/* HEADER ÉPURÉ */}
      <header className="pt-48 pb-20 px-8 max-w-7xl mx-auto">
        <h1 className="text-6xl md:text-9xl !font-serif !font-bold italic tracking-tighter leading-[0.85] mb-4">
          {displayTitle}<span className="text-blue-600">.</span>
        </h1>
      </header>

      <section className="py-24 px-8 max-w-7xl mx-auto grid lg:grid-cols-2 gap-32">
        {/* COLONNE INFOS */}
        <div className="space-y-16">
          <div className="border-t-2 border-[#0A192F] pt-12">
            <h2 className="text-4xl !font-serif !font-bold italic mb-8 tracking-tighter">
              {displaySubtitle}<span className="text-blue-600">.</span>
            </h2>
            <div className="space-y-6 text-2xl !font-serif italic text-gray-500">
              <p className="hover:text-blue-600 transition-colors cursor-pointer duration-500">
                contact@mbkprocurement.com
              </p>
              <p className="text-gray-400">Paris — Luxembourg</p>
            </div>
          </div>
        </div>

        {/* FORMULAIRE SIMPLE ET CHIC */}
        <div className="bg-gray-50 p-12 border border-gray-100 shadow-sm">
          <form className="space-y-10" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2 border-b border-gray-200 pb-4 focus-within:border-blue-600 transition-colors duration-500">
              <input 
                type="text" 
                placeholder={language === 'fr' ? "NOM" : "NAME"} 
                className="w-full bg-transparent outline-none text-[10px] font-bold tracking-[0.3em] uppercase"
              />
            </div>
            <div className="space-y-2 border-b border-gray-200 pb-4 focus-within:border-blue-600 transition-colors duration-500">
              <input 
                type="email" 
                placeholder="EMAIL" 
                className="w-full bg-transparent outline-none text-[10px] font-bold tracking-[0.3em] uppercase"
              />
            </div>
            <div className="space-y-2 border-b border-gray-200 pb-4 focus-within:border-blue-600 transition-colors duration-500">
              <textarea 
                rows="4" 
                placeholder="MESSAGE" 
                className="w-full bg-transparent outline-none text-[10px] font-bold tracking-[0.3em] uppercase resize-none"
              ></textarea>
            </div>
            
            <button 
              type="submit"
              className="w-full py-6 bg-[#0A192F] text-white text-[10px] font-bold uppercase tracking-[0.5em] hover:bg-blue-600 transition-all duration-700 ease-in-out"
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
