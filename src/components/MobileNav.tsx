"use client";

import { Link } from "@/i18n/navigation";
import LanguageSwitcher from "./lngSwitcher";
import Image from "next/image";
import logo from "@public/logo2.png";
import { useState } from "react";
import { Menu, X } from "lucide-react";

type NavTranslations = {
  domains: string;
  testimony: string;
  contact: string;
  company: string;
  vip: string;
};

export default function MobileNav({
  translations,
}: {
  translations: NavTranslations;
}) {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <>
      {/* NAV MOBILE */}
      <header className="md:hidden fixed top-0 left-0 w-full z-50">
        <div
          className={`h-20 px-5 flex items-center justify-between transition-colors ${
            open ? "bg-white" : "bg-transparent"
          }`}
        >
          {/* Logo */}
          <Link href="/" onClick={closeMenu}>
            <Image
              src={logo}
              alt="logo easyness"
              width={75}
              height={75}
              priority
            />
          </Link>

          {/* Burger */}
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
            className="relative z-50 flex items-center justify-center w-10 h-10"
          >
            {open ? (
              <X size={28} strokeWidth={1.5} />
            ) : (
              <Menu size={28} strokeWidth={1.5} />
            )}
          </button>
        </div>
      </header>

      {/* MENU */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-white transition-all duration-300 ${
          open
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <div className="h-full flex flex-col items-center justify-center gap-8">
          <Link
            href="/domains"
            onClick={closeMenu}
            className="text-2xl uppercase text-black"
          >
            {translations.domains}
          </Link>

          <Link
            href="/testimony"
            onClick={closeMenu}
            className="text-2xl uppercase text-black"
          >
            {translations.testimony}
          </Link>

          <Link
            href="/contact"
            onClick={closeMenu}
            className="text-2xl uppercase text-black"
          >
            {translations.contact}
          </Link>

          <Link
            href="/company"
            onClick={closeMenu}
            className="text-2xl uppercase text-black"
          >
            {translations.company}
          </Link>

          <Link
            href="/vip"
            onClick={closeMenu}
            className="text-2xl uppercase text-black"
          >
            {translations.vip}
          </Link>

          <div className="mt-4">
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </>
  );
}