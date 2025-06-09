import { useEffect, useRef, useState } from "react"
import locales, { LOCALES, type Locale } from "./locales"
import LandingBg from "./components/LandingBg"
import Footer from "./components/Footer"
import NavMenu from "./components/NavMenu"
import type { View } from "./interfaces"
import Skills from "./components/Skills"
import Exp from "./components/Exp"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import SubmitToast from "./components/SubmitToast"
import ErrorToast from "./components/ErrorToat"
import TermsModal from "./components/TermsModal"
import useWindowSize from "./hooks/useWindowSize"
import SmallScreenMsg from "./components/SmallScreenMsg"

const App = () => {
  const [lang, setLang] = useState<'es' | 'ca' | 'en'>('en')
  const [locale, setLocale] = useState<Locale>(locales.en)
  const [view, setView] = useState<View>('landing')
  const [isMenuOpen, setIsMenuOpen] = useState<Boolean>(false)
  const [isMessageSubmited, setIsMessageSubmited] = useState<Boolean>(false)
  const [hasErrorHappen, setHasErrorHappen] = useState<Boolean>(false)

  const menuRef = useRef<HTMLUListElement>(null)
  const footerRef = useRef<HTMLDivElement>(null)
  const windowsType = useWindowSize()

  useEffect(() => {
    lang === 'es' ? setLocale(locales.es) : lang === 'ca' ? setLocale(locales.ca) : setLocale(locales.en)
  }, [lang])

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as Node;

      if (menuRef.current && !menuRef.current.contains(target) && footerRef.current && !footerRef.current.contains(target)) {
        setIsMenuOpen(false)
      }
    }
    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])


  return (
    <>
      {windowsType === 'not' ? <SmallScreenMsg />
        :
        <div>
          {
            view === 'landing' &&
            <LandingBg windowsType={windowsType} />
          }
          <main className="text-ellipsis text- z-50 font-main overflow-x-hidden max-w-screen min-h-screen h-fit w-full flex flex-col justify-between pt-7 md:pt-10">
            <div className="flex flex-col px-5 md:px-10 gap-1 max-w-11/12">
              <div className="flex flex-col w-full">
                <h1 className="text-3xl md:text-4xl lg:text-5xl text-accent font-bold uppercase">{locale.titleName}</h1>
                <h2 className="text-xl md:text-3xl text-base-content pl-0.5 font-bold">{locale.role}</h2>
              </div>
              <div className={`h-fti flex ${windowsType === 'sm/portrait' || windowsType === 'md/portrait' || windowsType === 'lg/portrait' ? 'flex-col' : 'flex-row gap-5'} w-full justify-between max-w-screen`}>
                <NavMenu locale={locale} view={view} setView={setView} windowsType={windowsType} />
                {view === 'skills' && <Skills lang={lang} />}
                {view === 'exp' && <Exp lang={lang} />}
                {view === 'projects' && <Projects lang={lang} />}
                {view === 'contact' && <Contact setErrorOnSubmit={setHasErrorHappen} setMessageSubmitted={setIsMessageSubmited} locale={locale} />}
              </div>
            </div>
            <div className={`${windowsType === 'sm/landscape' || windowsType === 'md/landscape' ? 'mt-14' : 'mt-12'}`} ref={footerRef}>
              <Footer lang={lang} setIsMenuOpen={setIsMenuOpen} isMenuOpen={isMenuOpen} windowsType={windowsType} />
            </div>
            <TermsModal lang={lang} />
          </main>
          {
            <ul ref={menuRef} className={`${isMenuOpen ? "dropdown-content fixed bottom-10 ml-5 menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm" : "hidden"}`}>
              {LOCALES.map(locale => {
                if (locale.locale !== lang) return <li key={locale.tag} onClick={() => { setLang(locale.locale); setIsMenuOpen(false) }} className="pl-5 py-1 w-full cursor-pointer rounded-xl hover:bg-base-200">{locale.tag}</li>
              })}
            </ul>
          }
          {
            isMessageSubmited && <SubmitToast onClose={() => setIsMessageSubmited(false)} />
          }
          {
            hasErrorHappen && <ErrorToast onClose={() => setHasErrorHappen(false)} />
          }
        </div>
      }
    </>
  )
}

export default App
