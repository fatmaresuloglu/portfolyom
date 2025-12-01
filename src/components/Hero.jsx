// src/components/Hero.jsx
import React from 'react';
import './Hero.css';
import { useLanguage } from '../LanguageContext'; // Hook'u ekle
import profileImg from '../assets/image_1.jpeg';


const Hero = () => {
  const { t } = useLanguage();
  
  // YENİ: Daha doğal duran karmaşık bir dizi
  // Sadece 0 ve 1 değil, aralara boşluklar serpiştirilmiş uzun bir string.
  const binaryRow = "01001 0110 10010 1101 00011 10101 0110 0010 11010 1011 0001 ";
  const binaryText = binaryRow.repeat(100);

  return (
    <section id="hero" className="hero-container">
      <div className="binary-overlay">
        {binaryText}
      </div>

      <div className="hero-content">
        {/* Yazıları t.hero... ile değiştirdik */}
        <h3 className="hero-greeting">{t.hero.greeting} [Adın Soyadın] 👋</h3>
        <h1 className="hero-title">{t.hero.title}</h1>
        <p className="hero-description">
          {t.hero.description}
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">{t.hero.btnPrimary}</a>
          <a href="#contact" className="btn btn-secondary">{t.hero.btnSecondary}</a>
        </div>
      </div>
      
      <div className="hero-image">
        <img src={profileImg} alt="Profil Fotoğrafı" />
      </div>
    </section>
  );
};

export default Hero;