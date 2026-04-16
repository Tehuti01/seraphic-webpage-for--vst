import { useEffect } from "react";
import Lenis from "lenis";
import gsap from "gsap";

export function useSmoothScroll() {
  useEffect(() => {
    // Initialize Lenis with default settings
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    // Sync with GSAP
    lenis.on("scroll", () => {
      gsap.ticker.wake();
    });

    const rafCallback = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(rafCallback);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(rafCallback);
      lenis.destroy();
    };
  }, []);
}
