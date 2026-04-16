"use client";

import { motion } from "framer-motion";
import { PRICING_TIERS, PLUGINS } from "@/lib/constants";
import { useState } from "react";

export default function StorePage() {
  const [expandedTier, setExpandedTier] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-[var(--c-abyss)]">
      {/* Hero */}
      <section className="pt-[120px] pb-[var(--phi-8)] px-[var(--phi-5)]">
        <div className="max-w-[1440px] mx-auto text-center mb-[var(--phi-8)]">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.686 }}
          >
            <h1 className="text-[var(--type-4xl)] font-light text-[var(--c-text-primary)] mb-4">
              Choose Your Frequency
            </h1>
            <p className="text-[var(--type-lg)] text-[var(--c-text-muted)]">
              From free to sovereign. Find your perfect tier.
            </p>
          </motion.div>
        </div>

        {/* Pricing Cards */}
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-[var(--phi-5)] mb-[var(--phi-8)]">
          {PRICING_TIERS.map((tier, idx) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.686, delay: idx * 0.15 }}
              className={`relative p-[var(--phi-5)] rounded-[var(--r-lg)] transition-all ${
                tier.featured
                  ? "s-card-glass border-2 border-[var(--c-lcd-amber)] scale-105"
                  : "s-card-glass"
              }`}
            >
              {tier.featured && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="s-badge bg-[var(--c-lcd-amber)] text-[var(--c-void)]">
                    ★ POPULAR
                  </span>
                </div>
              )}

              <h3 className="text-[var(--type-xl)] font-light text-[var(--c-text-primary)] mb-2">
                {tier.name}
              </h3>
              <p className="text-[var(--type-sm)] text-[var(--c-text-muted)] mb-4">
                {tier.description}
              </p>

              {/* Price */}
              <div className="mb-6">
                <span className="text-[var(--type-5xl)] s-text-lcd font-light">
                  {tier.price === 0 ? "FREE" : `$${tier.price}`}
                </span>
                <span className="text-[var(--type-sm)] text-[var(--c-text-muted)] ml-2">
                  {tier.period}
                </span>
              </div>

              {/* CTA */}
              <button
                className={`w-full mb-6 py-3 px-4 rounded-[var(--r-md)] transition-all ${
                  tier.featured
                    ? "s-btn-actuator s-glow-amber"
                    : "s-btn-ghost"
                }`}
              >
                {tier.cta}
              </button>

              {/* Features */}
              <div className="space-y-2">
                {tier.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-2">
                    <span className="text-[var(--c-lcd-amber)] mt-1">✓</span>
                    <span className="text-[var(--type-sm)] text-[var(--c-text-secondary)]">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Individual Plugins */}
        <div className="max-w-[1440px] mx-auto">
          <h2 className="text-[var(--type-2xl)] font-light text-[var(--c-text-primary)] mb-[var(--phi-5)] text-center">
            Or Buy Individual Plugins
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-[var(--phi-4)]">
            {PLUGINS.map((plugin) => (
              <motion.div
                key={plugin.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.424 }}
                className="s-card-glass p-[var(--phi-3)] rounded-[var(--r-md)] text-center hover:s-card-glass transition-all"
              >
                <p className="text-[var(--type-sm)] font-light text-[var(--c-lcd-amber)] mb-2">
                  {plugin.name}
                </p>
                <p className="text-[var(--type-lg)] s-text-lcd font-light mb-3">
                  ${plugin.price}
                </p>
                <button className="text-[var(--type-2xs)] s-badge w-full">
                  Buy
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-[var(--phi-8)] px-[var(--phi-5)] border-t border-[var(--c-border)]">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-[var(--type-2xl)] font-light text-[var(--c-text-primary)] mb-[var(--phi-5)] text-center">
            Questions?
          </h2>

          {[
            {
              q: "Can I try before I buy?",
              a: "Yes! All plugins have a 14-day free trial with zero limitations.",
            },
            {
              q: "What formats are included?",
              a: "VST3, CLAP, AU, AAX, and LV2. All formats in every license.",
            },
            {
              q: "How does the subscription work?",
              a: "Architect tier is $149/year with unlimited updates. Cancel anytime.",
            },
            {
              q: "Can I upgrade later?",
              a: "Absolutely. Upgrade anytime. We credit what you've already paid.",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.424, delay: idx * 0.1 }}
              className="mb-4"
            >
              <button
                onClick={() =>
                  setExpandedTier(expandedTier === item.q ? null : item.q)
                }
                className="w-full s-card-glass p-[var(--phi-4)] rounded-[var(--r-lg)] flex justify-between items-center hover:s-card-glass transition-all"
              >
                <span className="text-[var(--type-base)] font-light text-[var(--c-text-primary)] text-left">
                  {item.q}
                </span>
                <span className="text-[var(--c-lcd-amber)]">
                  {expandedTier === item.q ? "−" : "+"}
                </span>
              </button>
              {expandedTier === item.q && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  className="p-[var(--phi-4)] bg-[var(--c-surface-1)] border-b border-[var(--c-border)]"
                >
                  <p className="text-[var(--type-sm)] text-[var(--c-text-secondary)]">
                    {item.a}
                  </p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
