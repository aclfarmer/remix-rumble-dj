import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import './App.css'

import FlameColorContext from './components/FlameColorContext';

import Flames from './components/Flames';
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

  const [flameColors, setFlameColors] = useState(['orange', 'red', 'gold']);
  const [isRushActive, setIsRushActive] = useState(false);
  
  const switchFlameColors = () => {
    if (flameColors[0] === 'orange') {
      setFlameColors(['#2eb9ff', 'violet', '#2eff77']);
    } else {
      setFlameColors(['orange', 'red', 'gold']);
    }
    setIsRushActive(true);
    setTimeout(() => setIsRushActive(false), 1000)
  };

  return (
    <FlameColorContext.Provider value={{ flameColors, switchFlameColors }}>
    <div id="_root" onMouseMove={handleMouseMove} className={isRushActive ? 'rush' : ''}>
      <div id="blob-container">
      <div id="blob" />
      <Flames />
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
  </FlameColorContext.Provider>
  )
};

export default App
