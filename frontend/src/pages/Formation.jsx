import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import SEO from '../components/SEO';
import { GraduationCap, Award, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const Formation = () => {
  const { t, language } = useLanguage();
  const pageData = t.pages.formation;

  return (
    <div className="min-h-screen bg-white pt-20">
      <SEO 
        title={pageData.title} 
        description={pageData.description}
        keywords="Formation Achats, Négociation Harvard, SRM Training, Leadership Acheteur, Academy Procurement, Certification Achats"
      />
      
      <section className="bg-[#0A192F] py-24 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl lg:text-7xl font-bold font-serif mb-8">{pageData.title}</h1>
          <p className="text-xl text-gray-400 font-light">{pageData.description}</p>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div className="bg-[#0A192F] p-12 text-white shadow-2xl">
          <h3 className="text-2xl font-bold font-serif mb-8 flex items-center gap-3">
            <GraduationCap className="text-blue-400" /> {language === 'fr' ? 'Transfert de Savoir' : 'Knowledge Transfer'}
          </h3>
          <ul className="space-y-6 mb-12 italic text-gray-300 font-light">
            {t.services.formation.items.map((item, idx) => (
              <li key={idx} className="flex items-start gap-4">
                <div className="mt-2 w-1.5 h-1.5 bg-blue-400 rotate-45"></div> {item}
              </li>
            ))}
          </ul>
          <Link to="/contact">
            <button className="w-full bg-white text-[#0A192F] py-4 font-bold uppercase tracking-widest text-xs hover:bg-blue-600 hover:text-white transition-all">
              {pageData.viewPrograms}
            </button>
          </Link>
        </div>
        <div className="space-y-12">
          <h2 className="text-3xl font-serif font-bold text-[#0A192F]">{pageData.whyTitle}</h2>
          {pageData.benefits.map((benefit, i) => (
            <div key={i} className="flex items-start gap-4 p-6 bg-gray-50 border border-gray-100">
              <Award className="w-8 h-8 text-blue-600" />
              <div>
                <h4 className="font-bold text-gray-900 mb-2">{benefit.title}</h4>
                <p className="text-sm text-gray-600 font-light leading-relaxed">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Formation;
