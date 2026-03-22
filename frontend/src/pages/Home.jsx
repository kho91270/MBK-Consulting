import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight } from 'lucide-react';

const Home = () => {
  const { t } = useLanguage();

  // Correction : On pointe vers 'home' qui est la clé réelle dans ton translations.js
  const content = t?.home;

  if (!content) {
    return (
      <div className="min-h-screen bg-[#0A192F] flex items-center justify-center">
        <div className="w-12 h-px bg-blue-600 animate-pulse"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white font-sans">
      <section className="relative h-screen flex items-center bg-[#0A192F] px-8 overflow-hidden">
        {/* Background Image avec Grayscale et Contraste */}
        <div className="absolute inset-0 opacity-25 grayscale contrast-125">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000" 
            alt="Hero Architecture" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          {/* Le petit label bleu au-dessus du titre */}
          <div className="flex items-center gap-4 mb-8">
            <span className="h-px w-10 bg-blue-500"></span>
            <span className="text-sm md:text-base font-bold tracking-[0.5em] text-blue-500 uppercase">
              {content.heroSubtitle}
            </span>
          </div>

          {/* TITRE HOME : Serif Bold Italic */}
          <h1 className="text-5xl md:text-8xl !font-serif !font-bold text-white mb-10 leading-[1.05] tracking-tighter italic max-w-5xl">
            {content.heroTitle}<span className="text-blue-600">.</span>
          </h1>

          {/* Description avec bordure bleue */}
          <p className="max-w-2xl text-xl text-gray-400 font-light leading-relaxed mb-14 border-l-2 border-blue-600/50 pl-10 italic">
            {content.philosophy}
          </p>

          {/* Bouton CTA */}
          <Link 
            to="/audit" 
            className="group flex items-center gap-6 bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 text-[11px] font-bold uppercase tracking-[0.3em] transition-all w-fit shadow-2xl"
          >
            {/* Si t.hero.cta n'existe pas, on met un texte par défaut ou t.nav.audit */}
            {t.nav?.audit || "Expertise"}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-3 transition-transform duration-500" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
