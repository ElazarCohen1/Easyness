// src/app/[locale]/company/page.tsx
import { getTranslations } from "next-intl/server";
import { ShieldCheck, Zap, BadgeCheck, Scale } from "lucide-react";
import ContactCTA from "@/components/ContactCTA";
import SectionDivider from "@/components/SectionDivider";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Presentation" });
  return { title: t("Title") };
}

const ICONS = [ShieldCheck, Zap, BadgeCheck, Scale];

type ValueItem = { Title: string; Text: string };

export default async function Company({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Presentation" });
  const values = t.raw("Values.List") as ValueItem[];

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-white px-4 py-28 sm:py-36">
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-25 blur-3xl"
        style={{
          background: "radial-gradient(circle, rgba(169,140,88,0.3) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-14 text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-linear-to-r from-transparent to-[#a98c58]" />
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-[#a98c58]">
              {t("Eyebrow")}
            </span>
            <span className="h-px w-8 bg-linear-to-l from-transparent to-[#a98c58]" />
          </div>

          <h1 className="bg-linear-to-b from-[#a98c58] via-[#8a7345] to-[#6f5b37] bg-clip-text text-4xl font-semibold tracking-tight text-transparent sm:text-5xl">
            {t("Title")}
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-stone-500">
            {t("Subtitle")}
          </p>
        </div>

        {/* Presentation */}
        <div className="rounded-3xl border border-[#a98c58]/20 bg-white p-8 shadow-[0_8px_40px_-12px_rgba(169,140,88,0.15)] sm:p-10">
          <div className="space-y-6 text-base leading-relaxed text-stone-600">
            <p className="text-lg text-stone-700">{t("Paragraph1")}</p>
            <p>{t("Paragraph2")}</p>
            <p>{t("Paragraph3")}</p>
          </div>
        </div>

        <SectionDivider />

        {/* Values */}
        <div>
          <h2 className="mb-8 text-center text-sm font-semibold uppercase tracking-widest text-stone-900">
            {t("Values.Title")}
          </h2>

          <div className="grid gap-6 sm:grid-cols-2">
            {values.map((value, idx) => {
              const Icon = ICONS[idx % ICONS.length];
              return (
                
                <div
                  key={idx}
                  className="rounded-3xl border border-[#a98c58]/20 bg-stone-50/60 p-8"
                >
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#a98c58]/30 bg-white">
                      <Icon size={16} className="text-[#a98c58]" />
                    </div>
                    <h3 className="text-sm font-semibold uppercase tracking-widest text-stone-900">
                      {value.Title}
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed text-stone-600">{value.Text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="relative mt-20">
        <ContactCTA variant="light" withBackground={false} />
      </div>
    </div>
  );
}