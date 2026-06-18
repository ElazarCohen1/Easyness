"use client";

import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();

  const changeLanguage = (lng: string) => {
    const segments = pathname.split("/");
    segments[1] = lng;

    router.push(segments.join("/"));
  };

  return (
    <select
      onChange={(e) =>
        changeLanguage(e.target.value)
      }
    >
      <option value="fr">Français</option>
      <option value="en">English</option>
    </select>
  );
}