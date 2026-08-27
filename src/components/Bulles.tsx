"use client";
import { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";

// ---------------------------------------------------------------------------
// CONFIGURATION
// ---------------------------------------------------------------------------

const SPACING = 400;
const BUBBLE_SIZE = 220;

const MIN_SCALE = 0.72;
const MAX_SCALE = 1;

const ARC_HEIGHT = 300;
const FOCUS_RANGE = 1.2;

const DRAG_SENSITIVITY = 1 / SPACING;

const BUBBLES = [
  { label: "Administratif" },
  { label: "Immobilier" },
  { label: "Succession" },
  { label: "Fiscalité" },
  { label: "Conseil" },
];

const N = BUBBLES.length;

// ---------------------------------------------------------------------------
// UTILS
// ---------------------------------------------------------------------------

// Permet au carousel de tourner en boucle
function wrapSlot(slot: number) {
  const half = N / 2;

  return (
    ((slot + half) % N + N) % N -
    half
  );
}

// ---------------------------------------------------------------------------
// CAROUSEL
// ---------------------------------------------------------------------------

export default function ArcBubbleCarousel() {
  const progress = useMotionValue(0);
  const [mounted, setMounted] = useState(false);


  const lastX = useRef<number | null>(null);
  const isDragging = useRef(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  // -------------------------------------------------------------------------
  // DRAG START
  // -------------------------------------------------------------------------

  function startDrag(e: React.PointerEvent<HTMLDivElement>) {
    isDragging.current = true;
    lastX.current = e.clientX;

    e.currentTarget.setPointerCapture(e.pointerId);
  }

  // -------------------------------------------------------------------------
  // DRAG MOVE
  // -------------------------------------------------------------------------

  function handlePointerMove(e: React.PointerEvent<HTMLDivElement>) {
    if (!isDragging.current || lastX.current === null) {
      return;
    }

    const deltaX = e.clientX - lastX.current;

    progress.set(
      progress.get() - deltaX * DRAG_SENSITIVITY
    );

    lastX.current = e.clientX;
  }

  // -------------------------------------------------------------------------
  // DRAG END
  // -------------------------------------------------------------------------

  function endDrag() {
    if (!isDragging.current) return;

    isDragging.current = false;
    lastX.current = null;

    const target = Math.round(progress.get());

    animate(progress, target, {
      type: "spring",
      stiffness: 220,
      damping: 28,
      mass: 0.8,
    });
  }

  return (
    <div className="relative left-1/2 -mx-[50vw] w-screen">
      <div
        onPointerDown={startDrag}
        onPointerMove={handlePointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        className="
          relative
          h-130
          w-full
          overflow-hidden
          translate-y-36
          select-none
          touch-none
          cursor-grab
          active:cursor-grabbing
        "
      >
        {BUBBLES.map((bubble, index) => (
          <Bubble
            key={bubble.label}
            progress={progress}
            index={index}
            label={bubble.label}
          />
        ))}
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// BUBBLE
// ---------------------------------------------------------------------------

function Bubble({
  progress,
  index,
  label,
}: {
  progress: ReturnType<typeof useMotionValue<number>>;
  index: number;
  label: string;
}) {
  // Position de la bulle par rapport au centre
  const slot = useTransform(progress, (p) =>
    wrapSlot(index - p)
  );

  // -------------------------------------------------------------------------
  // X
  // -------------------------------------------------------------------------

  const x = useTransform(
    slot,
    (s) => s * SPACING
  );

  // -------------------------------------------------------------------------
  // DISTANCE AU CENTRE
  // -------------------------------------------------------------------------

  const normalized = useTransform(
    slot,
    (s) =>
      Math.min(
        1,
        Math.abs(s) / FOCUS_RANGE
      )
  );

  // -------------------------------------------------------------------------
  // SCALE
  // -------------------------------------------------------------------------

  const scale = useTransform(
    normalized,
    (distance) =>
      MIN_SCALE +
      (MAX_SCALE - MIN_SCALE) *
        (1 - distance)
  );

  // -------------------------------------------------------------------------
  // Y
  //
  // Centre = 0
  // Côtés = ARC_HEIGHT
  // -------------------------------------------------------------------------

  const y = useTransform(
    normalized,
    (distance) =>
      -Math.pow(distance, 1.7) * ARC_HEIGHT
  );

  // -------------------------------------------------------------------------
  // OPACITY
  // -------------------------------------------------------------------------

  const opacity = useTransform(
    normalized,
    (distance) => {
      if (distance >= 1) return 0;

      return 1 - Math.pow(distance, 2);
    }
  );

  // -------------------------------------------------------------------------
  // ROTATION
  //
  // Légère rotation pour accentuer l'effet d'arc.
  // -------------------------------------------------------------------------

  const rotate = useTransform(
    slot,
    (s) => {
      const clamped =
        Math.max(
          -FOCUS_RANGE,
          Math.min(FOCUS_RANGE, s)
        );

      return clamped * -4;
    }
  );

  // -------------------------------------------------------------------------
  // POINTER EVENTS
  // -------------------------------------------------------------------------

  const pointerEvents = useTransform(
    opacity,
    (value) =>
      value < 0.1 ? "none" : "auto"
  );

  return (
    <div
      className="
        absolute
        left-1/2
        top-1/2
        -translate-x-1/2
        -translate-y-1/2
      "
    >
      <motion.div
        style={{
          x,
          y,
          scale,
          opacity,
          rotate,
          pointerEvents,
          width: BUBBLE_SIZE,
          height: BUBBLE_SIZE,
        }}
        className="
          flex
          items-center
          justify-center
          rounded-full
          border
          border-amber-300
          bg-amber-50
          px-6
          text-center
          text-base
          font-medium
          text-stone-800
          shadow-sm
          will-change-transform
        "
      >
        {label}
      </motion.div>
    </div>
  );
}
