"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const SIDEBAR_LINKS = [
  { label: "Overview", href: "/dashboard" },
  { label: "My Licenses", href: "/dashboard/licenses" },
  { label: "Downloads", href: "/dashboard/downloads" },
  { label: "Presets", href: "/dashboard/presets" },
  { label: "Settings", href: "/dashboard/settings" },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[var(--c-abyss)] flex">
      {/* Sidebar */}
      <motion.aside
        initial={false}
        animate={{ x: isSidebarOpen ? 0 : "-100%" }}
        transition={{ duration: 0.3 }}
        className="fixed md:static w-64 h-screen bg-[var(--c-surface-1)] border-r border-[var(--c-border)] flex flex-col z-50 md:z-0"
      >
        {/* Logo */}
        <Link
          href="/dashboard"
          className="h-20 flex items-center justify-center border-b border-[var(--c-border)] hover:bg-[var(--c-surface-2)] transition-colors"
        >
          <div className="text-[var(--c-lcd-amber)] text-xl font-light">
            ◈ DASHBOARD
          </div>
        </Link>

        {/* Nav Links */}
        <nav className="flex-1 p-4 space-y-1">
          {SIDEBAR_LINKS.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsSidebarOpen(false)}
                className={`block px-4 py-3 rounded-[var(--r-md)] transition-all ${
                  isActive
                    ? "bg-[var(--c-lcd-amber)] text-[var(--c-void)] font-medium"
                    : "text-[var(--c-text-secondary)] hover:text-[var(--c-text-primary)] hover:bg-[var(--c-surface-2)]"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="border-t border-[var(--c-border)] p-4">
          <button className="w-full s-btn-ghost py-2 text-[var(--type-sm)]">
            SIGN OUT
          </button>
        </div>
      </motion.aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Mobile Header */}
        <div className="md:hidden h-16 bg-[var(--c-surface-1)] border-b border-[var(--c-border)] flex items-center px-4 gap-4">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="text-[var(--c-lcd-amber)]"
          >
            {isSidebarOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <h1 className="text-[var(--type-base)] font-light text-[var(--c-text-primary)]">
            Dashboard
          </h1>
        </div>

        {/* Content */}
        <main className="flex-1 overflow-auto p-4 md:p-8">{children}</main>
      </div>
    </div>
  );
}
