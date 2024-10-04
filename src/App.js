import React from 'react';
import './App.css';
import InstallationInstructions from './components/InstallationInstructions';
import FirstTimeUse from './components/FirstTimeUse';

function App() {
  return (
    <div className="App">
      <InstallationInstructions />
      <FirstTimeUse />
    </div>
  );
}

export default App;
