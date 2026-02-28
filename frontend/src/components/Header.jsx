import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Globe, Menu, X, ChevronDown } from 'lucide-react';

// Importation sécurisée
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

  // Sécurité pour éviter le crash si t n'est pas chargé
  if (!t) return null;

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ${
      isScrolled || !isHomePage ? 'bg-[#0A192F] py-3 shadow-2xl border-b border-gray-800' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        
        <Link to="/" className="group flex flex-col">
          <span className="text-xl font-bold text-white font-serif tracking-tight leading-none">
            MBK <span className="text-blue-500 font-sans text-[10px] uppercase tracking-[0.3em] ml-1">Procurement</span>
          </span>
        </Link>

        <div className="hidden lg:block">
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger className="flex items-center gap-1 uppercase">
                Expertise <ChevronDown className="w-3 h-3 opacity-50" />
              </MenubarTrigger>
              <MenubarContent>
                <Link to="/conseil"><MenubarItem>{t.nav.conseil}</MenubarItem></Link>
                <Link to="/audit"><MenubarItem>{t.nav.audit}</MenubarItem></Link>
              </MenubarContent>
            </MenubarMenu>

            <MenubarMenu>
              <MenubarTrigger className="flex items-center gap-1 uppercase">
                Solutions <ChevronDown className="w-3 h-3 opacity-50" />
              </MenubarTrigger>
              <MenubarContent>
                <Link to="/formation"><MenubarItem>{t.nav.formation}</MenubarItem></Link>
                <Link to="/mediation"><MenubarItem>{t.nav.mediation}</MenubarItem></Link>
              </MenubarContent>
            </MenubarMenu>

            <MenubarMenu>
              <Link to="/about">
                <MenubarTrigger className="uppercase">{t.nav.about}</MenubarTrigger>
              </Link>
            </MenubarMenu>
          </Menubar>
        </div>

        <div className="hidden lg:flex items-center space-x-6">
          <button 
            onClick={() => setLanguage(language === 'fr' ? 'en' : 'fr')}
            className="text-[10px] font-bold text-white uppercase tracking-[0.2em] border border-white/20 px-3 py-1.5 hover:bg-white hover:text-[#0A192F] transition-all"
          >
            {language === 'fr' ? 'EN' : 'FR'}
          </button>
          
          <Link to="/contact">
            <button className="bg-blue-600 text-white px-6 py-2.5 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-blue-700 transition-all">
              {t.nav.contact}
            </button>
          </Link>
        </div>

        <div className="lg:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0A192F] w-full absolute top-full left-0 p-6 space-y-4 shadow-2xl border-t border-gray-800">
          <Link to="/conseil" onClick={() => setMobileMenuOpen(false)} className="block text-white uppercase tracking-widest text-[10px] font-bold border-b border-gray-800 pb-4">{t.nav.conseil}</Link>
          <Link to="/audit" onClick={() => setMobileMenuOpen(false)} className="block text-white uppercase tracking-widest text-[10px] font-bold border-b border-gray-800 pb-4">{t.nav.audit}</Link>
          <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="block w-full bg-blue-600 text-white text-center py-4 font-bold uppercase tracking-widest text-[10px]">{t.nav.contact}</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
