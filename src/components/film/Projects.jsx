import React, { useState } from 'react';
import { motion } from 'framer-motion';
import VideoOverlay from './VideoOverlay';
import INFO from '../../data/user';
import './Projects.css';

const Projects = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleVideoClick = (videoUrl) => {
    setSelectedVideo(videoUrl);
  };

  const handleCloseVideo = () => {
    setSelectedVideo(null);
  };

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2>Selected Works</h2>
        <div className="projects-grid">
          {INFO.projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="project-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="project-image">
                <img src={project.thumbnail} alt={project.title} />
                <div className="project-overlay">
                  <button 
                    className="view-project-btn"
                    onClick={() => handleVideoClick(project.url)}
                  >
                    View Project
                  </button>
                </div>
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <span className="project-category">{project.category}</span>
                <span className="project-year">{project.year}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      {selectedVideo && (
        <VideoOverlay
          videoUrl={selectedVideo}
          onClose={handleCloseVideo}
        />
      )}
    </section>
  );
};

export default Projects; 