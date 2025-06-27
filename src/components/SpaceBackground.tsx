import { useRef, useEffect } from 'react';

const SpaceBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Create stars
    const stars: {x: number, y: number, size: number, speed: number, alpha: number}[] = [];
    const starCount = 1000; // Increased from 200 to 1000 for denser starfield
    
    for (let i = 0; i < starCount; i++) {
      const size = Math.random() * 1.2; // Slightly smaller max size for more natural look
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: size,
        speed: 0.05 + Math.random() * 0.3, // Slower speed for more subtle movement
        alpha: 0.3 + Math.random() * 0.7 // Random opacity for depth
      });
    }

    // Animation loop
    let animationFrameId: number;
    
    const animate = () => {
      ctx.fillStyle = '#000';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      ctx.fillStyle = '#fff';
      
      for (let i = 0; i < stars.length; i++) {
        const star = stars[i];
        
        // Draw star with varying opacity
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
        ctx.fill();
        
        // Move stars with their individual speeds
        star.y += star.speed;
        
        // Reset star when it goes off screen with some randomness
        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
          // Randomize speed and opacity when resetting for more natural look
          star.speed = 0.05 + Math.random() * 0.3;
          star.alpha = 0.3 + Math.random() * 0.7;
        }
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();
    
    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        pointerEvents: 'none'
      }}
    />
  );
};

export default SpaceBackground;
