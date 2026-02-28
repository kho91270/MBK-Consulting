import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Globe, Menu, X } from 'lucide-react';
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "./ui/menubar"; // On importe les outils de l'étape 1

const Header = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  // Gestion de la transparence au défilement
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
        
        {/* LOGO MBK - Style Institutionnel */}
        <Link to="/" className="group">
          <span className="text-2xl font-bold text-white font-serif tracking-tight">
            MBK <span className="text-blue-500 font-sans text-xs uppercase tracking-[0.3em] ml-1">Procurement</span>
          </span>
        </Link>

        {/* NAVIGATION DESKTOP (Menu de luxe) */}
        <div className="hidden lg:block">
          <Menubar className="border-none bg-transparent">
            {/* Menu Expertise */}
            <MenubarMenu>
              <MenubarTrigger>{t.nav.conseil}</MenubarTrigger>
              <MenubarContent>
                <Link to="/conseil"><MenubarItem>Stratégie Achats</MenubarItem></Link>
                <Link to="/audit"><MenubarItem>Audit & Diagnostic</MenubarItem></Link>
              </MenubarContent>
            </MenubarMenu>

            {/* Menu Développement */}
            <MenubarMenu>
              <MenubarTrigger>{t.nav.formation}</MenubarTrigger>
              <MenubarContent>
                <Link to="/formation"><MenubarItem>Programmes de Formation</MenubarItem></Link>
                <Link to="/mediation"><MenubarItem>Médiation Commerciale</MenubarItem></Link>
              </MenubarContent>
            </MenubarMenu>

            {/* Lien Simple À Propos */}
            <MenubarMenu>
              <Link to="/about">
                <MenubarTrigger>{t.nav.about}</MenubarTrigger>
              </Link>
            </MenubarMenu>
          </Menubar>
        </div>

        {/* ACTIONS : Langue et Contact */}
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

        {/* MENU MOBILE (Bouton) */}
        <div className="lg:hidden flex items-center">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-white">
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* OVERLAY MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0A192F] border-t border-gray-800 animate-in slide-in-from-top w-full absolute top-full left-0 p-6 space-y-6 shadow-2xl">
          <Link to="/conseil" onClick={() => setMobileMenuOpen(false)} className="block text-white uppercase tracking-widest text-sm font-bold border-b border-gray-800 pb-4">{t.nav.conseil}</Link>
          <Link to="/audit" onClick={() => setMobileMenuOpen(false)} className="block text-white uppercase tracking-widest text-sm font-bold border-b border-gray-800 pb-4">{t.nav.audit}</Link>
          <Link to="/formation" onClick={() => setMobileMenuOpen(false)} className="block text-white uppercase tracking-widest text-sm font-bold border-b border-gray-800 pb-4">{t.nav.formation}</Link>
          <Link to="/mediation" onClick={() => setMobileMenuOpen(false)} className="block text-white uppercase tracking-widest text-sm font-bold border-b border-gray-800 pb-4">{t.nav.mediation}</Link>
          <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="block w-full bg-blue-600 text-white text-center py-4 font-bold uppercase tracking-widest text-xs">{t.nav.contact}</Link>
        </div>
      )}
    </header>
  );
};

export default Header;
