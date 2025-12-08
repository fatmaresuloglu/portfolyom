// src/components/Projects.jsx
import React from 'react';
import './Projects.css';
import { useLanguage } from '../LanguageContext'; // useLanguage hook'unu kullanıyoruz
import { FaMobileAlt, FaCloud, FaFlask, FaBrain, FaHeartbeat } from 'react-icons/fa';

const ProjectCard = ({ project, t }) => {
    const ProjectIcon = project.icon;

    return (
        <div className="project-card">
            <div className="card-header">
                <ProjectIcon className="project-icon" />
                {/* Metin, t.projects içinden alınır (t.projects.project_1.title gibi) */}
                <h3>{t.projects[project.id].title}</h3>
            </div>
            {/* Metin, t.projects içinden alınır */}
            <p className="project-support">**{t.projects[project.id].support}**</p>
            {/* Metin, t.projects içinden alınır */}
            <p className="project-description">{t.projects[project.id].description}</p>
            
            <div className="project-details">
                {/* "Teknik Detaylar" metni t.common'dan alınabilir */}
                <h4>{t.common.technical_details}</h4> 
                <ul>
                    {project.details.map((detail, index) => (
                        <li key={index}>
                            <detail.icon className="detail-icon" />
                            {/* Anahtar kelimeyi bold yapmak ve değeri t.projects içinden almak */}
                            <strong>{t.projects[project.id].details[index].key}:</strong> 
                            {t.projects[project.id].details[index].value}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};


const Projects = () => {
    // Dil bağlamından (Language Context) çeviri fonksiyonunu al
    const { t } = useLanguage();
    
    // Proje ikonları ve ID'leri sabit kalır, metinler t nesnesinden çekilir.
    const projectDefinitions = [
        {
            id: "project_1", // JSON dosyasındaki karşılığı
            icon: FaBrain,
            details: [
                { icon: FaMobileAlt }, // Detay ikonları
                { icon: FaFlask },
                { icon: FaBrain },
            ]
        },
        {
            id: "project_2", // JSON dosyasındaki karşılığı
            icon: FaHeartbeat,
            details: [
                { icon: FaFlask },
                { icon: FaCloud },
                { icon: FaFlask },
                { icon: FaMobileAlt },
                { icon: FaCloud },
            ]
        }
    ];

    return (
        <section id="projects" className="projects-container">
            {/* Başlık ve alt başlık t nesnesinden alınır */}
            <h2 className="section-title">✨ {t.projects.title}</h2>
            <p className="section-subtitle">{t.projects.subtitle}</p>
            
            <div className="projects-grid">
                {projectDefinitions.map((project) => (
                    // t nesnesini ProjectCard'a iletiyoruz
                    <ProjectCard key={project.id} project={project} t={t} /> 
                ))}
            </div>

            <div className="more-info-block">
                {/* Daha fazla bilgi bloğu metni t nesnesinden alınır */}
                <p>{t.projects.info_block}</p>
            </div>
        </section>
    );
};

export default Projects;