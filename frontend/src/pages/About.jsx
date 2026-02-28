import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Shield, Target, Award, Users } from 'lucide-react';

const About = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Header */}
      <section className="bg-[#0A192F] py-24 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl lg:text-7xl font-bold font-serif mb-8 animate-fadeIn">
            {t.about.title}
          </h1>
          <p className="text-xl lg:text-2xl text-gray-400 max-w-3xl font-light leading-relaxed">
            {t.about.description}
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl font-bold font-serif mb-8 text-[#0A192F]">{t.about.mission}</h2>
              <p className="text-xl text-gray-700 leading-relaxed font-light mb-8">
                {t.about.missionText}
              </p>
              <div className="border-l-4 border-blue-600 pl-8 py-2">
                <p className="text-gray-900 italic text-lg">
                  {t.common.ctaSubtitle}
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80" 
                alt="Strategy MBK" 
                className="grayscale shadow-2xl"
              />
              <div className="absolute -bottom-10 -left-10 bg-white p-10 shadow-xl hidden lg:block border border-gray-100">
                <div className="text-5xl font-bold text-[#0A192F] mb-2">15+</div>
                <div className="text-sm uppercase tracking-widest text-blue-600 font-bold">{t.stats.experience}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section - Minimalist Cards */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold font-serif mb-16 text-[#0A192F]">{t.about.values}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
            {t.about.valuesList.map((value, index) => (
              <div key={index} className="bg-white p-12 border border-gray-100 transition-all duration-300 hover:bg-[#0A192F] hover:text-white group">
                <h3 className="text-xl font-bold mb-4 font-serif uppercase tracking-tighter">{value.title}</h3>
                <p className="text-gray-500 group-hover:text-gray-300 font-light text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
