import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight } from 'lucide-react';

const Home = () => {
  const { t, language } = useLanguage();

  // On pointe vers 'home' pour récupérer les textes de translations.js
  const content = t?.home;

  if (!content) return null;

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
          {/* LE LABEL BLEU SUPÉRIEUR A ÉTÉ SUPPRIMÉ ICI POUR LA STANDARDISATION */}

          {/* TITRE HOME : Serif Bold Italic */}
          <h1 className="text-5xl md:text-8xl !font-serif !font-bold text-white mb-10 leading-[1.05] tracking-tighter italic max-w-5xl">
            {content.heroTitle}<span className="text-blue-600">.</span>
          </h1>

          {/* Description / Philosophie avec bordure bleue discrète */}
          <p className="max-w-2xl text-xl text-gray-400 font-light leading-relaxed mb-14 border-l-2 border-blue-600/50 pl-10 italic">
            {content.philosophy}
          </p>

          {/* BOUTON CTA : Redirection vers /contact */}
          <Link 
            to="/contact" 
            className="group flex items-center gap-6 bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 text-[11px] font-bold uppercase tracking-[0.3em] transition-all w-fit shadow-2xl"
          >
            {language === 'fr' ? "Engager l'audit stratégique" : "Start strategic audit"}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-3 transition-transform duration-500" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
