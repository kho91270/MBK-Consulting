import React, { createContext, useContext, useState, useEffect } from 'react';
// CORRECTION : On remonte d'un niveau (../) pour trouver mockData.js dans src
import { translations } from '../mockData'; 

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(localStorage.getItem('mbk_lang') || 'fr');
  
  // Sécurité : Fallback sur un objet vide si translations n'est pas chargé
  const [t, setT] = useState(translations ? translations[language] : {});

  useEffect(() => {
    if (translations && translations[language]) {
      setT(translations[language]);
      localStorage.setItem('mbk_lang', language);
      document.documentElement.lang = language;
    }
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
