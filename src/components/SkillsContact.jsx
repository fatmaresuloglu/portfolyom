// src/components/SkillsContact.jsx
import React from 'react';
import './SkillsContact.css'; 
import { useLanguage } from '../LanguageContext';
import { FaGraduationCap, FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaMapMarkerAlt, FaCode, FaLanguage, FaCloud } from 'react-icons/fa';
import { FaPython, FaReact, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaBrain } from 'react-icons/fa';
import { SiFlutter, SiDart, SiTypescript } from 'react-icons/si';


// CV'den alınan sabit veriler (Güvenlik için E-posta ve Telefon Kaldırıldı!)
const contactData = {
    linkedin: "fatma-resuloglu00", 
    github: "https://github.com/fatmaresuloglu", 
    location: "İSTANBUL", 
};

// Beceriler (Icons ve ID'leri)
const skillsData = [
    { icon: FaCode, id: "c_cpp", category: "languages" },
    { icon: FaPython, id: "python", category: "languages" },
    { icon: SiDart, id: "dart", category: "languages" },
    { icon: SiFlutter, id: "flutter", category: "frameworks" },
    { icon: FaReact, id: "react_native", category: "frameworks" },
    { icon: FaHtml5, id: "html_css", category: "web" },
    { icon: FaJs, id: "js_ts", category: "web" },
    { icon: FaBrain, id: "machine_learning", category: "ai" },
    { icon: FaCloud, id: "azure", category: "tools" },
    { icon: FaGitAlt, id: "git", category: "tools" }, 
];

// Deneyimler (Stajlar)
const experienceData = [
    {
        id: "0",
        date: "30.06.2025 - 29.08.2025",
        tasks: [
            "Spearheaded the development of a React Native mobile application",
            "Engineered critical user-facing features",
            "Built RTL language support",
            "Integrated JWT-based authentication"
        ]
    },
    {
        id: "1",
        date: "01.08.2024 - 28.08.2024",
        tasks: [
            "Contributed to e-commerce website development",
            "Improved overall user experience",
            "Focused on frontend optimization",
            "Engaged in backend integrations"
        ]
    }
];

const ContactInfo = ({ t }) => (
    <div className="info-card contact-info-card">
        <h3>{t.contact.title}</h3>
        <ul>
            <li>
                <FaEnvelope className="contact-icon email-icon" />
                <span>
                    <a href="#contact-form" className="btn btn-contact-form">
                        {t.contact.contact_form_btn}
                    </a>
                </span>
            </li>
            <li>
                <FaMapMarkerAlt className="contact-icon" />
                <span>{contactData.location}</span>
            </li>
            <li>
                <FaLinkedin className="contact-icon" />
                <a href={`https://linkedin.com/in/${contactData.linkedin}`} target="_blank" rel="noopener noreferrer">
                    {contactData.linkedin}
                </a>
            </li>
            <li>
                <FaGithub className="contact-icon" />
                <a href={contactData.github} target="_blank" rel="noopener noreferrer">
                    {t.contact.github_label}
                </a>
            </li>
        </ul>
        <p className="note-text">{t.contact.note_ref_available}</p>
    </div>
);


const ExperienceTimeline = ({ t }) => (
    <div className="timeline-section">
        <h2 className="timeline-title">💼 {t.experience.title}</h2>
        <div className="timeline-wrapper">
            {experienceData.map((item, index) => (
                <div key={item.id} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                    <div className="timeline-content">
                        <h4>{t.experience.items[item.id].company}</h4>
                        <span className="timeline-date">{item.date}</span>
                        <ul>
                            {item.tasks.map((task, taskIndex) => (
                                <li key={taskIndex} dangerouslySetInnerHTML={{ __html: task }} />
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
            {/* Timeline Çizgisi için son nokta */}
            <div className="timeline-end-dot"></div>
        </div>
    </div>
);

const EducationInfo = ({ t }) => (
    <div className="info-card education-card">
        <h3>{t.education.title}</h3>
        <div className="education-detail">
            <FaGraduationCap className="edu-icon" />
            <p>
                <strong>{t.education.university}</strong>
                <br />
                {t.education.department}
                <br />
                {t.education.years} (GPA: 2.68/4.00)
            </p>
        </div>
        <div className="language-detail">
            <FaLanguage className="edu-icon" />
            <p>
                <strong>{t.education.languages}</strong>
                <br />
                {t.education.english} (B2)
            </p>
        </div>
    </div>
);

export const SkillsList = ({ t }) => (
    <div className="info-card skills-card">
        <h3>{t.skills.title}</h3>
        <div className="skill-categories">
            {/* Dil Becerileri */}
            <div className="skill-category">
                <h4>{t.skills.languages_header}</h4>
                <div className="skill-icons">
                    {skillsData.filter(s => s.category === 'languages').map(skill => {
                        const Icon = skill.icon;
                        return (
                            <div key={skill.id} className="skill-item">
                                <Icon className="skill-icon" />
                                <span>{t.skills.items[skill.id]}</span>
                            </div>
                        );
                    })}
                </div>
            </div>
            {/* Frameworks & AI Becerileri */}
            <div className="skill-category">
                <h4>{t.skills.frameworks_ai_header}</h4>
                <div className="skill-icons">
                    {skillsData.filter(s => s.category === 'frameworks' || s.category === 'ai').map(skill => {
                        const Icon = skill.icon;
                        return (
                            <div key={skill.id} className="skill-item">
                                <Icon className="skill-icon" />
                                <span>{t.skills.items[skill.id]}</span>
                            </div>
                        );
                    })}
                </div>
            </div>
            {/* Web & Araçlar Becerileri */}
            <div className="skill-category">
                <h4>{t.skills.web_tools_header || t.skills.web_header}</h4>
                <div className="skill-icons">
                    {skillsData.filter(s => s.category === 'web' || s.category === 'tools').map(skill => {
                        const Icon = skill.icon;
                        return (
                            <div key={skill.id} className="skill-item">
                                <Icon className="skill-icon" />
                                <span>{t.skills.items[skill.id]}</span>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    </div>
);


// --- Ana Bileşen ---

const SkillsContact = () => {
    const { t } = useLanguage();

    return (
        <section id="contact-skills" className="skills-contact-container">
            <div className="main-content-wrapper">
                {/* 1. Sütun: İletişim, Eğitim, Beceriler */}
                <div className="left-column">
                    <ContactInfo t={t} />
                    <EducationInfo t={t} />
                    <SkillsList t={t} />
                </div>
                
                {/* 2. Sütun: Deneyim Zaman Çizelgesi (Stajlar) */}
                <div className="right-column">
                    <ExperienceTimeline t={t} />
                </div>
            </div>
        </section>
    );
};

export default SkillsContact;