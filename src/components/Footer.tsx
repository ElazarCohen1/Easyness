import { Link } from "@/i18n/navigation";
import { getTranslations } from "next-intl/server";

export default async function Footer() {
  const t = await getTranslations("Footer");

  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
          <h4 className="text-white font-semibold text-lg mb-4">{t("CompanyName")}</h4>
          <p className="text-sm leading-relaxed">{t("Tagline")}</p>
        </div>

        <div>
          <h4 className="text-white font-semibold text-lg mb-4">{t("ContactTitle")}</h4>
          <ul className="space-y-2 text-sm">
            <li>
              {t("EmailLabel")}:{" "}
              <a href={`mailto:${t("Email")}`} className="text-emerald-400 hover:underline">
                {t("Email")}
              </a>
            </li>
            <li>
              {t("PhoneLabel")}:{" "}
              <a href={`tel:${t("Phone").replace(/\s/g, "")}`} className="text-emerald-400 hover:underline">
                {t("Phone")}
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col items-center md:items-end justify-center">
          <p className="text-sm mb-4">{t("Copyright")}</p>
          <Link href="/legal" className="text-sm text-slate-500 hover:text-emerald-400 transition underline">
            {t("LegalLink")}
          </Link>
        </div>
      </div>
    </footer>
  );
}