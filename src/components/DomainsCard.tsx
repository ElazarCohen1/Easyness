import { DomainId } from "@/data/domains";
import { ICONS } from "@/data/icons";
import { ArrowUpRight } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";


export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Domains" });
  return { title: t("PageTitle") };
}

export default async function DomainsCard({
  params,
  id
}: {
  params: Promise<{ locale: string }>;
  id:DomainId;
}){
    const Icon = ICONS[id];
    const { locale } = await params;

    const t = await getTranslations({ locale, namespace: "Domains" });

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
    )
}
