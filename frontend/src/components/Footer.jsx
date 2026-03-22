import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { language } = useLanguage();

  return (
    <footer className="bg-white border-t border-gray-100 py-20 px-8 w-full">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-end">
          <div className="space-y-4">
            <h2 className="text-2xl !font-serif !font-bold !italic text-[#0A192F]">
              MBK Procurement<span className="text-blue-600">.</span>
            </h2>
            <p className="text-[10px] uppercase tracking-[0.5em] text-gray-400 font-bold">
              Performance & Strategy Architect
            </p>
          </div>
          <div className="flex flex-col md:flex-row md:justify-end gap-8">
            <Link to="/mentions-legales" className="text-[10px] uppercase tracking-[0.4em] text-gray-500 hover:text-blue-600 font-bold transition-colors">
              {language === 'en' ? 'Legal Notice' : 'Mentions Légales'}
            </Link>
            <Link to="/confidentialite" className="text-[10px] uppercase tracking-[0.4em] text-gray-500 hover:text-blue-600 font-bold transition-colors">
              {language === 'en' ? 'Privacy' : 'Confidentialité'}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
