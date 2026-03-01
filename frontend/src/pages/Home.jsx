import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section : Impact & Sobriété */}
      <section className="relative h-screen flex items-center bg-[#0A192F] px-8">
        <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80')] bg-cover bg-center"></div>
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <span className="text-blue-500 font-bold tracking-[0.4em] uppercase text-[10px] mb-6 block">
            {t.hero.subtitle}
          </span>
          <h1 className="text-6xl md:text-8xl font-serif font-bold text-white mb-10 leading-[0.9] tracking-tighter">
            {t.hero.title}
          </h1>
          <p className="max-w-xl text-xl text-gray-400 font-light leading-relaxed mb-12 border-l border-blue-600/30 pl-8">
            {t.hero.description}
          </p>
          <Link to="/audit" className="group inline-flex items-center gap-8 text-white">
            <span className="text-[11px] uppercase tracking-[0.3em] font-bold border-b border-white/20 pb-2 group-hover:border-blue-500 transition-all">
              {t.hero.cta}
            </span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-3 transition-transform duration-500" />
          </Link>
        </div>
      </section>

      {/* Grid Stratégique : Rigueur & Alignement */}
      <section className="py-32 px-8 bg-white max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-4 gap-px bg-gray-100 border border-gray-100">
          {Object.entries(t.services).filter(([k]) => k !== 'title').map(([key, service], idx) => (
            <Link key={key} to={`/${key}`} className="bg-white p-12 hover:bg-gray-50 transition-colors group">
              <p className="text-[9px] font-mono text-blue-600 mb-10 font-bold">0{idx + 1} — SERVICES</p>
              <h3 className="text-2xl font-serif font-bold text-[#0A192F] mb-6 leading-tight group-hover:text-blue-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-gray-500 font-light leading-relaxed">
                {service.items[0]}...
              </p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
