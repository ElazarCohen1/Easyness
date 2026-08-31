import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Legal" });
  return { title: t("Title") };
}

export default async function Legal({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Legal" });

  return (
    <div className="py-20 px-4 bg-slate-50 min-h-screen">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-black text-slate-900 mb-6">{t("Title")}</h1>
        <div className="text-slate-600 space-y-6 leading-relaxed">
          <p>{t("Intro")}</p>

          <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">{t("Section1.Title")}</h2>
          <p>{t("Section1.Text")}</p>

          <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">{t("Section2.Title")}</h2>
          <p>{t("Section2.Text")}</p>

          <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">{t("Section3.Title")}</h2>
          <p>{t("Section3.Text")}</p>
        </div>
      </div>
    </div>
  );
}