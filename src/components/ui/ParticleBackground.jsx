import { useEffect, useRef } from "react";

/**
 * ParticleBackground — grade de pontos luminosos animados com paralaxe sutil.
 * Muda de cor suavemente para criar profundidade.
 */
function ParticleBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animId;
    let time = 0;

    const COLS = 20;
    const ROWS = 12;
    const particles = [];

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    function initParticles() {
      particles.length = 0;
      for (let i = 0; i < COLS; i++) {
        for (let j = 0; j < ROWS; j++) {
          particles.push({
            baseX: (i / (COLS - 1)) * canvas.width,
            baseY: (j / (ROWS - 1)) * canvas.height,
            phase: Math.random() * Math.PI * 2,
            speed: 0.3 + Math.random() * 0.5,
            radius: 0.8 + Math.random() * 1.2,
          });
        }
      }
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      time += 0.004;

      for (const p of particles) {
        const x = p.baseX + Math.sin(time * p.speed + p.phase) * 8;
        const y = p.baseY + Math.cos(time * p.speed * 0.7 + p.phase) * 6;
        const alpha = 0.1 + Math.sin(time * p.speed + p.phase) * 0.08;

        ctx.beginPath();
        ctx.arc(x, y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(100, 180, 255, ${Math.max(0.02, alpha)})`;
        ctx.fill();
      }

      animId = requestAnimationFrame(draw);
    }

    resize();
    initParticles();
    draw();

    const handleResize = () => {
      resize();
      initParticles();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0"
      aria-hidden="true"
    />
  );
}

export default ParticleBackground;
