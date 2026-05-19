import paneraLogo from '../../image/logo/Panera.png'
import { useLanguage } from '../context/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-primary-dark text-white flex justify-between items-center p-5 relative">
      <div className="text-left max-w-[50%]">
        <p className="my-[5px] leading-6"><b>{t.footer.address}</b></p>
        <p className="my-[5px] leading-6"><i>{t.footer.location}</i></p>
        <p className="my-[5px] leading-6"><b>{t.footer.tel}</b></p>
        <p className="my-[5px] leading-6"><i>{t.footer.phone1}</i></p>
        <p className="my-[5px] leading-6"><i>{t.footer.phone2}</i></p>
      </div>
      <div className="absolute bottom-[10px] right-[10px]">
        <img src={paneraLogo} alt="Panera Logo" className="h-[160px] w-auto" />
      </div>
    </footer>
  )
}
