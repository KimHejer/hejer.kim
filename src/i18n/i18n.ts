import i18n from "i18next";
import { initReactI18next } from "react-i18next"

import en from "@/i18n/locales/en.json"
import no from "@/i18n/locales/en.json"

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: { translation: en },
            no: { translation: no },
        },

        lng: "en",
        fallbackLng: "en",
    });

export default i18n;