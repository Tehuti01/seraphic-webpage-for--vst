"use client";

import { motion } from "framer-motion";
import { TECH_SPECS, TECH_STACK } from "@/lib/constants";
import { staggerContainerVariant, staggerItemVariant } from "@/lib/animations";

export default function ArchitectureSlide() {
  return (
    <section className="relative w-full min-h-screen py-[var(--phi-8)] px-[var(--phi-5)] bg-[var(--c-abyss)] overflow-hidden">
      {/* Enhanced gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--c-abyss)] via-[rgba(204,102,255,0.03)] to-[var(--c-surface-1)]" />

      {/* Animated radial glow */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse at 50% 60%, rgba(255,176,0,0.06) 0%, rgba(204,102,255,0.03) 45%, transparent 75%)",
      }} />

      {/* Animated orbs */}
      <motion.div
        animate={{
          x: [0, 120, -100, 0],
          y: [0, 100, -120, 0],
        }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/3 -left-32 w-96 h-96 bg-gradient-to-r from-[var(--c-mystic)] to-[var(--c-lcd-amber)] rounded-full blur-3xl opacity-4"
      />
      <motion.div
        animate={{
          x: [0, -110, 130, 0],
          y: [0, -100, 110, 0],
        }}
        transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-1/3 -right-32 w-96 h-96 bg-gradient-to-r from-[var(--c-lcd-amber)] to-[var(--c-mystic)] rounded-full blur-3xl opacity-4"
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
            Engineered at the Frequency Level
          </h2>
          <p className="text-[var(--c-text-muted)] mt-4 max-w-2xl mx-auto">
            Rust bare-metal DSP. Zero allocations. Sub-millisecond latency.
          </p>
        </motion.div>

        {/* Specs Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-[var(--phi-4)] mb-[var(--phi-8)]">
          {TECH_SPECS.map((spec) => (
            <motion.div
              key={spec.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.424, ease: [0.618, 0, 0.382, 1] }}
              className="s-card-inset text-center relative overflow-hidden group will-change-transform transition-all duration-300 hover:shadow-[0_0_25px_rgba(255,176,0,0.2)] hover:translate-y-[-4px]"
            >
              {/* Glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-b from-[rgba(255,176,0,0.05)] to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <p className="text-[var(--type-3xl)] s-text-lcd font-light relative z-10 transition-all duration-300 group-hover:drop-shadow-[0_0_15px_rgba(255,176,0,0.5)]">
                {spec.value}
              </p>
              <p className="text-[var(--type-xs)] text-[var(--c-text-muted)] mt-2 uppercase tracking-wider relative z-10">
                {spec.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Tech Stack */}
        <div className="mb-[var(--phi-8)]">
          <h3 className="text-[var(--type-xl)] font-light text-[var(--c-text-primary)] mb-[var(--phi-4)] text-center">
            Built With
          </h3>
          <motion.div
            variants={staggerContainerVariant}
            initial="hidden"
            whileInView="visible"
            className="flex flex-wrap gap-3 justify-center"
          >
            {TECH_STACK.map((tech) => (
              <motion.div
                key={tech.name}
                variants={staggerItemVariant}
                className="s-badge px-[var(--phi-3)] py-2 transition-all duration-300 cursor-pointer will-change-transform hover:scale-105 hover:shadow-[0_0_20px_rgba(255,176,0,0.3)] hover:bg-[rgba(255,176,0,0.08)]"
              >
                {tech.name}
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Architecture Diagram Placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.686, ease: [0.618, 0, 0.382, 1] }}
          className="bg-gradient-to-br from-[var(--c-surface-2)] to-[var(--c-surface-1)] border border-[var(--c-border)] rounded-[var(--r-lg)] p-[var(--phi-5)] min-h-96 flex items-center justify-center relative overflow-hidden group will-change-transform transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,176,0,0.2)] hover:scale-[1.01]"
        >
          {/* Diagram glow on hover */}
          <div className="absolute inset-0 bg-gradient-to-r from-[rgba(255,176,0,0.05)] via-transparent to-[rgba(204,102,255,0.05)] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

          {/* Static architecture diagram */}
          <svg
            className="absolute inset-0 w-full h-full opacity-5 pointer-events-none"
            viewBox="0 0 400 300"
          >
            <line x1="50" y1="150" x2="350" y2="150" stroke="currentColor" strokeWidth="1" className="text-[var(--c-lcd-amber)]" />
            <circle cx="100" cy="150" r="8" fill="none" stroke="currentColor" strokeWidth="1" className="text-[var(--c-lcd-amber)]" />
            <circle cx="200" cy="150" r="8" fill="none" stroke="currentColor" strokeWidth="1" className="text-[var(--c-lcd-amber)]" />
            <circle cx="300" cy="150" r="8" fill="none" stroke="currentColor" strokeWidth="1" className="text-[var(--c-lcd-amber)]" />
          </svg>

          <p className="text-[var(--c-text-muted)] relative z-10">φ-Core Architecture Diagram</p>
        </motion.div>
      </div>
    </section>
  );
}
