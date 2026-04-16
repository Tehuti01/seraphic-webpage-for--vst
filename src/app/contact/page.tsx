"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // TODO: Implement email sending with Resend
    await new Promise((r) => setTimeout(r, 1000));
    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
  };

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
              Get In Touch
            </h1>
            <p className="text-[var(--type-lg)] text-[var(--c-text-muted)]">
              Questions, feedback, or partnership inquiries. We'd love to hear from you.
            </p>
          </motion.div>
        </div>

        {/* Form */}
        <div className="max-w-2xl mx-auto">
          <motion.form
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.686, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="s-card-glass p-[var(--phi-5)] rounded-[var(--r-lg)] space-y-4"
          >
            {/* Name */}
            <div>
              <label className="block text-[var(--type-sm)] text-[var(--c-text-secondary)] mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="s-form-input w-full"
                required
              />
            </div>

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

            {/* Subject */}
            <div>
              <label className="block text-[var(--type-sm)] text-[var(--c-text-secondary)] mb-2">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="What's this about?"
                className="s-form-input w-full"
                required
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-[var(--type-sm)] text-[var(--c-text-secondary)] mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us more..."
                rows={6}
                className="s-form-input w-full"
                required
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="s-btn-actuator s-glow-amber w-full"
            >
              {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
            </button>
          </motion.form>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.424, delay: 0.4 }}
            className="mt-[var(--phi-8)] grid grid-cols-2 gap-4 text-center"
          >
            <div>
              <p className="text-[var(--type-2xs)] text-[var(--c-text-muted)] uppercase tracking-wider mb-1">
                Email
              </p>
              <a
                href="mailto:hello@seraphicsonic.com"
                className="text-[var(--type-sm)] text-[var(--c-lcd-amber)] hover:text-[var(--c-amber-hot)]"
              >
                hello@seraphicsonic.com
              </a>
            </div>
            <div>
              <p className="text-[var(--type-2xs)] text-[var(--c-text-muted)] uppercase tracking-wider mb-1">
                Discord
              </p>
              <a
                href="https://discord.gg/seraphicsonic"
                className="text-[var(--type-sm)] text-[var(--c-lcd-amber)] hover:text-[var(--c-amber-hot)]"
              >
                Join Community
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
