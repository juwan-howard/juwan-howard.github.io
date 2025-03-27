import React from 'react';
import './VideoOverlay.css';

const VideoOverlay = ({ videoUrl, onClose }) => {
  // Extract video ID from Vimeo URL
  const getVimeoId = (url) => {
    const regExp = /^.*(vimeo.com\/)([0-9]+).*$/;
    const match = url.match(regExp);
    return match ? match[2] : null;
  };

  const videoId = getVimeoId(videoUrl);

  return (
    <div className="video-overlay" onClick={onClose}>
      <div className="video-container" onClick={e => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>×</button>
        <iframe
          src={`https://player.vimeo.com/video/${videoId}?autoplay=1`}
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
          title="Project Video"
        />
      </div>
    </div>
  );
};

export default VideoOverlay; 