import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import SEO from '../components/SEO';
import { Award, Target, BookOpen } from 'lucide-react';

const About = () => {
  // Sécurité : extraction de t et language
  const { t, language } = useLanguage();
  const a = t.about;

  return (
    <div className="min-h-screen bg-white pt-32 pb-20 px-6">
      <SEO title={`${t.nav.about} | MBK Procurement`} />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-24">
          <div>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-[#0A192F] mb-8">
              {t.nav.about}
            </h1>
            <p className="text-lg text-gray-600 font-light leading-relaxed mb-6">
              {a.intro}
            </p>
            <p className="text-gray-500 font-light leading-relaxed italic">
              {language === 'fr' 
                ? "Notre approche repose sur l'excellence opérationnelle et l'intégrité." 
                : "Our approach is based on operational excellence and integrity."}
            </p>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80" 
              alt="Team Workshop" 
              className="w-full h-[500px] object-cover shadow-2xl"
            />
          </div>
        </div>

        {/* Section Valeurs */}
        <div className="grid md:grid-cols-3 gap-12 border-t border-gray-100 pt-16">
          <div className="text-center">
            <Target className="w-8 h-8 text-blue-600 mx-auto mb-4" />
            <h4 className="font-bold uppercase tracking-tighter text-[#0A192F]">Mission</h4>
          </div>
          <div className="text-center">
            <Award className="w-8 h-8 text-blue-600 mx-auto mb-4" />
            <h4 className="font-bold uppercase tracking-tighter text-[#0A192F]">Excellence</h4>
          </div>
          <div className="text-center">
            <BookOpen className="w-8 h-8 text-blue-600 mx-auto mb-4" />
            <h4 className="font-bold uppercase tracking-tighter text-[#0A192F]">Expertise</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
