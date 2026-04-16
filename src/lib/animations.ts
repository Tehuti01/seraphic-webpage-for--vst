// Framer Motion animation variants for Seraphic Sonic

export const fadeRiseVariant = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.424,
    },
  },
};

export const scaleBloomVariant = {
  hidden: {
    opacity: 0,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.686,
    },
  },
};

export const clipRevealVariant = {
  hidden: {
    clipPath: "inset(0 0 100% 0)",
    opacity: 0,
  },
  visible: {
    clipPath: "inset(0 0 0 0)",
    opacity: 1,
    transition: {
      duration: 1.618,
    },
  },
};

export const staggerContainerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const staggerItemVariant = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.424,
    },
  },
};

export const slideInLeftVariant = {
  hidden: {
    opacity: 0,
    x: -100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.686,
    },
  },
};

export const slideInRightVariant = {
  hidden: {
    opacity: 0,
    x: 100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.686,
    },
  },
};

export const letterByLetterVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0,
    },
  },
};

export const letterVariant = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
    },
  },
};

// Counter/ticker animation
export const counterVariant = {
  visible: {
    transition: {
      duration: 1.618,
    },
  },
};

// Hover effects
export const hoverScaleVariant = {
  rest: { scale: 1 },
  hover: {
    scale: 1.02,
    transition: {
      duration: 0.262,
    },
  },
};

export const hoverLiftVariant = {
  rest: { y: 0 },
  hover: {
    y: -8,
    transition: {
      duration: 0.262,
    },
  },
};

// Rotation animation
export const rotateVariant = {
  initial: { rotate: 0 },
  animate: {
    rotate: 360,
    transition: {
      duration: 120,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

// Pulse glow animation
export const glowPulseVariant = {
  animate: {
    boxShadow: [
      "0 0 10px rgba(255, 176, 0, 0.2)",
      "0 0 20px rgba(255, 176, 0, 0.4)",
      "0 0 10px rgba(255, 176, 0, 0.2)",
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

// Floating bounce animation
export const floatVariant = {
  animate: {
    y: [0, -20, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// Shimmer/shine effect
export const shimmerVariant = {
  animate: {
    backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

// Gradient shift
export const gradientShiftVariant = {
  animate: {
    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "ease-in-out",
    },
  },
};

// Complex stagger with scale
export const complexStaggerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

export const complexStaggerItemVariant = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

// Blur fade variant
export const blurFadeVariant = {
  hidden: {
    opacity: 0,
    filter: "blur(10px)",
  },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
    },
  },
};

// Rotate in variant
export const rotateInVariant = {
  hidden: {
    opacity: 0,
    rotate: -10,
  },
  visible: {
    opacity: 1,
    rotate: 0,
    transition: {
      duration: 0.686,
    },
  },
};

// Skew reveal variant
export const skewRevealVariant = {
  hidden: {
    opacity: 0,
    skewY: 10,
  },
  visible: {
    opacity: 1,
    skewY: 0,
    transition: {
      duration: 0.686,
    },
  },
};

// Gooey morphing effect (text shadow animation)
export const gooeyVariant = {
  animate: {
    textShadow: [
      "0 0 20px rgba(255,176,0,0.2)",
      "0 0 40px rgba(255,176,0,0.4)",
      "2px 2px 30px rgba(255,176,0,0.3)",
      "0 0 20px rgba(255,176,0,0.2)",
    ],
    transition: {
      duration: 3,
      repeat: Infinity,
    },
  },
};

// Elastic scale
export const elasticScaleVariant = {
  animate: {
    scale: [1, 1.08, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};
