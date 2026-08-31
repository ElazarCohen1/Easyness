"use client";
import { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useTranslations } from "next-intl";

import {
  FileText,
  Home as HomeIcon,
  ScrollText,
  Landmark,
  MessageCircle,
  type LucideIcon,
} from "lucide-react";

const SPACING = 400;
const BUBBLE_SIZE = 200;

const MIN_SCALE = 0.72;
const MAX_SCALE = 1;

const ARC_HEIGHT = 260;
const FOCUS_RANGE = 1.2;

const DRAG_SENSITIVITY = 1 / SPACING;

// Clés correspondant à Home.Bubbles.* dans common.json
const BUBBLES: { key: string; icon: LucideIcon }[] = [
  { key: "Administrative", icon: FileText },
  { key: "RealEstate", icon: HomeIcon },
  { key: "Succession", icon: ScrollText },
  { key: "Fiscal", icon: Landmark },
  { key: "Advisory", icon: MessageCircle },
];

const N = BUBBLES.length;

function wrapSlot(slot: number) {
  const half = N / 2;
  return (((slot + half) % N + N) % N) - half;
}

export default function ArcBubbleCarousel() {
  const t = useTranslations("Home.Bubbles");
  const progress = useMotionValue(0);
  const [mounted, setMounted] = useState(false);

  const lastX = useRef<number | null>(null);
  const isDragging = useRef(false);

  useState(() => {
    setMounted(true);
  });

  if (!mounted) {
    return null;
  }

  function startDrag(e: React.PointerEvent<HTMLDivElement>) {
    isDragging.current = true;
    lastX.current = e.clientX;
    e.currentTarget.setPointerCapture(e.pointerId);
  }

  function handlePointerMove(e: React.PointerEvent<HTMLDivElement>) {
    if (!isDragging.current || lastX.current === null) return;

    const deltaX = e.clientX - lastX.current;
    progress.set(progress.get() - deltaX * DRAG_SENSITIVITY);
    lastX.current = e.clientX;
  }

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
        className="relative h-110 w-full overflow-hidden select-none touch-none cursor-grab active:cursor-grabbing"
      >
        {BUBBLES.map((bubble, index) => (
          <Bubble
            key={bubble.key}
            progress={progress}
            index={index}
            label={t(bubble.key)}
            Icon={bubble.icon}
          />
        ))}
      </div>
    </div>
  );
}

function Bubble({
  progress,
  index,
  label,
  Icon,
}: {
  progress: ReturnType<typeof useMotionValue<number>>;
  index: number;
  label: string;
  Icon: LucideIcon;
}) {
  const [mounted, setMounted] = useState(false);
  const slot = useTransform(progress, (p) => wrapSlot(index - p));

  const x = useTransform(slot, (s) => s * SPACING);

  const normalized = useTransform(slot, (s) => Math.min(1, Math.abs(s) / FOCUS_RANGE));

  const scale = useTransform(
    normalized,
    (distance) => MIN_SCALE + (MAX_SCALE - MIN_SCALE) * (1 - distance)
  );

  const y = useTransform(normalized, (distance) => -Math.pow(distance, 1.7) * ARC_HEIGHT);

  const opacity = useTransform(normalized, (distance) => {
    if (distance >= 1) return 0;
    return 1 - Math.pow(distance, 2);
  });

  const rotate = useTransform(slot, (s) => {
    const clamped = Math.max(-FOCUS_RANGE, Math.min(FOCUS_RANGE, s));
    return clamped * -4;
  });

  const pointerEvents = useTransform(opacity, (value) => (value < 0.1 ? "none" : "auto"));

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
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
          flex flex-col items-center justify-center gap-3
          rounded-full border border-[#c9b48a]/35
          bg-stone-900/70 backdrop-blur-sm
          px-6 text-center
          shadow-[0_10px_40px_rgba(0,0,0,0.45)]
          will-change-transform
        "
      >
        <Icon className="h-6 w-6 text-[#c9b48a]" strokeWidth={1.5} />
        <span className="text-sm font-medium uppercase tracking-widest text-[#f3e6c8]">
          {label}
        </span>
      </motion.div>
    </div>
  );
}