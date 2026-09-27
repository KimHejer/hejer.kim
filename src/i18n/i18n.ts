import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import en from "@/i18n/locales/en.json";
import no from "@/i18n/locales/no.json";

const savedLanguage = localStorage.getItem("language");

const resources = {
  en: {
    translation: en,
  },
  no: {
    translation: no,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: savedLanguage ?? "en",
  fallbackLng: "en",

  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
