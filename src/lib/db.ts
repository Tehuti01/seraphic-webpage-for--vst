// Server-only database module — never import in Client Components
import fs from "fs";
import path from "path";

export interface Plugin {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  longDescription: string;
  price: number;
  salePrice: number | null;
  type: "synth" | "effect" | "dynamics" | "spatial";
  formats: string[];
  image: string;
  thumbnail: string;
  videoUrl: string;
  screenshots: string[];
  specs: Record<string, string>;
  features: string[];
  version: string;
  releaseDate: string;
  published: boolean;
}

const PLUGINS_FILE = path.join(process.cwd(), "src/data/plugins.json");

function readPluginsFile(): Plugin[] {
  try {
    const data = fs.readFileSync(PLUGINS_FILE, "utf-8");
    const parsed = JSON.parse(data);
    return parsed.plugins || [];
  } catch (error) {
    console.error("Error reading plugins file:", error);
    return [];
  }
}

function writePluginsFile(plugins: Plugin[]): void {
  try {
    const data = JSON.stringify({ plugins }, null, 2);
    fs.writeFileSync(PLUGINS_FILE, data, "utf-8");
  } catch (error) {
    console.error("Error writing plugins file:", error);
    throw error;
  }
}

export function getPlugins(publishedOnly: boolean = false): Plugin[] {
  const plugins = readPluginsFile();
  if (publishedOnly) {
    return plugins.filter((p) => p.published);
  }
  return plugins;
}

export function getPlugin(slug: string): Plugin | null {
  const plugins = readPluginsFile();
  return plugins.find((p) => p.slug === slug) || null;
}

export function savePlugins(plugins: Plugin[]): void {
  writePluginsFile(plugins);
}

export function createPlugin(plugin: Omit<Plugin, "id">): Plugin {
  const plugins = readPluginsFile();
  const newPlugin: Plugin = {
    ...plugin,
    id: plugin.slug,
  };
  plugins.push(newPlugin);
  savePlugins(plugins);
  return newPlugin;
}

export function updatePlugin(
  slug: string,
  updates: Partial<Plugin>
): Plugin | null {
  const plugins = readPluginsFile();
  const index = plugins.findIndex((p) => p.slug === slug);
  if (index === -1) return null;

  plugins[index] = { ...plugins[index], ...updates };
  savePlugins(plugins);
  return plugins[index];
}

export function deletePlugin(slug: string): boolean {
  const plugins = readPluginsFile();
  const filtered = plugins.filter((p) => p.slug !== slug);
  if (filtered.length === plugins.length) return false;

  savePlugins(filtered);
  return true;
}
