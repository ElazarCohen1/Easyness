import { initI18n } from "@/i18n";

export default async function Home({
  params,
}: {
  params: Promise<{ lng: string }>;
}) {
  const { lng } = await params;

  const i18n = await initI18n(lng);

  return (
    <div>
      <h1>{i18n.t("welcome")}</h1>
    </div>
  );
}