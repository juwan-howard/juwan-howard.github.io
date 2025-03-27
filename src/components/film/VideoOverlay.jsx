import React from 'react';
import './VideoOverlay.css';

const VideoOverlay = ({ videoUrl, onClose }) => {
  console.log('VideoOverlay rendered with URL:', videoUrl);
  return (
    <div className="video-overlay" onClick={onClose}>
      <div className="video-modal" onClick={e => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>×</button>
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