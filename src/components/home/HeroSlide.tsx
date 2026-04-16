"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { letterVariant, letterByLetterVariant } from "@/lib/animations";

gsap.registerPlugin(ScrollTrigger);

export default function HeroSlide() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!sectionRef.current || !containerRef.current) return;

    // Pin the section and drive animations with scroll
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom center",
        pin: true,
        pinSpacing: true,
        scrub: 0.6,
        markers: false,
      },
    });

    // Animate text scale and opacity as we scroll
    tl.to(
      containerRef.current,
      {
        scale: 0.6,
        opacity: 0.3,
        y: 200,
        duration: 1,
      },
      0
    );

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  // Mouse tracking for subtle parallax
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Enhanced gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--c-abyss)] via-[rgba(255,176,0,0.03)] to-[var(--c-surface-1)]" />

      {/* Animated radial glow */}
      <div className="absolute inset-0 radial-gradient-glow opacity-40" style={{
        background: "radial-gradient(ellipse at 50% 50%, rgba(255,176,0,0.08) 0%, rgba(204,102,255,0.04) 40%, transparent 70%)",
      }} />

      {/* Particle canvas with enhanced visuals */}
      <ParticleCanvas />

      {/* Animated gradient orbs */}
      <motion.div
        animate={{
          x: [0, 100, -100, 0],
          y: [0, -150, 150, 0],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-20 left-1/4 w-96 h-96 bg-gradient-to-r from-[var(--c-lcd-amber)] to-[var(--c-mystic)] rounded-full blur-3xl opacity-5"
      />
      <motion.div
        animate={{
          x: [0, -120, 120, 0],
          y: [0, 100, -100, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-20 right-1/4 w-96 h-96 bg-gradient-to-r from-[var(--c-mystic)] to-[var(--c-lcd-amber)] rounded-full blur-3xl opacity-5"
      />

      {/* Content Container with enhanced motion */}
      <motion.div
        ref={containerRef}
        className="text-center z-10 relative will-change-transform"
        initial={{ opacity: 1, scale: 1 }}
      >
        {/* SERAPHIC Title - Enhanced letter animation */}
        <motion.div
          variants={letterByLetterVariant}
          initial="hidden"
          animate="visible"
          className="mb-4 relative"
        >
          <h1 className="font-light text-[var(--type-7xl)] font-[var(--font-playfair)] tracking-[-0.03em] leading-none relative z-10">
            {/* Seraphic - split into letters with enhanced glow */}
            {"SERAPHIC".split("").map((letter, idx) => (
              <motion.span
                key={idx}
                variants={letterVariant}
                className="inline-block text-[var(--c-text-primary)]"
              >
                {letter}
              </motion.span>
            ))}
          </h1>
          {/* Glow layer behind text */}
          <div className="absolute inset-0 blur-2xl opacity-20 pointer-events-none" style={{
            background: "linear-gradient(to right, transparent, var(--c-lcd-amber), transparent)",
          }} />
        </motion.div>

        {/* SONIC Title - Enhanced clip reveal with glow */}
        <motion.div
          initial={{ clipPath: "inset(0 100% 0 0)", opacity: 0 }}
          animate={{ clipPath: "inset(0 0 0 0)", opacity: 1 }}
          transition={{
            duration: 1,
            delay: 0.8,
          }}
          className="mb-6 relative"
          whileHover={{
            textShadow: "0 0 40px var(--c-lcd-amber), 0 0 80px rgba(255,176,0,0.5)",
          }}
        >
          <h2 className="font-light text-[var(--type-6xl)] font-[var(--font-playfair)] tracking-[-0.02em] text-[var(--c-lcd-amber)]">
            SONIC
          </h2>
        </motion.div>

        {/* Tagline with enhanced styling */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.424,
            delay: 1.2,
          }}
          className="mb-4"
        >
          <p className="text-[var(--type-lg)] font-light font-[var(--font-outfit)] text-[var(--c-text-muted)] tracking-wide">
            Quantum-Geometric Audio Engine
          </p>
        </motion.div>

        {/* Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.424,
            delay: 1.4,
          }}
          className="mb-12"
        >
          <p className="text-[var(--type-md)] font-light font-[var(--font-outfit)] italic text-[var(--c-text-muted)]">
            Where φ governs every frequency
          </p>
        </motion.div>

        {/* Enhanced CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.424,
            delay: 1.6,
          }}
          className="flex gap-4 justify-center flex-wrap"
        >
          <motion.button
            className="s-btn-actuator s-glow-amber px-[var(--phi-5)] py-3 relative overflow-hidden group will-change-transform transition-all duration-300 hover:shadow-[0_0_25px_rgba(255,176,0,0.4)]"
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">◈ EXPLORE PLUGINS</span>
            <div
              className="absolute inset-0 bg-[var(--c-amber-hot)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ zIndex: 0 }}
            />
          </motion.button>

          <motion.button
            className="s-btn-ghost px-[var(--phi-5)] py-3 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,176,0,0.3)]"
            whileTap={{ scale: 0.95 }}
          >
            ▷ WATCH DEMO
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Enhanced light shaft */}
      <motion.div
        animate={{ opacity: [0.3, 0.8, 0.3] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute top-0 left-1/2 transform -translate-x-1/2 w-px h-full bg-gradient-to-b from-[var(--c-lcd-amber)] via-transparent to-transparent opacity-5"
      />

      {/* Scanline effect */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02]" style={{
        backgroundImage: "repeating-linear-gradient(0deg, #000 0px, #000 1px, transparent 1px, transparent 2px)",
      }} />
    </section>
  );
}

// Enhanced particle canvas
function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      opacity: number;
      size: number;
      angle: number;
      angularVelocity: number;
    }

    const particles: Particle[] = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.8,
      vy: -Math.random() * 0.3 - 0.1,
      opacity: Math.random() * 0.6,
      size: Math.random() * 2 + 0.8,
      angle: Math.random() * Math.PI * 2,
      angularVelocity: (Math.random() - 0.5) * 0.05,
    }));

    const animate = () => {
      ctx.fillStyle = "rgba(5, 5, 5, 0.02)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.angle += p.angularVelocity;
        p.opacity += (Math.random() - 0.5) * 0.03;
        p.opacity = Math.max(0, Math.min(1, p.opacity));

        if (p.y < -10) {
          p.y = canvas.height + 10;
          p.x = Math.random() * canvas.width;
          p.opacity = Math.random() * 0.6;
        }

        // Draw particle with rotation
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.angle);
        ctx.fillStyle = `rgba(255, 176, 0, ${p.opacity * 0.8})`;
        ctx.beginPath();
        ctx.arc(0, 0, p.size, 0, Math.PI * 2);
        ctx.fill();

        // Add glow
        ctx.strokeStyle = `rgba(255, 176, 0, ${p.opacity * 0.3})`;
        ctx.lineWidth = 1;
        ctx.stroke();

        ctx.restore();
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 opacity-60"
      style={{ mixBlendMode: "screen" }}
    />
  );
}
