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
          <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000" alt="MBK" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <span className="text-blue-500 font-bold tracking-[0.5em] uppercase text-[10px] mb-6 block">Performance Architect</span>
          <h1 className="text-6xl md:text-8xl font-serif font-bold text-white mb-10 leading-[0.9] tracking-tighter uppercase">{t.hero.title}</h1>
          <p className="max-w-xl text-xl text-gray-400 font-light leading-relaxed mb-12 border-l border-blue-600/30 pl-8">{t.hero.description}</p>
          <Link to="/contact" className="group inline-flex items-center gap-8 text-white uppercase tracking-[0.3em] text-[11px] font-bold">
            {t.hero.cta} <ArrowRight className="w-5 h-5 group-hover:translate-x-3 transition-transform" />
          </Link>
        </div>
      </section>

      <section className="py-32 px-8 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-4 gap-px bg-gray-200 border border-gray-200">
          {Object.entries(t.services).filter(([k]) => k !== 'title').map(([key, service], idx) => (
            <Link key={key} to={`/${key}`} className="bg-white p-12 hover:bg-gray-50 transition-all group">
              <span className="text-[9px] font-mono text-blue-600 mb-10 block font-bold">0{idx + 1} //</span>
              <h3 className="text-2xl font-serif font-bold text-[#0A192F] mb-6 leading-tight group-hover:text-blue-600">{service.title}</h3>
              <p className="text-sm text-gray-500 font-light leading-relaxed italic">{service.items[0]} & {service.items[1]}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
