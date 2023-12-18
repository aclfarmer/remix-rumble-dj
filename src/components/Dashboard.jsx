import React, {useState} from 'react';

import './Dashboard.css'

import MusicBar from './MusicBar';
import Visualizer from './Visualizer';

const Dashboard = () => {
  const [selectedMusic, setSelectedMusic] = useState(null);
  const [play, setPlay] = useState(false);
    
  return (
    <div className='dashboard-container'>
      <div className='dashboard-musicbar-container'>
        <MusicBar setSelectedMusic={setSelectedMusic}  setPlay={setPlay}/>
      </div>
      <div className='dashboard-audio-visualizer-container'>
        <Visualizer selectedMusic={selectedMusic} play={play} setPlay={setPlay}/>
      </div>
    </div>
  )
}

export default Dashboard