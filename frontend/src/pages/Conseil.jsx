import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import SEO from '../components/SEO';
import { Target, ShieldCheck, TrendingUp, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Conseil = () => {
  const { t } = useLanguage();
  const pageData = t.pages.conseil;

  return (
    <div className="min-h-screen bg-white pt-20">
      <SEO 
        title={pageData.title} 
        description={pageData.description}
        keywords="Category Management, Sourcing Stratégique, Réduction des coûts, Global Sourcing, TCO Analysis, Optimisation panel fournisseurs"
      />
      
      <section className="bg-[#0A192F] py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl lg:text-7xl font-bold font-serif mb-8 leading-tight">{pageData.title}</h1>
          <p className="text-xl lg:text-2xl text-gray-400 max-w-3xl font-light leading-relaxed">{pageData.description}</p>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <h2 className="text-3xl font-bold font-serif mb-12 text-[#0A192F]">{pageData.whyTitle}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-blue-50 border-l-4 border-blue-600">
              <Target className="w-8 h-8 text-blue-600 mb-4" />
              <h4 className="font-bold text-[#0A192F] mb-2">{pageData.roiTitle}</h4>
              <p className="text-sm text-gray-600 font-light">{pageData.roiDesc}</p>
            </div>
            <div className="p-6 bg-gray-50 border-l-4 border-[#0A192F]">
              <ShieldCheck className="w-8 h-8 text-[#0A192F] mb-4" />
              <h4 className="font-bold text-[#0A192F] mb-2">{pageData.secTitle}</h4>
              <p className="text-sm text-gray-600 font-light">{pageData.secDesc}</p>
            </div>
          </div>
        </div>

        <div className="bg-[#0A192F] p-12 text-white shadow-2xl">
          <h3 className="text-2xl font-bold font-serif mb-8 flex items-center gap-3">
            <TrendingUp className="text-blue-400" /> Expertise Conseil
          </h3>
          <ul className="space-y-6">
            {t.services.conseil.items.map((item, idx) => (
              <li key={idx} className="flex items-start gap-4 text-gray-300 italic font-light">
                <CheckCircle2 className="w-5 h-5 text-blue-400 mt-1" /> {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Conseil;
