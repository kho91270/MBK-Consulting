import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import SEO from '../components/SEO';
import { ArrowRight, BarChart3, ShieldCheck, Target, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  // Correction cruciale : extraction de t ET language
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title={t.hero.title} 
        description={t.hero.description}
      />

      {/* HERO SECTION */}
      <section className="relative h-screen flex items-center bg-[#0A192F] text-white">
        <div className="relative z-20 max-w-7xl mx-auto px-6">
          <div className="max-w-4xl">
            <span className="text-blue-500 font-bold tracking-[0.3em] uppercase text-xs">
              {t.hero.subtitle}
            </span>
            <h1 className="text-6xl lg:text-8xl font-bold font-serif mt-6 mb-8 leading-tight">
              {t.hero.title}
            </h1>
            <p className="text-xl text-gray-400 mb-10 font-light leading-relaxed max-w-2xl">
              {t.hero.description}
            </p>
            <Link to="/audit">
              <button className="bg-blue-600 text-white px-10 py-5 font-bold uppercase tracking-widest text-xs hover:bg-blue-700 transition-all flex items-center gap-4 shadow-xl">
                {t.hero.cta} <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-24 bg-gray-50 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Conseil */}
          <div className="bg-white p-10 border-b-4 border-blue-600 shadow-sm">
            <ShieldCheck className="w-12 h-12 text-blue-600 mb-6" />
            <h3 className="text-2xl font-serif font-bold text-[#0A192F] mb-4">{t.nav.conseil}</h3>
            <p className="text-gray-600 text-sm font-light leading-relaxed mb-6">
              {language === 'fr' ? "Optimisation stratégique de vos flux." : "Strategic supply chain optimization."}
            </p>
            <Link to="/conseil" className="text-blue-600 text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
               {language === 'fr' ? "Découvrir" : "Discover"} <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
          {/* ... autres blocs ... */}
        </div>
      </section>
    </div>
  );
};

export default Home;
