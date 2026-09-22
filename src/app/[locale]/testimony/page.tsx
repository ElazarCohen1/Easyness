// src/app/[locale]/testimony/page.tsx
import { getTranslations } from "next-intl/server";
import { Building2, IdCard, ShieldCheck, Scale } from "lucide-react";
import ContactCTA from "@/components/ContactCTA";
import SectionDivider from "@/components/SectionDivider";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "LegalSheet" });
  return { title: t("Title") };
}

type IdentityField = { Label: string; Value: string };

export default async function LegalSheet({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "LegalSheet" });
  const fields = t.raw("Identity.Fields") as IdentityField[];
  const domains = t.raw("Domains.List") as string[];

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-white px-4 py-28 sm:py-36">
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-25 blur-3xl"
        style={{
          background: "radial-gradient(circle, rgba(169,140,88,0.3) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-5xl">
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

        {/* Identity card */}
        <div className="rounded-3xl border border-[#a98c58]/20 bg-white p-8 shadow-[0_8px_40px_-12px_rgba(169,140,88,0.15)] sm:p-10">
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#a98c58]/30 bg-stone-50">
              <IdCard size={16} className="text-[#a98c58]" />
            </div>
            <h2 className="text-lg font-semibold uppercase tracking-widest text-stone-900">
              {t("Identity.Title")}
            </h2>
          </div>

          <dl className="grid gap-x-10 gap-y-6 sm:grid-cols-2">
            {fields.map((field, idx) => (
              <div key={idx}>
                <dt className="text-xs font-semibold uppercase tracking-widest text-stone-400">
                  {field.Label}
                </dt>
                <dd className="mt-1 text-sm text-stone-700">{field.Value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <SectionDivider />

        {/* Domains */}
        <div className="rounded-3xl border border-[#a98c58]/20 bg-stone-50/60 p-8 sm:p-10">
          <div className="mb-8 flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#a98c58]/30 bg-white">
              <Building2 size={16} className="text-[#a98c58]" />
            </div>
            <h2 className="text-lg font-semibold uppercase tracking-widest text-stone-900">
              {t("Domains.Title")}
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {domains.map((domain, idx) => (
              <span
                key={idx}
                className="rounded-full border border-[#a98c58]/25 bg-white px-4 py-2 text-center text-xs font-medium uppercase tracking-widest text-stone-600"
              >
                {domain}
              </span>
            ))}
          </div>
        </div>

        <SectionDivider />

        {/* Insurance & partner network */}
        <div className="grid gap-8 sm:grid-cols-2">
          <div className="rounded-3xl border border-[#a98c58]/20 bg-white p-8">
            <div className="mb-4 flex items-center gap-3">
              <ShieldCheck size={18} className="text-[#a98c58]" />
              <h3 className="text-sm font-semibold uppercase tracking-widest text-stone-900">
                {t("Insurance.Title")}
              </h3>
            </div>
            <p className="text-sm leading-relaxed text-stone-600">{t("Insurance.Text")}</p>
          </div>

          <div className="rounded-3xl border border-[#a98c58]/20 bg-white p-8">
            <div className="mb-4 flex items-center gap-3">
              <Scale size={18} className="text-[#a98c58]" />
              <h3 className="text-sm font-semibold uppercase tracking-widest text-stone-900">
                {t("Network.Title")}
              </h3>
            </div>
            <p className="text-sm leading-relaxed text-stone-600">{t("Network.Text")}</p>
          </div>
        </div>
      </div>

      <div className="relative mt-20">
        <ContactCTA variant="light" withBackground={false} />
      </div>
    </div>
  );
}