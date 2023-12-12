import React, { useEffect, useRef, useState } from 'react';
import './Visualizer.css';

import base64Audio from '../assets/base64/cityBase64';

const Visualizer = () => {

  useEffect(() => {
    const audio1 = document.getElementById('audio1');
    audio1.src = base64Audio;
    const audioContext = new AudioContext();

    const container = document.getElementById('canvas-container');
    const canvas = document.getElementById('canvas1');
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    const ctx = canvas.getContext('2d');
    ctx.globalCompositeOperation = 'difference';
    let audioSource;
    let analyser;

    container.addEventListener('click', function() {    
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
    
        function animate() {
          x = 0;
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          analyser.getByteFrequencyData(dataArray);
          drawVisualizer(bufferLength, x, barWidth, barHeight, dataArray);
          requestAnimationFrame(animate);
        }
        animate();
    });


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
        barHeight = dataArray[i] * 0.8;
      
        // calculate the angle for this bar
        const angle = (i / bufferLength) * 2.4 * Math.PI;
      
        // calculate the start and end points of the bar
        const startX = centerX + radius * Math.cos(angle);
        const startY = centerY + radius * Math.sin(angle);
        const endX = centerX + (radius + barHeight) * Math.cos(angle);
        const endY = centerY + (radius + barHeight) * Math.sin(angle);

        // draw the bar
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(endX, endY);
        ctx.lineWidth = barWidth;
        ctx.strokeStyle = 'white';
        ctx.stroke();

        if (i > bufferLength * 0.8) {
          ctx.beginPath();
          ctx.arc(centerX, centerY, barHeight, 0, Math.PI * 2)
          ctx.stroke();
        }
        ctx.restore();
        
    } //END FOR LOOP

    //center circle
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    ctx.lineWidth = 2;
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
  }, []);

return (
    <div className='visualizer-container'>
      <div id='canvas-container'>
        <canvas id='canvas1'></canvas>
          <audio id="audio1" controls="controls" src={base64Audio} ></audio>
      </div>
    </div>
  );
};

export default Visualizer;