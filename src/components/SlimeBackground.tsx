import React from "react";
import styled, { keyframes } from "styled-components";

/**
 * Color theme presets for the slime background.
 * Change the theme prop on <SlimeBackground> to switch palettes.
 */
export enum SlimeColorTheme {
  /** Classic green slime with orange/yellow accents */
  Nickelodeon = "nickelodeon",
  /** Vibrant ink-splash colors — pink, cyan, yellow, purple */
  Splatoon = "splatoon",
  /** Extraterrestrial goo — greens and purples */
  Alien = "alien",
  /** Deep sea — blues, teals, cyans */
  Ocean = "ocean",
  /** Warm hues — reds, oranges, pinks, yellows */
  Sunset = "sunset",
  /** Sweet pastels — pinks and purples */
  Bubblegum = "bubblegum",
}

interface ColorPalette {
  colors: string[];
  backgroundColor: string;
}

const COLOR_PALETTES: Record<SlimeColorTheme, ColorPalette> = {
  [SlimeColorTheme.Nickelodeon]: {
    colors: ["#39B54A", "#8DC63F", "#FF9800", "#FFEB3B", "#66BB6A", "#FFC107"],
    backgroundColor: "#143D1A",
  },
  [SlimeColorTheme.Splatoon]: {
    colors: ["#E91E63", "#00BCD4", "#CDDC39", "#9C27B0", "#FF5722", "#4CAF50"],
    backgroundColor: "#0E0E1A",
  },
  [SlimeColorTheme.Alien]: {
    colors: ["#76FF03", "#B388FF", "#00E676", "#7C4DFF", "#69F0AE", "#AA00FF"],
    backgroundColor: "#07010F",
  },
  [SlimeColorTheme.Ocean]: {
    colors: ["#0077B6", "#00B4D8", "#90E0EF", "#023E8A", "#48CAE4", "#ADE8F4"],
    backgroundColor: "#020420",
  },
  [SlimeColorTheme.Sunset]: {
    colors: ["#FF6B6B", "#FFA07A", "#FFD93D", "#FF8E53", "#FF5E78", "#FEC89A"],
    backgroundColor: "#1A0530",
  },
  [SlimeColorTheme.Bubblegum]: {
    colors: ["#FF69B4", "#DDA0DD", "#FF1493", "#BA55D3", "#FFB6C1", "#E0BBE4"],
    backgroundColor: "#1E0622",
  },
};

/* -------------------------------------------------------------------------- */
/*  Blob morph / movement keyframes                                           */
/*  Each animation morphs the border-radius for organic shape changes and     */
/*  translates + rotates + scales for smooth, gooey movement.                 */
/* -------------------------------------------------------------------------- */

const blobAnim1 = keyframes`
  0%, 100% {
    border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
    transform: translate(0, 0) rotate(0deg) scale(1);
  }
  25% {
    border-radius: 70% 30% 50% 50% / 30% 30% 70% 70%;
    transform: translate(80px, -100px) rotate(90deg) scale(1.1);
  }
  50% {
    border-radius: 50% 60% 30% 70% / 60% 40% 60% 40%;
    transform: translate(-60px, 60px) rotate(180deg) scale(0.95);
  }
  75% {
    border-radius: 60% 40% 60% 40% / 50% 60% 40% 60%;
    transform: translate(40px, 30px) rotate(270deg) scale(1.05);
  }
`;

const blobAnim2 = keyframes`
  0%, 100% {
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
    transform: translate(0, 0) rotate(0deg) scale(1);
  }
  25% {
    border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
    transform: translate(-100px, 50px) rotate(-90deg) scale(1.15);
  }
  50% {
    border-radius: 50% 50% 40% 60% / 40% 70% 50% 30%;
    transform: translate(70px, -80px) rotate(-180deg) scale(0.9);
  }
  75% {
    border-radius: 40% 70% 60% 30% / 60% 40% 50% 60%;
    transform: translate(-30px, -40px) rotate(-270deg) scale(1.08);
  }
`;

