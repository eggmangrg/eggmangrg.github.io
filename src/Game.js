import React, { useState, useEffect, useRef } from 'react';

const Game = () => {
  const canvasRef = useRef(null);
  const [score, setScore] = useState(0);
  const [target, setTarget] = useState({ x: 0, y: 0, width: 50, height: 50 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const targetImage = new Image();
    targetImage.src = 'shot.png';

    const drawTarget = () => {
      const { x, y, width, height } = target;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(targetImage, x, y, width, height);
    };

    const handleMouseClick = (event) => {
      const mouseX = event.clientX - canvas.getBoundingClientRect().left;
      const mouseY = event.clientY - canvas.getBoundingClientRect().top;

      // Check if the click is inside the target
      if (
        mouseX >= target.x &&
        mouseX <= target.x + target.width &&
        mouseY >= target.y &&
        mouseY <= target.y + target.height
      ) {
        // Increase the score and update the game state
        setScore((prevScore) => prevScore + 1);
        setTarget({
          x: Math.random() * (canvas.width - target.width),
          y: Math.random() * (canvas.height - target.height),
          width: 50,
          height: 50,
        });
      }
    };

    canvas.addEventListener('click', handleMouseClick);

    return () => {
      canvas.removeEventListener('click', handleMouseClick);
    };
  }, [target, score]);

  return (
    <div>
      <p>Score: {score}</p>
      <canvas ref={canvasRef} width={800} height={600}></canvas>
    </div>
  );
};

export default Game;