import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Mediation = () => {
  const { t } = useLanguage();
  const content = t?.services?.mediation;

  return (
    <div className="min-h-screen bg-white font-sans">
      <header className="pt-48 pb-20 px-8 max-w-7xl mx-auto">
        <span className="text-[10px] uppercase tracking-[0.5em] text-blue-600 font-bold">
          Conflict Resolution // 04
        </span>
        <h1 className="text-5xl md:text-8xl font-serif font-bold text-[#0A192F] mt-12 tracking-tighter uppercase leading-none">
          {content?.title}
        </h1>
      </header>

      <section className="py-12 px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-1">
          <div className="h-[60vh] grayscale contrast-125">
            <img 
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1500" 
              alt="Mediation MBK" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-[#0A192F] p-16 text-white flex flex-col justify-center">
            <h3 className="text-2xl font-serif italic mb-10 text-blue-400">
              Sécuriser les relations critiques.
            </h3>
            <div className="space-y-6">
              {content?.items?.map((item, idx) => (
                <div key={idx} className="flex items-center gap-6 border-b border-white/10 pb-4">
                  <div className="w-1 h-1 bg-blue-500 rounded-full"></div>
                  <p className="text-sm font-light tracking-widest uppercase opacity-80">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mediation;
