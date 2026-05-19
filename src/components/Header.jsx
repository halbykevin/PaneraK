import paneraLogo from '../../image/logo/Panera.png'
import { useLanguage } from '../context/LanguageContext'

export default function Header() {
  const { lang, toggle } = useLanguage()

  return (
    <header className="flex justify-between items-center p-[10px]">
      <div>
        <img src={paneraLogo} alt="Panera Logo" className="w-[100px] h-auto block" />
      </div>
      <div className="flex items-center justify-center text-[17px]">
        <span className="text-white font-sans">EN</span>
        <label className="switch">
          <input
            type="checkbox"
            checked={lang === 'ar'}
            onChange={toggle}
          />
          <span className="slider round"></span>
        </label>
        <span className="text-white font-sans">AR</span>
      </div>
    </header>
  )
}
