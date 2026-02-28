import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Globe, Menu, X, ChevronDown } from 'lucide-react';
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "./ui/menubar";

const Header = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ${
      isScrolled || !isHomePage ? 'bg-[#0A192F] py-3 shadow-2xl' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        
        {/* LOGO INSTITUTIONNEL */}
        <Link to="/" className="group">
          <span className="text-2xl font-bold text-white font-serif tracking-tight">
            MBK <span className="text-blue-500 font-sans text-xs uppercase tracking-[0.3em] ml-1">Procurement</span>
          </span>
        </Link>

        {/* NAVIGATION DESKTOP ALIGNÉE SUR LE NOUVEAU MOCKDATA */}
        <div className="hidden lg:block">
          <Menubar className="border-none bg-transparent">
            
            {/* 1. INGÉNIERIE & AUDIT */}
            <MenubarMenu>
              <MenubarTrigger className="flex items-center gap-1">
                {t.nav.conseil} <ChevronDown className="w-3 h-3 opacity-50" />
              </MenubarTrigger>
              <MenubarContent>
                <Link to="/conseil">
                  <MenubarItem>{t.pages.conseil.title}</MenubarItem>
                </Link>
                <Link to="/audit">
                  <MenubarItem>{t.pages.audit.title}</MenubarItem>
                </Link>
              </MenubarContent>
            </MenubarMenu>

            {/* 2. ACADEMY & MÉDIATION */}
            <MenubarMenu>
              <MenubarTrigger className="flex items-center gap-1">
                {t.nav.formation} <ChevronDown className="w-3 h-3 opacity-50" />
              </MenubarTrigger>
              <MenubarContent>
                <Link to="/formation">
                  <MenubarItem>{t.pages.formation.title}</MenubarItem>
                </Link>
                <Link to="/mediation">
                  <MenubarItem>{t.pages.mediation.title}</MenubarItem>
                </Link>
              </MenubarContent>
            </MenubarMenu>

            {/* 3. CABINET (À PROPOS) */}
            <MenubarMenu>
              <Link to="/about">
                <MenubarTrigger>{t.nav.about}</MenubarTrigger>
              </Link>
            </MenubarMenu>
          </Menubar>
        </div>

        {/* ACTIONS & LANGUE */}
        <div className="hidden lg:flex items-center space-x-6">
          <button 
            onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
            className="flex items-center space-x-2 text-[10px] font-bold text-white uppercase tracking-[0.2em] border border-white/20 px-3 py-1.5 hover:bg-white hover:text-[#0A192F] transition-all"
          >
            <Globe className="w-3 h-3" />
            <span>{language === 'fr' ? 'EN' : 'FR'}</span>
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
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU ALIGNÉ */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0A192F] border-t border-gray-800 absolute w-full top-full left-0 p-6 space-y-4 shadow-2xl animate-in slide-in-from-top">
          <Link to="/conseil" onClick={() => setMobileMenuOpen(false)} className="block text-white uppercase tracking-widest text-xs font-bold border-b border-gray-800 pb-4">{t.nav.conseil}</Link>
          <Link to="/audit" onClick={() => setMobileMenuOpen(false)} className="block text-white uppercase tracking-widest text-xs font-bold border-b border-gray-800 pb-4">{t.nav.audit}</Link>
          <Link to="/formation" onClick={() => setMobileMenuOpen(false)} className="block text-white uppercase tracking-widest text-xs font-bold border-b border-gray-800 pb-4">{t.nav.formation}</Link>
          <Link to="/mediation" onClick={() => setMobileMenuOpen(false)} className="block text-white uppercase tracking-widest text-xs font-bold border-b border-gray-800 pb-4">{t.nav.mediation}</Link>
          <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="block w-full bg-blue-600 text-white text-center py-4 font-bold uppercase tracking-widest text-xs">{t.nav.contact}</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
