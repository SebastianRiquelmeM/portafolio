import React, { useEffect, useRef } from 'react';

const Particles = ({ count = 40, color = '#4f46e5', minSize = 2, maxSize = 5, speed = 1 }) => {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const context = canvas.getContext('2d');
    
    // Función para redimensionar el canvas
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    // Inicializa el canvas
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Crear partículas
    if (particlesRef.current.length === 0) {
      for (let i = 0; i < count; i++) {
        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * (maxSize - minSize) + minSize,
          speedX: (Math.random() - 0.5) * speed,
          speedY: (Math.random() - 0.5) * speed,
          opacity: Math.random() * 0.5 + 0.1
        });
      }
    }
    
    // Función de animación
    const animate = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
      
      particlesRef.current.forEach(particle => {
        // Actualizar posición
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Rebote en los bordes
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.speedX *= -1;
        }
        
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.speedY *= -1;
        }
        
        // Dibujar partícula
        context.beginPath();
        context.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        context.fillStyle = color + Math.floor(particle.opacity * 255).toString(16).padStart(2, '0');
        context.fill();
      });
      
      // Conectar partículas cercanas
      connectParticles(context);
      
      requestAnimationFrame(animate);
    };
    
    // Función para conectar partículas cercanas
    const connectParticles = (context) => {
      const maxDistance = 150;
      
      for (let i = 0; i < particlesRef.current.length; i++) {
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const dx = particlesRef.current[i].x - particlesRef.current[j].x;
          const dy = particlesRef.current[i].y - particlesRef.current[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < maxDistance) {
            const opacity = 1 - distance / maxDistance;
            context.beginPath();
            context.moveTo(particlesRef.current[i].x, particlesRef.current[i].y);
            context.lineTo(particlesRef.current[j].x, particlesRef.current[j].y);
            context.strokeStyle = color + Math.floor(opacity * 30).toString(16).padStart(2, '0');
            context.lineWidth = 0.5;
            context.stroke();
          }
        }
      }
    };
    
    // Iniciar animación
    animate();
    
    // Limpiar al desmontar
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [count, color, minSize, maxSize, speed]);
  
  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
    />
  );
};

export default Particles;