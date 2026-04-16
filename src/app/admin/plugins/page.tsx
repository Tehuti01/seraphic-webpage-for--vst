import { getPlugins } from "@/lib/db";
import PluginAdmin from "./PluginAdmin";

export const metadata = {
  title: "Plugin Admin | Seraphic Sonic",
};

export default async function AdminPluginsPage() {
  const plugins = getPlugins(false);

  return <PluginAdmin initialPlugins={plugins} />;
}
