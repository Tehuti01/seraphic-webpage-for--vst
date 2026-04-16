"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[var(--c-abyss)]">
      {/* Hero */}
      <section className="pt-[120px] pb-[var(--phi-8)] px-[var(--phi-5)]">
        <div className="max-w-[1440px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.686 }}
            className="max-w-3xl"
          >
            <h1 className="text-[var(--type-5xl)] font-light text-[var(--c-text-primary)] mb-6">
              Seraphic Sonic
            </h1>
            <p className="text-[var(--type-lg)] text-[var(--c-text-secondary)] leading-relaxed mb-8">
              We engineer audio plugins where mathematics, music, and sacred geometry converge.
              Every algorithm is grounded in the golden ratio. Every frequency is tuned to harmony.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-[var(--phi-8)] px-[var(--phi-5)] border-t border-[var(--c-border)]">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--phi-8)]">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.686 }}
            >
              <h2 className="text-[var(--type-3xl)] font-light text-[var(--c-text-primary)] mb-4">
                Our Mission
              </h2>
              <p className="text-[var(--type-base)] text-[var(--c-text-secondary)] leading-relaxed">
                To create audio tools that transcend mere functionality and become instruments
                of creative transformation. We believe technology should serve artistry, not
                constrain it.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.686 }}
            >
              <h2 className="text-[var(--type-3xl)] font-light text-[var(--c-text-primary)] mb-4">
                Our Philosophy
              </h2>
              <p className="text-[var(--type-base)] text-[var(--c-text-secondary)] leading-relaxed">
                Sound is geometry in motion. Every harmonic relationship reflects mathematical
                perfection found in nature. By honoring these proportions, we create plugins
                that sound not just right—but *true*.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-[var(--phi-8)] px-[var(--phi-5)] border-t border-[var(--c-border)]">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="text-[var(--type-3xl)] font-light text-[var(--c-text-primary)] mb-[var(--phi-8)] text-center">
            Our Values
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-[var(--phi-5)]">
            {[
              {
                title: "Precision",
                description: "Sub-millisecond latency. Zero compromises. Pure audio.",
              },
              {
                title: "Artistry",
                description: "Tools designed for creators, not committees. Sound first.",
              },
              {
                title: "Integrity",
                description: "Open architecture. Transparent licensing. No dark patterns.",
              },
            ].map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.424, delay: idx * 0.1 }}
                className="s-card-glass p-[var(--phi-5)] rounded-[var(--r-lg)]"
              >
                <h3 className="text-[var(--type-xl)] font-light text-[var(--c-lcd-amber)] mb-3">
                  {value.title}
                </h3>
                <p className="text-[var(--type-base)] text-[var(--c-text-secondary)]">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
