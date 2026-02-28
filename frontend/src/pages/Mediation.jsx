import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import SEO from '../components/SEO';
import { ShieldAlert, Handshake, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Mediation = () => {
  const { t } = useLanguage();
  const pageData = t.pages.mediation;

  return (
    <div className="min-h-screen bg-white">
      <SEO title={`${pageData.title} | MBK Procurement`} />
      
      <section className="bg-[#0A192F] py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-blue-400 font-bold tracking-[0.2em] uppercase text-sm">{t.nav.mediation}</span>
          <h1 className="text-5xl lg:text-7xl font-bold font-serif mt-4 mb-8">{pageData.title}</h1>
          <p className="text-xl lg:text-2xl text-gray-400 max-w-3xl font-light leading-relaxed">
            {pageData.description}
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gray-50 border border-gray-100 p-12 mb-20">
               <h2 className="text-3xl font-bold font-serif mb-8 text-[#0A192F] text-center">{pageData.whyTitle}</h2>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  {pageData.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <ShieldAlert className="w-6 h-6 text-blue-600 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-gray-900">{benefit.title}</h4>
                        <p className="text-gray-600 text-sm mt-1">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
               </div>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold font-serif mb-10 text-[#0A192F]">Expertise en Résolution de Conflits</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mb-12">
                {t.services.mediation.items.map((item, idx) => (
                  <div key={idx} className="flex items-center p-4 border-l-2 border-blue-600 bg-white shadow-sm">
                    <Handshake className="w-5 h-5 text-gray-400 mr-4" />
                    <span className="text-gray-700 text-sm italic">{item}</span>
                  </div>
                ))}
              </div>
              <Link to="/contact">
                <button className="bg-[#0A192F] text-white px-12 py-5 font-bold uppercase tracking-widest text-xs hover:bg-blue-600 transition-all">
                  Engager une Médiation Confidentielle
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
