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

      {/* SECTION HERO - Gardée et optimisée */}
      <section className="relative h-screen flex items-center bg-[#0A192F] overflow-hidden text-white">
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
        {/* Effet visuel subtil en arrière-plan */}
        <div className="absolute right-0 bottom-0 opacity-10 hidden lg:block">
            <BarChart3 size={600} strokeWidth={1} />
        </div>
      </section>

      {/* SECTION SERVICES - AJOUTÉE pour la crédibilité */}
      <section className="py-24 bg-gray-50 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            
            {/* Conseil */}
            <div className="bg-white p-10 border-b-4 border-blue-600 shadow-sm hover:shadow-xl transition-all group">
              <ShieldCheck className="w-12 h-12 text-blue-600 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-serif font-bold text-[#0A192F] mb-4">{t.nav.conseil}</h3>
              <p className="text-gray-600 text-sm font-light leading-relaxed mb-6">Optimisation stratégique de vos flux et réduction durable des coûts.</p>
              <Link to="/conseil" className="text-blue-600 text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
                {t.common.learnMore} <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            {/* Audit */}
            <div className="bg-white p-10 border-b-4 border-blue-900 shadow-sm hover:shadow-xl transition-all group">
              <Target className="w-12 h-12 text-[#0A192F] mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-serif font-bold text-[#0A192F] mb-4">{t.nav.audit}</h3>
              <p className="text-gray-600 text-sm font-light leading-relaxed mb-6">Diagnostic complet de votre maturité achats et gestion des risques.</p>
              <Link to="/audit" className="text-blue-600 text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
                {t.common.learnMore} <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            {/* Formation */}
            <div className="bg-white p-10 border-b-4 border-blue-600 shadow-sm hover:shadow-xl transition-all group">
              <Award className="w-12 h-12 text-blue-600 mb-6 group-hover:scale-110 transition-transform" />
              <h3 className="text-2xl font-serif font-bold text-[#0A192F] mb-4">{t.nav.formation}</h3>
              <p className="text-gray-600 text-sm font-light leading-relaxed mb-6">Programmes d'excellence pour élever le leadership de vos équipes.</p>
              <Link to="/formation" className="text-blue-600 text-[10px] font-bold uppercase tracking-widest flex items-center gap-2">
                {t.common.learnMore} <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* SECTION CTA FINALE - Gardée et optimisée */}
      <section className="py-32 bg-[#0A192F] text-center text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">{t.common.ctaTitle}</h2>
          <p className="text-xl text-gray-400 mb-12 font-light italic">{t.common.ctaSubtitle}</p>
          <Link to="/contact">
            <button className="border border-white/30 px-12 py-5 font-bold uppercase tracking-[0.3em] text-[10px] hover:bg-white hover:text-[#0A192F] transition-all">
              {t.nav.contact}
            </button>
          </Link>
        </div>
        {/* Décoration subtile */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-600 to-transparent opacity-50" />
      </section>
    </div>
  );
};

export default Home;
