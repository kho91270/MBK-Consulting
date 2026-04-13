import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { ChevronRight } from 'lucide-react';

const Breadcrumbs = () => {
  const { language, t } = useLanguage();
  const location = useLocation();

  const pathMap = {
    '/conseil': language === 'fr' ? 'Conseil' : 'Consulting',
    '/audit': 'Audit',
    '/formation': 'Formation',
    '/mediation': language === 'fr' ? 'Médiation' : 'Mediation',
    '/about': language === 'fr' ? 'Le Cabinet' : 'About',
    '/contact': 'Contact',
  };

  const currentPath = location.pathname;
  const pageName = pathMap[currentPath];

  if (!pageName || currentPath === '/') return null;

  return (
    <nav className="fixed top-[64px] left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3">
        {/* Conteneur de scroll forcé pour mobile */}
        <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest overflow-x-auto no-scrollbar whitespace-nowrap">
          <Link to="/" className="text-gray-400 hover:text-blue-600 shrink-0">
            {language === 'fr' ? 'Accueil' : 'Home'}
          </Link>
          <ChevronRight className="w-3 h-3 text-gray-300 shrink-0" />
          <span className="text-blue-600 font-bold shrink-0">{pageName}</span>
          
          {/* On rajoute les autres services en accès rapide pour faciliter la navigation mobile */}
          <ChevronRight className="w-3 h-3 text-gray-300 shrink-0" />
          <Link to="/about" className="text-gray-400 shrink-0">{t.nav.about}</Link>
          <ChevronRight className="w-3 h-3 text-gray-300 shrink-0" />
          <Link to="/contact" className="text-gray-400 shrink-0">{t.nav.contact}</Link>
        </div>
      </div>
    </nav>
  );
};

export default Breadcrumbs;
