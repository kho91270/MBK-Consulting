import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight } from 'lucide-react';

const Home = () => {
  const { t } = useLanguage();

  // Sécurité pour éviter le rond rouge si le context met du temps à charger
  if (!t || !t.hero) return null;

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* SECTION HERO : Équilibre 7xl / lg */}
      <section className="relative h-screen flex items-center bg-[#0A192F] px-8 overflow-hidden">
        {/* Background avec Overlay pour le contraste */}
        <div className="absolute inset-0 opacity-25 grayscale contrast-125">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop" 
            alt="MBK Headquarters Architecture" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A192F] via-[#0A192F]/80 to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          {/* Sous-titre standardisé (sm) */}
          <div className="flex items-center gap-4 mb-8 animate-fade-in">
            <span className="h-px w-10 bg-blue-500"></span>
            <span className="text-sm md:text-base font-bold tracking-[0.5em] text-blue-500 uppercase">
              {t.hero.subtitle}
            </span>
          </div>

          {/* Titre H1 : Harmonisé à 7xl max pour éviter l'écrasement */}
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-10 leading-[1.05] tracking-tighter uppercase italic max-w-4xl">
            {t.hero.title}<span className="text-blue-600">.</span>
          </h1>

          {/* Description : Passage en text-lg pour la lisibilité */}
          <p className="max-w-2xl text-lg md:text-xl text-gray-400 font-light leading-relaxed mb-14 border-l-2 border-blue-600/50 pl-10 italic">
            {t.hero.description}
          </p>

          {/* CTA : Bouton d'action épuré */}
          <div className="flex flex-wrap gap-8 items-center">
            <Link 
              to="/audit" 
              className="group flex items-center gap-6 bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 text-[11px] font-bold uppercase tracking-[0.3em] transition-all duration-500 shadow-xl shadow-blue-900/20"
            >
              {t.hero.cta}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-3 transition-transform duration-500" />
            </Link>
            
            <Link 
              to="/about" 
              className="text-[11px] uppercase tracking-[0.3em] text-gray-400 hover:text-white transition-colors py-5"
            >
              {t.nav.about} // 06
            </Link>
          </div>
        </div>

        {/* Scroll Indicator (Esthétique Cabinet de conseil) */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-30">
          <div className="w-px h-16 bg-gradient-to-b from-blue-500 to-transparent"></div>
        </div>
      </section>
    </div>
  );
};

export default Home;
