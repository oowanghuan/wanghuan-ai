import { createI18n } from 'vue-i18n'
import zhCN from '../locales/zh-CN.js'
import en from '../locales/en.js'

// Get saved language preference or default to Chinese
const getDefaultLocale = () => {
  const saved = localStorage.getItem('locale')
  if (saved && ['zh-CN', 'en'].includes(saved)) {
    return saved
  }
  // Try to detect browser language
  const browserLang = navigator.language || navigator.userLanguage
  if (browserLang.startsWith('zh')) {
    return 'zh-CN'
  }
  return 'en'
}

const i18n = createI18n({
  legacy: false, // Use Composition API mode
  locale: getDefaultLocale(),
  fallbackLocale: 'en',
  messages: {
    'zh-CN': zhCN,
    'en': en
  }
})

// Helper function to change language
export const setLocale = (locale) => {
  i18n.global.locale.value = locale
  localStorage.setItem('locale', locale)
  document.documentElement.lang = locale === 'zh-CN' ? 'zh' : 'en'
}

export default i18n
