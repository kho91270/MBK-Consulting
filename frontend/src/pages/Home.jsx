import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import SEO from '../components/SEO';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  // On extrait BIEN t et language
  const { t, language } = useLanguage();

  return (
    <div className="w-full overflow-x-hidden bg-white">
      <SEO title={t.hero.title} description={t.hero.description} />

      {/* Hero Section - On force une hauteur et un z-index */}
      <section className="relative min-h-screen flex items-center bg-[#0A192F] text-white pt-20">
        <div className="max-w-7xl mx-auto px-6 z-20">
          <div className="max-w-3xl">
            <span className="text-blue-500 font-bold tracking-widest uppercase text-xs">
              {t.hero.subtitle}
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-serif mt-4 mb-6 leading-tight">
              {t.hero.title}
            </h1>
            <p className="text-lg md:text-xl text-gray-400 mb-8 font-light leading-relaxed">
              {t.hero.description}
            </p>
            <Link to="/contact" className="inline-block">
              <button className="bg-blue-600 text-white px-8 py-4 font-bold uppercase tracking-widest text-xs hover:bg-blue-700 transition-all flex items-center gap-3">
                {t.hero.cta} <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
