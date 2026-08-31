import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Presentation" });
  return { title: t("Title") };
}

export default async function Company({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Presentation" });

  return (
    <div className="py-20 px-4 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-black tracking-tight text-slate-900 mb-8">{t("Title")}</h1>

        <div className="prose prose-lg text-slate-600 space-y-6 leading-relaxed">
          <p className="text-lg">{t("Paragraph1")}</p>
          <p>{t("Paragraph2")}</p>
          <p>{t("Paragraph3")}</p>
        </div>

        <div className="mt-12">
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 bg-emerald-600 text-white font-bold rounded-xl hover:bg-emerald-700 transition shadow-sm"
          >
            {t("CtaButton")}
          </Link>
        </div>
      </div>
    </div>
  );
}