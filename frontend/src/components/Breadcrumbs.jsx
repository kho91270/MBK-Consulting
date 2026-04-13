import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

const Breadcrumbs = () => {
  const { language, t } = useLanguage();
  const location = useLocation();

  // On définit les liens que l'on veut rendre accessibles rapidement
  const navLinks = [
    { path: '/about', label: t.nav.about },
    { path: '/conseil', label: t.nav.conseil },
    { path: '/audit', label: t.nav.audit },
    { path: '/formation', label: t.nav.formation },
    { path: '/mediation', label: t.nav.mediation },
    { path: '/contact', label: t.nav.contact },
  ];

  const currentPath = location.pathname;
  if (currentPath === '/') return null;

  return (
    <nav className="fixed top-[64px] left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center h-12 overflow-x-auto no-scrollbar gap-8">
          {navLinks.map((link) => {
            const isActive = currentPath === link.path;
            return (
              <Link
                key={link.path}
                to={link.path}
                className={`text-[10px] uppercase tracking-[0.2em] transition-all shrink-0 whitespace-nowrap ${
                  isActive 
                    ? "text-[#0A192F] font-bold border-b-2 border-blue-600 pb-1" 
                    : "text-gray-400 hover:text-[#0A192F]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          {/* Petit espace vide à la fin pour le confort du scroll mobile */}
          <div className="w-6 shrink-0" />
        </div>
      </div>
    </nav>
  );
};

export default Breadcrumbs;
