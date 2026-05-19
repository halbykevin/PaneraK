import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import Header from '../components/Header'
import Footer from '../components/Footer'
import MenuItem from '../components/MenuItem'

export default function MenuPage({ pageKey, layout = 'compact' }) {
  const { t } = useLanguage()
  const menuData = t[pageKey]

  if (!menuData) return null

  return (
    <div className="bg-primary min-h-screen text-white font-sans">
      <Header />
      <main className="p-5 relative">
        <Link
          to="/"
          className="absolute top-0 left-0 text-base no-underline text-white p-5 z-10"
        >
          {t.buttons.back}
        </Link>
        <h1 className="text-[2.5em] text-center mt-0 pt-[50px] mb-[0.7em] mx-auto">
          {menuData.title}
        </h1>
        {menuData.items.map((item, i) => (
          <MenuItem key={i} item={item} layout={layout} />
        ))}
      </main>
      <Footer />
    </div>
  )
}
