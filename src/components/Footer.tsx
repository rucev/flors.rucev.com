import type { FooterTranslations, validLocales } from "../locales"
import type { WindowsType } from "../utils/types"

const Footer = ({ locale, setIsMenuOpen, isMenuOpen, windowsType, t }: { locale: validLocales, isMenuOpen: Boolean, setIsMenuOpen: Function, windowsType: WindowsType, t: FooterTranslations }) => {

  return <div className="fixed bottom-0 w-screen max-w-screen flex flex-col" >
    <footer className={`text-sm md:text-lg w-full h-10 bg-neutral flex ${windowsType === 'sm/portrait' ? 'flex-col' : 'flex-row'} items-center justify-between px-5`}>
      <button aria-label={t.lang} onClick={() => setIsMenuOpen(!isMenuOpen)} className="hover:cursor-pointer hover:text-accent flex flex-row gap-2">
        <i className="bi bi-translate"></i>
        {locale === 'es' ? 'Español' : locale === 'ca' ? 'Català' : 'English'}
      </button>
      <div className="flex flex-row gap-5 items-center">
        <span>hi@rucev.com</span>
        <a href="https://github.com/rucev" target="_blank" rel="noopener" aria-label={t.github} className="hover:cursor-pointer hover:text-accent hover:animate-wiggle px-1 py-0.5 w-fit">
          <i className="bi bi-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/flors-rueda" target="_blank" rel="noopener" aria-label={t.linkedin} className="hover:cursor-pointer hover:text-accent hover:animate-wiggle px-1 py-0.5">
          <i className="bi bi-linkedin"></i>
        </a>
      </div>
    </footer>
  </div>

}

export default Footer