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
                <div key={pIndex} id={projectID} className="project-card">
                  <div className="card-content">
                    <h3>{project.title}</h3>
                    <span className="tech-tag">{project.tech}</span>
                    <p>{project.detail}</p>
                    <a href={project.link} className="text-link">View Project →</a>
                  </div>
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