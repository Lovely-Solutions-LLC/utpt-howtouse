// src/App.js
import React, { useEffect } from 'react';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import Header from './components/Header';
import VideoEmbed from './components/VideoEmbed';
import WhatIsTool from './components/WhatIsTool';
import FAQs from './components/FAQs';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <VideoEmbed />
      <WhatIsTool />
      <FAQs />
      <Footer />
    </div>
  );
}

export default App;
