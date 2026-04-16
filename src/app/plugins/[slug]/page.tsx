import { getPlugin, getPlugins } from "@/lib/db";
import { notFound } from "next/navigation";
import PluginContent from "./PluginContent";

export const metadata = {
  title: "Plugin | Seraphic Sonic",
};

export async function generateStaticParams() {
  const plugins = getPlugins(true);
  return plugins.map((plugin) => ({
    slug: plugin.slug,
  }));
}

export default async function PluginPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const plugin = getPlugin(slug);

  if (!plugin) {
    notFound();
  }

  const allPlugins = getPlugins(true);
  const relatedPlugins = allPlugins
    .filter((p) => p.type === plugin.type && p.id !== plugin.id)
    .slice(0, 3);

  return <PluginContent plugin={plugin} relatedPlugins={relatedPlugins} />;
}
