import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { ChevronRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const Breadcrumbs = () => {
  const { language } = useLanguage();
  const location = useLocation();

  const pathMap = {
    '/conseil': language === 'fr' ? 'Conseil' : 'Consulting',
    '/audit': 'Audit',
    '/formation': 'Formation',
    '/mediation': language === 'fr' ? 'Médiation' : 'Mediation',
    '/about': language === 'fr' ? 'Le Cabinet' : 'About',
    '/contact': 'Contact',
    '/case-studies': language === 'fr' ? 'Cas Clients' : 'Case Studies',
    '/blog': 'Insights',
    '/privacy': language === 'fr' ? 'Confidentialité' : 'Privacy',
    '/legal': language === 'fr' ? 'Mentions Légales' : 'Legal',
  };

  const currentPath = location.pathname;
  const pageName = pathMap[currentPath];

  if (!pageName || currentPath === '/') return null;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": language === 'fr' ? 'Accueil' : 'Home',
        "item": "https://www.mbkprocurement.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": pageName,
        "item": "https://www.mbkprocurement.com" + currentPath
      }
    ]
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>
      
      {/* OPTIMISATION : 
          - top-[64px] (ou 16 unités Tailwind) pour coller sous le Header principal.
          - z-50 pour passer au-dessus des images et animations.
          - bg-white/95 pour une opacité forte qui garantit la lisibilité.
      */}
      <nav 
        aria-label="Breadcrumb" 
        className="fixed top-[64px] left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-6 py-3">
          {/* no-scrollbar : Classe CSS personnalisée pour le défilement horizontal.
              flex-nowrap : Empêche le retour à la ligne des liens sur mobile.
          */}
          <div className="no-scrollbar flex items-center gap-2 text-xs overflow-x-auto flex-nowrap whitespace-nowrap">
            <Link to="/" className="text-gray-400 hover:text-[#0A192F] transition-colors shrink-0">
              {language === 'fr' ? 'Accueil' : 'Home'}
            </Link>
            
            <ChevronRight className="w-3 h-3 text-gray-300 shrink-0" />
            
            <span className="text-[#0A192F] font-medium shrink-0">
              {pageName}
            </span>

            {/* ESPACE DE SÉCURITÉ : Pour que le dernier élément ne colle pas au bord droit lors du scroll */}
            <div className="w-6 shrink-0 md:hidden"></div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Breadcrumbs;
