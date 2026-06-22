// src/components/Navbar.tsx
import Link from "next/link";
import LanguageSwitcher from "./lngSwitcher";
import { getTranslations } from "next-intl/server";

export default async function Navbar({ lng }: { lng: string }) {
  const t = await getTranslations("NavBar");

  return (
    <header className="sticky top-0 z-50 bg-stone-50 border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between">

        {/* Logo */}
        <Link href={`/${lng}`} className="flex items-center gap-1.5 text-xl font-medium tracking-tight text-stone-900 no-underline">
          Secur
          <span className="bg-stone-900 text-stone-50 px-2 py-0.5 rounded text-[11px] font-medium tracking-widest uppercase">
            Home
          </span>
        </Link>

        {/* Liens centre */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href={`/${lng}/presentation`} className="text-sm text-stone-500 hover:text-stone-900 transition-colors no-underline">
            {t("Company")}
          </Link>
          <Link href={`/${lng}/temoignages`} className="text-sm text-stone-500 hover:text-stone-900 transition-colors no-underline">
            {t("Testimonials")}
          </Link>
        </nav>

        {/* Droite */}
        <div className="hidden md:flex items-center gap-6">
          <Link href={`/${lng}/contact`} className="text-sm text-stone-500 hover:text-stone-900 transition-colors no-underline">
            {t("Contact")}
          </Link>

          <Link href={`/${lng}/contact`} className="text-[13px] font-medium bg-stone-900 text-stone-50 px-5 py-2.5 rounded-md hover:bg-stone-700 transition-colors no-underline">
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