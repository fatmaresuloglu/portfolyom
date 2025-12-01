// src/components/Navbar.jsx
import React from 'react';
import './Navbar.css';
import { useLanguage } from '../LanguageContext';

const Navbar = () => {
  // toggleLanguage gitti, changeLanguage geldi
  const { t, language, changeLanguage } = useLanguage(); 

  return (
    <nav className="navbar">
      <div className="logo">Fatma Resuloğlu</div>
      <ul className="nav-links">
        <li><a href="#hero">{t.navbar.home}</a></li>
        <li><a href="#about">{t.navbar.about}</a></li>
        <li><a href="#projects">{t.navbar.projects}</a></li>
        <li><a href="#contact">{t.navbar.contact}</a></li>
      </ul>

      {/* YENİ BAYRAK ALANI */}
      <div className="lang-container">
        {/* TÜRK BAYRAĞI */}
        <img 
          src="https://flagcdn.com/w40/tr.png" 
          alt="Türkçe"
          // Eğer dil 'tr' ise 'active' sınıfı ekle, değilse ekleme
          className={`lang-flag ${language === 'tr' ? 'active' : ''}`}
          onClick={() => changeLanguage('tr')}
        />

        {/* İNGİLİZ BAYRAĞI (Birleşik Krallık) */}
        <img 
          src="https://flagcdn.com/w40/gb.png" 
          alt="English"
          className={`lang-flag ${language === 'en' ? 'active' : ''}`}
          onClick={() => changeLanguage('en')}
        />
      </div>
    </nav>
  );
};

export default Navbar;