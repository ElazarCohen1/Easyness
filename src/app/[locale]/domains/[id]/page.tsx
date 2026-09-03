import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import {
  ArrowLeft,
  Scale,
  Landmark,
  Calculator,
  TrendingUp,
  Handshake,
  Gem,
  Banknote,
  Home as HomeIcon,
  type LucideIcon,
} from "lucide-react";
import ContactCTA from "@/components/ContactCTA";
import SectionDivider from "@/components/SectionDivider";
import { domainIds, type DomainId } from "@/data/domains";

const ICONS: Record<DomainId, LucideIcon> = {
  juridique: Scale,
  fiscal: Landmark,
  comptable: Calculator,
  financier: TrendingUp,
  commercial: Handshake,
  patrimonial: Gem,
  bancaire: Banknote,
  immobilier: HomeIcon,
};

export async function generateStaticParams() {
  return domainIds.map((id) => ({ id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}) {
  const { locale, id } = await params;
  if (!domainIds.includes(id as DomainId)) return {};
  const t = await getTranslations({ locale, namespace: `Domains.Items.${id}` });
  return { title: t("Title") };
}

export default async function DomainPage({
  params,
}: {
  params: Promise<{ locale: string; id: string }>;
}) {
  const { locale, id } = await params;

  if (!domainIds.includes(id as DomainId)) {
    notFound();
  }

  const domainId = id as DomainId;
  const Icon = ICONS[domainId];
  const t = await getTranslations({ locale, namespace: `Domains.Items.${domainId}` });
  const tPage = await getTranslations({ locale, namespace: "Domains" });
  const services = t.raw("Services") as string[];

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-white">
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-25 blur-3xl"
        style={{
          background: "radial-gradient(circle, rgba(169,140,88,0.3) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-4xl px-4 py-28 sm:py-36">
        <Link
          href="/domains"
          className="mb-10 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-[#a98c58] transition hover:text-[#8a7345]"
        >
          <ArrowLeft size={14} />
          {tPage("BackLink")}
        </Link>

        <div className="mb-6 flex items-center gap-3">
          <span className="h-px w-8 bg-linear-to-r from-transparent to-[#a98c58]" />
          <span className="text-xs font-medium uppercase tracking-[0.25em] text-[#a98c58]">
            {tPage("DetailEyebrow")}
          </span>
        </div>

        <div className="mb-6 flex items-center gap-5">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-[#a98c58]/30 bg-stone-50">
            <Icon size={26} className="text-[#a98c58]" strokeWidth={1.5} />
          </div>
          <h1 className="bg-linear-to-b from-[#a98c58] via-[#8a7345] to-[#6f5b37] bg-clip-text text-4xl font-semibold tracking-tight text-transparent sm:text-5xl">
            {t("Title")}
          </h1>
        </div>

        <p className="mb-10 max-w-2xl text-lg leading-relaxed text-stone-600">
          {t("Intro")}
        </p>

        <div className="rounded-3xl border border-[#a98c58]/20 bg-stone-50/60 p-8 sm:p-10">
          <p className="leading-relaxed text-stone-600">{t("Description")}</p>

          <div className="mt-8 h-px w-full bg-linear-to-r from-[#a98c58]/30 to-transparent" />

          <h2 className="mt-8 mb-5 text-xs font-semibold uppercase tracking-widest text-stone-400">
            {tPage("ServicesLabel")}
          </h2>

          <ul className="space-y-4">
            {services.map((service, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rotate-45 bg-[#a98c58]" />
                <span className="text-stone-700">{service}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <SectionDivider />

      <ContactCTA variant="light" withBackground={false} />
    </div>
  );
}