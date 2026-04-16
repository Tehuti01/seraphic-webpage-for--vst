"use client";

import { motion } from "framer-motion";

export default function CTASlide() {
  return (
    <section className="relative w-full min-h-screen py-[var(--phi-8)] px-[var(--phi-5)] bg-gradient-to-b from-[var(--c-abyss)] via-[rgba(204,102,255,0.02)] to-[var(--c-surface-1)] flex items-center justify-center overflow-hidden">
      {/* Animated orbs for enhanced backdrop */}
      <motion.div
        animate={{
          x: [0, 100, -120, 0],
          y: [0, -180, 100, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute top-0 left-1/3 w-96 h-96 bg-gradient-to-r from-[var(--c-lcd-amber)] to-[var(--c-mystic)] rounded-full blur-3xl opacity-5"
      />
      <motion.div
        animate={{
          x: [0, -100, 130, 0],
          y: [0, 150, -120, 0],
        }}
        transition={{ duration: 27, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-[var(--c-mystic)] to-[var(--c-lcd-amber)] rounded-full blur-3xl opacity-5"
      />

      {/* Scanline overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02]" style={{
        backgroundImage: "repeating-linear-gradient(0deg, #000 0px, #000 1px, transparent 1px, transparent 2px)",
      }} />

      {/* Background Metatron's Cube */}
      <svg
        viewBox="0 0 400 400"
        className="absolute inset-0 w-full h-full opacity-[var(--o-ghost)] pointer-events-none"
        style={{ transform: "scale(1.5)" }}
      >
        {/* Metatron's Cube - simplified version */}
        <g stroke="currentColor" strokeWidth="0.5" fill="none" className="text-[var(--c-lcd-amber)]">
          {/* Outer circle */}
          <circle cx="200" cy="200" r="180" suppressHydrationWarning />

          {/* Inner geometry - hexagon */}
          {[0, 60, 120, 180, 240, 300].map((angle) => {
            const rad = (angle * Math.PI) / 180;
            const x = 200 + 100 * Math.cos(rad);
            const y = 200 + 100 * Math.sin(rad);
            return (
              <circle key={angle} cx={x} cy={y} r="50" suppressHydrationWarning />
            );
          })}

          {/* Center circle */}
          <circle cx="200" cy="200" r="50" suppressHydrationWarning />
        </g>
      </svg>

      {/* Radial gradient glow from center */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(255, 176, 0, 0.05) 0%, transparent 70%)",
        }}
      />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.686, ease: [0.618, 0, 0.382, 1] }}
        className="text-center z-10 max-w-3xl relative will-change-transform"
      >
        {/* Main Heading */}
        <h2 className="text-[var(--type-5xl)] font-light text-[var(--c-text-primary)] mb-6 relative transition-all duration-300 hover:drop-shadow-[0_0_30px_rgba(255,176,0,0.3)]">
          Begin Your Sonic Journey
        </h2>

        {/* Subheading */}
        <motion.p
          className="text-[var(--type-lg)] text-[var(--c-text-muted)] mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.424, delay: 0.1 }}
        >
          Download <span className="text-[var(--c-lcd-amber)] transition-all duration-300 hover:drop-shadow-[0_0_15px_rgba(255,176,0,0.5)]">φ-Synth Lite</span> for free.
          <br />
          No credit card required.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.424,
            delay: 0.2,
            ease: [0.618, 0, 0.382, 1],
          }}
          className="flex gap-4 justify-center flex-wrap mb-12"
        >
          <button className="s-btn-actuator s-glow-amber px-[var(--phi-6)] py-[var(--phi-3)] relative overflow-hidden group will-change-transform transition-all duration-300 hover:shadow-[0_0_25px_rgba(255,176,0,0.5)]">
            <div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.1)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              style={{ zIndex: 0 }}
            />
            <span className="relative z-10">◈ DOWNLOAD FREE</span>
          </button>

          <button className="s-btn-ghost px-[var(--phi-6)] py-[var(--phi-3)] relative overflow-hidden group will-change-transform transition-all duration-300 hover:shadow-[0_0_25px_rgba(255,176,0,0.4)]">
            <span className="relative z-10">VIEW ALL PLUGINS →</span>
          </button>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 0.424,
            delay: 0.4,
            ease: [0.618, 0, 0.382, 1],
          }}
          className="flex flex-col md:flex-row gap-[var(--phi-5)] justify-center items-center text-[var(--type-2xs)] text-[var(--c-text-muted)]"
        >
          <span className="flex items-center gap-1 px-3 py-2 rounded-full s-card-glass transition-all duration-300 hover:scale-105">
            <span className="text-[var(--c-lcd-amber)]">✓</span> VST3 · CLAP · AU · AAX · LV2
          </span>
          <span className="hidden md:inline text-[var(--c-text-dim)]">·</span>
          <span className="flex items-center gap-1 px-3 py-2 rounded-full s-card-glass transition-all duration-300 hover:scale-105">
            <span className="text-[var(--c-lcd-amber)]">✓</span> macOS · Windows · Linux
          </span>
          <span className="hidden md:inline text-[var(--c-text-dim)]">·</span>
          <span className="flex items-center gap-1 px-3 py-2 rounded-full s-card-glass transition-all duration-300 hover:scale-105">
            <span className="text-[var(--c-lcd-amber)]">✓</span> No subscription required
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}
