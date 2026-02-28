import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import SEO from '../components/SEO';
import { GraduationCap, CheckCircle2, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const Formation = () => {
  const { t } = useLanguage();
  const pageData = t.pages.formation;

  return (
    <div className="min-h-screen bg-white">
      <SEO title={`${pageData.title} | MBK Procurement`} />
      
      <section className="bg-[#0A192F] py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-blue-400 font-bold tracking-[0.2em] uppercase text-sm">{t.nav.formation}</span>
          <h1 className="text-5xl lg:text-7xl font-bold font-serif mt-4 mb-8">{pageData.title}</h1>
          <p className="text-xl lg:text-2xl text-gray-400 max-w-3xl font-light leading-relaxed">
            {pageData.description}
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold font-serif mb-12 text-[#0A192F]">{pageData.whyTitle}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {pageData.benefits.map((benefit, index) => (
                  <div key={index} className="p-8 border border-gray-100 hover:border-blue-600 transition-colors">
                    <Award className="w-8 h-8 text-blue-600 mb-4" />
                    <h4 className="font-bold text-gray-900 mb-2">{benefit.title}</h4>
                    <p className="text-gray-600 text-sm font-light">{benefit.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="order-1 lg:order-2 bg-[#0A192F] p-12 text-white">
              <h3 className="text-2xl font-bold font-serif mb-8 flex items-center gap-3">
                <GraduationCap className="text-blue-400" /> Transfert de Savoir
              </h3>
              <ul className="space-y-6">
                {t.services.formation.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-4">
                    <div className="mt-1.5 w-2 h-2 bg-blue-400 rounded-full"></div>
                    <span className="text-gray-300 font-light leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
              <Link to="/contact">
                <button className="mt-12 w-full bg-white text-[#0A192F] py-4 font-bold uppercase tracking-widest text-xs hover:bg-blue-400 hover:text-white transition-all">
                  Consulter les Programmes
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Formation;
