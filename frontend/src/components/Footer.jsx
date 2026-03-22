import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Footer = () => {
  const { language } = useLanguage();

  return (
    <footer className="bg-white border-t border-gray-100 py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-end">
          
          {/* Bloc Gauche : Identité */}
          <div className="space-y-6">
            <h2 className="text-2xl font-serif font-bold italic text-[#0A192F]">
              MBK Procurement<span className="text-blue-600">.</span>
            </h2>
            <p className="text-xs uppercase tracking-[0.5em] text-gray-400 font-bold">
              Performance & Strategy Architect
            </p>
          </div>

          {/* Bloc Droit : Liens Légaux */}
          <div className="flex flex-col md:flex-row md:justify-end gap-8 md:gap-12">
            <Link 
              to="/mentions-legales" 
              className="text-[10px] uppercase tracking-[0.4em] text-gray-500 hover:text-blue-600 transition-colors duration-500 font-bold"
            >
              {language === 'fr' ? 'Mentions Légales' : 'Legal Notice'}
            </Link>
            <Link 
              to="/confidentialite" 
              className="text-[10px] uppercase tracking-[0.4em] text-gray-500 hover:text-blue-600 transition-colors duration-500 font-bold"
            >
              {language === 'fr' ? 'Confidentialité' : 'Privacy'}
            </Link>
          </div>

        </div>

        {/* Ligne de copyright finale */}
        <div className="mt-20 pt-8 border-t border-gray-50 flex justify-between items-center text-[9px] text-gray-300 uppercase tracking-widest">
          <span>© 2026 MBK Procurement</span>
          <span className="italic font-serif">Excellence in Sourcing.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
