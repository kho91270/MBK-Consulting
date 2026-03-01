import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight } from 'lucide-react';

const Home = () => {
  const { t } = useLanguage();

  if (!t || !t.hero) return null;

  return (
    <div className="min-h-screen bg-white font-sans">
      <section className="relative h-screen flex items-center bg-[#0A192F] px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-25 grayscale contrast-125">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000" 
            alt="Hero" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="flex items-center gap-4 mb-8">
            <span className="h-px w-10 bg-blue-500"></span>
            <span className="text-sm md:text-base font-bold tracking-[0.5em] text-blue-500 uppercase">
              {t.hero.subtitle}
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-10 leading-[1.05] tracking-tighter uppercase italic">
            {t.hero.title}<span className="text-blue-600">.</span>
          </h1>
          <p className="max-w-2xl text-lg md:text-xl text-gray-400 font-light leading-relaxed mb-14 border-l-2 border-blue-600/50 pl-10 italic">
            {t.hero.description}
          </p>
          <Link to="/audit" className="group flex items-center gap-6 bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 text-[11px] font-bold uppercase tracking-[0.3em] transition-all w-fit">
            {t.hero.cta}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-3 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
