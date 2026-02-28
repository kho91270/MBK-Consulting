import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import SEO from '../components/SEO';
import { FileSearch, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Audit = () => {
  const { t } = useLanguage();
  const pageData = t.pages.audit;

  return (
    <div className="min-h-screen bg-white">
      <SEO title={`${pageData.title} | MBK Procurement`} />
      
      <section className="bg-[#0A192F] py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-blue-400 font-bold tracking-[0.2em] uppercase text-sm">{t.nav.audit}</span>
          <h1 className="text-5xl lg:text-7xl font-bold font-serif mt-4 mb-8 leading-tight">{pageData.title}</h1>
          <p className="text-xl lg:text-2xl text-gray-400 max-w-3xl font-light leading-relaxed">{pageData.description}</p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-3xl font-bold font-serif mb-12 text-[#0A192F] border-b border-gray-100 pb-4">{pageData.whyTitle}</h2>
              <div className="space-y-12">
                {pageData.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-6 group">
                    <div className="w-12 h-12 bg-gray-50 flex items-center justify-center flex-shrink-0 border border-gray-100 group-hover:bg-blue-600 transition-all">
                      <span className="font-serif font-bold text-lg group-hover:text-white">{index + 1}</span>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h4>
                      <p className="text-gray-600 leading-relaxed font-light">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 p-12 self-start border-t-4 border-blue-600">
              <div className="flex items-center gap-4 mb-6 text-[#0A192F]">
                <FileSearch className="w-8 h-8 text-blue-600" />
                <h3 className="text-2xl font-bold font-serif">Diagnostic 360°</h3>
              </div>
              <ul className="space-y-4 mb-10">
                {t.services.audit.items.map((item, idx) => (
                  <li key={idx} className="flex items-center text-gray-700 text-sm italic">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" /> {item}
                  </li>
                ))}
              </ul>
              <Link to="/contact">
                {/* CORRECTION ICI : BOUTON DYNAMIQUE */}
                <button className="w-full bg-[#0A192F] text-white py-4 font-bold uppercase tracking-widest text-xs hover:bg-blue-600 transition-all">
                  {pageData.ctaAudit}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Audit;
