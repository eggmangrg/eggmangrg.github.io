// src/Canvas.js
import React, { useRef, useEffect } from 'react';

const Canvas = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    // Drawing code here

    // Example: Draw a rectangle
    context.fillStyle = 'white';
    context.fillRect(0, 0, 1920, 1080);
  }, []);

  return <canvas ref={canvasRef} width={1920} height={1080} />;
};

export default Canvas;