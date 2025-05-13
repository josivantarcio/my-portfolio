import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en from './i18n/locales/en/translation.json'
import pt from './i18n/locales/pt/translation.json'

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      pt: { translation: pt }
    },
    lng: 'pt', // ou 'en' se preferir inglês como padrão
    fallbackLng: 'pt',
    interpolation: {
      escapeValue: false
    }
  })

export default i18n 