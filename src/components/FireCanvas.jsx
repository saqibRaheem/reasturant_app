import React, { useEffect, useRef } from 'react';

const FireCanvas = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener('resize', resizeCanvas);
        resizeCanvas();

        const particles = [];
        const particleCount = 100;

        class Particle {
            constructor() {
                this.reset();
            }

            reset() {
                this.x = Math.random() * canvas.width;
                this.y = canvas.height + Math.random() * 100;
                this.size = Math.random() * 3 + 1;
                this.speedX = (Math.random() - 0.5) * 1.5;
                this.speedY = -(Math.random() * 2 + 1);
                this.life = Math.random() * 0.5 + 0.5; // Opacity
                this.color = this.getRandomColor();
            }

            getRandomColor() {
                const colors = [
                    'rgba(255, 69, 0, ',   // OrangeRed
                    'rgba(255, 140, 0, ',  // DarkOrange
                    'rgba(255, 215, 0, ',  // Gold
                    'rgba(255, 0, 0, ',    // Red
                ];
                return colors[Math.floor(Math.random() * colors.length)];
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                this.life -= 0.005;

                if (this.life <= 0 || this.y < -20) {
                    this.reset();
                }
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = this.color + this.life + ')';
                ctx.fill();

                // Add a glow
                ctx.shadowBlur = 15;
                ctx.shadowColor = this.color + '0.5)';
            }
        }

        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }

        let scrollY = 0;
        const handleScroll = () => {
            scrollY = window.scrollY;
        };
        window.addEventListener('scroll', handleScroll);

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            // Draw gradient background overlay
            const gradient = ctx.createLinearGradient(0, canvas.height, 0, 0);
            gradient.addColorStop(0, 'rgba(12, 0, 0, 0.3)');
            gradient.addColorStop(1, 'transparent');
            ctx.fillStyle = gradient;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            particles.forEach(p => {
                // Affect speed based on scroll
                const speedMult = 1 + (scrollY * 0.001);
                p.y += p.speedY * speedMult;
                p.x += p.speedX;
                p.life -= 0.005;

                if (p.life <= 0 || p.y < -20) {
                    p.reset();
                }
                
                p.draw();
            });
            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-[1] w-full h-full"
            style={{ filter: 'blur(1px)' }}
        />
    );
};

export default FireCanvas;
