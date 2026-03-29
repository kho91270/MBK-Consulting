import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import SEO from '../components/SEO';

const NotFound = () => {
  const { language } = useLanguage();

  return (
    <>
      <SEO
        title="404"
        description="Page non trouvée"
        canonical="https://www.mbkprocurement.com/404"
      />
      <div className="min-h-screen bg-white font-sans text-[#0A192F] flex flex-col items-center justify-center px-8">
        <span className="text-[12rem] md:text-[20rem] !font-serif !font-bold !italic tracking-tighter leading-none text-gray-100">
          404
        </span>
        <h1 className="text-3xl md:text-5xl !font-serif !font-bold !italic tracking-tighter -mt-16 mb-6">
          {language === 'fr' ? 'Page introuvable' : 'Page not found'}<span className="text-blue-600">.</span>
        </h1>
        <p className="text-gray-500 text-lg font-light !italic mb-12 text-center max-w-md">
          {language === 'fr'
            ? "La page que vous cherchez n'existe pas ou a été déplacée."
            : "The page you're looking for doesn't exist or has been moved."}
        </p>
        <Link
          to="/"
          className="px-10 py-5 bg-[#0A192F] text-white text-[11px] font-bold uppercase tracking-[0.3em] hover:bg-blue-600 transition-colors duration-300"
        >
          {language === 'fr' ? "Retour à l'accueil" : 'Back to home'}
        </Link>
      </div>
    </>
  );
};

export default NotFound;
