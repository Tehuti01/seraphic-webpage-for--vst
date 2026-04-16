"use client";

import { useEffect, useState } from "react";

export default function PageLoader() {
  const [isVisible, setIsVisible] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    // Check if loader was shown this session
    const hasShownLoader = sessionStorage.getItem("seraphic-loader-shown");

    if (hasShownLoader) {
      setIsVisible(false);
      return;
    }

    // Show loader for 1618ms then exit
    const timer = setTimeout(() => {
      setIsExiting(true);
      setTimeout(() => {
        setIsVisible(false);
        sessionStorage.setItem("seraphic-loader-shown", "true");
      }, 1618);
    }, 1618);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[var(--z-loader)] bg-[var(--c-void)] flex flex-col items-center justify-center transition-all duration-[1618ms] ${
        isExiting ? "opacity-0" : "opacity-100"
      }`}
      style={isExiting ? { clipPath: "circle(0% at 50% 50%)" } : {}}
    >
      {/* Flower of Life SVG Animation */}
      <div className="mb-8">
        <svg
          viewBox="0 0 200 200"
          className="w-32 h-32"
        >
          {/* Center circle */}
          <circle
            cx="100"
            cy="100"
            r="30"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            className="text-[var(--c-lcd-amber)]"
            strokeDasharray="188"
            strokeDashoffset="188"
            style={{
              animation: "flowerpetal 2s var(--ease-phi) forwards",
              animationDelay: "0s",
            }}
          />

          {/* 6 surrounding petals */}
          {[0, 60, 120, 180, 240, 300].map((angle, idx) => {
            const rad = (angle * Math.PI) / 180;
            const x = 100 + 30 * Math.cos(rad);
            const y = 100 + 30 * Math.sin(rad);
            return (
              <circle
                key={angle}
                cx={x}
                cy={y}
                r="30"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                className="text-[var(--c-lcd-amber)]"
                strokeDasharray="188"
                strokeDashoffset="188"
                style={{
                  animation: "flowerpetal 2s var(--ease-phi) forwards",
                  animationDelay: `${(idx + 1) * 100}ms`,
                }}
              />
            );
          })}
        </svg>
      </div>

      {/* Loading Text */}
      <div className="text-center">
        <p className="text-[var(--type-sm)] s-text-lcd tracking-wider">
          {"INITIALIZING φ-CORE".split("").map((char, idx) => (
            <span
              key={idx}
              style={{
                animation: "fadeIn 200ms var(--ease-phi) forwards",
                animationDelay: `${idx * 50 + 400}ms`,
                opacity: 0,
                display: "inline-block",
              }}
            >
              {char}
            </span>
          ))}
        </p>
      </div>

      <style>{`
        @keyframes flowerpetal {
          from {
            stroke-dashoffset: 188;
            opacity: 0;
          }
          to {
            stroke-dashoffset: 0;
            opacity: 1;
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
