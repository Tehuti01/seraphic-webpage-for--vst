"use client";

import Link from "next/link";
import { SVGProps } from "react";

// Custom social media icons
const Twitter = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7" />
  </svg>
);

const Youtube = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M22.54 6.42c-.3-1.11-1.1-1.98-2.13-2.29-1.88-.5-9.42-.5-9.42-.5s-7.54 0-9.42.5C2.56 4.44 1.76 5.31 1.46 6.42 1 8.3 1 12 1 12s0 3.7.46 5.58c.3 1.11 1.1 1.98 2.13 2.29 1.88.5 9.42.5 9.42.5s7.54 0 9.42-.5c1.03-.31 1.83-1.18 2.13-2.29.46-1.88.46-5.58.46-5.58s0-3.7-.46-5.58z" />
    <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="black" />
  </svg>
);

const Github = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 2C6.48 2 2 6.48 2 12c0 4.41 2.85 8.17 6.84 9.49.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.52 1.02 1.52 1.02.88 1.5 2.31 1.07 2.87.82.09-.64.35-1.07.63-1.31-2.22-.25-4.56-1.11-4.56-4.92 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02.8-.22 1.65-.33 2.5-.33.85 0 1.7.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.82-2.34 4.66-4.57 4.9.36.31.68.93.68 1.87v2.78c0 .27.18.58.69.48C19.15 20.17 22 16.41 22 12c0-5.52-4.48-10-10-10z" />
  </svg>
);

const Discord = (props: SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M20.22 1.48C18.92.57 17.53 0 15.99 0c-.08.02-.16.04-.24.07-1.1.5-2.32 1.36-3.46 2.49-1.8-.28-3.6-.28-5.4 0-1.14-1.13-2.36-1.99-3.46-2.49-.08-.03-.16-.05-.24-.07C6.47 0 5.08.57 3.78 1.48.52 4.35.16 8.8.52 13.25c2.58 1.98 4.96 3.15 7.32 3.96 1.14-1.33 2.2-2.8 3.12-4.37.56 0 1.12.02 1.68.02.56 0 1.12-.02 1.68-.02.92 1.57 1.98 3.04 3.12 4.37 2.36-.81 4.74-1.98 7.32-3.96.36-4.45 0-8.9-3.26-11.77zM8.67 11.08c-.83 0-1.5-.75-1.5-1.67 0-.92.67-1.67 1.5-1.67.83 0 1.5.75 1.5 1.67 0 .92-.67 1.67-1.5 1.67zm6.66 0c-.83 0-1.5-.75-1.5-1.67 0-.92.67-1.67 1.5-1.67.83 0 1.5.75 1.5 1.67 0 .92-.67 1.67-1.5 1.67z" />
  </svg>
);

const FOOTER_COLUMNS = [
  {
    title: "BRAND",
    links: [
      { label: "About", href: "/about" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "PRODUCTS",
    links: [
      { label: "φ-Synth", href: "/plugins/phi-synth" },
      { label: "Metatron Reverb", href: "/plugins/metatron-reverb" },
      { label: "Flower EQ", href: "/plugins/flower-eq" },
      { label: "All Plugins", href: "/plugins" },
    ],
  },
  {
    title: "DEVELOPERS",
    links: [
      { label: "φ-Core Engine", href: "/technology/phi-core" },
      { label: "API Docs", href: "/technology/api" },
      { label: "GitHub", href: "https://github.com/seraphicsonic" },
      { label: "SDK", href: "/technology/sdk" },
    ],
  },
  {
    title: "COMPANY",
    links: [
      { label: "Store", href: "/store" },
      { label: "Dashboard", href: "/dashboard" },
      { label: "Licensing", href: "/legal/licenses" },
      { label: "Privacy", href: "/legal/privacy" },
    ],
  },
];

const SOCIALS = [
  { icon: Twitter, href: "https://twitter.com/seraphicsonic", label: "X" },
  { icon: Youtube, href: "https://youtube.com/@seraphicsonic", label: "YouTube" },
  { icon: Github, href: "https://github.com/seraphicsonic", label: "GitHub" },
  { icon: Discord, href: "https://discord.gg/seraphicsonic", label: "Discord" },
];

export default function Footer() {
  return (
    <footer className="relative z-10 bg-[var(--c-abyss)] border-t border-[var(--c-border)]">
      {/* Main Footer Content */}
      <div className="max-w-[1440px] mx-auto px-[var(--phi-5)] py-[var(--phi-8)]">
        {/* Grid Columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-[var(--phi-5)] mb-[var(--phi-8)]">
          {FOOTER_COLUMNS.map((column) => (
            <div key={column.title}>
              <h4 className="text-[var(--type-xs)] font-semibold text-[var(--c-text-primary)] uppercase tracking-wider mb-[var(--phi-3)]">
                {column.title}
              </h4>
              <ul className="space-y-2">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[var(--type-sm)] text-[var(--c-text-muted)] hover:text-[var(--c-lcd-amber)] transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="mb-[var(--phi-8)] p-[var(--phi-4)] s-card-glass rounded-[var(--r-lg)] border border-[var(--c-border)]">
          <h3 className="text-[var(--type-lg)] font-light text-[var(--c-text-primary)] mb-2">
            Join the Frequency
          </h3>
          <p className="text-[var(--type-sm)] text-[var(--c-text-muted)] mb-[var(--phi-3)]">
            Get updates, tutorials, and exclusive presets delivered to your inbox.
          </p>
          <form className="flex gap-2">
            <input
              type="email"
              placeholder="your@email.com"
              className="s-form-input flex-1"
              required
            />
            <button type="submit" className="s-btn-actuator whitespace-nowrap">
              SUBSCRIBE
            </button>
          </form>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[var(--c-border)] pt-[var(--phi-4)] flex flex-col md:flex-row items-center justify-between gap-[var(--phi-4)]">
          {/* Copyright */}
          <p className="text-[var(--type-2xs)] text-[var(--c-text-muted)]">
            © 2026 Seraphic Sonic. All rights reserved.
          </p>

          {/* Legal Links */}
          <div className="flex gap-[var(--phi-5)] text-[var(--type-2xs)]">
            <Link href="/legal/terms" className="text-[var(--c-text-muted)] hover:text-[var(--c-lcd-amber)]">
              Terms
            </Link>
            <span className="text-[var(--c-text-dim)]">·</span>
            <Link href="/legal/privacy" className="text-[var(--c-text-muted)] hover:text-[var(--c-lcd-amber)]">
              Privacy
            </Link>
            <span className="text-[var(--c-text-dim)]">·</span>
            <Link href="/legal/licenses" className="text-[var(--c-text-muted)] hover:text-[var(--c-lcd-amber)]">
              Licenses
            </Link>
          </div>

          {/* Social Icons */}
          <div className="flex gap-[var(--phi-3)]">
            {SOCIALS.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--c-text-muted)] hover:text-[var(--c-lcd-amber)] transition-colors duration-300"
                aria-label={label}
              >
                <Icon width={18} height={18} />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Micro separator pattern */}
      <div className="bg-gradient-to-r from-transparent via-[var(--c-lcd-amber)] to-transparent h-px opacity-10" />
    </footer>
  );
}
