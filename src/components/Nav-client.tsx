"use client";

import { Link } from "@/i18n/navigation";
import LanguageSwitcher from "./lngSwitcher";
import Image from "next/image";
import logo from "@public/logo2.png";
import { useState, useEffect } from "react";

type NavTranslations = {
  domains: string;
  testimony: string;
  contact: string;
  company: string;
  vip:string;
};

export default function NavClient({
  translations,
}: {
  translations: NavTranslations;
}) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 bg-transparent hover:bg-white ${
        scrolled ? "bg-white" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-28 flex items-center justify-between">
        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/domains"
            className="text-md uppercase text-black hover:text-stone-900 transition-colors no-underline"
          >
            {translations.domains}
          </Link>

          <Link
            href="/testimony"
            className="text-md uppercase text-black hover:text-stone-900 transition-colors no-underline"
          >
            {translations.testimony}
          </Link>
        </nav>

        <Link href="/">
          <Image
            src={logo}
            alt="logo easyness"
            width={100}
            height={100}
          />
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <Link
            href='/contact'
            className="text-md uppercase text-black hover:text-stone-900 transition-colors no-underline"
          >
            {translations.contact}
          </Link>

          <Link
            href='/company'
            className="text-md uppercase text-black hover:text-stone-900 transition-colors no-underline"
          >
            {translations.company}
          </Link>

          <Link
            href='/vip'
            className="text-md uppercase text-black hover:text-stone-900 transition-colors no-underline"
          >
            {translations.vip}
          </Link>

          <div className="flex items-center gap-1.5 pl-5 border-l border-stone-200">
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </header>
  );
}