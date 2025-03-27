import React, { useEffect } from 'react';
import './VideoOverlay.css';

const VideoOverlay = ({ videoUrl, onClose }) => {
  useEffect(() => {
    console.log('VideoOverlay mounted with URL:', videoUrl);
    // Prevent body scrolling when overlay is open
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [videoUrl]);

  const handleOverlayClick = (e) => {
    console.log('Overlay clicked');
    onClose();
  };

  const handleModalClick = (e) => {
    console.log('Modal clicked');
    e.stopPropagation();
  };

  const handleCloseClick = (e) => {
    console.log('Close button clicked');
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