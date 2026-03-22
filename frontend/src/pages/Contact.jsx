import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Contact = () => {
  const { t, language } = useLanguage();
  const content = t?.contact;

  if (!content) return null;

  return (
    <div className="min-h-screen bg-white">
      <header className="pt-48 pb-20 px-8 max-w-7xl mx-auto">
        <h1 className="text-6xl md:text-9xl font-serif font-bold italic tracking-tighter leading-[0.85] text-[#0A192F]">
          {content.title}<span className="text-blue-600">.</span>
        </h1>
      </header>

      <section className="py-24 px-8 max-w-7xl mx-auto grid lg:grid-cols-2 gap-32">
        {/* INFO COLUMN */}
        <div className="space-y-16">
          <div className="border-t-2 border-[#0A192F] pt-12">
            <h2 className="text-4xl font-serif font-bold italic text-[#0A192F] mb-8 tracking-tighter">
              {language === 'fr' ? 'Parlons de votre projet' : 'Let’s discuss your project'}<span className="text-blue-600">.</span>
            </h2>
            <div className="space-y-4 text-2xl font-serif italic text-gray-500">
              <p className="hover:text-blue-600 transition-colors cursor-pointer">contact@mbk-procurement.com</p>
              <p>Paris — Luxembourg</p>
            </div>
          </div>
        </div>

        {/* SIMPLE FORM */}
        <div className="bg-gray-50 p-12 border border-gray-100 shadow-sm">
          <form className="space-y-8">
            <div className="space-y-2 border-b border-gray-200 pb-4 focus-within:border-blue-600 transition-colors">
              <input 
                type="text" 
                placeholder={language === 'fr' ? "NOM" : "NAME"} 
                className="w-full bg-transparent outline-none text-xs font-bold tracking-widest uppercase"
              />
            </div>
            <div className="space-y-2 border-b border-gray-200 pb-4 focus-within:border-blue-600 transition-colors">
              <input 
                type="email" 
                placeholder="EMAIL" 
                className="w-full bg-transparent outline-none text-xs font-bold tracking-widest uppercase"
              />
            </div>
            <div className="space-y-2 border-b border-gray-200 pb-4 focus-within:border-blue-600 transition-colors">
              <textarea 
                rows="4" 
                placeholder="MESSAGE" 
                className="w-full bg-transparent outline-none text-xs font-bold tracking-widest uppercase resize-none"
              ></textarea>
            </div>
            <button className="w-full py-6 bg-[#0A192F] text-white text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-blue-600 transition-all duration-500">
              {language === 'fr' ? 'ENVOYER LE MESSAGE' : 'SEND MESSAGE'}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
