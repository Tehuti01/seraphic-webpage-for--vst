"use client";

import { motion } from "framer-motion";
import Link from "next/link";

interface Bundle {
  id: string;
  name: string;
  price: number;
  period: string;
  description: string;
  featured: boolean;
  badge?: string;
  includes: string[];
  cta: string;
}

interface BundlesContentProps {
  bundles: Bundle[];
}

export default function BundlesContent({ bundles }: BundlesContentProps) {
  return (
    <div className="min-h-screen bg-[var(--c-abyss)]">
      {/* Hero Section */}
      <section className="pt-[120px] pb-[var(--phi-8)] px-[var(--phi-5)]">
        <div className="max-w-[1440px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.686 }}
            className="text-center mb-[var(--phi-8)]"
          >
            <h1 className="text-[var(--type-4xl)] font-light text-[var(--c-text-primary)] mb-4">
              Choose Your Arsenal
            </h1>
            <p className="text-[var(--type-lg)] text-[var(--c-text-muted)]">
              One purchase. Infinite geometry.
            </p>
          </motion.div>

          {/* Bundles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[var(--phi-5)] mb-[var(--phi-8)]">
            {bundles.map((bundle, idx) => (
              <motion.div
                key={bundle.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.424,
                  delay: idx * 0.15,
                  ease: [0.618, 0, 0.382, 1],
                }}
                className={`relative rounded-[var(--r-lg)] overflow-hidden will-change-transform transition-all duration-300 ${
                  bundle.featured
                    ? "md:scale-105 s-card-glass border-[var(--c-lcd-amber)] shadow-[0_0_40px_rgba(255,176,0,0.2)]"
                    : "s-card-glass hover:shadow-[0_0_30px_rgba(255,176,0,0.15)]"
                }`}
              >
                {/* Card glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-[rgba(255,176,0,0.05)] via-transparent to-[rgba(204,102,255,0.05)] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="p-[var(--phi-5)] relative z-10">
                  {/* Badge */}
                  {bundle.badge && (
                    <div className="mb-4">
                      <span className="text-[var(--type-2xs)] font-light text-[var(--c-lcd-amber)] uppercase tracking-wider">
                        ✦ {bundle.badge}
                      </span>
                    </div>
                  )}

                  {/* Bundle Name */}
                  <h3 className="text-[var(--type-2xl)] font-light text-[var(--c-text-primary)] mb-2">
                    {bundle.name}
                  </h3>

                  {/* Price */}
                  <div className="mb-4">
                    <span className="text-[var(--type-5xl)] font-light text-[var(--c-lcd-amber)]">
                      ${bundle.price}
                    </span>
                    <span className="text-[var(--type-sm)] text-[var(--c-text-muted)] ml-2">
                      {bundle.period}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-[var(--type-sm)] text-[var(--c-text-muted)] mb-[var(--phi-5)]">
                    {bundle.description}
                  </p>

                  {/* Features List */}
                  <ul className="mb-[var(--phi-5)] space-y-2">
                    {bundle.includes.map((feature, i) => (
                      <li
                        key={i}
                        className="text-[var(--type-sm)] text-[var(--c-text-secondary)] flex items-start gap-2"
                      >
                        <span className="text-[var(--c-lcd-amber)] mt-1 flex-shrink-0">
                          ✓
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button
                    className={`w-full py-3 px-4 rounded-[var(--r-md)] font-light transition-all duration-300 ${
                      bundle.featured
                        ? "s-btn-actuator s-glow-amber"
                        : "s-btn-ghost"
                    }`}
                  >
                    {bundle.cta}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* FAQ Section */}
          <section className="mt-[var(--phi-8)] pt-[var(--phi-8)] border-t border-[var(--c-border)]">
            <h2 className="text-[var(--type-3xl)] font-light text-[var(--c-text-primary)] mb-[var(--phi-5)] text-center">
              Frequently Asked
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-[var(--phi-5)] max-w-3xl mx-auto">
              {[
                {
                  question: "Can I upgrade between bundles?",
                  answer:
                    "Yes. Purchase any bundle and upgrade anytime. We'll credit your previous purchase toward the new tier.",
                },
                {
                  question: "Do I get updates included?",
                  answer:
                    "Genesis & Architect bundles include 1 year of updates. Sovereign includes lifetime updates forever.",
                },
                {
                  question: "What payment methods do you accept?",
                  answer:
                    "We accept all major credit cards, PayPal, and Apple/Google Pay. All purchases are backed by our 30-day guarantee.",
                },
                {
                  question: "Can I get a refund?",
                  answer:
                    "Absolutely. If you're not satisfied within 30 days of purchase, we'll refund you completely. No questions asked.",
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.424,
                    delay: idx * 0.1,
                  }}
                  className="s-card-glass p-[var(--phi-5)] rounded-[var(--r-lg)]"
                >
                  <h3 className="text-[var(--type-lg)] font-light text-[var(--c-text-primary)] mb-2">
                    {item.question}
                  </h3>
                  <p className="text-[var(--type-sm)] text-[var(--c-text-secondary)]">
                    {item.answer}
                  </p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.686, delay: 0.2 }}
            className="text-center mt-[var(--phi-8)]"
          >
            <p className="text-[var(--type-lg)] text-[var(--c-text-muted)] mb-6">
              Not ready to commit? <br />
              <span className="text-[var(--c-lcd-amber)]">
                Download φ-Synth Lite free
              </span>
              {" "}to explore the geometry first.
            </p>
            <Link href="/">
              <button className="s-btn-ghost px-[var(--phi-6)] py-3">
                Explore Free Version →
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
