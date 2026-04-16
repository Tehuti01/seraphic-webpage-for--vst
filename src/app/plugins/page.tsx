import { motion } from "framer-motion";
import { getPlugins } from "@/lib/db";
import PluginsGrid from "./PluginsGrid";

export const metadata = {
  title: "Plugins | Seraphic Sonic",
};

export default async function PluginsPage() {
  const plugins = await Promise.resolve(getPlugins(true));

  return (
    <div className="min-h-screen bg-[var(--c-abyss)]">
      {/* Hero */}
      <section className="pt-[120px] pb-[var(--phi-8)] px-[var(--phi-5)]">
        <div className="max-w-[1440px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.686 }}
            className="text-center mb-[var(--phi-8)]"
          >
            <h1 className="text-[var(--type-4xl)] font-light text-[var(--c-text-primary)] mb-4">
              The Seraphic Arsenal
            </h1>
            <p className="text-[var(--type-lg)] text-[var(--c-text-muted)]">
              Every plugin. One geometry.
            </p>
          </motion.div>

          <PluginsGrid plugins={plugins} />
        </div>
      </section>
    </div>
  );
}
