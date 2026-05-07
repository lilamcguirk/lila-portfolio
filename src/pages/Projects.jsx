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
        <h1>SELECTED WORK</h1>
        <p>A collection of my work in enterprise software and academic research.</p>
        <div className="category-badges">
          <span className="badge-pro">ENTERPRISE SOLUTIONS</span>
          <span className="badge-pro">SYSTEMS & LOGIC</span>
          <span className="badge-pro">ACADEMIC RESEARCH</span>
          <span className="badge-pro">ITERATIVE DESIGN</span>
        </div>
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
                        <span className="badge-pro dev">
                          <span className="status-dot orange"></span>
                          In Development
                        </span>
                      ) : (
                        <span className="badge-pro live">
                          <span className="status-dot green"></span>
                          Live Project
                        </span>
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

                    <p className="work-card-desc">{project.desc}</p>
                    
                    <div className="project-links-group">
                      {project.youtubeLink && (
                        <a href={project.youtubeLink} target="_blank" rel="noopener noreferrer" className="work-link youtube-link">
                          View YouTube Channel <span>→</span>
                        </a>
                      )}

                      {project.githubLink && (
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="work-link github-link">
                          View GitHub Repo <span>→</span>
                        </a>
                      )}

                      {!project.youtubeLink && !project.githubLink && (
                        <a href={project.link} target="_blank" rel="noopener noreferrer" className="work-link">
                          {project.isDevelopment ? "View Project Preview" : "View Live Project"} <span>→</span>
                        </a>
                      )}
                    </div>
                  </div>

                  {project.previewImage && (
                    <div className="work-card-image">
                        {category.org === "T-Bone Productions" && (
                        <img 
                            src="/images/download.png" 
                            className="card-agency-watermark" 
                            alt="T-Bone Productions" 
                        />
                        )}
                        {category.org === "Red Barn Media Group" && (
                        <img 
                            src="/images/rbmg-logo-grey.svg" 
                            className="card-agency-watermark" 
                            alt="Red Barn Media Group" 
                        />
                        )}
                        {category.org === "The University of Vermont" && (
                        <img 
                            src="/images/uvm.svg" 
                            className="card-agency-watermark" 
                            alt="University of Vermont" 
                        />
                        )}
                      {project.previewImage.toLowerCase().endsWith('.mp4') ? (
                        <video 
                          src={project.previewImage} 
                          autoPlay 
                          muted 
                          loop 
                          playsInline 
                          style={{ width: '70%', height: '100%', display: 'block', paddingTop: '40px' }}
                        />
                      ) : (
                        <img src={project.previewImage} alt={`${project.title} Preview`} />
                      )}
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