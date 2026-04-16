"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Plugin } from "@/lib/db";

interface PluginContentProps {
  plugin: Plugin;
  relatedPlugins: Plugin[];
}

export default function PluginContent({
  plugin,
  relatedPlugins,
}: PluginContentProps) {
  return (
    <div className="min-h-screen bg-[var(--c-abyss)]">
      {/* Hero */}
      <section className="pt-[100px] pb-[var(--phi-8)] px-[var(--phi-5)]">
        <div className="max-w-[1440px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.686 }}
            className="mb-[var(--phi-8)]"
          >
            <div className="flex items-center gap-3 mb-4">
              <Link
                href="/plugins"
                className="text-[var(--c-text-muted)] hover:text-[var(--c-lcd-amber)]"
              >
                Plugins
              </Link>
              <span className="text-[var(--c-text-dim)]">→</span>
            </div>

            <h1 className="text-[var(--type-5xl)] font-light text-[var(--c-text-primary)] mb-4">
              {plugin.name}
            </h1>
            <p className="text-[var(--type-lg)] text-[var(--c-text-muted)] mb-8">
              {plugin.tagline}
            </p>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.686, delay: 0.2 }}
            className="bg-gradient-to-br from-[var(--c-lcd-amber)] via-[var(--c-surface-2)] to-[var(--c-surface-1)] rounded-[var(--r-lg)] min-h-96 mb-[var(--phi-8)]"
          />

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.424, delay: 0.3 }}
            className="max-w-2xl mb-[var(--phi-8)]"
          >
            <h2 className="text-[var(--type-2xl)] font-light text-[var(--c-text-primary)] mb-4">
              Sonic Precision
            </h2>
            <p className="text-[var(--type-base)] text-[var(--c-text-secondary)] leading-relaxed">
              {plugin.longDescription || plugin.description}
            </p>
          </motion.div>

          {/* Specs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.424, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-[var(--phi-4)] mb-[var(--phi-8)]"
          >
            {Object.entries(plugin.specs).map(([label, value]) => (
              <div key={label} className="s-card-inset">
                <p className="text-[var(--type-2xl)] s-text-lcd font-light">
                  {value}
                </p>
                <p className="text-[var(--type-xs)] text-[var(--c-text-muted)] mt-2 uppercase tracking-wider">
                  {label}
                </p>
              </div>
            ))}
          </motion.div>

          {/* Formats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.424, delay: 0.5 }}
            className="mb-[var(--phi-8)]"
          >
            <h3 className="text-[var(--type-xl)] font-light text-[var(--c-text-primary)] mb-4">
              Available Formats
            </h3>
            <div className="flex gap-2 flex-wrap">
              {plugin.formats.map((fmt) => (
                <div key={fmt} className="s-badge">
                  {fmt}
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.424, delay: 0.6 }}
            className="flex gap-4 mb-[var(--phi-8)]"
          >
            <button className="s-btn-actuator s-glow-amber px-[var(--phi-6)] py-3">
              BUY NOW — ${plugin.price}
            </button>
            <button className="s-btn-ghost px-[var(--phi-6)] py-3">
              TRY FREE
            </button>
          </motion.div>
        </div>
      </section>

      {/* Related Plugins */}
      {relatedPlugins.length > 0 && (
        <section className="py-[var(--phi-8)] px-[var(--phi-5)] border-t border-[var(--c-border)]">
          <div className="max-w-[1440px] mx-auto">
            <h2 className="text-[var(--type-2xl)] font-light text-[var(--c-text-primary)] mb-[var(--phi-5)]">
              More Plugins
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-[var(--phi-5)]">
              {relatedPlugins.map((related) => (
                <Link
                  key={related.id}
                  href={`/plugins/${related.slug}`}
                  className="s-card-glass p-[var(--phi-4)] rounded-[var(--r-lg)] hover:s-card-glass transition-all group"
                >
                  <div className="bg-[var(--c-surface-2)] h-32 rounded-[var(--r-md)] mb-[var(--phi-3)]" />
                  <h3 className="text-[var(--type-lg)] font-light text-[var(--c-lcd-amber)]">
                    {related.name}
                  </h3>
                  <p className="text-[var(--type-sm)] text-[var(--c-text-muted)]">
                    ${related.price}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
