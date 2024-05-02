import "server-only";
import type { Locale } from "@/i18n.config";

const dictionaries = {
  en: () => import("@/dictionaries/en.json").then((module) => module.default),
  vi: () => import("@/dictionaries/vi.json").then((module) => module.default),
};

// export const getDictionary = async (locale: Locale) => dictionaries[locale]();

export const getDictionary = async (locale: Locale) => {
  console.log({ locale });
  return locale === "en" ? dictionaries.en() : dictionaries.vi();
};
