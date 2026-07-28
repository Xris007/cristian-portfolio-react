import { useEffect, useRef } from 'react';

type Particle = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  alpha: number;
};

export function BackgroundEffects() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext('2d');
    if (!context) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let animationId = 0;
    let particles: Particle[] = [];
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const resize = () => {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * ratio;
      canvas.height = height * ratio;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
    };

    const makeParticle = (): Particle => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.28,
      vy: (Math.random() - 0.5) * 0.28,
      radius: Math.random() * 1.6 + 0.6,
      color: Math.random() > 0.55 ? '16,185,129' : '99,102,241',
      alpha: Math.random() * 0.45 + 0.12,
    });

    const draw = () => {
      context.clearRect(0, 0, width, height);
      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        if (particle.x < -10) particle.x = width + 10;
        if (particle.x > width + 10) particle.x = -10;
        if (particle.y < -10) particle.y = height + 10;
        if (particle.y > height + 10) particle.y = -10;

        context.beginPath();
        context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        context.fillStyle = `rgba(${particle.color},${particle.alpha})`;
        context.fill();
      });

      for (let i = 0; i < particles.length; i += 1) {
        for (let j = i + 1; j < particles.length; j += 1) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.hypot(dx, dy);
          if (distance < 130) {
            context.beginPath();
            context.moveTo(particles[i].x, particles[i].y);
            context.lineTo(particles[j].x, particles[j].y);
            context.strokeStyle = `rgba(16,185,129,${0.09 * (1 - distance / 130)})`;
            context.lineWidth = 0.5;
            context.stroke();
          }
        }
      }
      animationId = requestAnimationFrame(draw);
    };

    const moveGlow = (event: MouseEvent) => {
      if (!glowRef.current) return;
      glowRef.current.style.transform = `translate3d(${event.clientX - 225}px, ${event.clientY - 225}px, 0)`;
    };

    resize();
    particles = Array.from({ length: width < 700 ? 26 : 45 }, makeParticle);
    if (!reducedMotion) draw();
    else draw();

    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', moveGlow, { passive: true });
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', moveGlow);
    };
  }, []);

  return (
    <div className="background-effects" aria-hidden="true">
      <div className="blob blob-one" />
      <div className="blob blob-two" />
      <div ref={glowRef} className="cursor-glow" />
      <canvas ref={canvasRef} className="particle-canvas" />
      <div className="noise" />
    </div>
  );
}
