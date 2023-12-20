import React, { useEffect, useRef, useState } from 'react';

import './Visualizer.css';

//import base64Audio from '../assets/base64/cityBase64';

//visualizer section. Everything here to do with the visualizer, including design.
function drawVisualizer(canvas, ctx, rotation, bufferLength, barWidth, dataArray) {
  //radius
  const centerX = canvas.width / 2;
  const centerY = canvas.height / 2;
  const radius = Math.min(centerX, centerY) * 0.5;
  let barHeight;
  
  //center circle
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
  ctx.strokeStyle = '#69c4a7';
  ctx.stroke();



  for (let i = 0; i < bufferLength; i++) {
    barHeight = dataArray[i] * 0.4;
    let minBarHeight = 10;

    if (barHeight < minBarHeight) {
      barHeight = minBarHeight;
    }

    let angle;
    if (i > bufferLength * 0.5) {
      // For bars inside the circle, reverse the direction and center it
      angle = ((bufferLength - i) / bufferLength - 0.0) * Math.PI;
    } else {
      // For bars outside the circle
      angle = (i / bufferLength) * Math.PI;
    }

    // Save the current context
    ctx.save();

    // Move to the center of the canvas
    ctx.translate(centerX, centerY);

    // Rotate the canvas
    ctx.rotate(rotation);

    // Move back to the top left corner
    ctx.translate(-centerX, -centerY);
  
      // calculate the start and end points of the bar
      const startX = centerX + radius * Math.cos(angle);
      const startY = centerY + radius * Math.sin(angle);
      let endX, endY;

      if (i > bufferLength * 0.5) {
        // For bars inside the circle
        endX = centerX + (radius - barHeight) * Math.cos(angle);
        endY = centerY + (radius - barHeight) * Math.sin(angle);
      } else {
        // For bars outside the circle
        endX = centerX + (radius + barHeight) * Math.cos(angle);
        endY = centerY + (radius + barHeight) * Math.sin(angle);
      }
      minBarHeight = 0;
    // draw the bar
    ctx.beginPath();
    ctx.moveTo(startX, startY);
    ctx.lineTo(endX, endY);
    
    ctx.lineWidth = barWidth;
    ctx.strokeStyle = 'white';
    ctx.stroke();

    if (i > bufferLength * 0.8) {
      ctx.beginPath();
      ctx.lineWidth = 0.8;
      ctx.arc(centerX, centerY, barHeight, 0, Math.PI * 2)
      ctx.stroke();
    }
    ctx.restore();
    
  } //END FOR LOOP


  //center circle
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
  ctx.minBarHeight = 1;
  ctx.strokeStyle = '#69c4a7';
  ctx.stroke();

  // Create a temporary canvas to draw the gradient
  const tempCanvas = document.createElement('canvas');
  tempCanvas.width = canvas.width;
  tempCanvas.height = canvas.height;
  const tempCtx = tempCanvas.getContext('2d');

  // Draw the gradient on the temporary canvas
  const gradient = tempCtx.createLinearGradient(0, 0, tempCanvas.width, tempCanvas.height);
  gradient.addColorStop(0/8, '#69c4a7');
  gradient.addColorStop(1/8, '#56c4c6');
  gradient.addColorStop(2/8, '#3f78bd');
  gradient.addColorStop(3/8, '#50c5d0');
  gradient.addColorStop(4/8, '#74c69b');
  gradient.addColorStop(5/8, '#b1b172');
  gradient.addColorStop(6/8, '#e09654');
  gradient.addColorStop(7/8, '#e18579');
  gradient.addColorStop(8/8, '#e08187');
  tempCtx.fillStyle = gradient;
  tempCtx.fillRect(0, 0, tempCanvas.width, tempCanvas.height);

  // Set the globalCompositeOperation to 'source-in' to use the visualizer as a mask
  ctx.globalCompositeOperation = 'source-in';

  // Draw the gradient from the temporary canvas onto the main canvas
  ctx.drawImage(tempCanvas, 0, 0);

  // Reset the globalCompositeOperation to 'source-over' (the default value)
  ctx.globalCompositeOperation = 'source-over';
}


const Visualizer = ({selectedMusics, play, setPlay}) => {
  const audioRef = useRef([]); // Create a ref for the audio element
  const canvasRef = useRef(null);

  const rotation = useRef(0);

  useEffect(() => {
    const audioContexts = [];   // Create an array to hold the audio contexts
    const audios = [];   // Create an array to hold the audio elements
    const audioSources = [];   // Create an array to hold the audio sources
    const analysers = [];   // Create an array to hold the analysers
    const dataArray = [];   // Create an array to hold the data arrays
    const bufferLength = [];  // Create an array to hold the buffer lengths

    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');

      const container = canvas.parentElement;

      canvas.width = container.offsetWidth;
      canvas.height = container.offsetHeight;

      const barWidth = 5;
      
      // Initialize bufferLength and dataArray with some default values to cause the visualiser to render
       
      bufferLength[0] = 64;
      dataArray[0] = new Uint8Array(bufferLength[0]).fill(10);

      function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      
        if (selectedMusics.length === 0) {
          // Draw the visualizer with the default values when no music is selected
          drawVisualizer(canvas, ctx, rotation.current, bufferLength[0], barWidth, dataArray[0]);
        } else {
          selectedMusics.forEach((music, index) => {
            // Check if the analyser and data array at the given index are defined
            if (analysers[index] && dataArray[index]) {
              // Get the frequency data
              analysers[index].getByteFrequencyData(dataArray[index]);
            }
    
            // Draw the visualizer
            drawVisualizer(canvas, ctx, rotation.current, bufferLength[index], barWidth, dataArray[index]);
          });
        }
    
        // Increment the rotation and request the next animation frame
        rotation.current += 0.001;
        requestAnimationFrame(animate);
      } //END ANIMATE() FUNCTION

      // Start the animation
      animate();
          
          selectedMusics.forEach((music, index) => {
            //audio loop
              // Create a new audio element for each music
              audios[index] = new Audio();
              audios[index].src = music || undefined;
            
              // Create a new audio context for each music
              audioContexts[index] = new AudioContext();
            
              // Create a new audio source for each music
              audioSources[index] = audioContexts[index].createMediaElementSource(audios[index]);
            
              // Create a new analyser for each music
              analysers[index] = audioContexts[index].createAnalyser();
            
              // Connect the audio source to the analyser and the analyser to the destination
              audioSources[index].connect(analysers[index]);
              analysers[index].connect(audioContexts[index].destination);
            
              // Set the fftSize and get the frequency data
              analysers[index].fftSize = 128;
              bufferLength[index] = analysers[index].frequencyBinCount;
              dataArray[index] = new Uint8Array(bufferLength[index]);
            //audio loop end
              audios[index].play();
          });
        }
}, [selectedMusics, play, rotation]);


return (
    <div className='visualizer-container'>
      <div id='canvas-container'>
        <canvas ref={canvasRef} id='canvas1'></canvas>
          <audio id="audio1" ref={audioRef} controls="controls" src={selectedMusics} ></audio>
      </div>
    </div>
  );
};

export default Visualizer;