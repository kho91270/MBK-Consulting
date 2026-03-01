import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight, ShieldCheck, Target, Award, Scale } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const { t } = useLanguage();

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-[#0A192F] text-white pt-20">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <span className="text-blue-500 font-bold tracking-[0.3em] uppercase text-xs">
            {t?.hero?.subtitle}
          </span>
          <h1 className="text-5xl md:text-7xl font-serif font-bold mt-6 mb-8 leading-tight">
            {t?.hero?.title}
          </h1>
          <p className="text-xl text-gray-400 mb-10 font-light leading-relaxed max-w-2xl">
            {t?.hero?.description}
          </p>
          <Link to="/audit" className="inline-flex items-center gap-4 bg-blue-600 text-white px-10 py-5 font-bold uppercase tracking-widest text-xs hover:bg-blue-700 transition-all">
            {t?.hero?.cta} <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Grid Services - Utilise la clé 'services' de ton mockData */}
      <section className="py-24 bg-gray-50 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {['conseil', 'audit', 'formation', 'mediation'].map((key) => (
            <div key={key} className="bg-white p-8 shadow-sm border-t-4 border-blue-600 flex flex-col h-full">
              <h3 className="font-serif font-bold text-lg mb-4 text-[#0A192F]">
                {t?.services?.[key]?.title}
              </h3>
              <ul className="text-sm text-gray-600 space-y-3 font-light flex-grow">
                {t?.services?.[key]?.items?.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-blue-600">•</span> {item}
                  </li>
                ))}
              </ul>
              <Link to={`/${key}`} className="mt-6 text-blue-600 font-bold text-[10px] uppercase tracking-widest hover:gap-3 transition-all flex items-center gap-2">
                Détails <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