const blobAnim3 = keyframes`
  0%, 100% {
    border-radius: 50% 50% 50% 50% / 50% 50% 50% 50%;
    transform: translate(0, 0) rotate(0deg) scale(1);
  }
  20% {
    border-radius: 70% 30% 60% 40% / 30% 60% 40% 70%;
    transform: translate(60px, 70px) rotate(72deg) scale(1.12);
  }
  40% {
    border-radius: 30% 70% 40% 60% / 70% 40% 60% 30%;
    transform: translate(-90px, -30px) rotate(144deg) scale(0.92);
  }
  60% {
    border-radius: 60% 40% 70% 30% / 40% 70% 30% 60%;
    transform: translate(50px, -90px) rotate(216deg) scale(1.05);
  }
  80% {
    border-radius: 40% 60% 30% 70% / 60% 30% 70% 40%;
    transform: translate(-40px, 50px) rotate(288deg) scale(0.97);
  }
`;

const blobAnim4 = keyframes`
  0%, 100% {
    border-radius: 45% 55% 65% 35% / 55% 45% 55% 45%;
    transform: translate(0, 0) rotate(0deg) scale(1);
  }
  33% {
    border-radius: 65% 35% 45% 55% / 35% 65% 45% 55%;
    transform: translate(-70px, -60px) rotate(120deg) scale(1.08);
  }
  66% {
    border-radius: 55% 45% 35% 65% / 45% 55% 65% 35%;
    transform: translate(90px, 40px) rotate(240deg) scale(0.93);
  }
`;

const blobAnim5 = keyframes`
  0%, 100% {
    border-radius: 35% 65% 55% 45% / 65% 35% 45% 55%;
    transform: translate(0, 0) rotate(0deg) scale(1);
  }
  20% {
    border-radius: 55% 45% 35% 65% / 45% 55% 65% 35%;
    transform: translate(100px, 20px) rotate(72deg) scale(1.1);
  }
  40% {
    border-radius: 45% 55% 65% 35% / 55% 45% 35% 65%;
    transform: translate(-40px, -100px) rotate(144deg) scale(0.88);
  }
  60% {
    border-radius: 65% 35% 45% 55% / 35% 65% 55% 45%;
    transform: translate(-80px, 60px) rotate(216deg) scale(1.06);
  }
  80% {
    border-radius: 50% 50% 50% 50% / 40% 60% 50% 50%;
    transform: translate(50px, -30px) rotate(288deg) scale(0.96);
  }
`;

const blobAnim6 = keyframes`
  0%, 100% {
    border-radius: 55% 45% 40% 60% / 50% 60% 40% 50%;
    transform: translate(0, 0) rotate(0deg) scale(1);
  }
  25% {
    border-radius: 40% 60% 55% 45% / 60% 40% 50% 60%;
    transform: translate(50px, 80px) rotate(-90deg) scale(1.12);
  }
  50% {
    border-radius: 60% 40% 45% 55% / 40% 50% 60% 50%;
    transform: translate(-80px, -50px) rotate(-180deg) scale(0.9);
  }
  75% {
    border-radius: 45% 55% 60% 40% / 50% 40% 50% 60%;
    transform: translate(30px, -70px) rotate(-270deg) scale(1.04);
  }
`;

const BLOB_ANIMATIONS = [
  blobAnim1,
  blobAnim2,
  blobAnim3,
  blobAnim4,
  blobAnim5,
  blobAnim6,
];

/* -------------------------------------------------------------------------- */
/*  Blob layout configuration                                                 */
/* -------------------------------------------------------------------------- */

interface BlobConfig {
  top: string;
  left: string;
  size: string;
  animIndex: number;
  colorIndex: number;
  /** Animation cycle duration in seconds */
  duration: number;
  /** Negative delay offsets each blob so they start at different phases */
  delay: number;
  opacity: number;
  /** Gaussian blur in px — controls how "melty" the blob edges are */
  blur: number;
}

