import { useEffect, useRef, useState } from "react"
import translations, { LOCALES, type Translation, type validLocales } from "./locales"
import LandingBg from "./components/LandingBg"
import Footer from "./components/Footer"
import NavMenu from "./components/NavMenu"
import type { View } from "./utils/types"
import Skills from "./components/Skills"
import Exp from "./components/Exp"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import SubmitToast from "./components/SubmitToast"
import ErrorToast from "./components/ErrorToast"
import TermsModal from "./components/TermsModal"
import useWindowSize from "./hooks/useWindowSize"
import SmallScreenMsg from "./components/SmallScreenMsg"

const App = () => {
  const [locale, setLocale] = useState<validLocales | null>(null)
  const [t, setT] = useState<Translation | null>(null)
  const [view, setView] = useState<View>('landing')
  const [isMenuOpen, setIsMenuOpen] = useState<Boolean>(false)
  const [isMessageSubmited, setIsMessageSubmited] = useState<Boolean>(false)
  const [hasErrorHappen, setHasErrorHappen] = useState<Boolean>(false)

  const menuRef = useRef<HTMLUListElement>(null)
  const footerRef = useRef<HTMLDivElement>(null)
  const windowsType = useWindowSize()

  useEffect(() => {
    if (!locale) {
      const defaultLang = navigator.language.split('', 2).join('')
      const defaultLocale = defaultLang !== 'es' && defaultLang !== 'ca' ? 'en' : defaultLang
      setLocale(defaultLocale)
    }

    if (locale) {
      document.documentElement.lang = locale
      locale === 'es' ? setT(translations.es) : locale === 'ca' ? setT(translations.ca) : setT(translations.en)
    }
  }, [locale])

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as Node
      if (menuRef.current && !menuRef.current.contains(target) && footerRef.current && !footerRef.current.contains(target)) {
        setIsMenuOpen(false)
      }
    }
    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  if (!t || !locale) return

  return (
    <>
      {windowsType === 'not' ? <SmallScreenMsg t={t.other} />
        :
        <div>
          {
            view === 'landing' &&
            <LandingBg windowsType={windowsType} />
          }
          <main className="z-50 font-main overflow-x-hidden max-w-screen min-h-screen h-fit w-full flex flex-col justify-between pt-7 md:pt-10">
            <div className="flex flex-col px-5 md:px-10 gap-1 max-w-screen">
              <div className="flex flex-col w-full">
                <h1 className="text-3xl md:text-4xl lg:text-5xl text-accent font-bold uppercase">{t.titleName}</h1>
                <h2 className="text-xl md:text-3xl text-base-content pl-0.5 font-bold">{t.role}</h2>
              </div>
              <div className={`h-fit flex ${windowsType === 'sm/portrait' || windowsType === 'sm/landscape' || windowsType === 'md/portrait' || windowsType === 'md/landscape' || windowsType === 'lg/portrait' ? 'flex-col' : 'flex-row gap-5'} w-full justify-between max-w-screen`}>
                <NavMenu t={t.links} view={view} setView={setView} windowsType={windowsType} />
                {view === 'skills' && <Skills t={t.skills} />}
                {view === 'exp' && <Exp t={t.exp} />}
                {view === 'projects' && <Projects t={t.projects} />}
                {view === 'contact' && <Contact setErrorOnSubmit={setHasErrorHappen} setMessageSubmitted={setIsMessageSubmited} t={t.contact} />}
              </div>
            </div>
            <div className={`${windowsType === 'sm/landscape' || windowsType === 'md/landscape' ? 'mt-14' : 'mt-18'}`} ref={footerRef}>
              <Footer t={t.footer} locale={locale ? locale : 'en'} setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} windowsType={windowsType} />
            </div>
            <TermsModal t={t.privacy} />
          </main>
          {
            <ul ref={menuRef} className={`${isMenuOpen ? "dropdown-content fixed bottom-10 ml-5 menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm" : "hidden"}`}>
              {LOCALES.map(_locale => {
                if (_locale.locale !== locale) return <li key={_locale.tag} onClick={() => { setLocale(_locale.locale); setIsMenuOpen(false) }} className="pl-5 py-1 w-full cursor-pointer rounded-xl hover:bg-base-200">{_locale.tag}</li>
              })}
            </ul>
          }
          {
            isMessageSubmited && <SubmitToast onClose={() => setIsMessageSubmited(false)} t={t.other} />
          }
          {
            hasErrorHappen && <ErrorToast onClose={() => setHasErrorHappen(false)} t={t.other} />
          }
        </div>
      }
    </>
  )
}

export default App
