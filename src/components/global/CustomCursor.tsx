"use client";

import { useEffect, useRef, useState } from "react";

interface CursorPosition {
  x: number;
  y: number;
}

type CursorState = "default" | "pointer" | "text";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState<CursorPosition>({ x: 0, y: 0 });
  const [cursorState, setCursorState] = useState<CursorState>("default");
  const [isVisible, setIsVisible] = useState(true);
  const [targetPos, setTargetPos] = useState<CursorPosition>({ x: 0, y: 0 });

  // Disable cursor on touch devices
  useEffect(() => {
    const isTouchDevice = () => {
      return window.matchMedia("(hover: none) and (pointer: coarse)").matches;
    };

    if (isTouchDevice()) {
      setIsVisible(false);
      return;
    }

    // Hide default cursor
    document.documentElement.style.cursor = "none";

    const handleMouseMove = (e: MouseEvent) => {
      setTargetPos({ x: e.clientX, y: e.clientY });

      // Detect cursor type based on target
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("button") ||
        target.closest("a") ||
        target.closest("[data-cursor='pointer']")
      ) {
        setCursorState("pointer");
      } else if (target.tagName === "INPUT" || target.tagName === "TEXTAREA") {
        setCursorState("text");
      } else {
        setCursorState("default");
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    // Smooth lerp animation
    const animationFrame = setInterval(() => {
      setPosition((prev) => ({
        x: prev.x + (targetPos.x - prev.x) * 0.15,
        y: prev.y + (targetPos.y - prev.y) * 0.15,
      }));
    }, 16);

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      clearInterval(animationFrame);
      document.documentElement.style.cursor = "auto";
    };
  }, [targetPos]);

  if (!isVisible) return null;

  return (
    <div
      ref={cursorRef}
      className={`fixed pointer-events-none z-[9998] transition-all duration-100`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: "translate(-50%, -50%)",
        mixBlendMode: "exclusion",
      }}
    >
      {/* Main cursor ring */}
      <div
        className={`${
          cursorState === "text"
            ? "w-0.5 h-6 border-l-2 border-[var(--c-lcd-amber)]"
            : cursorState === "pointer"
              ? "w-12 h-12 border-2 border-[var(--c-lcd-amber)] rounded-full"
              : "w-5 h-5 border-2 border-[var(--c-lcd-amber)] rounded-full"
        } ${
          cursorState === "pointer" ? "bg-[rgba(255,176,0,0.05)]" : ""
        } transition-all duration-150`}
      />

      {/* Inner dot for default state */}
      {cursorState === "default" && (
        <div className="absolute top-1/2 left-1/2 w-1 h-1 bg-[var(--c-lcd-amber)] rounded-full transform -translate-x-1/2 -translate-y-1/2" />
      )}

      {/* Glow */}
      <div
        className={`absolute inset-0 rounded-full ${
          cursorState === "pointer"
            ? "box-shadow: 0 0 12px rgba(255,176,0,0.3)"
            : ""
        }`}
        style={{
          boxShadow:
            cursorState === "pointer"
              ? "0 0 12px rgba(255, 176, 0, 0.3)"
              : "none",
        }}
      />
    </div>
  );
}
