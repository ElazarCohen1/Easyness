import { getTranslations,getLocale } from "next-intl/server";
import Image from "next/image"
import homeImg from "@public/bg_home.png"




export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Home' });

  return (
    <div className="h-[70%]">
      <div className="-z-10 absolute w-screen top-0 bg-fixed h-full " >   
        <Image src={homeImg} alt="bg-home-section" className="h-full"/> 
      </div>
      <div>
          {Array.from({ length: 100 }).map((_, index) => (
          <p key={index}>
           fi
          </p>
        ))}
      </div>
    </div>
  );
}