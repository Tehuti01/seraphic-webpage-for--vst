"use client";

import { motion } from "framer-motion";
import { TESTIMONIALS, DAW_LOGOS } from "@/lib/constants";

export default function TestimonialsSlide() {
  return (
    <section className="relative w-full min-h-screen py-[var(--phi-8)] px-[var(--phi-5)] bg-[var(--c-abyss)] overflow-hidden">
      {/* Enhanced gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--c-abyss)] via-[rgba(255,176,0,0.02)] to-[var(--c-surface-1)]" />

      {/* Animated radial glow */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse at 50% 50%, rgba(255,176,0,0.05) 0%, rgba(204,102,255,0.03) 50%, transparent 80%)",
      }} />

      {/* Animated orbs */}
      <motion.div
        animate={{
          x: [0, 80, -120, 0],
          y: [0, -150, 100, 0],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        className="absolute top-10 left-1/4 w-96 h-96 bg-gradient-to-r from-[var(--c-lcd-amber)] to-[var(--c-mystic)] rounded-full blur-3xl opacity-3"
      />
      <motion.div
        animate={{
          x: [0, -100, 110, 0],
          y: [0, 120, -80, 0],
        }}
        transition={{ duration: 27, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-20 right-1/4 w-96 h-96 bg-gradient-to-r from-[var(--c-mystic)] to-[var(--c-lcd-amber)] rounded-full blur-3xl opacity-3"
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
            Trusted by Sound Architects
          </h2>
        </motion.div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[var(--phi-5)] mb-[var(--phi-8)]">
          {TESTIMONIALS.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.424,
                delay: idx * 0.15,
                ease: [0.618, 0, 0.382, 1],
              }}
              className="s-card-glass p-[var(--phi-5)] rounded-[var(--r-lg)] relative overflow-hidden group cursor-pointer will-change-transform transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,176,0,0.2)] hover:translate-y-[-6px]"
            >
              {/* Card glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[rgba(255,176,0,0.05)] via-transparent to-[rgba(204,102,255,0.05)] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Quote marks */}
              <div className="text-[var(--type-4xl)] text-[var(--c-lcd-amber)] opacity-20 mb-2 relative z-10 transition-all duration-300 group-hover:opacity-40 group-hover:drop-shadow-[0_0_15px_rgba(255,176,0,0.4)]">
                "
              </div>

              {/* Quote */}
              <p className="text-[var(--type-sm)] text-[var(--c-text-secondary)] mb-[var(--phi-4)] italic relative z-10">
                {testimonial.quote}
              </p>

              {/* Author */}
              <div className="pt-[var(--phi-3)] border-t border-[var(--c-border)] relative z-10">
                <p className="text-[var(--type-sm)] font-light text-[var(--c-text-primary)] transition-all duration-300 group-hover:text-[var(--c-lcd-amber)] group-hover:drop-shadow-[0_0_10px_rgba(255,176,0,0.5)]">
                  {testimonial.name}
                </p>
                <p className="text-[var(--type-2xs)] text-[var(--c-text-muted)]">
                  {testimonial.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* DAW Logos Marquee */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.424, delay: 0.3 }}
        >
          <h3 className="text-[var(--type-sm)] text-[var(--c-text-muted)] uppercase tracking-wider mb-[var(--phi-4)] text-center">
            Used Alongside
          </h3>
          <div className="overflow-hidden bg-gradient-to-r from-[var(--c-abyss)] via-[rgba(255,176,0,0.03)] to-[var(--c-abyss)] rounded-[var(--r-lg)] border border-[var(--c-border)]">
            <motion.div
              animate={{ x: [0, -500] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="flex gap-[var(--phi-5)] py-[var(--phi-3)] px-[var(--phi-4)] will-change-transform"
            >
              {[...DAW_LOGOS, ...DAW_LOGOS].map((logo, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 whitespace-nowrap opacity-40 hover:opacity-70 transition-all duration-300 group cursor-pointer"
                >
                  <span className="text-[var(--type-3xl)] group-hover:text-[var(--c-lcd-amber)] transition-colors group-hover:drop-shadow-[0_0_8px_rgba(255,176,0,0.4)]">
                    {logo.icon}
                  </span>
                  <span className="text-[var(--type-sm)] text-[var(--c-text-muted)] group-hover:text-[var(--c-lcd-amber)] transition-colors">
                    {logo.name}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
