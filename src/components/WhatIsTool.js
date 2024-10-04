// src/components/WhatIsTool.js
import React from 'react';
import './WhatIsTool.css';

const WhatIsTool = () => {
  return (
    <section className="what-is-section section" data-aos="fade-up">
      <div className="what-is-text" data-aos="fade-right">
        <h3>What is the Ultimate Team Productivity Tool?</h3>
        <p>
          The Ultimate Team Productivity Tool is designed to enhance your workflow,
          streamline processes, and maximize efficiency within monday.com. Whether
          you're managing projects, tracking tasks, or collaborating with your team,
          our tool provides the necessary features to ensure success.
        </p>
        <ul className="bulleted-list">
          <li>Feature 1: Seamless integration with existing workflows.</li>
          <li>Feature 2: Real-time collaboration and communication.</li>
          <li>Feature 3: Advanced analytics and reporting.</li>
          <li>Feature 4: Customizable dashboards and views.</li>
        </ul>
      </div>
      <div className="what-is-image" data-aos="fade-left">
        <img
          src="/assets/tool-image.png"
          alt="Ultimate Team Productivity Tool"
          width="700"
          height="900"
        />
      </div>
    </section>
  );
};

export default WhatIsTool;
