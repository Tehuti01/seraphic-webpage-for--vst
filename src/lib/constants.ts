// Golden Ratio constant
export const PHI = 1.618033988;

// φ-based scale values
export const PHI_SCALE = {
  0: 1,
  1: 10,
  2: 16,
  3: 26,
  4: 42,
  5: 68,
  6: 110,
  7: 178,
  8: 288,
  9: 466,
  10: 754,
  11: 1220,
  12: 1974,
};

// Plugin data
export const PLUGINS = [
  {
    id: "phi-synth",
    slug: "phi-synth",
    name: "φ-Synth",
    tagline: "Geometric Synthesizer",
    description:
      "7 φ-tuned oscillators with sacred geometry modulation. Sound that evolves forever.",
    price: 49,
    type: "synth",
    formats: ["VST3", "CLAP", "AU", "AAX"],
  },
  {
    id: "metatron-reverb",
    slug: "metatron-reverb",
    name: "Metatron Reverb",
    tagline: "Spatial Harmonic Reverb",
    description: "Reverb engineered through Metatron's Cube geometry. Infinite depth.",
    price: 39,
    type: "effect",
    formats: ["VST3", "CLAP", "AU", "AAX"],
  },
  {
    id: "flower-eq",
    slug: "flower-eq",
    name: "Flower EQ",
    tagline: "Harmonic Equalizer",
    description: "6-band EQ with Flower of Life frequency mapping. Precision beauty.",
    price: 29,
    type: "effect",
    formats: ["VST3", "CLAP", "AU", "AAX"],
  },
  {
    id: "torus-delay",
    slug: "torus-delay",
    name: "Torus Delay",
    tagline: "Spatial Delay",
    description: "Torus-geometry delay with φ-proportioned feedback. Infinite spirals.",
    price: 24,
    type: "effect",
    formats: ["VST3", "CLAP", "AU", "AAX"],
  },
  {
    id: "crystal-comp",
    slug: "crystal-comp",
    name: "Crystal Comp",
    tagline: "Geometric Compressor",
    description: "Compressor tuned to crystalline ratios. Transparent presence.",
    price: 19,
    type: "dynamics",
    formats: ["VST3", "CLAP", "AU", "AAX"],
  },
];

// Pricing tiers
export const PRICING_TIERS = [
  {
    name: "Genesis",
    price: 0,
    period: "free",
    description: "Start your journey",
    features: [
      "φ-Synth Lite",
      "10 presets",
      "Standalone app",
      "Basic support",
    ],
    cta: "Get Free",
    featured: false,
  },
  {
    name: "Architect",
    price: 149,
    period: "per year",
    description: "Full creative power",
    features: [
      "All 5 plugins",
      "Full presets",
      "All formats",
      "Desktop app",
      "Priority support",
      "Preset library",
    ],
    cta: "Subscribe",
    featured: true,
  },
  {
    name: "Metatron",
    price: 499,
    period: "lifetime",
    description: "Sovereign ownership",
    features: [
      "Everything",
      "Lifetime updates",
      "Custom sounds",
      "1:1 design",
      "Marketplace",
      "API access",
    ],
    cta: "Go Sovereign",
    featured: false,
  },
];

// Testimonials
export const TESTIMONIALS = [
  {
    name: "Alex Chen",
    role: "Producer",
    quote:
      "The φ-Core DSP is unlike anything I've heard. It's like the plugins understand music at a fundamental level.",
    avatar: "/avatars/alex.jpg",
  },
  {
    name: "Jordan Watts",
    role: "Sound Designer",
    quote:
      "Sacred geometry isn't just aesthetic—the math actually works. My tracks have never sounded more cohesive.",
    avatar: "/avatars/jordan.jpg",
  },
  {
    name: "Sam Rivers",
    role: "Mixing Engineer",
    quote:
      "Zero latency, zero compromise. Seraphic Sonic is what professional audio should be.",
    avatar: "/avatars/sam.jpg",
  },
];

// Tech specs
export const TECH_SPECS = [
  { label: "Latency", value: "< 1ms" },
  { label: "Memory Allocations", value: "0" },
  { label: "Max Sample Rate", value: "96kHz" },
  { label: "Supported Formats", value: "5" },
];

// Tech stack
export const TECH_STACK = [
  { name: "Rust", category: "DSP", description: "Bare-metal real-time processing" },
  { name: "TypeScript", category: "UI", description: "Type-safe frontend" },
  { name: "React", category: "UI", description: "Component framework" },
  { name: "Tauri", category: "Desktop", description: "Lightweight desktop app" },
  { name: "SIMD", category: "Performance", description: "Vector optimization" },
  { name: "Lock-Free", category: "Performance", description: "Zero-contention IPC" },
];

// DAW logos for marquee
export const DAW_LOGOS = [
  { name: "Ableton", icon: "🎵" },
  { name: "Logic Pro", icon: "🔊" },
  { name: "FL Studio", icon: "🎚️" },
  { name: "Pro Tools", icon: "🎙️" },
  { name: "Reaper", icon: "🎛️" },
  { name: "Bitwig", icon: "◈" },
];
