"use client";

import { Link } from "@/i18n/navigation";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function ContactCTA({
  withBackground = true,
  variant = "dark",
}: {
  withBackground?: boolean;
  variant?: "dark" | "light";
}) {
  const isLight = variant === "light";

  return (
    <section
      className={`relative w-full overflow-hidden px-4 ${
        withBackground
          ? isLight
            ? "bg-white py-28 sm:py-36"
            : "bg-stone-950 py-28 sm:py-36"
          : ""
      }`}
    >
      {withBackground && (
        <div
          className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-20 blur-3xl"
          style={{
            background: isLight
              ? "radial-gradient(circle, rgba(169,140,88,0.3) 0%, transparent 70%)"
              : "radial-gradient(circle, #c9b48a 0%, transparent 70%)",
          }}
        />
      )}

      <div className="relative mx-auto flex max-w-3xl flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-6 flex items-center gap-3"
        >
          <span className="h-px w-8 bg-linear-to-r from-transparent to-[#a98c58]" />
          <span className="text-xs font-medium uppercase tracking-[0.25em] text-[#a98c58]">
            Parlons de votre projet
          </span>
          <span className="h-px w-8 bg-linear-to-l from-transparent to-[#a98c58]" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className={`text-4xl font-semibold tracking-tight sm:text-5xl md:text-6xl ${
            isLight
              ? "bg-linear-to-b from-[#a98c58] via-[#8a7345] to-[#6f5b37] bg-clip-text text-transparent"
              : "bg-linear-to-b from-[#f3e6c8] via-[#d9c290] to-[#a98c58] bg-clip-text text-transparent"
          }`}
        >
          Contactez-nous
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
          className={`mt-5 max-w-xl text-base leading-relaxed sm:text-lg ${
            isLight ? "text-stone-600" : "text-stone-400"
          }`}
        >
          Chaque démarche mérite une écoute attentive et une réponse sur
          mesure. Notre équipe étudie votre situation et vous accompagne, avec
          le concours de notre réseau d&apos;avocats partenaires si besoin.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
          className="mt-10"
        >
          <Link
            href="/contact"
            className={`group relative inline-flex items-center gap-2 overflow-hidden rounded-full border px-8 py-4 text-sm font-medium uppercase tracking-widest transition-colors duration-300 ${
              isLight
                ? "border-[#a98c58]/50 bg-white text-[#6f5b37] hover:border-[#a98c58]"
                : "border-[#c9b48a]/40 bg-stone-950 text-[#f3e6c8] hover:border-[#c9b48a]/70"
            }`}
          >
            <span
              className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              style={{
                background: isLight
                  ? "linear-gradient(120deg, rgba(169,140,88,0.12), rgba(169,140,88,0.05))"
                  : "linear-gradient(120deg, rgba(201,180,138,0.15), rgba(243,230,200,0.08))",
              }}
            />
            <span>Nous contacter</span>
            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}