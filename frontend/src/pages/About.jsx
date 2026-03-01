import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import SEO from '../components/SEO';

const About = () => {
  const { t, language } = useLanguage();
  const content = t?.about || {};

  return (
    <div className="min-h-screen bg-white pt-32 pb-20 px-6">
      <SEO title={`${t?.nav?.about || 'À Propos'} | MBK`} />
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-[#0A192F] mb-8">
          {t?.nav?.about}
        </h1>
        <p className="text-lg text-gray-600 font-light leading-relaxed max-w-4xl">
          {content?.intro || (language === 'fr' ? "Expertise MBK Procurement." : "MBK Procurement expertise.")}
        </p>
      </div>
    </div>
  );
};

export default About;
