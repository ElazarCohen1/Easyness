import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";
import { Mail, Phone, Clock } from "lucide-react";
import packageJson from "@/../package.json";

export default async function Footer() {
  const t = await getTranslations("Footer");
  const nav = await getTranslations("NavBar");

  const year = new Date().getFullYear();

  const links = [
    { href: "/domains", label: nav("Domains") },
    { href: "/testimony", label: nav("Testimony") },
    { href: "/company", label: nav("Company") },
    { href: "/contact", label: nav("Contact") },
  ];
  const version = packageJson.version;

  return (
    <footer className="relative w-full overflow-hidden bg-stone-950">
      {/* Filet doré supérieur */}
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#a98c58]/60 to-transparent" />

      {/* Halo */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-15 blur-3xl"
        style={{
          background: "radial-gradient(circle, #c9b48a 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-20">
        <div className="grid gap-12 md:grid-cols-12">
          {/* Marque */}
          <div className="md:col-span-5">
            <Link href="/" className="inline-block">
              <span className="bg-linear-to-b from-[#f3e6c8] via-[#d9c290] to-[#a98c58] bg-clip-text text-3xl font-semibold tracking-tight text-transparent">
                {t("CompanyName")}
              </span>
            </Link>
            <div className="mt-4 h-px w-12 bg-linear-to-r from-[#a98c58] to-transparent" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-stone-400">
              {t("Tagline")}
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-[#a98c58]">
              {t("NavigationTitle")}
            </h4>
            <ul className="mt-6 space-y-3">
              {links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-stone-400 transition-colors duration-300 hover:text-[#f3e6c8]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-[#a98c58]">
              {t("ContactTitle")}
            </h4>
            <ul className="mt-6 space-y-4">
              <li className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#a98c58]/30 bg-stone-900">
                  <Mail size={15} className="text-[#c9b48a]" />
                </span>
                <a
                  href={`mailto:${t("Email")}`}
                  className="text-sm text-stone-400 transition-colors duration-300 hover:text-[#f3e6c8]"
                >
                  {t("Email")}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#a98c58]/30 bg-stone-900">
                  <Phone size={15} className="text-[#c9b48a]" />
                </span>
                <a
                  href={`tel:${t("Phone").replace(/\(0\)|[\s()]/g, "")}`}
                  className="text-sm text-stone-400 transition-colors duration-300 hover:text-[#f3e6c8]"
                >
                  {t("Phone")}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#a98c58]/30 bg-stone-900">
                  <Clock size={15} className="text-[#c9b48a]" />
                </span>
                <span className="text-sm text-stone-400">
                  {t("ResponseTime")}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Barre du bas */}
        <div className="mt-14 flex flex-col items-center gap-4 border-t border-[#a98c58]/15 pt-8 text-center sm:flex-row sm:justify-between sm:text-left">
          <div className="order-2 flex items-center gap-3 sm:order-1">
            <p className="text-xs text-stone-500">
              {t("Copyright", { year })}
            </p>
            <span className="h-3 w-px bg-[#a98c58]/20" />
            <p className="font-mono text-[11px] tracking-wide text-stone-600">
              v{version}
            </p>
          </div>

          <div className="order-1 flex items-center gap-4 sm:order-2">
            <span className="hidden h-2 w-2 rotate-45 border border-[#a98c58]/60 bg-[#a98c58]/15 sm:block" />

            <Link
              href="/legal"
              className="text-xs uppercase tracking-widest text-stone-500 transition-colors duration-300 hover:text-[#c9b48a]"
            >
              {t("LegalLink")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}