// src/LanguageContext.jsx
import React, { createContext, useState, useContext } from 'react';
import { translations } from './Translate/translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("tr");

  // YENİ FONKSİYON: Hangi dili istersek ona geçirir
  const changeLanguage = (langCode) => {
    setLanguage(langCode);
  };

  const t = translations[language];

  // toggleLanguage yerine changeLanguage'i dışarı aktarıyoruz
  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);