import { createContext, useContext, useState, useEffect } from 'react'
import translations from '../../translations.json'

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => localStorage.getItem('language') || 'en')

  const dir = lang === 'ar' ? 'rtl' : 'ltr'

  useEffect(() => {
    document.documentElement.lang = lang
    document.documentElement.dir = dir
  }, [lang, dir])

  const toggle = () => {
    const newLang = lang === 'en' ? 'ar' : 'en'
    setLang(newLang)
    localStorage.setItem('language', newLang)
  }

  return (
    <LanguageContext.Provider value={{ lang, toggle, t: translations[lang], dir }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)
