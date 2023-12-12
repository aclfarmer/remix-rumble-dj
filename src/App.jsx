import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import './App.css'


import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';

function App() {
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
    <div id="_root" onMouseMove={handleMouseMove}>
      <div id="blob-container">
      <div id="blob" />
      </div>
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
                  <Navbar />
                  <Dashboard/> 
                </motion.div>
            </AnimatePresence>
        </div>
      </div>
    </div>
  )
};

export default App
