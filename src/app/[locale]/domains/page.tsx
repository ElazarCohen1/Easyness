import { getTranslations } from "next-intl/server";
import { domainIds } from "@/data/domains";
import DomainsCard from "@/components/DomainsCard";
import ContactCTA from "@/components/ContactCTA";


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
        className="pointer-events-none absolute left-1/2 top-0 h-125 w-225 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-25 blur-3xl"
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
            return <DomainsCard params={params} id={id} key={id} />
          })}
        </div>

        <div className="relative mt-24">
          <ContactCTA variant="light" withBackground={false} />
        </div>
        
      </div>
    </div>
  );
}