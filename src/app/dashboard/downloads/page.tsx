"use client";

import { motion } from "framer-motion";
import { PLUGINS } from "@/lib/constants";
import { useState } from "react";

export default function DownloadsPage() {
  const [selectedOS, setSelectedOS] = useState("macos");
  const [selectedFormat, setSelectedFormat] = useState("vst3");

  const formats = ["VST3", "CLAP", "AU", "AAX"];
  const oses = ["macOS", "Windows", "Linux"];

  return (
    <div className="space-y-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.424 }}
      >
        <h1 className="text-[var(--type-3xl)] font-light text-[var(--c-text-primary)] mb-2">
          Downloads
        </h1>
        <p className="text-[var(--type-base)] text-[var(--c-text-muted)]">
          Download your plugins for your operating system and format.
        </p>
      </motion.div>

      {/* Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.424, delay: 0.1 }}
        className="grid grid-cols-2 gap-4"
      >
        <div>
          <label className="block text-[var(--type-sm)] text-[var(--c-text-secondary)] mb-2">
            Operating System
          </label>
          <select
            value={selectedOS}
            onChange={(e) => setSelectedOS(e.target.value)}
            className="s-form-input w-full"
          >
            {oses.map((os) => (
              <option key={os} value={os.toLowerCase()}>
                {os}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-[var(--type-sm)] text-[var(--c-text-secondary)] mb-2">
            Format
          </label>
          <select
            value={selectedFormat}
            onChange={(e) => setSelectedFormat(e.target.value)}
            className="s-form-input w-full"
          >
            {formats.map((fmt) => (
              <option key={fmt} value={fmt.toLowerCase()}>
                {fmt}
              </option>
            ))}
          </select>
        </div>
      </motion.div>

      {/* Download List */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.424, delay: 0.2 }}
        className="space-y-3"
      >
        {PLUGINS.map((plugin) => (
          <div
            key={plugin.id}
            className="s-card-glass p-4 rounded-[var(--r-lg)] flex items-center justify-between"
          >
            <div className="flex-1">
              <p className="text-[var(--type-sm)] font-light text-[var(--c-text-primary)]">
                {plugin.name}
              </p>
              <p className="text-[var(--type-2xs)] text-[var(--c-text-muted)]">
                {selectedOS === "macos" ? "macOS" : selectedOS === "windows" ? "Windows" : "Linux"} •{" "}
                {selectedFormat.toUpperCase()} • v1.0.0
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[var(--type-2xs)] text-[var(--c-text-muted)]">
                42 MB
              </span>
              <button className="s-btn-actuator px-4 py-2 text-[var(--type-2xs)]">
                ↓ DOWNLOAD
              </button>
            </div>
          </div>
        ))}
      </motion.div>

      {/* Version History */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.424, delay: 0.3 }}
      >
        <h3 className="text-[var(--type-xl)] font-light text-[var(--c-text-primary)] mb-4">
          Version History
        </h3>

        <div className="space-y-2">
          {[
            { version: "1.0.0", date: "Apr 16, 2026", notes: "Initial release" },
            { version: "0.9.9", date: "Apr 10, 2026", notes: "Beta release" },
          ].map((v) => (
            <div key={v.version} className="s-card-glass p-4 rounded-[var(--r-md)]">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <p className="text-[var(--type-sm)] font-light text-[var(--c-text-primary)]">
                    v{v.version}
                  </p>
                  <p className="text-[var(--type-2xs)] text-[var(--c-text-muted)]">
                    {v.date}
                  </p>
                </div>
              </div>
              <p className="text-[var(--type-2xs)] text-[var(--c-text-secondary)]">
                {v.notes}
              </p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
