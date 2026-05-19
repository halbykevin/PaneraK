import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import Header from '../components/Header'
import Footer from '../components/Footer'

const categories = [
  { key: 'lent', path: '/lent' },
  { key: 'burgers', path: '/burgers' },
  { key: 'sandwiches', path: '/sandwiches' },
  { key: 'pizza', path: '/pizza' },
  { key: 'platters', path: '/platters' },
  { key: 'biAajine', path: '/blaajine' },
  { key: 'sidesandbeverages', path: '/sidesandbeverages' },
  { key: 'tobacco', path: '/tobacco' },
]

export default function Home() {
  const { t } = useLanguage()

  return (
    <div className="bg-primary min-h-screen text-white font-sans">
      <Header />
      <div className="grid grid-cols-2 gap-[10px] p-[10px] pb-[355px]">
        {categories.map(({ key, path }) => (
          <Link
            key={key}
            to={path}
            className="bg-primary rounded-[20px] shadow-[0_4px_8px_rgba(0,0,0,0.2)] text-center text-white no-underline block"
          >
            <h2 className="m-0 py-[15px] bg-primary rounded-b-[20px]">
              {t.nav[key]}
            </h2>
          </Link>
        ))}
      </div>
      <div className="flex justify-center mb-5">
        <a
          href="https://wa.me/96170551751"
          className="py-[10px] px-[30px] bg-primary-dark text-white rounded-[5px] text-2xl font-bold no-underline transition-colors duration-300 hover:bg-[#8400305a]"
        >
          {t.buttons.orderNow}
        </a>
      </div>
      <Footer />
    </div>
  )
}
