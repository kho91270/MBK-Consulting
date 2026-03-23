import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight } from 'lucide-react';

const Home = () => {
  const { t, language } = useLanguage();

  if (!t || !t.hero) return null;

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* SECTION HERO */}
      <section className="relative h-screen flex items-center bg-[#0A192F] px-8 overflow-hidden">
        <div className="absolute inset-0 opacity-25 grayscale contrast-125">
          <img 
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000" 
            alt="Structure architecturale moderne symbolisant la performance de MBK Procurement" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <h1 className="text-5xl md:text-8xl font-serif font-bold text-white mb-10 leading-[1.05] tracking-tighter italic max-w-5xl">
            {t.hero.title}<span className="text-blue-600">.</span>
          </h1>

          <p className="max-w-2xl text-xl text-gray-400 font-light leading-relaxed mb-14 border-l-2 border-blue-600/50 pl-10 italic">
            {t.hero.description}
          </p>

          <Link to="/contact" className="group flex items-center gap-6 bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 text-[11px] font-bold uppercase tracking-[0.3em] transition-all w-fit shadow-2xl">
            {t.hero.cta}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-3 transition-transform duration-500" />
          </Link>
        </div>
      </section>

      {/* --- SECTION ÉTUDE DE CAS (CASE STUDY) --- */}
      <section className="py-32 bg-white px-8 border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            
            {/* TEXTE & CONTEXTE PROFESSIONNEL */}
            <div className="space-y-12">
              <h2 className="text-4xl md:text-6xl !font-serif !font-bold italic tracking-tighter leading-tight text-[#0A192F]">
                {language === 'fr' ? 'Expertise en Action' : 'Expertise in Action'}<span className="text-blue-600">.</span>
              </h2>
              
              <div className="space-y-8 border-l-2 border-blue-600 pl-8">
                <h3 className="text-blue-600 text-[10px] font-bold uppercase tracking-[0.3em]">
                  {language === 'fr' ? 'Transformation & Gouvernance' : 'Transformation & Governance'}
                </h3>
                <p className="text-xl text-gray-600 font-light leading-relaxed italic">
                  {language === 'fr' 
                    ? "Ingénierie d'un département achats complet : catégorisation des familles, structuration des équipes, implémentation de processus cibles et pilotage d'appels d'offres européens stratégiques."
                    : "Engineering of a procurement department: category management, team structuring, process implementation, and strategic European tender management."}
                </p>
                <p className="text-gray-500 text-lg font-light italic">
                  {language === 'fr'
                    ? "Définition de la politique achat et revue globale du parc contractuel."
                    : "Definition of procurement policy and global review of the contract portfolio."}
                </p>
              </div>
            </div>

            {/* KPI BOXES (Les chiffres d'élite) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* CARTE COMPLIANCE */}
              <div className="bg-[#0A192F] p-10 shadow-2xl group hover:-translate-y-2 transition-transform duration-500">
                <div className="text-blue-500 text-[10px] font-bold tracking-[0.3em] mb-4">COMPLIANCE</div>
                <div className="text-5xl font-serif italic text-white mb-2">13% <span className="text-blue-600">→</span> 96%</div>
                <p className="text-gray-400 text-xs font-light tracking-wide uppercase">
                  {language === 'fr' ? 'Conformité Contractuelle' : 'Contractual Compliance'}
                </p>
              </div>

              {/* CARTE ECONOMIES */}
              <div className="bg-gray-50 p-10 border border-gray-100 group hover:-translate-y-2 transition-transform duration-500">
                <div className="text-blue-600 text-[10px] font-bold tracking-[0.3em] mb-4">SAVINGS</div>
                <div className="text-5xl font-serif italic text-[#0A192F] mb-2">-23%</div>
                <p className="text-gray-500 text-xs font-light tracking-wide uppercase">
                  {language === 'fr' ? 'Sur appels d\'offres Européens' : 'On European Tenders'}
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
