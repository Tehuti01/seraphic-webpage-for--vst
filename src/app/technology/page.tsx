"use client";

import { motion } from "framer-motion";
import ArchitectureSlide from "@/components/home/ArchitectureSlide";
import { TECH_STACK, TECH_SPECS } from "@/lib/constants";

export default function TechnologyPage() {
  return (
    <div className="min-h-screen bg-[var(--c-abyss)]">
      {/* Hero */}
      <section className="pt-[120px] pb-[var(--phi-8)] px-[var(--phi-5)]">
        <div className="max-w-[1440px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.686 }}
            className="max-w-3xl mb-[var(--phi-8)]"
          >
            <h1 className="text-[var(--type-5xl)] font-light text-[var(--c-text-primary)] mb-6">
              Built Different
            </h1>
            <p className="text-[var(--type-lg)] text-[var(--c-text-secondary)] leading-relaxed">
              Rust bare-metal DSP. Zero allocations. Sub-millisecond latency.
              Every algorithm optimized for real-time audio processing.
            </p>
          </motion.div>

          {/* Specs */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-[var(--phi-4)]">
            {TECH_SPECS.map((spec) => (
              <motion.div
                key={spec.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.424 }}
                className="s-card-inset"
              >
                <p className="text-[var(--type-3xl)] s-text-lcd font-light">
                  {spec.value}
                </p>
                <p className="text-[var(--type-xs)] text-[var(--c-text-muted)] mt-2 uppercase tracking-wider">
                  {spec.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-[var(--phi-8)] px-[var(--phi-5)] border-t border-[var(--c-border)]">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="text-[var(--type-3xl)] font-light text-[var(--c-text-primary)] mb-[var(--phi-5)] text-center">
            The Stack
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--phi-5)]">
            {TECH_STACK.map((tech, idx) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.424, delay: idx * 0.1 }}
                className="s-card-glass p-[var(--phi-4)] rounded-[var(--r-lg)]"
              >
                <div className="flex items-start gap-3">
                  <div className="w-12 h-12 bg-[var(--c-surface-2)] rounded-[var(--r-md)] flex items-center justify-center flex-shrink-0">
                    <span className="text-[var(--type-sm)] text-[var(--c-lcd-amber)]">
                      ◈
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-[var(--type-base)] font-light text-[var(--c-text-primary)] mb-1">
                      {tech.name}
                    </h3>
                    <p className="text-[var(--type-sm)] text-[var(--c-text-secondary)]">
                      {tech.description}
                    </p>
                    <p className="text-[var(--type-2xs)] text-[var(--c-text-muted)] mt-2">
                      {tech.category}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture */}
      <ArchitectureSlide />

      {/* Performance */}
      <section className="py-[var(--phi-8)] px-[var(--phi-5)] border-t border-[var(--c-border)]">
        <div className="max-w-[1440px] mx-auto">
          <h2 className="text-[var(--type-3xl)] font-light text-[var(--c-text-primary)] mb-[var(--phi-5)] text-center">
            Performance Guarantees
          </h2>

          <div className="space-y-4">
            {[
              { metric: "CPU Efficient", value: "< 5% at 96kHz" },
              { metric: "Zero Click Latency", value: "Sub-1ms round trip" },
              { metric: "Memory Safe", value: "Rust ownership system" },
              { metric: "Real-Time Safe", value: "Lock-free IPC" },
            ].map((guarantee) => (
              <motion.div
                key={guarantee.metric}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.424 }}
                className="s-card-glass p-4 rounded-[var(--r-lg)] flex items-center justify-between"
              >
                <span className="text-[var(--type-base)] font-light text-[var(--c-text-primary)]">
                  {guarantee.metric}
                </span>
                <span className="text-[var(--type-base)] s-text-lcd">
                  {guarantee.value}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
