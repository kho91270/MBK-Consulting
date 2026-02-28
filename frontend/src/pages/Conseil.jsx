import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import SEO from '../components/SEO';
import { CheckCircle2, Target, TrendingUp, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const Conseil = () => {
  const { t } = useLanguage();
  const pageData = t.pages.conseil;

  return (
    <div className="min-h-screen bg-white">
      <SEO title={`${pageData.title} | MBK Procurement`} />
      
      {/* HEADER INSTITUTIONNEL - STYLE MCKINSEY */}
      <section className="bg-[#0A192F] py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-blue-400 font-bold tracking-[0.2em] uppercase text-sm">{t.nav.conseil}</span>
          <h1 className="text-5xl lg:text-7xl font-bold font-serif mt-4 mb-8 leading-tight">
            {pageData.title}
          </h1>
          <p className="text-xl lg:text-2xl text-gray-400 max-w-3xl font-light leading-relaxed">
            {pageData.description}
          </p>
        </div>
      </section>

      {/* SECTION STRATÉGIE ET VALEUR */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            
            {/* Colonne Gauche : Pourquoi MBK ? */}
            <div>
              <h2 className="text-3xl font-bold font-serif mb-12 text-[#0A192F] border-b border-gray-100 pb-4">
                {pageData.whyTitle}
              </h2>
              <div className="space-y-12">
                {pageData.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-6 group">
                    <div className="w-12 h-12 bg-gray-50 flex items-center justify-center flex-shrink-0 border border-gray-100 group-hover:bg-blue-600 transition-all duration-300">
                      <span className="text-[#0A192F] font-serif font-bold text-lg group-hover:text-white">{index + 1}</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h4>
                      <p className="text-gray-600 leading-relaxed font-light">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Rappel des valeurs ajoutées */}
              <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-6 bg-blue-50 border-l-4 border-blue-600">
                  <Target className="w-8 h-8 text-blue-600 mb-4" />
                  <h4 className="font-bold text-[#0A192F] mb-2">Objectifs ROI</h4>
                  <p className="text-sm text-gray-600">Chaque mission est alignée sur vos indicateurs de rentabilité.</p>
                </div>
                <div className="p-6 bg-gray-50 border-l-4 border-[#0A192F]">
                  <ShieldCheck className="w-8 h-8 text-[#0A192F] mb-4" />
                  <h4 className="font-bold text-[#0A192F] mb-2">Sécurisation</h4>
                  <p className="text-sm text-gray-600">Protection contractuelle et pérennité des sources d'approvisionnement.</p>
                </div>
              </div>
            </div>

            {/* Colonne Droite : Le Catalogue d'Expertise */}
            <div className="bg-[#0A192F] p-12 self-start shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-full -mr-16 -mt-16"></div>
              
              <h3 className="text-2xl font-bold font-serif mb-8 text-white flex items-center gap-3">
                <TrendingUp className="text-blue-400" />
                Ingénierie de Sourcing
              </h3>
              
              <ul className="space-y-6 mb-12">
                {t.services.conseil.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                    <span className="text-gray-300 font-light leading-relaxed italic">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-8 border-t border-gray-800">
                <p className="text-gray-400 text-sm mb-8 font-light italic">
                  "Nous transformons vos achats en un levier de croissance stratégique."
                </p>
                <Link to="/contact">
                  <button className="w-full bg-white text-[#0A192F] py-4 font-bold uppercase tracking-widest text-xs hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-lg">
                    Engager une consultation
                  </button>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Section CTA Bas de page */}
      <section className="bg-gray-50 py-20 border-t border-gray-100 text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h3 className="text-3xl font-serif font-bold text-[#0A192F] mb-6">Prêt à optimiser votre performance ?</h3>
          <p className="text-gray-600 mb-10 font-light">
            Analysons ensemble vos besoins spécifiques pour définir la stratégie la plus adaptée à votre organisation.
          </p>
          <Link to="/contact" className="inline-block text-blue-600 font-bold uppercase tracking-[0.2em] text-xs border-b-2 border-blue-600 pb-2 hover:text-[#0A192F] hover:border-[#0A192F] transition-all">
            Prendre rendez-vous avec un consultant &rarr;
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Conseil;
