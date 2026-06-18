// src/app/[lng]/page.tsx
import { getTranslations } from "next-intl/server";

export default async function Home({
  params,
}: {
  params: Promise<{ lng: string }>;
}) {
  const { lng } = await params;
  const t = await getTranslations('Home');

  return (
    <div>
      <h1>{t("Welcome")}</h1>
    </div>
  );
}