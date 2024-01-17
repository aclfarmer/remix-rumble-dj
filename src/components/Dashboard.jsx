import React, {useState} from 'react';

import './Dashboard.css'

import MusicBar from './MusicBar';
import Visualizer from './Visualizer';
import InformationBar from './InformationBar';

const Dashboard = ({ selectedMusics, setSelectedMusics, musicButtonId, setMusicButtonId }) => {
  //passed over to Visauliser
  const [play, setPlay] = useState(false);
  //play time values passed to Visauliser
  const [timeValue, setTimeValue] = useState(0);
  //current time of song passed to informationBar
  const [currentTime, setCurrentTime] = useState(0);
  //Early-Late game switch trigger (chnages songs and timer) passed up from InformationBar
  const [switchTriggered, setSwitchTriggered] = useState(false);

  const handleSwitch = () => {
    setSwitchTriggered(true);
  };

  const resetSwitch = () => {
    setSwitchTriggered(false);
  };
    
  return (
    <div className='dashboard-container'>
      <div className='dashboard-musicbar-container'>
        <MusicBar 
          setSelectedMusics={setSelectedMusics} 
          selectedMusics={selectedMusics} 
          setPlay={setPlay} 
          setTimeValue={setTimeValue}
          switchTriggered={switchTriggered}
          resetSwitch={resetSwitch} 
          musicButtonId={musicButtonId}
          setMusicButtonId={setMusicButtonId}
          />
      </div>
      <div className='dashboard-audio-visualizer-container'>
        <InformationBar handleSwitch={handleSwitch} switchTriggered={switchTriggered} currentTime={currentTime} selectedMusics={selectedMusics} timeValue={timeValue}/>
        <Visualizer selectedMusics={selectedMusics} play={play} setPlay={setPlay} timeValue={timeValue} currentTime={currentTime} setCurrentTime={setCurrentTime} musicButtonId={musicButtonId}/>
      </div>
    </div>
  )
}

export default Dashboard