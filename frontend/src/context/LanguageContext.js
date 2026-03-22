import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from './translations';

const LanguageContext = createContext(null);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('fr');

  useEffect(() => {
    try {
      const saved = localStorage.getItem('mbk_lang');
      if (saved && (saved === 'fr' || saved === 'en')) {
        setLanguage(saved);
      }
    } catch (e) {
      console.warn("Storage access restricted");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('mbk_lang', language);
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'fr' ? 'en' : 'fr'));
  };

  const value = {
    language,
    toggleLanguage,
    t: translations[language] || translations['fr']
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage missing Provider');
  return context;
};
