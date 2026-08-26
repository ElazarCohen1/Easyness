"use client";

import { useRef } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";

// ---------------------------------------------------------------------------
// Paramètres à ajuster
// ---------------------------------------------------------------------------
const SPACING = 400;        // distance horizontale (px) entre deux "slots" de bulles
const BUBBLE_SIZE = 220;    // taille max (px) de la bulle centrale (les autres sont mises à l'échelle)
const MIN_SCALE = 0.55;     // échelle des bulles voisines par rapport au centre (1 = même taille)
const ARC_DEPTH = -1000;       // amplitude verticale de l'arc (px) — 0 = bulles alignées à plat
const FOCUS_RANGE = 1.4;    // au-delà de X "slots" du centre, la bulle devient invisible
const DRAG_SENSITIVITY = 1 / SPACING; // vitesse de défilement au drag

const BUBBLES = [
  { label: "Administratif" },
  { label: "Immobilier" },
  { label: "Succession" },
  { label: "Fiscalité" },
  { label: "Conseil" },
];

const N = BUBBLES.length;

// ramène un slot dans l'intervalle [-N/2, N/2) pour un défilement circulaire
function wrapSlot(slot: number) {
  const half = N / 2;
  return ((slot + half) % N + N) % N - half;
}

export default function ArcBubbleCarousel() {
  const containerRef = useRef<HTMLDivElement>(null);
  const progress = useMotionValue(0); // position du carousel, en "slots" (peut être fractionnaire)
  const lastX = useRef<number | null>(null);

  function startDrag(e: React.PointerEvent) {
    lastX.current = e.clientX;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  }

  function handlePointerMove(e: React.PointerEvent) {
    if (lastX.current === null) return;
    const deltaX = e.clientX - lastX.current;
    // on soustrait : glisser vers la gauche fait avancer le carousel vers la droite
    progress.set(progress.get() - deltaX * DRAG_SENSITIVITY);
    lastX.current = e.clientX;
  }

  function endDrag() {
    lastX.current = null;
    // "snap" doux vers le slot entier le plus proche pour recentrer une bulle pile au milieu
    const target = Math.round(progress.get());
    animate(progress, target, { type: "spring", stiffness: 200, damping: 26 });
  }

  return (
    // w-screen + astuce de recentrage pour que le carousel prenne toute la largeur
    // même si son parent a un max-w. Retire ces 2 classes si le parent est déjà full-width.
    <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen">
      <div
        ref={containerRef}
        onPointerDown={startDrag}
        onPointerMove={handlePointerMove}
        onPointerUp={endDrag}
        onPointerLeave={endDrag}
        className="relative w-full h-[460px] overflow-hidden flex items-center justify-center cursor-grab active:cursor-grabbing select-none touch-none"
      >
        {BUBBLES.map((bubble, i) => (
          <Bubble key={bubble.label} progress={progress} index={i} label={bubble.label} />
        ))}
      </div>
    </div>
  );
}

function Bubble({
  progress,
  index,
  label,
}: {
  progress: ReturnType<typeof useMotionValue<number>>;
  index: number;
  label: string;
}) {
  // position horizontale du slot (fractionnaire), ramenée dans [-N/2, N/2)
  const slot = useTransform(progress, (p) => wrapSlot(index - p));

  const x = useTransform(slot, (s) => s * SPACING);

  // t = distance normalisée au centre, bornée à [-1, 1] au-delà de FOCUS_RANGE
  const t = useTransform(slot, (s) => Math.max(-1, Math.min(1, s / FOCUS_RANGE)));

  // forme en cosinus : 1 au centre, MIN_SCALE au bord de la zone visible
  const scale = useTransform(t, (v) => MIN_SCALE + (1 - MIN_SCALE) * Math.cos((v * Math.PI) / 2));

  // arc vertical : les bulles latérales descendent légèrement (effet tapis roulant)
  const y = useTransform(t, (v) => 300 + ARC_DEPTH * (1 - Math.cos((v * Math.PI) / 2)));

  // disparition douce en sortant de la zone de focus
  const opacity = useTransform(t, (v) => Math.max(0, Math.cos((v * Math.PI) / 2)));

  // désactive le clic sur les bulles quasi invisibles
  const pointerEvents = useTransform(opacity, (o) => (o < 0.15 ? "none" : "auto"));

  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <motion.div
        style={{
          x,
          y,
          scale,
          opacity,
          pointerEvents,
          width: BUBBLE_SIZE,
          height: BUBBLE_SIZE,
        }}
        className="rounded-full border border-amber-300 bg-amber-50 shadow-sm flex items-center justify-center text-center text-base font-medium text-stone-800 px-4"
      >
        {label}
      </motion.div>
    </div>
  );
}