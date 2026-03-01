import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import SEO from '../components/SEO';

const About = () => {
  const { t } = useLanguage();
  const aboutData = t.about;

  return (
    <div className="min-h-screen bg-white pt-20">
      <SEO 
        title={`${t.nav.about} | MBK Procurement`} 
        description={aboutData.description}
        keywords="Cabinet Conseil Achats Paris, Expertise MBK Procurement, Valeurs MBK, Consultants Achats EMEA"
      />
      
      <section className="bg-[#0A192F] py-32 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-5xl lg:text-7xl font-bold font-serif mb-8 italic">{aboutData.title}</h1>
          <p className="text-xl text-gray-400 font-light leading-relaxed">{aboutData.description}</p>
        </div>
      </section>

      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div>
          <h2 className="text-3xl font-bold font-serif text-[#0A192F] mb-6">{aboutData.mission}</h2>
          <p className="text-gray-600 text-lg font-light leading-relaxed">{aboutData.missionText}</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {aboutData.valuesList.map((value, idx) => (
            <div key={idx} className="p-8 bg-gray-50 border border-gray-100 hover:shadow-xl transition-all">
              <h4 className="font-bold text-blue-600 uppercase tracking-widest text-[10px] mb-3">{value.title}</h4>
              <p className="text-sm text-gray-600 font-light leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
