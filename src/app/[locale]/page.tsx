import { getTranslations,getLocale } from "next-intl/server";
import Image from "next/image"
import homeImg from "@public/bg_home.png"
import BubbleCarousel from "@/components/Bulles";
import ImageMeasure from "@/components/measure";
import { chairs } from "@/data/chairs";
import Link from "next/link";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Home' });

  return (
    <>
      <section className="fixed top-28 left-0 z-0 h-[calc(100vh-7rem)] w-full">     
        <div>
          {chairs.map((chair) => (
          <Link
            key={chair.id}
            href={chair.href}
            className="absolute bg-white z-10"
            style={{
              left: `${chair.x}%`,
              top: `${chair.y}%`,
              width: `${chair.width}%`,
              height: `${chair.height}%`,
            }}
          />
          ))}
        </div>
        <Image
          src={homeImg}
          alt="bg-home-section"
          fill
          draggable={false}
          className="object-cover "
          
        />
        
        
        {/* <ImageMeasure /> */}
      </section>
    


      <section className="relative h-screen w-full mb-10 p-10 bg-linear-to-b from-stone-950 via-stone-300 to-stone-100">
        <div>
          {/* <BubbleCarousel/> */}
        </div>
      </section>
    

      
    </>
  );
}