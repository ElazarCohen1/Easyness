import { createInstance } from "i18next";
import resourcesToBackend from "i18next-resources-to-backend";
import { initReactI18next } from "react-i18next";

export async function initI18n(lng: string) {
  const i18nInstance = createInstance();

  await i18nInstance
    .use(initReactI18next)
    .use(
      resourcesToBackend(
        (language, namespace) =>
          import(
            `../locales/${language}/${namespace}.json`
          )
      )
    )
    .init({
      lng,
      fallbackLng: "en",
      supportedLngs: ["fr", "en"],
      defaultNS: "common",
    });

  return i18nInstance;
}