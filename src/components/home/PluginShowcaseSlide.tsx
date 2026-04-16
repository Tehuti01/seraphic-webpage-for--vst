"use client";

import { motion } from "framer-motion";
import { Plugin } from "@/lib/db";
import { scaleBloomVariant } from "@/lib/animations";

interface PluginShowcaseSlideProps {
  plugins: Plugin[];
}

export default function PluginShowcaseSlide({
  plugins,
}: PluginShowcaseSlideProps) {
  return (
    <section className="relative w-full min-h-screen py-[var(--phi-8)] px-[var(--phi-5)] bg-[var(--c-abyss)] overflow-hidden">
      {/* Enhanced gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--c-abyss)] via-[rgba(204,102,255,0.02)] to-[var(--c-surface-1)]" />

      {/* Animated radial glow */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse at 50% 40%, rgba(255,176,0,0.06) 0%, rgba(204,102,255,0.03) 50%, transparent 80%)",
      }} />

      {/* Animated orbs */}
      <motion.div
        animate={{
          x: [0, 120, -80, 0],
          y: [0, -100, 120, 0],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/3 -left-20 w-96 h-96 bg-gradient-to-r from-[var(--c-lcd-amber)] to-[var(--c-mystic)] rounded-full blur-3xl opacity-4"
      />
      <motion.div
        animate={{
          x: [0, -100, 140, 0],
          y: [0, 80, -100, 0],
        }}
        transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-1/4 -right-20 w-96 h-96 bg-gradient-to-r from-[var(--c-mystic)] to-[var(--c-lcd-amber)] rounded-full blur-3xl opacity-4"
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
          className="mb-[var(--phi-8)]"
        >
          <h2 className="text-[var(--type-4xl)] font-light text-center text-[var(--c-text-primary)] relative z-10">
            The Seraphic Arsenal
          </h2>
          <p className="text-center text-[var(--c-text-muted)] mt-4">
            Every plugin. One geometry.
          </p>
        </motion.div>

        {/* Plugin Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[var(--phi-5)]">
          {plugins.map((plugin, idx) => (
            <motion.div
              key={plugin.id}
              variants={scaleBloomVariant}
              initial="hidden"
              whileInView="visible"
              transition={{ delay: idx * 0.1 }}
              className="s-card-glass p-[var(--phi-4)] rounded-[var(--r-lg)] h-full flex flex-col group cursor-pointer relative overflow-hidden will-change-transform transition-all duration-300 hover:shadow-[0_20px_40px_rgba(255,176,0,0.15)] hover:translate-y-[-8px]"
            >
              {/* Card glow on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-[var(--c-lcd-amber)] via-transparent to-[var(--c-mystic)] opacity-0 group-hover:opacity-100 pointer-events-none blur-xl transition-opacity duration-500" />

              {/* Plugin Image Placeholder */}
              <div className="w-full h-48 bg-gradient-to-br from-[var(--c-surface-2)] to-[var(--c-surface-1)] rounded-[var(--r-md)] mb-[var(--phi-4)] group-hover:shadow-[0_0_30px_rgba(255,176,0,0.3)] transition-all duration-300 relative overflow-hidden">
                {/* Image glow effect */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-gradient-to-t from-[rgba(255,176,0,0.1)] to-transparent"
                />
              </div>

              {/* Plugin Name */}
              <h3 className="text-[var(--type-lg)] font-light text-[var(--c-lcd-amber)] mb-1 relative z-10 transition-all duration-300 group-hover:drop-shadow-[0_0_15px_rgba(255,176,0,0.6)]">
                ◈ {plugin.name}
              </h3>

              {/* Plugin Tagline */}
              <p className="text-[var(--type-sm)] text-[var(--c-text-muted)] mb-3 relative z-10">
                {plugin.tagline}
              </p>

              {/* Description */}
              <p className="text-[var(--type-sm)] text-[var(--c-text-secondary)] mb-4 flex-grow relative z-10">
                {plugin.description}
              </p>

              {/* Price & Formats */}
              <div className="flex items-center justify-between mt-auto pt-[var(--phi-3)] border-t border-[var(--c-border)] relative z-10">
                <span className="text-[var(--type-md)] font-light text-[var(--c-lcd-amber)] transition-all duration-300 group-hover:drop-shadow-[0_0_12px_rgba(255,176,0,0.5)]">
                  ${plugin.price}
                </span>
                <div className="flex gap-1">
                  {plugin.formats.slice(0, 2).map((fmt) => (
                    <span
                      key={fmt}
                      className="text-[var(--type-2xs)] s-badge"
                    >
                      {fmt}
                    </span>
                  ))}
                </div>
              </div>

              {/* Learn More Link */}
              <a
                href={`/plugins/${plugin.slug}`}
                className="mt-4 text-[var(--c-lcd-amber)] text-[var(--type-sm)] font-light relative z-10 transition-all duration-300 hover:drop-shadow-[0_0_10px_rgba(255,176,0,0.6)]"
              >
                Explore →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
