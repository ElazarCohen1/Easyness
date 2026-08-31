"use client";

import { motion, useTransform, MotionValue } from "framer-motion";
import { useEffect, useState } from "react";

// Centre du hotspot "Table" en % du hero — cf src/data/chairs.ts
// (x + width/2, y + height/2)
const ORIGIN_X_PERCENT = 50.74;
const ORIGIN_Y_PERCENT = 78.04;

// Repères de scroll (0 à 1) — à ajuster selon la hauteur réelle
// de la section bulles si l'effet te semble trop rapide/lent.
const GROW_END = 0.4;
const FADE_START = 0.32;
const FADE_END = 0.48;

export default function MergingOrb({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>;
}) {
  const [viewport, setViewport] = useState({ w: 0, h: 0 });

  useEffect(() => {
    const update = () =>
      setViewport({ w: window.innerWidth, h: window.innerHeight });
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const originX = (viewport.w * ORIGIN_X_PERCENT) / 100;
  const originY = (viewport.h * ORIGIN_Y_PERCENT) / 100;
  const targetY = viewport.h * 0.48;

  const top = useTransform(scrollYProgress, [0, GROW_END], [originY, targetY]);
  const scale = useTransform(
    scrollYProgress,
    [0, 0.08, GROW_END],
    [1, 1.5, 11]
  );
  const blurPx = useTransform(
    scrollYProgress,
    [0, 0.2, GROW_END],
    [0, 0, 22]
  );
  const filter = useTransform(blurPx, (b) => `blur(${b}px)`);
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.08, FADE_START, FADE_END],
    [0, 1, 1, 0]
  );

  if (!viewport.w) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed z-30 h-8 w-8 rounded-full"
      style={{
        top,
        left: originX,
        x: "-50%",
        y: "-50%",
        scale,
        opacity,
        filter,
        background:
          "radial-gradient(circle, #f3e6c8 0%, #d9c290 45%, #a98c58 75%, rgba(169,140,88,0) 100%)",
        boxShadow: "0 0 60px rgba(201,180,138,0.5)",
      }}
    />
  );
}