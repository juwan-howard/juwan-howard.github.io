import React, { useState } from 'react';
import './WorkGrid.css';

const WorkGrid = () => {
  const categories = ['All', 'Short Films', 'Documentaries', 'Commercials'];
  const [activeCategory, setActiveCategory] = useState('All');
  
  const projects = [
    {
      id: 1,
      title: "Urban Reflections",
      category: "Short Films",
      image: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=1025",
      year: "2023"
    },
    {
      id: 2,
      title: "Nature's Voice",
      category: "Documentaries",
      image: "https://images.unsplash.com/photo-1518544801976-3e159def92d3?q=80&w=1287",
      year: "2022"
    },
    {
      id: 3,
      title: "Midnight Journey",
      category: "Short Films",
      image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1459",
      year: "2022"
    },
    {
      id: 4,
      title: "Brand Essence",
      category: "Commercials",
      image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1471",
      year: "2023"
    },
    {
      id: 5,
      title: "City Lights",
      category: "Short Films",
      image: "https://images.unsplash.com/photo-1470509037663-253afd7f0f51?q=80&w=1287",
      year: "2021"
    },
    {
      id: 6,
      title: "Product Vision",
      category: "Commercials",
      image: "https://images.unsplash.com/photo-1523251343397-1ff5cc2ab2c0?q=80&w=1586",
      year: "2022"
    }
  ];

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

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
          {filteredProjects.map(project => (
            <div className="work-item" key={project.id}>
              <div className="work-image-container">
                <img src={project.image} alt={project.title} />
                <div className="work-overlay">
                  <div className="work-info">
                    <h3>{project.title}</h3>
                    <p>{project.category} | {project.year}</p>
                    <a href={`#project-${project.id}`} className="view-project">View Project</a>
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