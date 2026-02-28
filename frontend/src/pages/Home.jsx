import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import SEO from '../components/SEO';
import { ArrowRight, BarChart3, ShieldCheck, Target, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      <SEO title="MBK Procurement | Performance & Sourcing" />

      {/* HERO SECTION - Entièrement bilingue */}
      <section className="relative h-screen flex items-center bg-[#0A192F] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A192F] to-transparent z-10"></div>
          {/* Image de fond abstraite ou professionnelle */}
        </div>
        
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-blue-500 font-bold tracking-[0.3em] uppercase text-sm animate-fade-in">
              {t.hero.subtitle}
            </span>
            <h1 className="text-6xl lg:text-8xl font-bold text-white font-serif mt-6 mb-8 leading-tight">
              {t.hero.title}
            </h1>
            <p className="text-xl text-gray-400 mb-10 font-light leading-relaxed">
              {t.hero.description}
            </p>
            <Link to="/audit">
              <button className="bg-blue-600 text-white px-10 py-5 font-bold uppercase tracking-widest text-xs hover:bg-blue-700 transition-all flex items-center gap-4">
                {t.hero.cta} <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION SERVICES / EXPERTISES */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-serif font-bold text-[#0A192F] mb-4">
              {t.services.title}
            </h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Carte Conseil */}
            <div className="bg-white p-8 border border-gray-100 hover:shadow-2xl transition-all group">
              <BarChart3 className="w-10 h-10 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold mb-4 font-serif">{t.services.conseil.title}</h3>
              <ul className="space-y-3 mb-8">
                {t.services.conseil.items.map((item, i) => (
                  <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span> {item}
                  </li>
                ))}
              </ul>
              <Link to="/conseil" className="text-xs font-bold uppercase tracking-widest text-blue-600 group-hover:text-[#0A192F]">
                {t.common.learnMore} →
              </Link>
            </div>

            {/* Carte Audit */}
            <div className="bg-white p-8 border border-gray-100 hover:shadow-2xl transition-all group">
              <ShieldCheck className="w-10 h-10 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold mb-4 font-serif">{t.services.audit.title}</h3>
              <ul className="space-y-3 mb-8">
                {t.services.audit.items.map((item, i) => (
                  <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span> {item}
                  </li>
                ))}
              </ul>
              <Link to="/audit" className="text-xs font-bold uppercase tracking-widest text-blue-600 group-hover:text-[#0A192F]">
                {t.common.learnMore} →
              </Link>
            </div>

            {/* Carte Formation */}
            <div className="bg-white p-8 border border-gray-100 hover:shadow-2xl transition-all group">
              <Award className="w-10 h-10 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold mb-4 font-serif">{t.services.formation.title}</h3>
              <ul className="space-y-3 mb-8">
                {t.services.formation.items.map((item, i) => (
                  <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span> {item}
                  </li>
                ))}
              </ul>
              <Link to="/formation" className="text-xs font-bold uppercase tracking-widest text-blue-600 group-hover:text-[#0A192F]">
                {t.common.learnMore} →
              </Link>
            </div>

            {/* Carte Médiation */}
            <div className="bg-white p-8 border border-gray-100 hover:shadow-2xl transition-all group">
              <Target className="w-10 h-10 text-blue-600 mb-6" />
              <h3 className="text-xl font-bold mb-4 font-serif">{t.services.mediation.title}</h3>
              <ul className="space-y-3 mb-8">
                {t.services.mediation.items.map((item, i) => (
                  <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                    <span className="text-blue-500 mt-1">•</span> {item}
                  </li>
                ))}
              </ul>
              <Link to="/mediation" className="text-xs font-bold uppercase tracking-widest text-blue-600 group-hover:text-[#0A192F]">
                {t.common.learnMore} →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION - Libérer la performance opérationnelle */}
      <section className="py-24 bg-[#0A192F] text-center text-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-serif font-bold mb-6">
            {t.common.ctaTitle} {/* Ici : "Libérez votre Performance Achats" */}
          </h2>
          <p className="text-xl text-gray-400 mb-10 font-light italic">
            {t.common.ctaSubtitle}
          </p>
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
