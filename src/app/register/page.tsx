"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    setIsLoading(true);
    // TODO: Implement NextAuth registration
    await new Promise((r) => setTimeout(r, 1000));
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-[var(--c-abyss)] flex items-center justify-center px-[var(--phi-5)]">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.686 }}
        className="w-full max-w-[420px]"
      >
        {/* Logo */}
        <div className="text-center mb-[var(--phi-8)]">
          <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
            <svg viewBox="0 0 100 100" className="w-full h-full text-[var(--c-lcd-amber)]" fill="currentColor">
              <path d="M50 10 L90 50 L50 90 L10 50 Z" fill="none" stroke="currentColor" strokeWidth="2" />
              <circle cx="50" cy="50" r="12" fill="currentColor" />
            </svg>
          </div>
          <h1 className="text-[var(--type-xl)] font-light text-[var(--c-text-primary)]">
            Seraphic Sonic
          </h1>
        </div>

        {/* Form Card */}
        <div className="s-card-glass p-[var(--phi-5)] rounded-[var(--r-lg)] mb-[var(--phi-5)]">
          <h2 className="text-[var(--type-2xl)] font-light text-[var(--c-text-primary)] mb-2">
            Join the Frequency
          </h2>
          <p className="text-[var(--type-sm)] text-[var(--c-text-muted)] mb-[var(--phi-5)]">
            Create your Seraphic account in seconds.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email */}
            <div>
              <label className="block text-[var(--type-sm)] text-[var(--c-text-secondary)] mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@email.com"
                className="s-form-input w-full"
                required
              />
            </div>

            {/* Password */}
            <div>
              <label className="block text-[var(--type-sm)] text-[var(--c-text-secondary)] mb-2">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="s-form-input w-full"
                required
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-[var(--type-sm)] text-[var(--c-text-secondary)] mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="••••••••"
                className="s-form-input w-full"
                required
              />
            </div>

            {/* Sign Up Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="s-btn-actuator s-glow-amber w-full mt-[var(--phi-5)]"
            >
              {isLoading ? "CREATING ACCOUNT..." : "CREATE ACCOUNT"}
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-[var(--phi-5)]">
            <div className="border-t border-[var(--c-border)]" />
            <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[var(--c-surface-1)] px-2 text-[var(--type-2xs)] text-[var(--c-text-muted)]">
              OR
            </span>
          </div>

          {/* OAuth Buttons */}
          <button className="w-full s-btn-ghost py-2 mb-2">
            SIGN UP WITH GOOGLE
          </button>
          <button className="w-full s-btn-ghost py-2">
            SIGN UP WITH GITHUB
          </button>

          {/* Terms */}
          <p className="text-[var(--type-2xs)] text-[var(--c-text-muted)] text-center mt-[var(--phi-4)]">
            By signing up, you agree to our{" "}
            <Link href="/legal/terms" className="text-[var(--c-lcd-amber)]">
              Terms
            </Link>{" "}
            and{" "}
            <Link href="/legal/privacy" className="text-[var(--c-lcd-amber)]">
              Privacy Policy
            </Link>
          </p>
        </div>

        {/* Footer Link */}
        <div className="text-center">
          <p className="text-[var(--type-sm)] text-[var(--c-text-muted)]">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-[var(--c-lcd-amber)] hover:text-[var(--c-amber-hot)]"
            >
              Sign in
            </Link>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
