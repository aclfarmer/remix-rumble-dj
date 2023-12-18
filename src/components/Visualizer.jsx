import React, { useEffect, useRef } from 'react';

import './Visualizer.css';

import base64Audio from '../assets/base64/cityBase64';

const Visualizer = ({selectedMusic, play, setPlay}) => {
  const audioRef = useRef(); // Create a ref for the audio element

  useEffect(() => {
    if (play && audioRef.current) {
      audioRef.current.play();
    } else if (!play && audioRef.current) {
      audioRef.current.pause();
    }
  }, [play]);

  useEffect(() => {
    const audio1 = document.getElementById('audio1');

    if (!audio1.paused) {
      audio1.onended = () => {
        audio1.src = selectedMusic || base64Audio;
        audio1.onended = null;
      };
    } else {
      audio1.src = selectedMusic || base64Audio;
    }

    const audioContext = new AudioContext();

    const container = document.getElementById('canvas-container');
    const canvas = document.getElementById('canvas1');
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const ctx = canvas.getContext('2d');
    ctx.globalCompositeOperation = 'difference';
    let audioSource;
    let analyser;
  
    audioSource = audioContext.createMediaElementSource(audio1);
    analyser = audioContext.createAnalyser();
    audioSource.connect(analyser);
    analyser.connect(audioContext.destination);
    //increase or decrease the below line for more or less visualizer bars. Must be a multitude of 32
    analyser.fftSize = 128;
    const bufferLength = analyser.frequencyBinCount;
    const dataArray = new Uint8Array(bufferLength);
    //bar settings
    const barWidth = 5;
    let barHeight;
    let x;
    
    let rotation = 0;
    function animate() {
      x = 0;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      analyser.getByteFrequencyData(dataArray);
      drawVisualizer(bufferLength, x, barWidth, barHeight, dataArray);
      rotation += 0.001;
      requestAnimationFrame(animate);
    }
    
    animate();


    //visualizer section. Everything here to do with the visualizer, including design.
    function drawVisualizer(bufferLength, x, barWidth, barHeight, dataArray) {
      //radius
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const radius = Math.min(centerX, centerY) * 0.5;
      
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
  }, [selectedMusic]);

return (
    <div className='visualizer-container'>
      <div id='canvas-container'>
        <canvas id='canvas1'></canvas>
          <audio id="audio1" ref={audioRef} controls="controls" src={selectedMusic} ></audio>
      </div>
    </div>
  );
};

export default Visualizer;