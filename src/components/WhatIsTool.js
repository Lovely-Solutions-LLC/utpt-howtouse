// src/components/WhatIsTool.js
import React from 'react';
import './WhatIsTool.css';

const WhatIsTool = () => {
  return (
    <section className="what-is-section section" data-aos="fade-up">
      <div className="what-is-text" data-aos="fade-right">
        <h3>What is Master Activity Logs?</h3>
        <p>
        Ultimate Team Productivity Tool is THE solution for teams using monday.com to track and optimize their activities across all boards with one simple interface. This powerful app combines monday.com activity log data from any boards in your workspace into one comprehensive hub, giving you insight into your team's workflow and productivity..
        </p>
        <ul className="bulleted-list">
          <li>The 'Hub" Page: At a glance visibility over team activity</li>
          <li>The 'Reports' Page: Detailed reports on team and board activity from various time periods</li>
          <li>The 'Master Logs' Page: Filter-able and text searchable logs for digging into specific details.</li>
          <li>Automated Email Reports: (Coming Soon) Choose your key datapoints and a frequency, and we'll deliver them to your inbox!</li>
        </ul>
      </div>
      <div className="what-is-image" data-aos="fade-left">
        <img
          src="/assets/tool-image.png" // Updated to .png
          alt="Ultimate Team Productivity Tool"
          width="700"
          height="900"
        />
      </div>
    </section>
  );
};

export default WhatIsTool;
