import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const { t, language, toggleLanguage } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Détection du scroll pour changer l'apparence
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Logique de contraste : Blanc sur pages sombres, Marine sur pages claires
  const isDarkPage = location.pathname === '/contact' || location.pathname === '/about';
  const isHomePage = location.pathname === '/';
  
  // Le texte est blanc si : on est en haut de la Home OU on est sur une page sombre (Contact/About)
  // Sauf si on a scrollé, là le header devient blanc opaque et le texte marine.
  const shouldBeWhite = (isHomePage && !isScrolled) || (isDarkPage && !isScrolled);

  const navLinks = [
    { name: t.nav.conseil, path: '/conseil' },
    { name: t.nav.audit, path: '/audit' },
    { name: t.nav.formation, path: '/formation' },
    { name: t.nav.mediation, path: '/mediation' },
  ];

  return (
    <header 
      className={`fixed w-full z-[100] transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md py-4 shadow-lg' 
          : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
        
        {/* LOGO */}
        <Link 
          to="/" 
          className={`text-2xl font-serif font-bold tracking-tighter transition-colors duration-300 ${
            shouldBeWhite ? 'text-white' : 'text-[#0A192F]'
          }`}
        >
          MBK<span className="text-blue-600">.</span>
        </Link>

        {/* DESKTOP NAV */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-[11px] uppercase tracking-[0.4em] font-bold transition-all hover:text-blue-500 ${
                shouldBeWhite ? 'text-white/80' : 'text-[#0A192F]/80'
              }`}
            >
              {link.name}
            </Link>
          ))}

          <div className={`h-4 w-px transition-colors ${shouldBeWhite ? 'bg-white/20' : 'bg-gray-200'}`}></div>

          {/* BOUTON CONTACT */}
          <Link
            to="/contact"
            className={`text-[10px] uppercase tracking-[0.3em] font-bold px-6 py-2.5 border transition-all duration-300 ${
              shouldBeWhite 
                ? 'border-white text-white hover:bg-white hover:text-[#0A192F]' 
                : 'border-[#0A192F] text-[#0A192F] hover:bg-[#0A192F] hover:text-white'
            }`}
          >
            {t.nav.contact}
          </Link>

          {/* LANGUE */}
          <button
            onClick={toggleLanguage}
            className={`text-[10px] font-bold w-10 h-10 rounded-full border flex items-center justify-center transition-all ${
              shouldBeWhite 
                ? 'border-white/30 text-white hover:bg-blue-600 hover:border-blue-600' 
                : 'border-gray-200 text-gray-500 hover:border-[#0A192F] hover:text-[#0A192F]'
            }`}
          >
            {language === 'fr' ? 'EN' : 'FR'}
          </button>
        </nav>

        {/* MOBILE MENU TOGGLE */}
        <button 
          className="lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <X className={shouldBeWhite ? 'text-white' : 'text-[#0A192F]'} />
          ) : (
            <Menu className={shouldBeWhite ? 'text-white' : 'text-[#0A192F]'} />
          )}
        </button>
      </div>

      {/* MOBILE NAV OVERLAY */}
      <div className={`fixed inset-0 bg-[#0A192F] z-[-1] transition-transform duration-500 flex flex-col justify-center items-center gap-8 ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        {navLinks.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            onClick={() => setIsMenuOpen(false)}
            className="text-white text-2xl font-serif italic uppercase tracking-widest"
          >
            {link.name}
          </Link>
        ))}
        <Link
          to="/contact"
          onClick={() => setIsMenuOpen(false)}
          className="mt-4 px-10 py-4 border border-blue-500 text-blue-500 uppercase tracking-widest font-bold"
        >
          {t.nav.contact}
        </Link>
      </div>
    </header>
  );
};

export default Header;
