// src/components/Navbar.tsx
import { getTranslations, getLocale } from "next-intl/server";

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