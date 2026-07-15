// src/components/Navbar.tsx
import Link from "next/link";
import LanguageSwitcher from "./lngSwitcher";
import { getTranslations, getLocale } from "next-intl/server";
import Image from "next/image";
import logo from '@public/logo.png'

export default async function Navbar() {

  const  locale  = await getLocale();

  const t = await getTranslations({ locale, namespace: 'NavBar' });

  return (
    <header className="sticky top-0 z-50  border-b border-stone-200 hover:bg-stone-50">
      <div className="max-w-7xl mx-auto px-6 h-28 flex items-center justify-between">
        <nav className="hidden md:flex items-center gap-8">
          <Link href={`/${locale}/presentation`} className="text-sm text-stone-500 hover:text-stone-900 transition-colors no-underline">
            {t("Company")}
          </Link>
          <Link href={`/${locale}/temoignages`} className="text-sm text-stone-500 hover:text-stone-900 transition-colors no-underline">
            {t("Testimonials")}
          </Link>
        </nav>

        {/* Logo */}
        <Link href={`/${locale}`} >
          <Image src={logo} alt="logo easyness" width={100} height={100}/>
        </Link>
        {/* Droite */}
        <div className="hidden md:flex items-center gap-6">
          <Link href={`/${locale}/contact`} className="text-sm text-stone-500 hover:text-stone-900 transition-colors no-underline">
            {t("Contact")}
          </Link>

          <Link href={`/${locale}/contact`} className="text-[13px] font-medium bg-stone-900 text-stone-50 px-5 py-2.5 rounded-md hover:bg-stone-700 transition-colors no-underline">
            {t("Quote")}
          </Link>

          <div className="flex items-center gap-1.5 pl-5 border-l border-stone-200">
            <LanguageSwitcher />
          </div>
        </div>

      </div>
    </header>
  );
}