import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from './translations';

const LanguageContext = createContext(null);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    try {
      const saved = localStorage.getItem('mbk_lang');
      return saved || 'fr';
    } catch (e) {
      return 'fr';
    }
  });

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
  if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
  return context;
};
