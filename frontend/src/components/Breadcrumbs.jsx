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
      <nav aria-label="Breadcrumb" className="fixed top-20 left-0 right-0 z-40 bg-white/80 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-8 py-3 flex items-center gap-2 text-xs">
          <Link to="/" className="text-gray-400 hover:text-[#0A192F] transition-colors">
            {language === 'fr' ? 'Accueil' : 'Home'}
          </Link>
          <ChevronRight className="w-3 h-3 text-gray-300" />
          <span className="text-[#0A192F] font-medium">{pageName}</span>
        </div>
      </nav>
    </>
  );
};

export default Breadcrumbs;
