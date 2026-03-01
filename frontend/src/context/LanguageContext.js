import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../data/mockData';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  // On récupère la langue stockée ou on met 'fr' par défaut
  const [language, setLanguage] = useState(localStorage.getItem('mbk_lang') || 'fr');

  // t contient l'objet de traduction correspondant à la langue active
  const [t, setT] = useState(translations[language]);

  useEffect(() => {
    // Mise à jour de l'objet de traduction dès que la langue change
    setT(translations[language]);
    // Persistance du choix de l'utilisateur
    localStorage.setItem('mbk_lang', language);
    // Mise à jour de l'attribut lang du HTML pour le SEO et l'accessibilité
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'fr' ? 'en' : 'fr'));
  };

  return (
    <LanguageContext.Provider value={{ t, language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
