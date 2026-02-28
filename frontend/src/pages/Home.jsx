import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import SEO from '../components/SEO';
import { ArrowRight, BarChart3, ShieldCheck, Target, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      <SEO 
        title={t.hero.title} 
        description={t.hero.description}
        keywords="Conseil Achats, Performance Achats, Supply Chain Consulting, Sourcing Engineering, Stratégie Achats Paris, Procurement Excellence"
      />

      <section className="relative h-screen flex items-center bg-[#0A192F] overflow-hidden text-white">
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-blue-500 font-bold tracking-[0.3em] uppercase text-xs">
              {t.hero.subtitle}
            </span>
            <h1 className="text-6xl lg:text-8xl font-bold font-serif mt-6 mb-8 leading-tight">
              {t.hero.title}
            </h1>
            <p className="text-xl text-gray-400 mb-10 font-light leading-relaxed">
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

      {/* Section CTA Finale */}
      <section className="py-24 bg-[#0A192F] text-center text-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-serif font-bold mb-6">{t.common.ctaTitle}</h2>
          <p className="text-xl text-gray-400 mb-10 font-light italic">{t.common.ctaSubtitle}</p>
          <Link to="/contact">
            <button className="border border-white/30 px-12 py-5 font-bold uppercase tracking-widest text-xs hover:bg-white hover:text-[#0A192F] transition-all">
              {t.nav.contact}
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
