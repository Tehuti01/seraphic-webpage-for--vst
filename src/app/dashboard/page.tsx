"use client";

import { motion } from "framer-motion";
import { PLUGINS } from "@/lib/constants";

export default function DashboardPage() {
  // Mock data
  const userTier = "architect";
  const activePlugins = 5;
  const totalDownloads = 12;

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.424 }}
      >
        <h1 className="text-[var(--type-3xl)] font-light text-[var(--c-text-primary)] mb-2">
          Welcome Back
        </h1>
        <p className="text-[var(--type-base)] text-[var(--c-text-muted)]">
          Here's your Seraphic Sonic account at a glance.
        </p>
      </motion.div>

      {/* Stats Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.424, delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        <div className="s-card-inset">
          <p className="text-[var(--type-3xl)] s-text-lcd font-light">
            {userTier === "architect" ? "ARCHITECT" : "GENESIS"}
          </p>
          <p className="text-[var(--type-xs)] text-[var(--c-text-muted)] mt-2 uppercase tracking-wider">
            Your Tier
          </p>
        </div>

        <div className="s-card-inset">
          <p className="text-[var(--type-3xl)] s-text-lcd font-light">
            {activePlugins}
          </p>
          <p className="text-[var(--type-xs)] text-[var(--c-text-muted)] mt-2 uppercase tracking-wider">
            Active Plugins
          </p>
        </div>

        <div className="s-card-inset">
          <p className="text-[var(--type-3xl)] s-text-lcd font-light">
            {totalDownloads}
          </p>
          <p className="text-[var(--type-xs)] text-[var(--c-text-muted)] mt-2 uppercase tracking-wider">
            Total Downloads
          </p>
        </div>
      </motion.div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.424, delay: 0.2 }}
        className="grid grid-cols-2 md:grid-cols-3 gap-4"
      >
        <a
          href="/store"
          className="s-card-glass p-[var(--phi-4)] rounded-[var(--r-lg)] text-center hover:s-card-glass transition-all"
        >
          <p className="text-[var(--type-sm)] font-light text-[var(--c-lcd-amber)]">
            ◈
          </p>
          <p className="text-[var(--type-sm)] text-[var(--c-text-secondary)]">
            Browse Store
          </p>
        </a>

        <a
          href="/plugins"
          className="s-card-glass p-[var(--phi-4)] rounded-[var(--r-lg)] text-center hover:s-card-glass transition-all"
        >
          <p className="text-[var(--type-sm)] font-light text-[var(--c-lcd-amber)]">
            ◈
          </p>
          <p className="text-[var(--type-sm)] text-[var(--c-text-secondary)]">
            All Plugins
          </p>
        </a>

        <a
          href="/dashboard/downloads"
          className="s-card-glass p-[var(--phi-4)] rounded-[var(--r-lg)] text-center hover:s-card-glass transition-all"
        >
          <p className="text-[var(--type-sm)] font-light text-[var(--c-lcd-amber)]">
            ◈
          </p>
          <p className="text-[var(--type-sm)] text-[var(--c-text-secondary)]">
            Downloads
          </p>
        </a>
      </motion.div>

      {/* Recent Activity */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.424, delay: 0.3 }}
      >
        <h2 className="text-[var(--type-xl)] font-light text-[var(--c-text-primary)] mb-4">
          Recent Downloads
        </h2>

        <div className="space-y-2">
          {PLUGINS.slice(0, 3).map((plugin) => (
            <div
              key={plugin.id}
              className="s-card-glass p-4 rounded-[var(--r-md)] flex items-center justify-between"
            >
              <div>
                <p className="text-[var(--type-sm)] font-light text-[var(--c-text-primary)]">
                  {plugin.name}
                </p>
                <p className="text-[var(--type-2xs)] text-[var(--c-text-muted)]">
                  Downloaded 2 days ago
                </p>
              </div>
              <a
                href="#"
                className="text-[var(--c-lcd-amber)] hover:text-[var(--c-amber-hot)]"
              >
                DOWNLOAD
              </a>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
