import BundlesContent from "./BundlesContent";

export const metadata = {
  title: "Bundles | Seraphic Sonic",
};

const BUNDLES = [
  {
    id: "genesis",
    name: "GENESIS BUNDLE",
    price: 79,
    period: "one-time",
    description: "The starter geometry set",
    featured: false,
    includes: [
      "φ-Synth Lite",
      "Flower EQ",
      "Torus Delay",
      "50 presets",
      "Email support",
    ],
    cta: "Start Now",
  },
  {
    id: "architect",
    name: "ARCHITECT BUNDLE",
    price: 199,
    period: "one-time",
    description: "The complete sacred arsenal",
    featured: true,
    badge: "MOST POPULAR",
    includes: [
      "All 5 plugins (full versions)",
      "φ-Synth + Metatron Reverb + Flower EQ + Torus Delay + Crystal Comp",
      "500+ presets",
      "Priority support",
      "1 year of updates",
      "VST3 · CLAP · AU · AAX",
    ],
    cta: "Get Arsenal",
  },
  {
    id: "sovereign",
    name: "SOVEREIGN BUNDLE",
    price: 399,
    period: "one-time",
    description: "Everything. Forever.",
    featured: false,
    includes: [
      "All 5 plugins (lifetime versions)",
      "Lifetime updates & new features",
      "1000+ exclusive presets",
      "Private Discord community",
      "Priority 1:1 design support",
      "Quarterly master classes",
    ],
    cta: "Go Sovereign",
  },
];

export default function BundlesPage() {
  return <BundlesContent bundles={BUNDLES} />;
}
