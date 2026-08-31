"use client";

import { useRef } from "react";
import { useScroll } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import homeImg from "@public/bg_home.png";
import Chairs from "@/components/Chairs";
import ArcBubbleCarousel from "@/components/Bulles";
import ContactCTA from "./ContactCTA";
import SectionDivider from "./SectionDivider";

export default function HomeExperience({ locale }: { locale: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const t = useTranslations("Home.Hero");

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={containerRef} className="relative">
      <section className="relative h-screen w-full overflow-hidden">
        <Chairs locale={locale} scrollProgress={scrollYProgress} />
        <Image
          src={homeImg}
          alt="bg-home-section"
          fill
          draggable={false}
          className="object-cover"
          priority
        />
      </section>

      <section className="relative w-full overflow-hidden bg-linear-to-b from-stone-100 via-white to-stone-100">
        <div
          className="pointer-events-none absolute left-1/2 top-1/3 h-200 w-140 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-25 blur-3xl"
          style={{
            background: "radial-gradient(circle, rgba(169,140,88,0.35) 0%, rgba(169,140,88,0) 70%)",
          }}
        />

        <div className="relative pt-28 md:pt-36">
          <div className="mx-auto max-w-2xl px-6 text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#a98c58]">
              {t("Eyebrow")}
            </span>
            <h2 className="mt-4 text-3xl font-light tracking-tight text-stone-900 md:text-5xl">
              {t("TitleLine1")}
              <br className="hidden md:block" /> {t("TitleLine2")}
            </h2>
          </div>

          <div className="relative mt-4">
            <ArcBubbleCarousel />
          </div>
        </div>

        <SectionDivider />

        <div className="relative pb-28 md:pb-36">
          <ContactCTA variant="light" withBackground={false} />
        </div>
      </section>
    </div>
  );
}