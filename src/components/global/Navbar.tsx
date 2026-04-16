"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "PLUGINS", href: "/plugins" },
  { label: "TECHNOLOGY", href: "/technology" },
  { label: "STORE", href: "/store" },
  { label: "ABOUT", href: "/about" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const observerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Intersection Observer to detect scroll
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsScrolled(!entry.isIntersecting);
      },
      { threshold: 0 }
    );

    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* Observer element for scroll detection */}
      <div ref={observerRef} className="absolute top-0 left-0 w-full h-1" />

      {/* Navbar */}
      <nav
        className={`fixed top-0 left-0 right-0 h-[72px] z-[var(--z-navbar)] transition-all duration-300 ${
          isScrolled
            ? "backdrop-filter: blur(20px) saturate-[1.618] bg-[rgba(5,5,5,0.85)] border-b border-[var(--c-border)]"
            : "bg-transparent"
        }`}
      >
        <div className="h-full px-[var(--phi-5)] flex items-center justify-between max-w-[1440px] mx-auto w-full">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 flex items-center justify-center">
              <svg
                viewBox="0 0 100 100"
                className="w-full h-full text-[var(--c-lcd-amber)]"
                fill="currentColor"
              >
                {/* ◈ symbol */}
                <path d="M50 10 L90 50 L50 90 L10 50 Z" fill="none" stroke="currentColor" strokeWidth="2" />
                <circle cx="50" cy="50" r="12" fill="currentColor" />
              </svg>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-[var(--phi-5)] absolute left-1/2 transform -translate-x-1/2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-medium text-[var(--type-sm)] text-[var(--c-text-muted)] uppercase tracking-wider relative group transition-colors duration-300 hover:text-[var(--c-lcd-amber)]"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-[var(--c-lcd-amber)] group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </div>

          {/* CTA Button - Desktop */}
          <button className="hidden md:block s-btn-actuator s-glow-amber text-sm">
            GET SONIC
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-[var(--c-lcd-amber)]"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[999] top-[72px] md:hidden bg-[var(--c-void)] bg-opacity-95 flex flex-col items-center justify-center gap-[var(--phi-5)]">
          {NAV_LINKS.map((link, idx) => (
            <Link
              key={link.href}
              href={link.href}
              className="font-medium text-[var(--type-2xl)] text-[var(--c-text-primary)] uppercase tracking-wider transition-all duration-300 hover:text-[var(--c-lcd-amber)]"
              onClick={() => setIsMobileMenuOpen(false)}
              style={{
                animation: `slideInRight 300ms var(--ease-phi) forwards`,
                animationDelay: `${idx * 100}ms`,
                opacity: 0,
              }}
            >
              {link.label}
            </Link>
          ))}
          <button className="s-btn-actuator s-glow-amber mt-[var(--phi-5)]">
            GET SONIC
          </button>

          <style>{`
            @keyframes slideInRight {
              from {
                opacity: 0;
                transform: translateX(30px);
              }
              to {
                opacity: 1;
                transform: translateX(0);
              }
            }
          `}</style>
        </div>
      )}
    </>
  );
}
