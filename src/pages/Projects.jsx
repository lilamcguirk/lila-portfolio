import React from 'react';
import { PROJECT_CATEGORIES } from '../data/projects';

const Projects = () => {
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
            {category.projects.map((project, pIndex) => (
              <div key={pIndex} className="project-card">
                <div className="card-content">
                  <h3>{project.title}</h3>
                  <span className="tech-tag">{project.tech}</span>
                  <p>{project.detail}</p>
                  <a href={project.link} className="text-link">View Project →</a>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default Projects;