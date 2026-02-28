import React, { createContext, useContext, useState } from 'react';
import { translations } from '../mockData';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('fr');

  // Sécurité : on s'assure que t ne soit jamais indéfini
  const t = translations[language] || translations['fr'];

  // Cette fonction est celle que le Header réclame (le fameux "n")
  const handleSetLanguage = (lang) => {
    if (translations[lang]) {
      setLanguage(lang);
    }
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'fr' ? 'en' : 'fr');
  };

  return (
    <LanguageContext.Provider value={{ 
      language, 
      setLanguage: handleSetLanguage, // <--- On expose explicitement la fonction ici
      toggleLanguage, 
      t 
    }}>
      {children}
    </LanguageContext.Provider>
  );
};
