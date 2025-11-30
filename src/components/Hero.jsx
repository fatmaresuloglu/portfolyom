// src/components/Hero.jsx
import React from 'react';
import './Hero.css'; // Birazdan oluşturacağız

const Hero = () => {
  return (
    <section id="hero" className="hero-container">
      <div className="hero-content">
        <h3 className="hero-greeting">Merhaba, ben Fatma Resuloğlu👋</h3>
        <h1 className="hero-title">Frontend Geliştirici</h1>
        <p className="hero-description">
          React ve modern web teknolojileri kullanarak kullanıcı dostu, 
          hızlı ve estetik web siteleri tasarlıyorum.
        </p>
        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">Projelerimi Gör</a>
          <a href="#contact" className="btn btn-secondary">İletişime Geç</a>
        </div>
      </div>
      
      <div className="hero-image">
        {/* Şimdilik placeholder (yer tutucu) bir resim koyuyoruz */}
        <img 
          src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=500&q=80" 
          alt="Profil Fotoğrafı" 
        />
      </div>
    </section>
  );
};

export default Hero;