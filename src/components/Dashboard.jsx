import React from 'react';

import './Dashboard.css'

import MusicBar from './MusicBar';
import Visualizer from './Visualizer';

const Dashboard = () => {
    
  return (
    <div className='dashboard-container'>
      <div className='dashboard-musicbar-container'>
        <MusicBar />
      </div>
      <div className='dashboard-audio-visualizer-container'>
        <Visualizer />
      </div>
    </div>
  )
}

export default Dashboard