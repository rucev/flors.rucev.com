import { useEffect, useState } from "react"
import locales, { type Locale } from "./locales"
import LandingBg from "./components/LandingBg"

const App = () => {
  const [lang, setLang] = useState<string>('en')
  const [locale, setLocale] = useState<Locale>(locales.en)
  const [view, setView] = useState<'landing' | 'skills' | 'projects' | 'exp' | 'contact'>('landing')

  useEffect(() => {
    lang === 'es' ? setLocale(locales.es) : lang === 'ca' ? setLocale(locales.ca) : setLocale(locales.en)
  }, [lang])


  return (
    <>
      <main className="font-main bg-base-300 h-screen max-h-screen w-screen overflow-hidden flex flex-col justify-between pt-7 md:pt-10 z-10">
        <div className="flex w-full flex-col px-2 md:px-20 gap-1">
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-accent font-bold uppercase">{locale.titleName}</h1>
          <h2 className="text-xl md:text-3xl text-base-content pl-0.5 font-bold">{locale.role}</h2>
          <nav className="text-lg md:text-2xl flex flex-row md:flex-col flex-wrap md:pt-20 font-bold gap-3">

            <a className="link link-hover hover:text-accent">{locale.skillsLink}</a>
            <a className="link link-hover hover:text-accent">{locale.expLink}</a>
            <a className="link link-hover hover:text-accent">{locale.projectsLink}</a>
            <a className="md:pt-5 link link-hover hover:text-accent">{locale.contactLink}</a>
          </nav>
        </div>
        <footer className="text-sm md:text-lg w-full h-10 bg-neutral flex flex-row items-center justify-between px-5">
          <button className="hover:cursor-pointer hover:text-accent flex flex-row gap-2">
            <i className="bi bi-translate"></i>
            {lang}
          </button>
          <div className="flex flex-row gap-5 items-center">
            <span>hi@rucev.com</span>
            <a className="hover:cursor-pointer hover:text-accent w-fit">
              <i className="bi bi-github"></i>
            </a>
            <a className="hover:cursor-pointer hover:text-accent">
              <i className="bi bi-linkedin"></i>
            </a>
          </div>
        </footer>
      </main>
      {
        view === 'landing' &&
        <LandingBg />
      }
    </>
  )
}

export default App
