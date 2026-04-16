"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function SoundDemoSlide() {
  const [activePreset, setActivePreset] = useState<string | null>(null);

  const presets = [
    { id: "crystalline", label: "Crystalline Bloom" },
    { id: "merkabah", label: "Deep Merkabah" },
    { id: "harmonic", label: "Golden Harmonic" },
    { id: "echo", label: "Torus Echo" },
    { id: "quantum", label: "Quantum Shift" },
    { id: "divine", label: "Divine Light" },
  ];

  return (
    <section className="relative w-full min-h-screen py-[var(--phi-8)] px-[var(--phi-5)] bg-[var(--c-abyss)] overflow-hidden">
      {/* Enhanced gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--c-abyss)] via-[rgba(204,102,255,0.03)] to-[var(--c-surface-1)]" />

      {/* Animated radial glow */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse at 50% 50%, rgba(204,102,255,0.08) 0%, rgba(255,176,0,0.03) 40%, transparent 70%)",
      }} />

      {/* Animated orbs */}
      <motion.div
        animate={{
          x: [0, -140, 100, 0],
          y: [0, 120, -80, 0],
        }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-[var(--c-mystic)] to-[var(--c-lcd-amber)] rounded-full blur-3xl opacity-4"
      />
      <motion.div
        animate={{
          x: [0, 100, -120, 0],
          y: [0, -100, 100, 0],
        }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-1/3 right-0 w-96 h-96 bg-gradient-to-r from-[var(--c-lcd-amber)] to-[var(--c-mystic)] rounded-full blur-3xl opacity-4"
      />

      {/* Scanline overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02]" style={{
        backgroundImage: "repeating-linear-gradient(0deg, #000 0px, #000 1px, transparent 1px, transparent 2px)",
      }} />

      <div className="max-w-[1440px] mx-auto relative z-10">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.424, ease: [0.618, 0, 0.382, 1] }}
          className="text-center mb-[var(--phi-8)]"
        >
          <h2 className="text-[var(--type-4xl)] font-light text-[var(--c-text-primary)]">
            Hear the Geometry
          </h2>
          <p className="text-[var(--c-text-muted)] mt-4">
            Select a preset to experience the φ-Core in action
          </p>
        </motion.div>

        {/* Waveform Visualizer */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.686, ease: [0.618, 0, 0.382, 1] }}
          className="bg-gradient-to-br from-[var(--c-surface-2)] to-[var(--c-surface-1)] border border-[var(--c-border)] rounded-[var(--r-lg)] p-[var(--phi-5)] min-h-64 mb-[var(--phi-8)] flex items-center justify-center relative overflow-hidden group will-change-transform transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,176,0,0.2)]"
        >
          {/* Glow on hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[rgba(255,176,0,0.05)] to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          <svg viewBox="0 0 800 200" className="w-full h-full opacity-50 relative z-10">
            <defs>
              <linearGradient id="waveGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgba(255, 176, 0, 0.6)" />
                <stop offset="100%" stopColor="rgba(255, 176, 0, 0.1)" />
              </linearGradient>
            </defs>
            {/* Static waveform */}
            <path
              d="M 0 100 Q 50 50, 100 100 T 200 100 T 300 100 T 400 100 T 500 100 T 600 100 T 700 100 T 800 100"
              stroke="url(#waveGradient)"
              strokeWidth="3"
              fill="none"
              className={activePreset ? "drop-shadow-[0_0_15px_rgba(255,176,0,0.5)]" : ""}
            />
          </svg>
          {activePreset && (
            <div className="absolute inset-0 bg-gradient-to-t from-[rgba(255,176,0,0.05)] to-transparent" />
          )}
        </motion.div>

        {/* Preset Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.424, delay: 0.2, ease: [0.618, 0, 0.382, 1] }}
          className="grid grid-cols-2 md:grid-cols-3 gap-[var(--phi-4)]"
        >
          {presets.map((preset) => (
            <button
              key={preset.id}
              onClick={() => setActivePreset(preset.id)}
              className={`s-card-glass p-[var(--phi-3)] rounded-[var(--r-md)] transition-all duration-300 text-center relative overflow-hidden group will-change-transform ${
                activePreset === preset.id
                  ? "border-[var(--c-lcd-amber)] bg-[rgba(255,176,0,0.1)] shadow-[0_0_20px_rgba(255,176,0,0.3)]"
                  : "hover:shadow-[0_0_20px_rgba(255,176,0,0.15)] hover:translate-y-[-2px]"
              }`}
            >
              {/* Button glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-[rgba(255,176,0,0.1)] via-transparent to-[rgba(255,176,0,0.1)] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
              <p className="text-[var(--type-sm)] font-light relative z-10">
                {preset.label}
              </p>
            </button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
