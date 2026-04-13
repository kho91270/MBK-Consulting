import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const { t, language, toggleLanguage } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Bloquer le scroll du body quand le menu est ouvert
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
  }, [isMenuOpen]);

  const isDarkPage = ['/contact', '/privacy', '/legal'].includes(location.pathname);
  const shouldBeWhite = (location.pathname === '/' && !isScrolled) || (isDarkPage && !isScrolled);

  const navLinks = [
    { name: t.nav.conseil, path: '/conseil' },
    { name: t.nav.audit, path: '/audit' },
    { name: t.nav.formation, path: '/formation' },
    { name: t.nav.mediation, path: '/mediation' },
    { name: t.nav.about, path: '/about' },
  ];

  return (
    <header className={`fixed w-full z-[100] transition-all duration-500 ${isScrolled ? 'bg-white/95 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
        <Link to="/" className={`text-2xl font-serif font-bold tracking-tighter transition-colors ${shouldBeWhite ? 'text-white' : 'text-[#0A192F]'}`}>
          MBK<span className="text-blue-600">.</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link key={link.path} to={link.path} className={`text-[11px] uppercase tracking-[0.4em] font-bold transition-all hover:text-blue-500 ${shouldBeWhite ? 'text-white/80' : 'text-[#0A192F]/80'}`}>
              {link.name}
            </Link>
          ))}
          <Link to="/contact" className={`text-[10px] uppercase tracking-[0.3em] font-bold px-6 py-2.5 border transition-all ${shouldBeWhite ? 'border-white text-white hover:bg-white hover:text-[#0A192F]' : 'border-[#0A192F] text-[#0A192F] hover:bg-[#0A192F] hover:text-white'}`}>
            {t.nav.contact}
          </Link>
          <button onClick={toggleLanguage} className={`text-[10px] font-bold w-10 h-10 rounded-full border flex items-center justify-center transition-all ${shouldBeWhite ? 'border-white/30 text-white hover:bg-blue-600 hover:border-blue-600' : 'border-gray-200 text-gray-500 hover:border-[#0A192F]'}`}>
            {language === 'fr' ? 'EN' : 'FR'}
          </button>
        </nav>

        {/* Mobile Toggle */}
        <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="text-white w-8 h-8 relative z-[201]" /> : <Menu className={shouldBeWhite ? 'text-white' : 'text-[#0A192F]'} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-[#0A192F] z-[200] flex flex-col p-8 animate-fadeIn h-[100dvh]">
          <div className="flex justify-between items-center mb-16">
            <span className="text-2xl font-serif font-bold text-white tracking-tighter">MBK<span className="text-blue-600">.</span></span>
          </div>
          <nav className="flex flex-col gap-8 items-start">
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path} onClick={() => setIsMenuOpen(false)} className="text-white text-3xl font-serif italic font-bold tracking-tighter">
                {link.name}<span className="text-blue-600">.</span>
              </Link>
            ))}
          </nav>
          <div className="mt-auto flex flex-col gap-6">
            <Link to="/contact" onClick={() => setIsMenuOpen(false)} className="w-full py-5 bg-blue-600 text-white text-center text-[11px] font-bold uppercase tracking-[0.3em]">{t.nav.contact}</Link>
            <button onClick={() => { toggleLanguage(); setIsMenuOpen(false); }} className="text-white/60 text-[10px] font-bold uppercase text-left">
              {language === 'fr' ? 'Switch to English' : 'Passer en Français'}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
