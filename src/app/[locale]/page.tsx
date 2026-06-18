// src/app/[lng]/page.tsx
import { useTranslations } from "next-intl";
export default async function Home({
  params,
}: {
  params: Promise<{ lng: string }>;
}) {
  const t = useTranslations('home');
  return (
    <div>
      <h1>(t('welcome'))</h1>
    </div>
  );

}