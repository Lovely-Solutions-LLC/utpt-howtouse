// src/components/VideoEmbed.js
import React from 'react';
import './VideoEmbed.css';

const VideoEmbed = () => {
  return (
    <section className="video-section section" data-aos="zoom-in">
      <div className="video-container">
        <iframe
          width="100%"
          height="500px"
          src="https://www.youtube.com/embed/GRCgHGci5AQ"
          title="The Ultimate Team Productivity Tool Overview"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default VideoEmbed;
