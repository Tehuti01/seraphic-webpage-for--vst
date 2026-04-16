import { getPlugins } from "@/lib/db";
import PluginsHero from "./PluginsHero";
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
          <PluginsHero />
          <PluginsGrid plugins={plugins} />
        </div>
      </section>
    </div>
  );
}
