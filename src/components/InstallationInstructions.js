import React from 'react';
import './InstallationInstructions.css'; // We'll create this CSS file next

const InstallationInstructions = () => {
  return (
    <section id="installation" className="section">
      <h2>Installation Instructions</h2>
      
      <h3>Prerequisites</h3>
      <ul>
        <li>monday.com account with admin privileges</li>
        <li>Latest version of a supported browser (e.g., Chrome, Firefox)</li>
      </ul>
      
      <h3>Steps to Install</h3>
      <ol>
        <li>Navigate to the monday.com Apps Marketplace.</li>
        <li>Search for “Your App Name”.</li>
        <li>Click “Add to Monday.com”.</li>
        <li>Follow the on-screen prompts to complete installation.</li>
      </ol>
      
      <img src="installation-screenshot.png" alt="Installation Screenshot" className="instruction-image" />
      
      <video src="installation-guide.mp4" controls className="instruction-video">
        Your browser does not support the video tag.
      </video>
    </section>
  );
};

export default InstallationInstructions;
