import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { PROJECT_CATEGORIES } from '../data/projects';

const Projects = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [hash]);

  return (
    <div className="projects-container">
      <header className="projects-hero">
        <h1>PORTFOLIO</h1>
        <p>A collection of my work in enterprise software and academic research.</p>
      </header>

      {PROJECT_CATEGORIES.map((category, index) => (
        <section key={index} className="project-group">
          <div className="group-header">
            <h2>{category.org}</h2>
            <p>{category.description}</p>
          </div>
          
        <div className="project-grid">
        {category.projects.map((project, pIndex) => {
            const projectID = project.title.toLowerCase().replace(/\s+/g, '-');
            
            return (
            <div key={pIndex} id={projectID} className={`work-card ${project.previewImage ? 'has-image' : ''}`}>
                <div className="work-card-content">
                <div className="card-header-flex">
                    {project.isDevelopment ? (
                    <span className="badge-pro dev">Technical Preview</span>
                    ) : (
                    <span className="badge-pro">{category.org}</span>
                    )}
                </div>
                
                <h3 className="work-card-title">{project.title}</h3>
                
                <div className="work-tech-list">
                    {project.tech && (Array.isArray(project.tech) 
                        ? project.tech 
                        : project.tech.split(',')
                    ).map((t, i) => (
                        <span key={i} className="pill-outline-sm">{t.trim()}</span>
                    ))}
                </div>

                <p className="work-card-desc">{project.detail}</p>
                
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="work-link">
                    {project.isDevelopment ? "View Full Resolution" : "View Live Project"} <span>→</span>
                </a>
                </div>

                {project.previewImage && (
                <div className="work-card-image">
                    <img src={project.previewImage} alt={`${project.title} Preview`} />
                </div>
                )}
            </div>
            );
        })}
        </div>
        </section>
      ))}
    </div>
  );
};

export default Projects;