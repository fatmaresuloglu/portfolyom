// src/components/About.jsx
import React from 'react';
import './About.css';
import { useLanguage } from '../LanguageContext';

const About = () => {
  // Tüm veriler t (translation/language) hook'undan geliyor
  const { t } = useLanguage();
  const binaryRow = "01001 0110 10010 1101 00011 10101 0110 0010 11010 1011 0001 ";
  // eslint-disable-next-line
  const binaryText = binaryRow.repeat(100);

  // t.about.languages listesinin tanımlı olup olmadığını kontrol et
  const languages = t.about.languages || [];

  return (
    <section id="about" className="about-section">
      
      <h2 className="section-title">{t.about.title}</h2>
      
      {/* BİYOGRAFİ KISMI */}
      <div className="bio-container">
        <p className="bio-text">{t.about.bio}</p>
      </div>

      <div className="about-grid">
        
        {/* SOL KOLON: EĞİTİM, YETENEKLER VE DİLLER */}
        <div className="about-col">
          {/* Eğitim Kartı */}
          <div className="info-card">
            <h3 className="card-title">🎓 {t.about.educationTitle}</h3>
            <div className="edu-item">
              <h4>{t.about.education.school}</h4>
              <p>{t.about.education.department}</p>
              <span className="date-badge">{t.about.education.date}</span>
            </div>
          </div>

          {/* Yetenekler Kartı */}
          <div className="info-card">
            <h3 className="card-title">🚀 {t.about.skillsTitle}</h3>
            <div className="skills-container">
              {t.about.skills.map((skill, index) => (
                <span key={index} className="skill-pill">{skill}</span>
              ))}
            </div>
          </div>

          {/* YABANCI DİL KARTI - T.ABOUT KULLANILARAK DÜZELTİLDİ */}
          {/* Sadece languages dizisi boş değilse göster */}
          {languages.length > 0 && (
            <div className="info-card">
              <h3 className="card-title">🌍 {t.about.languagesTitle}</h3>
              <div className="languages-list">
                {languages.map((lang, index) => (
                  <div key={index} className="lang-item">
                    <span className="lang-name">{lang.name}</span>
                    <span className="lang-level">{lang.level}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* SAĞ KOLON: DENEYİMLER */}
        <div className="about-col">
          <div className="info-card">
            <h3 className="card-title">💼 {t.about.experienceTitle}</h3>
            <div className="experience-timeline">
              {t.about.experiences.map((exp, index) => (
                <div key={index} className="exp-item">
                  <h4>{exp.role}</h4>
                  <h5 className="company-name">@ {exp.company}</h5>
                  <span className="date-text">{exp.date}</span>
                  <p className="exp-desc">{exp.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default About;