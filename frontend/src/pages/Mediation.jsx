import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import SEO from '../components/SEO';
import { ShieldAlert, Handshake } from 'lucide-react';
import { Link } from 'react-router-dom';

const Mediation = () => {
  const { t, language } = useLanguage();
  const pageData = t.pages.mediation;

  if (!t || !pageData) return null;

  return (
    <div className="min-h-screen bg-white">
      <SEO title={`${pageData.title} | MBK Procurement`} />
      
      {/* Hero Section Institutionnelle */}
      <section className="bg-[#0A192F] py-24 text-white font-serif">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-blue-400 font-sans font-bold tracking-[0.2em] uppercase text-xs">
            {t.nav.mediation}
          </span>
          <h1 className="text-5xl lg:text-7xl font-bold mt-4 mb-8">
            {pageData.title}
          </h1>
          <p className="text-xl lg:text-2xl text-gray-400 max-w-3xl font-light leading-relaxed font-sans">
            {pageData.description}
          </p>
        </div>
      </section>

      {/* Analyse et Valeur Ajoutée */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 border border-gray-100 p-12 mb-20 shadow-sm">
               <h2 className="text-3xl font-bold font-serif mb-8 text-[#0A192F] text-center">
                 {pageData.whyTitle}
               </h2>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  {pageData.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <ShieldAlert className="w-6 h-6 text-blue-600 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900 uppercase tracking-widest text-[10px] mb-2">
                          {benefit.title}
                        </h4>
                        <p className="text-gray-600 text-sm font-light leading-relaxed">
                          {benefit.description}
                        </p>
                      </div>
                    </div>
                  ))}
               </div>
            </div>

            {/* Section Expertise et Méthodologie */}
            <div className="text-center">
              <h3 className="text-2xl font-bold font-serif mb-10 text-[#0A192F]">
                {pageData.expertiseTitle}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mb-12 font-sans">
                {t.services.mediation.items.map((item, idx) => (
                  <div key={idx} className="flex items-center p-5 border-l-2 border-blue-600 bg-white shadow-sm italic text-gray-700 text-sm">
                    <Handshake className="w-5 h-5 text-gray-400 mr-4 flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              
              {/* Bouton d'action dynamique */}
              <Link to="/contact">
                <button className="bg-[#0A192F] text-white px-12 py-5 font-bold uppercase tracking-[0.3em] text-[10px] hover:bg-blue-600 transition-all shadow-xl">
                  {pageData.ctaButton}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mediation;
