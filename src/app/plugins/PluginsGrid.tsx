"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Plugin } from "@/lib/db";
import { staggerContainerVariant, scaleBloomVariant } from "@/lib/animations";

interface PluginsGridProps {
  plugins: Plugin[];
}

export default function PluginsGrid({ plugins }: PluginsGridProps) {
  const [selectedType, setSelectedType] = useState<string | null>(null);

  const filteredPlugins = selectedType
    ? plugins.filter((p) => p.type === selectedType)
    : plugins;

  const types = Array.from(new Set(plugins.map((p) => p.type)));

  return (
    <>
      {/* Filter Buttons */}
      <div className="flex gap-2 justify-center flex-wrap mb-[var(--phi-8)]">
        <button
          onClick={() => setSelectedType(null)}
          className={`s-badge px-[var(--phi-4)] py-2 transition-all ${
            selectedType === null
              ? "border-[var(--c-lcd-amber)] text-[var(--c-lcd-amber)]"
              : ""
          }`}
        >
          ALL
        </button>
        {types.map((type) => (
          <button
            key={type}
            onClick={() => setSelectedType(type)}
            className={`s-badge px-[var(--phi-4)] py-2 transition-all capitalize ${
              selectedType === type
                ? "border-[var(--c-lcd-amber)] text-[var(--c-lcd-amber)]"
                : ""
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Plugin Grid */}
      <motion.div
        variants={staggerContainerVariant}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[var(--phi-5)]"
      >
        {filteredPlugins.map((plugin) => (
          <motion.div
            key={plugin.id}
            variants={scaleBloomVariant}
          >
            <Link href={`/plugins/${plugin.slug}`}>
              <div className="s-card-glass p-[var(--phi-5)] rounded-[var(--r-lg)] h-full cursor-pointer group hover:s-card-glass transition-all">
                {/* Image Placeholder */}
                <div className="w-full h-56 bg-gradient-to-br from-[var(--c-lcd-amber)] via-[var(--c-surface-2)] to-[var(--c-surface-1)] rounded-[var(--r-md)] mb-[var(--phi-4)] group-hover:shadow-lg transition-shadow" />

                {/* Content */}
                <h3 className="text-[var(--type-lg)] font-light text-[var(--c-lcd-amber)] mb-1">
                  ◈ {plugin.name}
                </h3>
                <p className="text-[var(--type-sm)] text-[var(--c-text-muted)] mb-3">
                  {plugin.tagline}
                </p>
                <p className="text-[var(--type-sm)] text-[var(--c-text-secondary)] mb-[var(--phi-4)] flex-grow">
                  {plugin.description}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between pt-[var(--phi-3)] border-t border-[var(--c-border)]">
                  <span className="text-[var(--type-md)] text-[var(--c-lcd-amber)]">
                    ${plugin.price}
                  </span>
                  <span className="text-[var(--c-lcd-amber)] text-[var(--type-sm)]">
                    EXPLORE →
                  </span>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
}
