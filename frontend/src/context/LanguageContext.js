import React, { createContext, useContext, useState, useEffect } from 'react';
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
  // On initialise avec la langue du navigateur ou 'fr' par défaut
  const [language, setLanguage] = useState('fr');

  // Sécurité : On s'assure que t ne soit jamais "undefined" même pendant le chargement
  const t = translations[language] || translations['fr'];

  // Fonction pour changer la langue manuellement (utilisée dans le Header)
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
      setLanguage: handleSetLanguage, // On ajoute cette fonction pour le Header
      toggleLanguage, 
      t 
    }}>
      {children}
    </LanguageContext.Provider>
  );
};
