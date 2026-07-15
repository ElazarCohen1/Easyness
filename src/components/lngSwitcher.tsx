// src/components/lngSwitcher.tsx
"use client";

import { usePathname, useRouter } from "@/i18n/navigation";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLng = pathname.split("/")[1];


  return (
    <div className="flex gap-1">
      {["fr", "en"].map((lng) => (
        <button
          key={lng}
          onClick={() => router.replace(pathname, { locale: lng })}
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