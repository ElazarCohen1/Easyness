// src/components/lngSwitcher.tsx
"use client";

import { useRouter, usePathname } from "next/navigation";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLng = pathname.split("/")[1];

  const changeLanguage = (lng: string) => {
    const segments = pathname.split("/");
    segments[1] = lng;
    router.push(segments.join("/"));
  };

  return (
    <div className="flex gap-1">
      {["fr", "en"].map((lng) => (
        <button
          key={lng}
          onClick={() => changeLanguage(lng)}
          className={`text-xs font-medium uppercase tracking-widest px-2 py-1 rounded border-0 cursor-pointer transition-colors
            ${currentLng === lng
              ? "bg-stone-200 text-stone-900"
              : "bg-transparent text-stone-400 hover:text-stone-900"
            }`}
        >
          {lng}
        </button>
      ))}
    </div>
  );
}