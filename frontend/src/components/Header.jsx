import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Globe, Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  // Gestion du scroll pour l'effet de transparence
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fermer les menus si on clique ailleurs
  useEffect(() => {
    const handleClickOutside = () => setActiveDropdown(null);
    window.addEventListener('click', handleClickOutside);
    return () => window.removeEventListener('click', handleClickOutside);
  }, []);

  if (!t) return null;

  const toggleDropdown = (e, name) => {
    e.stopPropagation();
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ${
      isScrolled || !isHomePage ? 'bg-[#0A192F] py-3 shadow-2xl border-b border-gray-800' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        
        {/* LOGO MBK */}
        <Link to="/" className="group flex flex-col">
          <span className="text-xl font-bold text-white font-serif tracking-tight leading-none">
            MBK <span className="text-blue-500 font-sans text-[10px] uppercase tracking-[0.3em] ml-1">Procurement</span>
          </span>
        </Link>

        {/* NAVIGATION DESKTOP SANS DÉPENDANCE EXTERNE */}
        <div className="hidden lg:flex items-center space-x-8">
          
          {/* Menu Expertise */}
          <div className="relative">
            <button 
              onClick={(e) => toggleDropdown(e, 'expertise')}
              className="flex items-center gap-2 text-[10px] font-bold text-white uppercase tracking-[0.2em] hover:text-blue-400 transition-colors"
            >
              {t.nav.conseil} <ChevronDown className={`w-3 h-3 transition-transform ${activeDropdown === 'expertise' ? 'rotate-180' : ''}`} />
            </button>
            {activeDropdown === 'expertise' && (
              <div className="absolute top-full left-0 mt-4 w-64 bg-[#0A192F] border border-gray-800 shadow-2xl animate-in fade-in slide-in-from-top-2">
                <Link to="/conseil" className="block px-6 py-4 text-[10px] text-white uppercase tracking-widest hover:bg-blue-600 transition-colors border-b border-gray-800">
                  {t.pages.conseil.title}
                </Link>
                <Link to="/audit" className="block px-6 py-4 text-[10px] text-white uppercase tracking-widest hover:bg-blue-600 transition-colors">
                  {t.pages.audit.title}
                </Link>
              </div>
            )}
          </div>

          {/* Menu Solutions */}
          <div className="relative">
            <button 
              onClick={(e) => toggleDropdown(e, 'solutions')}
              className="flex items-center gap-2 text-[10px] font-bold text-white uppercase tracking-[0.2em] hover:text-blue-400 transition-colors"
            >
              {t.nav.formation} <ChevronDown className={`w-3 h-3 transition-transform ${activeDropdown === 'solutions' ? 'rotate-180' : ''}`} />
            </button>
            {activeDropdown === 'solutions' && (
              <div className="absolute top-full left-0 mt-4 w-64 bg-[#0A192F] border border-gray-100/10 shadow-2xl animate-in fade-in slide-in-from-top-2">
                <Link to="/formation" className="block px-6 py-4 text-[10px] text-white uppercase tracking-widest hover:bg-blue-600 transition-colors border-b border-gray-800">
                  {t.pages.formation.title}
                </Link>
                <Link to="/mediation" className="block px-6 py-4 text-[10px] text-white uppercase tracking-widest hover:bg-blue-600 transition-colors">
                  {t.pages.mediation.title}
                </Link>
              </div>
            )}
          </div>

          <Link to="/about" className="text-[10px] font-bold text-white uppercase tracking-[0.2em] hover:text-blue-400 transition-colors">
            {t.nav.about}
          </Link>
        </div>

        {/* ACTIONS DROITE */}
        <div className="hidden lg:flex items-center space-x-6">
          <button 
            onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
            className="text-[10px] font-bold text-white uppercase tracking-[0.2em] border border-white/20 px-3 py-1.5 hover:bg-white hover:text-[#0A192F] transition-all"
          >
            {language === 'fr' ? 'EN' : 'FR'}
          </button>
          
          <Link to="/contact">
            <button className="bg-blue-600 text-white px-6 py-2.5 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-blue-700 transition-all shadow-lg">
              {t.nav.contact}
            </button>
          </Link>
        </div>

        {/* MOBILE TOGGLE */}
        <div className="lg:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0A192F] w-full absolute top-full left-0 p-6 space-y-4 shadow-2xl border-t border-gray-800">
          <Link to="/conseil" onClick={() => setMobileMenuOpen(false)} className="block text-white uppercase tracking-widest text-[10px] font-bold border-b border-gray-800 pb-4">{t.nav.conseil}</Link>
          <Link to="/audit" onClick={() => setMobileMenuOpen(false)} className="block text-white uppercase tracking-widest text-[10px] font-bold border-b border-gray-800 pb-4">{t.nav.audit}</Link>
          <Link to="/formation" onClick={() => setMobileMenuOpen(false)} className="block text-white uppercase tracking-widest text-[10px] font-bold border-b border-gray-800 pb-4">{t.nav.formation}</Link>
          <Link to="/mediation" onClick={() => setMobileMenuOpen(false)} className="block text-white uppercase tracking-widest text-[10px] font-bold border-b border-gray-800 pb-4">{t.nav.mediation}</Link>
          <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="block w-full bg-blue-600 text-white text-center py-4 font-bold uppercase tracking-widest text-[10px]">{t.nav.contact}</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
