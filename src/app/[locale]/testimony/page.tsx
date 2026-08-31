import { getTranslations } from "next-intl/server";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Testimony" });
  return { title: t("Title") };
}

type Review = { Name: string; Location: string; Text: string };

export default async function Temoignages({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Testimony" });
  const reviews = t.raw("Reviews") as Review[];

  return (
    <div className="py-20 px-4 bg-slate-50 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-black text-slate-900 mb-4">{t("Title")}</h1>
        <p className="text-slate-500 mb-12 text-lg">{t("Subtitle")}</p>

        <div className="grid md:grid-cols-2 gap-8">
          {reviews.map((rev, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <div className="flex items-center mb-4 text-emerald-500">★★★★★</div>
              <p className="text-slate-600 italic mb-6 leading-relaxed">&quot;{rev.Text}&quot;</p>
              <div>
                <p className="font-bold text-slate-900">{rev.Name}</p>
                <p className="text-sm text-slate-400">{rev.Location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}