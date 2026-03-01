import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Hero Section McKinsey Style */}
      <section className="relative h-[90vh] flex items-center bg-[#0A192F] text-white px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-6xl md:text-8xl font-serif font-bold mb-10 leading-[0.9] tracking-tight">
              {t.hero.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed max-w-2xl border-l border-white/20 pl-8">
              {t.hero.description}
            </p>
            <div className="mt-12">
              <Link to="/contact" className="inline-flex items-center gap-6 group">
                <span className="text-[11px] uppercase tracking-[0.4em] font-bold">{t.hero.cta}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid - Rigueur Analytique */}
      <section className="py-32 px-8 max-w-7xl mx-auto">
        <h2 className="text-[11px] uppercase tracking-[0.5em] font-bold text-blue-600 mb-20">{t.services.title}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-1">
          {Object.entries(t.services).filter(([k]) => k !== 'title').map(([key, service], idx) => (
            <Link key={key} to={`/${key}`} className="group p-12 border border-gray-100 hover:bg-gray-50 transition-all flex flex-col h-full">
              <span className="text-[10px] font-mono text-gray-300 mb-8">0{idx + 1} //</span>
              <h3 className="text-xl font-serif font-bold text-[#0A192F] mb-6 leading-tight group-hover:text-blue-600">{service.title}</h3>
              <p className="text-sm text-gray-500 font-light leading-relaxed flex-grow">
                {service.items[0]} & {service.items[1]}.
              </p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
