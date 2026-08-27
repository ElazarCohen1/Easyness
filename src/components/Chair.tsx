"use client";

import { Hotspot } from "@/types/hotspot";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

function Chair({ chair, locale }: { chair: Hotspot; locale: string }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="absolute z-10"
      style={{
        left: `${chair.x}%`,
        top: `${chair.y}%`,
        width: `${chair.width}%`,
        height: `${chair.height}%`,
      }}
    >
      {/* Zone cliquable pleine largeur */}
      <Link
        href={`/${locale}/${chair.href}`}
        className="absolute inset-0"
        aria-label={chair.name}
      />

      {/* Zone de hover : couvre tout le hotspot, pas juste le rond */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="relative flex items-center justify-center pointer-events-auto">

          {/* Anneau pointillé qui tourne doucement */}
          <motion.div
            className="absolute h-20 w-20 rounded-full border border-dashed border-[#c9b48a]/45"
            animate={{ rotate: 360 }}
            transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
          />

          {/* Pulse / onde de respiration */}
          <motion.span
            className="absolute h-14 w-14 rounded-full bg-[#c9b48a]/20"
            animate={{ scale: [1, 1.8, 1], opacity: [0.45, 0, 0.45] }}
            transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Point central */}
          <motion.div
            className="relative h-8 w-8 rounded-full bg-linear-to-br from-[#2cd6f8] via-[#8398f5] to-[#1efbff] ring-1 ring-white/40 shadow-[0_0_16px_rgba(201,180,138,0.55)]"
            animate={{ scale: hovered ? 1.3 : 1 }}
            transition={{ type: "spring", stiffness: 320, damping: 22 }}
          />

          {/* Panel */}
          <AnimatePresence>
            {hovered && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.96, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: 10, scale: 0.96, filter: "blur(6px)" }}
                transition={{ duration: 0.28, ease: "easeOut" }}
                className="absolute bottom-full left-1/2 mb-6 w-64 -translate-x-1/2 rounded-2xl border border-[#c9b48a]/25 bg-stone-950/90 p-5 shadow-2xl shadow-black/50 backdrop-blur-md"
              >
                <div className="mb-3 h-px w-10 bg-linear-to-r from-[#c9b48a] to-transparent" />

                <h3 className="text-sm font-semibold uppercase tracking-wider text-[#e8d9b5]">
                  {chair.name}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-stone-300">
                  Découvrez ce domaine et son approche.
                </p>

                <div className="mt-3 flex items-center gap-1 text-xs font-medium uppercase tracking-widest text-[#c9b48a]">
                  <span>Découvrir</span>
                  <span aria-hidden>→</span>
                </div>

                <div className="absolute left-1/2 top-full h-3 w-3 -translate-x-1/2 -translate-y-1/2 rotate-45 border-b border-r border-[#c9b48a]/25 bg-stone-950/90" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default Chair;