import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import { LocalStorage } from "helpers";
import { LANGUAGE_KEY } from "constants/language";

const lang = LocalStorage.get(LANGUAGE_KEY);

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    fallbackLng: lang ?? "en",
    debug: true,
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
