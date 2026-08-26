import { getTranslations,getLocale } from "next-intl/server";
import Image from "next/image"
import homeImg from "@public/bg_home.png"
import BubbleCarousel from "@/components/Bulles";



export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'Home' });

  return (
    <>
    <section className="relative h-screen w-full">
        <div className=" absolute inset-0 bg-fixed w-full top-0 h-full" >   
          <Image src={homeImg} alt="bg-home-section" className="h-full -z-10 object-cover"/> 
        </div>
    </section>
      {/* <div>
          {Array.from({ length: 100 }).map((_, index) => (
          <p key={index}>
           fi
          </p>
        ))}
      </div> */}
    <section className="relative h-screen  w-full mb-10 p-10 bg-linear-to-b from-stone-950 via-stone-300 to-stone-100">
      <div>
        <BubbleCarousel/>
      </div>
    </section>
    

      
    </>
  );
}