import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const { t, language, toggleLanguage } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-700 ${isScrolled ? 'bg-white/90 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
        <Link to="/" className={`text-2xl font-serif font-bold tracking-tighter ${!isScrolled && location.pathname === '/' ? 'text-white' : 'text-[#0A192F]'}`}>
          MBK<span className="text-blue-600">.</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-12 font-sans">
          {['conseil', 'audit', 'formation', 'mediation'].map((key) => (
            <Link 
              key={key} 
              to={`/${key}`} 
              className={`text-[10px] uppercase tracking-[0.3em] font-bold transition-opacity hover:opacity-50 ${!isScrolled && location.pathname === '/' ? 'text-white' : 'text-[#0A192F]'}`}
            >
              {t.nav[key]}
            </Link>
          ))}
          
          {/* Bouton de langue ultra-pro */}
          <button 
            onClick={toggleLanguage} 
            className={`text-[10px] font-bold border px-4 py-1.5 rounded-full transition-all hover:bg-blue-600 hover:text-white ${!isScrolled && location.pathname === '/' ? 'border-white/30 text-white' : 'border-[#0A192F]/20 text-[#0A192F]'}`}
          >
            {language === 'fr' ? 'EN' : 'FR'}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
