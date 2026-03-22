import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from './translations';

const LanguageContext = createContext(null);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    // Récupération sécurisée du choix précédent
    try {
      const saved = localStorage.getItem('mbk_lang');
      if (saved) return saved;
    } catch (e) {
      console.error("LocalStorage non accessible");
    }
    return 'fr';
  });

  useEffect(() => {
    localStorage.setItem('mbk_lang', language);
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'fr' ? 'en' : 'fr'));
  };

  // On extrait les traductions correspondant à la langue
  const t = translations[language] || translations['fr'];

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
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
