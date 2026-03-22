import React, { createContext, useContext, useState, useEffect } from 'react';
// IMPORTATION CRITIQUE : Vérifiez que translations.js est bien dans le même dossier
import { translations } from './translations';

const LanguageContext = createContext(null);

export const LanguageProvider = ({ children }) => {
  // Initialisation sécurisée : si localStorage échoue, on utilise 'fr'
  const [language, setLanguage] = useState(() => {
    try {
      const saved = localStorage.getItem('mbk_lang');
      return (saved === 'fr' || saved === 'en') ? saved : 'fr';
    } catch (e) {
      return 'fr';
    }
  });

  // Mise à jour du HTML et du stockage local
  useEffect(() => {
    try {
      localStorage.setItem('mbk_lang', language);
    } catch (e) {
      // Ignore les erreurs de quota ou de navigation privée
    }
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = () => {
    setLanguage(prev => (prev === 'fr' ? 'en' : 'fr'));
  };

  // SECURITÉ : On s'assure que 't' n'est jamais undefined
  const t = translations[language] || translations['fr'];

  const value = {
    language,
    toggleLanguage,
    t
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
    // Cette erreur est utile pour le debug mais ne bloque pas le build
    return { t: translations['fr'], language: 'fr', toggleLanguage: () => {} };
  }
  return context;
};
