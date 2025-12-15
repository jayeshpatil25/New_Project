import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en/translation.json';
import zh from './locales/zh/translation.json';
import nl from './locales/nl/translation.json';

const resources = {
  en: { translation: en },
  zh: { translation: zh },
  nl: { translation: nl },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    // Use saved language from localStorage if present, otherwise default to English
    lng: localStorage.getItem('i18nextLng') || 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
