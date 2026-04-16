import { getPlugins } from "@/lib/db";
import HomeContent from "./HomeContent";

export default async function Home() {
  const plugins = await Promise.resolve(getPlugins(true));

  return <HomeContent plugins={plugins} />;
}
