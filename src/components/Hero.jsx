// src/components/Hero.jsx
import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="hero" className="hero-container">
      
      {/* YENİ EKLENEN KISIM: Arka Plan Kodları */}
      <div className="binary-background">
        01001000 01100101 01101100 01101100 01101111 
        01010111 01101111 01110010 01101100 01100100 
        00100000 01000011 01101111 01100100 01100101 
        01001100 01101001 01100110 01100101 00100000 
        01010010 01100101 01100001 01100011 01110100 
        01001010 01010011 00100000 01000100 01100101 
        01110110 00100000 01001000 01010100 01001101 
        01001100 00100000 01000011 01010011 01010011
        01010011 01001111 01000110 01010100 00100000 
        01010111 01100101 01100010 00100000 01010101 
        01001001 00100000 01010101 01011000 00100000
        
      </div>

      <div className="hero-content">
        <h3 className="hero-greeting">Merhaba, ben [Adın Soyadın] 👋</h3>
        <h1 className="hero-title">Frontend Geliştirici</h1>
        <p className="hero-description">
          Estetik ve teknolojiyi birleştiriyorum. React ile modern, kullanıcı dostu ve akılda kalıcı web deneyimleri tasarlıyorum.
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">Projelerimi Gör</a>
          <a href="#contact" className="btn btn-secondary">İletişime Geç</a>
        </div>
      </div>
      
      <div className="hero-image">
        <img 
          src="src/assets/image_1.jpeg" 
          alt="Profil Fotoğrafı" 
        />
      </div>
    </section>
  );
};

export default Hero;