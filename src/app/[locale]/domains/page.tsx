import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import {
  ArrowUpRight,
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

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Domains" });
  return { title: t("PageTitle") };
}

export default async function Domains({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Domains" });

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-white">
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-25 blur-3xl"
        style={{
          background: "radial-gradient(circle, rgba(169,140,88,0.3) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-4 py-28 sm:py-36">
        <div className="mb-16 text-center">
          <div className="mb-5 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-linear-to-r from-transparent to-[#a98c58]" />
            <span className="text-xs font-medium uppercase tracking-[0.25em] text-[#a98c58]">
              {t("PageEyebrow")}
            </span>
            <span className="h-px w-8 bg-linear-to-l from-transparent to-[#a98c58]" />
          </div>

          <h1 className="bg-linear-to-b from-[#a98c58] via-[#8a7345] to-[#6f5b37] bg-clip-text text-4xl font-semibold tracking-tight text-transparent sm:text-5xl">
            {t("PageTitle")}
          </h1>

          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-stone-500">
            {t("PageSubtitle")}
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {domainIds.map((id) => {
            const Icon = ICONS[id];
            return (
              <Link
                key={id}
                href={`/domains/${id}`}
                className="group relative flex flex-col rounded-3xl border border-[#a98c58]/20 bg-stone-50/60 p-8 transition-all duration-300 hover:border-[#a98c58]/50 hover:bg-white hover:shadow-[0_8px_40px_-12px_rgba(169,140,88,0.25)] no-underline"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-[#a98c58]/30 bg-white transition-colors group-hover:border-[#a98c58]/60">
                  <Icon size={20} className="text-[#a98c58]" strokeWidth={1.5} />
                </div>

                <h3 className="mb-2 text-lg font-semibold text-stone-900">
                  {t(`Items.${id}.Title`)}
                </h3>
                <p className="mb-6 flex-1 text-sm leading-relaxed text-stone-500">
                  {t(`Items.${id}.Intro`)}
                </p>

                <div className="flex items-center gap-1 text-xs font-medium uppercase tracking-widest text-[#a98c58]">
                  <span>{t("DiscoverLabel")}</span>
                  <ArrowUpRight
                    size={14}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}