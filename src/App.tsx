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
import Workshops from "./components/Workshops"

const App = () => {
  const [locale, setLocale] = useState<validLocales | null>(null)
  const [t, setT] = useState<Translation | null>(null)
  const [view, setView] = useState<View>('landing')
  const [isMenuOpen, setIsMenuOpen] = useState<Boolean>(false)
  const [isMessageSubmited, setIsMessageSubmited] = useState<Boolean>(false)
  const [hasErrorHappen, setHasErrorHappen] = useState<Boolean>(false)

  const menuRef = useRef<HTMLUListElement>(null)
  const footerRef = useRef<HTMLDivElement>(null)
  const windowType = useWindowSize()
  const [isRowDisplay, setIsRowDisplay] = useState<Boolean>(windowType === 'lg/landscape' || windowType === "sm/landscape")

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

  useEffect(() => {
    setIsRowDisplay(windowType === "lg/landscape" || windowType === "sm/landscape")
  }, [windowType])


  if (!t || !locale) return

  return (
    <>
      {windowType === 'not' ? <SmallScreenMsg t={t.other} />
        :
        <div className="z-0">
          {
            view === 'landing' &&
            <LandingBg windowsType={windowType} />
          }
          <main className={`z-50 font-main overflow-x-hidden max-w-screen min-h-screen h-fit w-full flex flex-col justify-between pt-7 md:pt-10 ${view === 'exp' || view === 'workshops' || view === 'skills' ? 'gap-28' : 'gap-2'}`}>
            <div className="flex flex-col px-5 md:px-10 gap-1 max-w-screen h-fit">
              <div className="flex flex-col w-full">
                <h1 className="text-3xl md:text-4xl lg:text-5xl text-accent font-bold uppercase">{t.titleName}</h1>
                <h2 className="text-xl md:text-3xl text-base-content pl-0.5 font-bold opacity-70">{t.role}</h2>
              </div>
              <div className={`h-fit flex ${windowType === 'sm/portrait' || windowType === 'sm/landscape' || windowType === 'md/portrait' || windowType === 'md/landscape' || windowType === 'lg/portrait' ? 'flex-col' : 'flex-row gap-5'} w-full justify-between max-w-screen`}>
                <NavMenu t={t.links} view={view} setView={setView} isRowDisplay={isRowDisplay} />
                {view === 'skills' && <Skills t={t.skills} />}
                {view === 'exp' && <Exp t={t.exp} />}
                {view === 'projects' && <Projects t={t.projects} />}
                {view === 'contact' && <Contact setErrorOnSubmit={setHasErrorHappen} setMessageSubmitted={setIsMessageSubmited} t={t.contact} />}
                {view === 'workshops' && <Workshops t={t.workshops} />}
              </div>
            </div>
            <div ref={footerRef}>
              {
                <ul ref={menuRef} className={`${isMenuOpen ? `dropdown-content fixed ${windowType === 'sm/portrait' ? 'bottom-16 ml-10' : 'bottom-10 ml-5'} menu bg-base-100 rounded-box z-20 w-52 p-2 shadow-sm` : "hidden"}`}>
                  {LOCALES.map(_locale => {
                    if (_locale.locale !== locale) return <li key={_locale.tag} onClick={() => { setLocale(_locale.locale); setIsMenuOpen(false) }} className="pl-5 py-1 w-full cursor-pointer rounded-xl hover:bg-base-200">{_locale.tag}</li>
                  })}
                </ul>
              }
              <Footer t={t.footer} locale={locale ? locale : 'en'} setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} windowsType={windowType} />
            </div>
            <TermsModal t={t.privacy} />
          </main>
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
