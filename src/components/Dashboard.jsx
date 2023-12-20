import React, {useState} from 'react';

import './Dashboard.css'

import MusicBar from './MusicBar';
import Visualizer from './Visualizer';

const Dashboard = () => {
  const [selectedMusics, setSelectedMusics] = useState([]);
  const [play, setPlay] = useState(false);
    
  return (
    <div className='dashboard-container'>
      <div className='dashboard-musicbar-container'>
      <button onClick={() => console.log(selectedMusics)}>Log selectedMusics</button>
        <MusicBar setSelectedMusics={setSelectedMusics} selectedMusics={selectedMusics} setPlay={setPlay} />
      </div>
      <div className='dashboard-audio-visualizer-container'>
        <Visualizer selectedMusics={selectedMusics} play={play} setPlay={setPlay} />
      </div>
    </div>
  )
}

export default Dashboard