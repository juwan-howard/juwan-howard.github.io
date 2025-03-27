import React, { useEffect } from 'react';
import './VideoOverlay.css';

const VideoOverlay = ({ videoUrl, onClose }) => {
  useEffect(() => {
    // Add a visible debug message
    const debugDiv = document.createElement('div');
    debugDiv.style.position = 'fixed';
    debugDiv.style.top = '10px';
    debugDiv.style.left = '10px';
    debugDiv.style.backgroundColor = 'red';
    debugDiv.style.color = 'white';
    debugDiv.style.padding = '10px';
    debugDiv.style.zIndex = '9999';
    debugDiv.textContent = `VideoOverlay mounted with URL: ${videoUrl}`;
    document.body.appendChild(debugDiv);

    // Prevent body scrolling when overlay is open
    document.body.style.overflow = 'hidden';
    
    return () => {
      document.body.style.overflow = 'unset';
      document.body.removeChild(debugDiv);
    };
  }, [videoUrl]);

  const handleOverlayClick = (e) => {
    // Add a visible debug message
    const debugDiv = document.createElement('div');
    debugDiv.style.position = 'fixed';
    debugDiv.style.top = '50px';
    debugDiv.style.left = '10px';
    debugDiv.style.backgroundColor = 'blue';
    debugDiv.style.color = 'white';
    debugDiv.style.padding = '10px';
    debugDiv.style.zIndex = '9999';
    debugDiv.textContent = 'Overlay clicked';
    document.body.appendChild(debugDiv);
    setTimeout(() => document.body.removeChild(debugDiv), 2000);

    onClose();
  };

  const handleModalClick = (e) => {
    // Add a visible debug message
    const debugDiv = document.createElement('div');
    debugDiv.style.position = 'fixed';
    debugDiv.style.top = '90px';
    debugDiv.style.left = '10px';
    debugDiv.style.backgroundColor = 'green';
    debugDiv.style.color = 'white';
    debugDiv.style.padding = '10px';
    debugDiv.style.zIndex = '9999';
    debugDiv.textContent = 'Modal clicked';
    document.body.appendChild(debugDiv);
    setTimeout(() => document.body.removeChild(debugDiv), 2000);

    e.stopPropagation();
  };

  const handleCloseClick = (e) => {
    // Add a visible debug message
    const debugDiv = document.createElement('div');
    debugDiv.style.position = 'fixed';
    debugDiv.style.top = '130px';
    debugDiv.style.left = '10px';
    debugDiv.style.backgroundColor = 'purple';
    debugDiv.style.color = 'white';
    debugDiv.style.padding = '10px';
    debugDiv.style.zIndex = '9999';
    debugDiv.textContent = 'Close button clicked';
    document.body.appendChild(debugDiv);
    setTimeout(() => document.body.removeChild(debugDiv), 2000);

    e.stopPropagation();
    onClose();
  };

  return (
    <div className="video-overlay" onClick={handleOverlayClick}>
      <div className="video-modal" onClick={handleModalClick}>
        <button className="close-button" onClick={handleCloseClick}>×</button>
        <div className="video-wrapper">
          <div className="video-container">
            <iframe
              src={videoUrl}
              title="Project Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              frameBorder="0"
              scrolling="no"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoOverlay; 