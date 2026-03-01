import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Header = () => {
  const { t, language, toggleLanguage } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isDark = !isScrolled && location.pathname === '/';

  return (
    <header className={`fixed w-full z-50 transition-all duration-700 ${isScrolled ? 'bg-white/95 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
        <Link to="/" className={`text-2xl font-serif font-bold ${isDark ? 'text-white' : 'text-[#0A192F]'}`}>
          MBK<span className="text-blue-600">.</span>
        </Link>
        <nav className="hidden lg:flex items-center gap-10">
          {['conseil', 'audit', 'formation', 'mediation'].map((key) => (
            <Link key={key} to={`/${key}`} className={`text-[10px] uppercase tracking-[0.3em] font-bold hover:opacity-50 transition-all ${isDark ? 'text-white' : 'text-[#0A192F]'}`}>
              {t.nav[key]}
            </Link>
          ))}
          <div className="h-4 w-px bg-gray-300 mx-2"></div>
          <Link to="/contact" className={`text-[10px] uppercase tracking-[0.3em] font-bold px-5 py-2 border transition-all ${isDark ? 'border-white text-white hover:bg-white hover:text-[#0A192F]' : 'border-[#0A192F] text-[#0A192F] hover:bg-[#0A192F] hover:text-white'}`}>
            {t.nav.contact}
          </Link>
          <button onClick={toggleLanguage} className={`text-[10px] font-bold w-10 h-10 rounded-full border flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all ${isDark ? 'border-white/30 text-white' : 'border-gray-200 text-[#0A192F]'}`}>
            {language === 'fr' ? 'EN' : 'FR'}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
