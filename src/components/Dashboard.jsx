import React, {useState, useEffect, useRef} from 'react';

import './Dashboard.css'

import MusicBar from './MusicBar';
import Visualizer from './Visualizer';
import InformationBar from './InformationBar';

const Dashboard = ({ selectedMusics, setSelectedMusics, musicButtonId, setMusicButtonId, switchTriggered, setSwitchTriggered }) => {
  //passed over to Visauliser
  const [play, setPlay] = useState(false);
  //play time values passed to Visauliser
  const [timeValue, setTimeValue] = useState(0);
  //current time of song passed to informationBar
  const [currentTime, setCurrentTime] = useState(0);
  //Early-Late game switch trigger (chnages songs and timer) passed up from InformationBar

  const isSettingTime = useRef(false);

  const handleSwitch = () => {
    setSwitchTriggered(true);
  };

  const handleTimeUpdate = (newTime) => {
    isSettingTime.current = true; // Set isSettingTime to true
    setCurrentTime(newTime);
    if (play) {
      setPlay(false);
      setTimeout(() => {
        setPlay(true);
        isSettingTime.current = false; // Reset isSettingTime to false
      }, 0);
    } else {
      isSettingTime.current = false; // Reset isSettingTime to false
    }
  };

  useEffect(() => {
    if (isSettingTime.current) {
      setPlay(true);
      isSettingTime.current = false; // Reset isSettingTime to false
    }
  }, [currentTime]);
  
    
  return (
    <div className='dashboard-container'>
      <div className='dashboard-musicbar-container'>
        <MusicBar 
          setSelectedMusics={setSelectedMusics} 
          selectedMusics={selectedMusics} 
          setPlay={setPlay} 
          setTimeValue={setTimeValue}
          switchTriggered={switchTriggered}
          musicButtonId={musicButtonId}
          setMusicButtonId={setMusicButtonId}
          />
      </div>
      <div className='dashboard-audio-visualizer-container'>
        <InformationBar 
          handleSwitch={handleSwitch} 
          switchTriggered={switchTriggered} 
          currentTime={currentTime} 
          selectedMusics={selectedMusics} 
          timeValue={timeValue}
          handleTimeUpdate={handleTimeUpdate}
        />
        <Visualizer 
          selectedMusics={selectedMusics} 
          play={play} setPlay={setPlay} 
          timeValue={timeValue} 
          currentTime={currentTime} 
          setCurrentTime={setCurrentTime} 
          musicButtonId={musicButtonId}
          handleTimeUpdate = {handleTimeUpdate}
          isSettingTime={isSettingTime}
        />
      </div>
    </div>
  )
}

export default Dashboard