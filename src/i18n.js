import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './locales/en.json'
import ar from './locales/ar.json'

const setDocumentDirection = (lng) => {
  const dir = lng === 'ar' ? 'rtl' : 'ltr'
  document.documentElement.dir = dir
  document.documentElement.lang = lng
}

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    ar: { translation: ar },
  },
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    // Safe with React: JSX auto-escapes rendered strings. Keep translations
    // static (no user/HTML input). Do not use dangerouslySetInnerHTML with t().
    escapeValue: false,
  },
})

setDocumentDirection(i18n.language)
i18n.on('languageChanged', setDocumentDirection)

export default i18n
