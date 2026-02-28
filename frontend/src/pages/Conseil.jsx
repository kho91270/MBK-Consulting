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
      
      <section className="bg-[#0A192F] py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-blue-400 font-bold tracking-[0.2em] uppercase text-sm">{t.nav.conseil}</span>
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

              {/* CORRECTION ICI : TEXTE DYNAMIQUE */}
              <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-6 bg-blue-50 border-l-4 border-blue-600">
                  <Target className="w-8 h-8 text-blue-600 mb-4" />
                  <h4 className="font-bold text-[#0A192F] mb-2">{pageData.roiTitle}</h4>
                  <p className="text-sm text-gray-600">{pageData.roiDesc}</p>
                </div>
                <div className="p-6 bg-gray-50 border-l-4 border-[#0A192F]">
                  <ShieldCheck className="w-8 h-8 text-[#0A192F] mb-4" />
                  <h4 className="font-bold text-[#0A192F] mb-2">{pageData.secTitle}</h4>
                  <p className="text-sm text-gray-600">{pageData.secDesc}</p>
                </div>
              </div>
            </div>

            <div className="bg-[#0A192F] p-12 self-start shadow-2xl">
              <h3 className="text-2xl font-bold font-serif mb-8 text-white flex items-center gap-3">
                <TrendingUp className="text-blue-400" /> Ingénierie de Sourcing
              </h3>
              <ul className="space-y-6 mb-12">
                {t.services.conseil.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4 text-gray-300 font-light italic">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" /> {item}
                  </li>
                ))}
              </ul>
              <Link to="/contact">
                <button className="w-full bg-white text-[#0A192F] py-4 font-bold uppercase tracking-widest text-xs hover:bg-blue-600 hover:text-white transition-all">
                  Engager une consultation
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Conseil;
