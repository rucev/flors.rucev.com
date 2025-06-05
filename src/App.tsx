import { useEffect, useState } from "react"
import locales, { type Locale } from "./locales"
import LandingBg from "./components/LandingBg"
import Footer from "./components/Footer"
import NavMenu from "./components/NavMenu"
import type { View } from "./interfaces"
import Skills from "./components/Skills"

const App = () => {
  const [lang, setLang] = useState<string>('en')
  const [locale, setLocale] = useState<Locale>(locales.en)
  const [view, setView] = useState<View>('landing')

  useEffect(() => {
    lang === 'es' ? setLocale(locales.es) : lang === 'ca' ? setLocale(locales.ca) : setLocale(locales.en)
  }, [lang])


  return (
    <>
      <main className="font-main bg-base-300 h-screen max-h-screen w-screen overflow-hidden flex flex-col justify-between pt-7 md:pt-10 z-10">
        <div className="flex flex-col px-5 md:px-20 gap-1">
          <div className="flex flex-col w-full">
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-accent font-bold uppercase">{locale.titleName}</h1>
            <h2 className="text-xl md:text-3xl text-base-content pl-0.5 font-bold">{locale.role}</h2>
          </div>
          <div className="flex flex-col md:flex-row w-full">
            <NavMenu locale={locale} view={view} setView={setView} />
            {view === 'skills' && <Skills />}
            {view === 'exp' && <h1>Exp</h1>}
            {view === 'projects' && <h1>projects</h1>}
            {view === 'contact' && <h1>contact</h1>}
          </div>
        </div>
        <Footer lang={lang} />
      </main>
      {
        view === 'landing' &&
        <LandingBg />
      }
    </>
  )
}

export default App
