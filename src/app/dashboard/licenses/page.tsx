"use client";

import { motion } from "framer-motion";
import { PLUGINS } from "@/lib/constants";

export default function LicensesPage() {
  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.424 }}
      >
        <h1 className="text-[var(--type-3xl)] font-light text-[var(--c-text-primary)] mb-2">
          My Licenses
        </h1>
        <p className="text-[var(--type-base)] text-[var(--c-text-muted)]">
          Manage your active licenses and activations.
        </p>
      </motion.div>

      {/* Licenses Table */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.424, delay: 0.1 }}
        className="overflow-x-auto"
      >
        <table className="w-full">
          <thead>
            <tr className="border-b border-[var(--c-border)]">
              <th className="text-left py-3 px-4 text-[var(--type-sm)] font-light text-[var(--c-text-secondary)]">
                Plugin
              </th>
              <th className="text-left py-3 px-4 text-[var(--type-sm)] font-light text-[var(--c-text-secondary)]">
                License Key
              </th>
              <th className="text-left py-3 px-4 text-[var(--type-sm)] font-light text-[var(--c-text-secondary)]">
                Status
              </th>
              <th className="text-left py-3 px-4 text-[var(--type-sm)] font-light text-[var(--c-text-secondary)]">
                Activations
              </th>
              <th className="text-left py-3 px-4 text-[var(--type-sm)] font-light text-[var(--c-text-secondary)]">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {PLUGINS.map((plugin) => (
              <tr
                key={plugin.id}
                className="border-b border-[var(--c-border)] hover:bg-[var(--c-surface-1)] transition-colors"
              >
                <td className="py-4 px-4 text-[var(--type-sm)] text-[var(--c-text-primary)]">
                  {plugin.name}
                </td>
                <td className="py-4 px-4 text-[var(--type-2xs)] s-text-lcd font-mono">
                  SRPH-XXXX-XXXX-XXXX
                  <button className="ml-2 text-[var(--c-lcd-amber)] hover:text-[var(--c-amber-hot)]">
                    📋
                  </button>
                </td>
                <td className="py-4 px-4">
                  <span className="inline-flex items-center gap-1 text-[var(--type-2xs)]">
                    <span className="w-2 h-2 rounded-full bg-[var(--c-profit)]" />
                    ACTIVE
                  </span>
                </td>
                <td className="py-4 px-4 text-[var(--type-sm)] text-[var(--c-text-secondary)]">
                  1 / 3
                </td>
                <td className="py-4 px-4 text-[var(--type-2xs)]">
                  <button className="text-[var(--c-text-muted)] hover:text-[var(--c-lcd-amber)]">
                    DEACTIVATE
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>

      {/* Info Box */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.424, delay: 0.2 }}
        className="s-card-glass p-[var(--phi-4)] rounded-[var(--r-lg)] border border-[var(--c-border)]"
      >
        <h3 className="text-[var(--type-sm)] font-light text-[var(--c-text-primary)] mb-2">
          📋 License Management
        </h3>
        <p className="text-[var(--type-sm)] text-[var(--c-text-secondary)]">
          Each license can be activated on up to 3 devices. Deactivate on a device
          to free up an activation slot. Licenses are valid indefinitely with our
          Architect tier, or permanently with Metatron tier.
        </p>
      </motion.div>
    </div>
  );
}
