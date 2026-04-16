"use client";

import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  value: string;
  duration?: number;
}

export default function AnimatedCounter({
  value,
  duration = 1618,
}: AnimatedCounterProps) {
  const [displayValue, setDisplayValue] = useState(value);
  const containerRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;

          // Extract numeric part
          const numMatch = value.match(/[\d.]+/);
          if (!numMatch) {
            setDisplayValue(value);
            return;
          }

          const targetNum = parseFloat(numMatch[0]);
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Cubic ease-out
            const easeProgress =
              1 - Math.pow(1 - progress, 3);
            const currentNum = targetNum * easeProgress;

            // Replace numeric part with animated value
            const replacedValue = value.replace(
              /[\d.]+/,
              Math.round(currentNum).toString()
            );
            setDisplayValue(replacedValue);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setDisplayValue(value);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [value, duration]);

  return <div ref={containerRef}>{displayValue}</div>;
}
