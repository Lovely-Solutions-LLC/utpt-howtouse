import React from 'react';
import './FirstTimeUse.css'; // We'll create this CSS file next

const FirstTimeUse = () => {
  return (
    <section id="first-time-use" className="section">
      <h2>First-Time Use</h2>
      
      <h3>Accessing Your App</h3>
      <p>After installation, access the app by clicking on the “Your App Name” tab in the monday.com sidebar.</p>
      <img src="access-app.png" alt="Accessing the App" className="instruction-image" />
      
      <h3>App Components</h3>
      <ul>
        <li><strong>Board View:</strong> Manage your tasks and projects efficiently.</li>
        <li><strong>Widgets:</strong> Visualize data with customizable widgets.</li>
      </ul>
      
      <h3>Usage Examples</h3>
      <p>Use the Board View to track project progress:</p>
      <img src="board-view-example.png" alt="Board View Example" className="instruction-image" />
      
      <video src="board-view-tutorial.mp4" controls className="instruction-video">
        Your browser does not support the video tag.
      </video>
    </section>
  );
};

export default FirstTimeUse;
