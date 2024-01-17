import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { SwitchContext } from './context';

import { motion, AnimatePresence } from 'framer-motion';
import './App.css'


import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';

function App() {
  const [switchTriggered, setSwitchTriggered] = useState(false);
  const [selectedMusics, setSelectedMusics] = useState([]);
  const [musicButtonId, setMusicButtonId] = useState([]);
  

  useEffect(() => {
    // Parse the query parameters from the URL
    const params = new URLSearchParams(window.location.search);

    // Get the 'music' parameters
    const musics = params.getAll('music');

    if (musics.length > 0) {
      // Set the 'selectedMusics' state
      setMusicButtonId(musics);
    }
  }, []);

  //blob tracker
  const handleMouseMove = (event) => {
    const blob = document.getElementById('blob');
    const {pageX, pageY} = event;

    blob.animate({
      left: `${pageX}px`,
      top: `${pageY}px`
    }, { duration: 3000, fill: "forwards"});
  };


  return (
    <Router>
    <SwitchContext.Provider value={{ switchTriggered, setSwitchTriggered }}>
    <div id="_root" onMouseMove={handleMouseMove}>
      <div id="blob-container">
      <div id="blob" />
      <div className={`gradient-overlay ${switchTriggered ? 'late' : 'early'}`} />
      <div id="blur">
        <div className='root-container'>
          <AnimatePresence mode='wait'>
                <motion.div
                  key="dashboard"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Navbar musicButtonId={musicButtonId} />
                  <Dashboard 
                    selectedMusics={selectedMusics} 
                    setSelectedMusics={setSelectedMusics}
                    musicButtonId={musicButtonId}
                    setMusicButtonId={setMusicButtonId}
                  />
                  {console.log(selectedMusics)}
                  {console.log(musicButtonId)}
                  <Footer />
                </motion.div>
          </AnimatePresence>
        </div>
      </div>
      </div>
    </div>
    </SwitchContext.Provider>
    </Router>
  );
};

export default App
