"use client";

import { motion } from "framer-motion";

export default function PluginsHero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.686 }}
      className="text-center mb-[var(--phi-8)]"
    >
      <h1 className="text-[var(--type-4xl)] font-light text-[var(--c-text-primary)] mb-4">
        The Seraphic Arsenal
      </h1>
      <p className="text-[var(--type-lg)] text-[var(--c-text-muted)]">
        Every plugin. One geometry.
      </p>
    </motion.div>
  );
}
