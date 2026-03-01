import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white font-sans">
      <section className="relative h-screen flex items-center bg-[#0A192F] px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-20 grayscale contrast-125">
          <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000" alt="Architecture" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <span className="text-blue-500 font-bold tracking-[0.4em] uppercase text-sm mb-6 block">
            {t.hero.subtitle}
          </span>
          {/* Titre réduit et plus élégant */}
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-10 leading-[1.1] tracking-tighter uppercase italic">
            {t.hero.title}
          </h1>
          {/* Paragraphe agrandi */}
          <p className="max-w-2xl text-lg md:text-xl text-gray-400 font-light leading-relaxed mb-12 border-l border-blue-600/30 pl-8">
            {t.hero.description}
          </p>
          <Link to="/contact" className="group inline-flex items-center gap-6 text-white uppercase tracking-[0.2em] text-xs font-bold border-b border-white/20 pb-2 hover:border-blue-500 transition-all">
            {t.hero.cta} <ArrowRight className="w-4 h-4 group-hover:translate-x-3 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
};
