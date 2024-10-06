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
          src="https://www.loom.com/share/3aaa00bbfcd446bea038c73d24008127?sid=dc353df8-a7ed-47b8-89ac-23cdd8adef23"
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
