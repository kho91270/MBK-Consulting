import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import SEO from '../components/SEO';
import { ShieldAlert, Handshake } from 'lucide-react';
import { Link } from 'react-router-dom';

const Mediation = () => {
  const { t } = useLanguage();
  const pageData = t.pages.mediation;

  return (
    <div className="min-h-screen bg-white pt-20">
      <SEO 
        title={pageData.title} 
        description={pageData.description}
        keywords="Médiation Commerciale, Résolution de litiges, Gestion de crise Fournisseurs, Continuité Supply Chain, Médiateur Inter-entreprises"
      />
      
      <section className="bg-[#0A192F] py-32 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl lg:text-7xl font-bold font-serif mb-8 italic">{pageData.title}</h1>
          <p className="text-xl text-gray-400 font-light leading-relaxed">{pageData.description}</p>
        </div>
      </section>

      <section className="py-24 max-w-5xl mx-auto px-4">
        <div className="bg-gray-50 p-12 mb-20 text-center border-b-4 border-blue-600">
          <h2 className="text-3xl font-bold font-serif mb-12 text-[#0A192F]">{pageData.whyTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
            {pageData.benefits.map((benefit, i) => (
              <div key={i} className="flex gap-4">
                <ShieldAlert className="w-6 h-6 text-blue-600 flex-shrink-0" />
                <div>
                  <h4 className="font-bold uppercase tracking-widest text-[10px] mb-2">{benefit.title}</h4>
                  <p className="text-sm text-gray-600 font-light">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold font-serif mb-10 text-[#0A192F]">{pageData.expertiseTitle}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {t.services.mediation.items.map((item, idx) => (
              <div key={idx} className="flex items-center p-5 border-l-4 border-blue-600 bg-white shadow-sm italic text-sm text-gray-700">
                <Handshake className="w-5 h-5 text-gray-400 mr-4" /> {item}
              </div>
            ))}
          </div>
          <Link to="/contact">
            <button className="bg-[#0A192F] text-white px-12 py-5 font-bold uppercase tracking-[0.3em] text-[10px] hover:bg-blue-600 transition-all shadow-xl">
              {pageData.ctaButton}
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Mediation;
