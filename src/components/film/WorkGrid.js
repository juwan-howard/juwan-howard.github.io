import React, { useState } from 'react';
import './WorkGrid.css';
import INFO from '../../data/user';

const WorkGrid = () => {
  // Extract unique categories from projects data
  const allCategories = [...new Set(INFO.projects.map(project => project.category))];
  const categories = ['All', ...allCategories];
  
  const [activeCategory, setActiveCategory] = useState('All');
  
  const filteredProjects = activeCategory === 'All' 
    ? INFO.projects 
    : INFO.projects.filter(project => project.category === activeCategory);

  return (
    <section id="work" className="work-section">
      <div className="work-container">
        <div className="section-header">
          <h2>Selected Works</h2>
          <p>A collection of my latest projects</p>
        </div>
        
        <div className="category-filter">
          {categories.map(category => (
            <button 
              key={category}
              className={activeCategory === category ? 'active' : ''}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="work-grid">
          {filteredProjects.map((project, index) => (
            <div className="work-item" key={index}>
              <div className="work-image-container">
                <img src={project.thumbnail} alt={project.title} />
                <div className="work-overlay">
                  <div className="work-info">
                    <h3 className={project.title === "The Abuse of a Flower" ? "long-title" : ""}>{project.title}</h3>
                    <p>{project.category} | {project.year}</p>
                    <a href={project.url} target="_blank" rel="noopener noreferrer" className="view-project">View Project</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkGrid; 