const BLOBS: BlobConfig[] = [
  // Large blobs spanning the viewport
  {
    top: "-15%",
    left: "-10%",
    size: "55vw",
    animIndex: 0,
    colorIndex: 0,
    duration: 25,
    delay: 0,
    opacity: 0.7,
    blur: 60,
  },
  {
    top: "20%",
    left: "60%",
    size: "50vw",
    animIndex: 1,
    colorIndex: 1,
    duration: 30,
    delay: -5,
    opacity: 0.65,
    blur: 70,
  },
  {
    top: "55%",
    left: "-5%",
    size: "45vw",
    animIndex: 2,
    colorIndex: 2,
    duration: 28,
    delay: -10,
    opacity: 0.6,
    blur: 50,
  },
  {
    top: "-20%",
    left: "40%",
    size: "60vw",
    animIndex: 3,
    colorIndex: 3,
    duration: 35,
    delay: -15,
    opacity: 0.55,
    blur: 80,
  },
  // Medium blobs for depth
  {
    top: "60%",
    left: "50%",
    size: "48vw",
    animIndex: 4,
    colorIndex: 4,
    duration: 22,
    delay: -8,
    opacity: 0.7,
    blur: 55,
  },
  {
    top: "30%",
    left: "20%",
    size: "40vw",
    animIndex: 5,
    colorIndex: 5,
    duration: 32,
    delay: -12,
    opacity: 0.6,
    blur: 65,
  },
  // Smaller accent blobs
  {
    top: "-5%",
    left: "80%",
    size: "35vw",
    animIndex: 2,
    colorIndex: 0,
    duration: 27,
    delay: -3,
    opacity: 0.5,
    blur: 75,
  },
  {
    top: "75%",
    left: "-15%",
    size: "42vw",
    animIndex: 4,
    colorIndex: 3,
    duration: 33,
    delay: -18,
    opacity: 0.55,
    blur: 60,
  },
];

/* -------------------------------------------------------------------------- */
/*  Styled components                                                         */
/* -------------------------------------------------------------------------- */

const BackgroundContainer = styled.div<{ $bgColor: string; $contained: boolean }>`
  position: ${(p) => (p.$contained ? "absolute" : "fixed")};
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${(p) => p.$bgColor};
  overflow: hidden;
  z-index: 0;
`;

const Blob = styled.div<{
  $top: string;
  $left: string;
  $size: string;
  $color: string;
  $duration: number;
  $delay: number;
  $opacity: number;
  $blur: number;
  $animIndex: number;
}>`
  position: absolute;
  top: ${(p) => p.$top};
  left: ${(p) => p.$left};
  width: ${(p) => p.$size};
  height: ${(p) => p.$size};
  background: ${(p) => p.$color};
  opacity: ${(p) => p.$opacity};
  filter: blur(${(p) => p.$blur}px);
  animation: ${(p) => BLOB_ANIMATIONS[p.$animIndex]} ${(p) => p.$duration}s
    infinite ease-in-out;
  animation-delay: ${(p) => p.$delay}s;
  will-change: transform, border-radius;
  pointer-events: none;
`;

/* -------------------------------------------------------------------------- */
/*  Component                                                                 */
/* -------------------------------------------------------------------------- */

interface SlimeBackgroundProps {
  /** Pick a preset color theme */
  theme?: SlimeColorTheme;
  /** If true, uses position:absolute instead of fixed — for use inside a section */
  contained?: boolean;
}

/**
 * Animated gooey/slime background with large morphing blobs.
 *
 * Usage:
 * ```tsx
 * <SlimeBackground theme={SlimeColorTheme.Splatoon} />
 * ```
 *
 * The component renders as a fixed, full-viewport layer at z-index 0.
 * Place your content in a wrapper with `position: relative; z-index: 1;`
 * so it floats above the animated background.
 */
export const SlimeBackground: React.FC<SlimeBackgroundProps> = ({
  theme = SlimeColorTheme.Splatoon,
  contained = false,
}) => {
  const palette = COLOR_PALETTES[theme];

  return (
    <BackgroundContainer $bgColor={palette.backgroundColor} $contained={contained}>
      {BLOBS.map((blob, i) => (
        <Blob
          key={i}
          $top={blob.top}
          $left={blob.left}
          $size={blob.size}
          $color={palette.colors[blob.colorIndex % palette.colors.length]}
          $duration={blob.duration}
          $delay={blob.delay}
          $opacity={blob.opacity}
          $blur={blob.blur}
          $animIndex={blob.animIndex}
        />
      ))}
    </BackgroundContainer>
  );
};

/** Helper to retrieve a palette object for a given theme */
export const getSlimePalette = (theme: SlimeColorTheme) =>
  COLOR_PALETTES[theme];
