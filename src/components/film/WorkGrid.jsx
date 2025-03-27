import React, { useState } from "react";
import VideoOverlay from "./VideoOverlay";

// Import data
import INFO from "../../data/user";

const WorkGrid = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleVideoClick = (e, videoUrl) => {
    e.preventDefault();
    e.stopPropagation();
    setSelectedVideo(videoUrl);
  };

  const handleCloseVideo = () => {
    setSelectedVideo(null);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Selected Works</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {INFO.projects.map((project, index) => (
            <ProjectCard 
              key={index} 
              project={project} 
              onVideoClick={handleVideoClick}
            />
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

const ProjectCard = ({ project, onVideoClick }) => {
  return (
    <div className="group relative overflow-hidden rounded-lg">
      {/* Thumbnail */}
      <div className="aspect-video overflow-hidden">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
        <h3 className="text-xl font-semibold text-white mb-1">{project.title}</h3>
        <p className="text-gray-300 mb-3">{project.category}</p>
        
        <button 
          onClick={(e) => onVideoClick(e, project.url)}
          className="inline-block px-4 py-2 bg-white text-black text-sm font-medium rounded-md hover:bg-gray-200 transition-colors"
        >
          Watch Film
        </button>
      </div>
    </div>
  );
};

export default WorkGrid; 