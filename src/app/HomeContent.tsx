"use client";

import { useSmoothScroll } from "@/lib/use-smooth-scroll";
import { Plugin } from "@/lib/db";
import HeroSlide from "@/components/home/HeroSlide";
import PluginShowcaseSlide from "@/components/home/PluginShowcaseSlide";
import ArchitectureSlide from "@/components/home/ArchitectureSlide";
import SoundDemoSlide from "@/components/home/SoundDemoSlide";
import TestimonialsSlide from "@/components/home/TestimonialsSlide";
import CTASlide from "@/components/home/CTASlide";

interface HomeContentProps {
  plugins: Plugin[];
}

export default function HomeContent({ plugins }: HomeContentProps) {
  // Initialize smooth scroll with Lenis
  useSmoothScroll();

  return (
    <>
      <HeroSlide />
      <PluginShowcaseSlide plugins={plugins} />
      <ArchitectureSlide />
      <SoundDemoSlide />
      <TestimonialsSlide />
      <CTASlide />
    </>
  );
}
