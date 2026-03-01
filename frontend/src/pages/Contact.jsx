import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Contact = () => {
  const { t, language } = useLanguage();
  return (
    <div className="min-h-screen bg-[#0A192F] text-white pt-48 pb-32 px-8">
      <div className="max-w-7xl mx-auto">
        <span className="text-blue-500 font-bold tracking-[0.5em] uppercase text-[10px] mb-8 block">{t.common.ctaTitle} // 05</span>
        <h1 className="text-6xl md:text-8xl font-serif font-bold mb-20 tracking-tighter uppercase leading-none italic">{t.nav.contact}.</h1>
        <div className="grid lg:grid-cols-2 gap-20">
          <div className="space-y-12">
            <div className="border-l-2 border-blue-600 pl-8 py-4">
              <h3 className="text-sm uppercase tracking-widest text-gray-400 mb-4 font-bold">Email</h3>
              <a href="mailto:contact@mbkprocurement.com" className="text-2xl md:text-4xl font-light hover:text-blue-400 transition-colors">contact@mbkprocurement.com</a>
            </div>
          </div>
          <div className="bg-white/5 p-12 backdrop-blur-md border border-white/10">
            <h2 className="text-2xl font-serif mb-6 italic">{t.common.maintenance}</h2>
            <p className="text-gray-400 font-light">
              {language === 'en' ? "Our secure communication protocols are being updated." : "Nos protocoles de communication sécurisés sont en cours de mise à jour."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
