// src/components/Navbar.tsx
import Link from "next/link";
import LanguageSwitcher from "./lngSwitcher";
import { getTranslations, getLocale } from "next-intl/server";
import Image from "next/image";
import logo from '@public/logo.png'
import NavClient from "./Nav-client";

export default async function Navbar() {
  const  locale  = await getLocale();

  const t = await getTranslations({ locale, namespace: 'NavBar' });


  return (
    <div>
      <NavClient 
      translations={{
        domains: t("Domains"),
        methods: t("Methods"),
        testimony: t("Testimony"),
        contact: t("Contact"),
        company: t("Company"),
      }}/>
    </div>
  );
}