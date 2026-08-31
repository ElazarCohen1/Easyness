import HomeExperience from "@/components/HomeExperience";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  return <HomeExperience locale={locale} />;
}