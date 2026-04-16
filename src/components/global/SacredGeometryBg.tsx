"use client";

export default function SacredGeometryBg() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Flower of Life SVG */}
      <svg
        viewBox="0 0 400 400"
        className="w-full h-full opacity-[var(--o-whisper)] animate-rotate-slow will-change-transform"
        style={{
          transform: "translate(-50%, -50%)",
          left: "50%",
          top: "50%",
          width: "150%",
          height: "150%",
        }}
      >
        {/* Main circle (center) */}
        <circle cx="200" cy="200" r="50" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-[var(--c-lcd-amber)]" />

        {/* 6 surrounding circles in hexagonal pattern */}
        {[0, 60, 120, 180, 240, 300].map((angle) => {
          const rad = (angle * Math.PI) / 180;
          const x = 200 + 50 * Math.cos(rad);
          const y = 200 + 50 * Math.sin(rad);
          return (
            <circle
              key={angle}
              cx={x}
              cy={y}
              r="50"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-[var(--c-lcd-amber)]"
              suppressHydrationWarning
            />
          );
        })}

        {/* Outer petals (12 more circles) */}
        {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle) => {
          const rad = (angle * Math.PI) / 180;
          const x = 200 + 100 * Math.cos(rad);
          const y = 200 + 100 * Math.sin(rad);
          return (
            <circle
              key={`outer-${angle}`}
              cx={x}
              cy={y}
              r="50"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              className="text-[var(--c-lcd-amber)]"
              opacity="0.5"
              suppressHydrationWarning
            />
          );
        })}
      </svg>
    </div>
  );
}
