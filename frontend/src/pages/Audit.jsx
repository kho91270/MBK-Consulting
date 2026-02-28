import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import SEO from '../components/SEO';
import { FileSearch, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Audit = () => {
  const { t } = useLanguage();
  const pageData = t.pages.audit;

  return (
    <div className="min-h-screen bg-white pt-20">
      <SEO 
        title={pageData.title} 
        description={pageData.description}
        keywords="Audit Achats, Risk Management, Spend Analysis, Diagnostic S2C, Audit de maturité Achats, Conformité Fournisseurs"
      />
      
      <section className="bg-[#0A192F] py-24 text-white font-serif">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl lg:text-7xl font-bold mb-8 italic">{pageData.title}</h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-sans font-light">{pageData.description}</p>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-3xl font-serif font-bold text-[#0A192F]">{pageData.whyTitle}</h2>
            {pageData.benefits.map((benefit, i) => (
              <div key={i} className="flex gap-4">
                <div className="text-blue-600 font-serif text-3xl font-bold opacity-30">0{i+1}</div>
                <div>
                  <h4 className="font-bold text-lg mb-1">{benefit.title}</h4>
                  <p className="text-gray-600 font-light">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-gray-50 p-12 border-t-8 border-blue-600 shadow-xl">
            <FileSearch className="w-12 h-12 text-blue-600 mb-6" />
            <ul className="space-y-4 mb-10 font-light italic text-gray-700">
              {t.services.audit.items.map((item, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" /> {item}
                </li>
              ))}
            </ul>
            <Link to="/contact">
              <button className="w-full bg-[#0A192F] text-white py-4 font-bold uppercase tracking-widest text-xs hover:bg-blue-600 transition-all">
                {pageData.ctaAudit}
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Audit;
