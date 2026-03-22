import React, { createContext, useContext, useState, useEffect } from 'react';
// Importation depuis le même dossier (./)
import { translations } from './translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  // Détection de la langue du navigateur ou français par défaut
  const [language, setLanguage] = useState(() => {
    const saved = localStorage.getItem('mbk_lang');
    if (saved) return saved;
    const browserLang = navigator.language.split('-')[0];
    return ['fr', 'en'].includes(browserLang) ? browserLang : 'fr';
  });

  useEffect(() => {
    localStorage.setItem('mbk_lang', language);
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'fr' ? 'en' : 'fr'));
  };

  // On passe 't' (les traductions de la langue actuelle) à toute l'app
  const value = {
    language,
    toggleLanguage,
    t: translations[language]
  };

  return (
    <LanguageContext.Provider value={value}>
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
