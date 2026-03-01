import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { Globe, Menu, X, ArrowRight } from 'lucide-react';

const Menubar = () => {
  const { t, language, toggleLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Gestion de l'effet de transparence au scroll
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Ferme le menu mobile automatiquement lors d'un clic sur un lien
  useEffect(() => setIsOpen(false), [location]);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* LOGO */}
          <Link to="/" className="flex items-center">
            <span className={`text-2xl font-serif font-bold ${scrolled ? 'text-[#0A192F]' : 'text-white'}`}>
              MBK <span className="text-blue-600 font-sans text-[10px] uppercase tracking-[0.3em] ml-1 font-black">Procurement</span>
            </span>
          </Link>

          {/* NAVIGATION BUREAU (Desktop) */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link to="/conseil" className={`text-[11px] uppercase tracking-widest font-bold ${scrolled ? 'text-gray-700' : 'text-white/90'} hover:text-blue-600 transition-colors`}>{t.nav.conseil}</Link>
            <Link to="/audit" className={`text-[11px] uppercase tracking-widest font-bold ${scrolled ? 'text-gray-700' : 'text-white/90'} hover:text-blue-600 transition-colors`}>{t.nav.audit}</Link>
            <Link to="/formation" className={`text-[11px] uppercase tracking-widest font-bold ${scrolled ? 'text-gray-700' : 'text-white/90'} hover:text-blue-600 transition-colors`}>{t.nav.formation}</Link>
            <Link to="/about" className={`text-[11px] uppercase tracking-widest font-bold ${scrolled ? 'text-gray-700' : 'text-white/90'} hover:text-blue-600 transition-colors`}>{t.nav.about}</Link>

            {/* SÉLECTEUR DE LANGUE */}
            <button 
              onClick={toggleLanguage}
              className={`flex items-center gap-2 px-3 py-1 border rounded-full text-[10px] font-bold ${scrolled ? 'border-gray-300 text-gray-700' : 'border-white/30 text-white'} hover:bg-blue-600 hover:text-white transition-all`}
            >
              <Globe className="w-3 h-3" />
              {language === 'fr' ? 'EN' : 'FR'}
            </button>

            {/* BOUTON CONTACT */}
            <Link to="/contact">
              <button className={`px-5 py-2.5 text-[10px] font-bold uppercase tracking-widest transition-all ${scrolled ? 'bg-[#0A192F] text-white' : 'bg-white text-[#0A192F]'} hover:bg-blue-600 hover:text-white flex items-center gap-2 shadow-sm`}>
                {t.nav.contact} <ArrowRight className="w-3 h-3" />
              </button>
            </Link>
          </div>

          {/* BOUTON MENU MOBILE */}
          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className={scrolled ? 'text-[#0A192F]' : 'text-white'}>
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* MENU MOBILE OVERLAY */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[#0A192F] p-8 flex flex-col space-y-6 border-t border-white/10 animate-in fade-in slide-in-from-top-4">
          <Link to="/conseil" className="text-white text-lg font-serif italic">{t.nav.conseil}</Link>
          <Link to="/audit" className="text-white text-lg font-serif italic">{t.nav.audit}</Link>
          <Link to="/about" className="text-white text-lg font-serif italic">{t.nav.about}</Link>
          <button onClick={toggleLanguage} className="text-blue-400 text-left text-xs font-bold tracking-widest uppercase">
             {language === 'fr' ? 'Switch to English' : 'Passer en Français'}
          </button>
          <Link to="/contact" className="bg-blue-600 text-white p-4 text-center text-xs font-bold tracking-[0.3em] uppercase">
            {t.nav.contact}
          </Link>
        </div>
      )}
    </nav>
  );
};

// LA LIGNE MANQUANTE : Elle permet à App.js d'importer ce fichier sous le nom 'Menubar'
export default Menubar;
