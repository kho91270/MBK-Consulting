import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Menu, X, Globe } from 'lucide-react';

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

  const navLinks = [
    { name: t.nav.conseil, path: '/conseil' },
    { name: t.nav.audit, path: '/audit' },
    { name: t.nav.formation, path: '/formation' },
    { name: t.nav.mediation, path: '/mediation' },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-700 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
        <Link to="/" className={`text-2xl font-serif font-bold tracking-tighter transition-colors duration-500 ${!isScrolled && location.pathname === '/' ? 'text-white' : 'text-[#0A192F]'}`}>
          MBK<span className="text-blue-600">.</span><span className="text-[10px] uppercase tracking-[0.4em] ml-2 font-sans font-light">Procurement</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link key={link.path} to={link.path} className={`text-[10px] uppercase tracking-[0.25em] font-bold transition-all hover:opacity-60 ${!isScrolled && location.pathname === '/' ? 'text-white' : 'text-[#0A192F]'}`}>
              {link.name}
            </Link>
          ))}
          <button onClick={toggleLanguage} className={`text-[10px] font-bold uppercase tracking-widest border-b pb-1 transition-all ${!isScrolled && location.pathname === '/' ? 'border-white/30 text-white' : 'border-[#0A192F]/20 text-[#0A192F]'}`}>
            {language === 'fr' ? 'EN' : 'FR'}
          </button>
        </nav>

        <button className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu className={!isScrolled && location.pathname === '/' ? 'text-white' : 'text-[#0A192F]'} />}
        </button>
      </div>
    </header>
  );
};

export default Header;
