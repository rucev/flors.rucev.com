import type { View } from "../interfaces";
import type { Locale } from "../locales";

const NavMenu = ({ locale, view, setView }: { locale: Locale, view: View, setView: Function }) => {
  const handleClick = (newView: View) => {
    if (newView !== view) setView(newView)
  }

  return <nav className="text-lg w-full md:w-1/3 md:text-2xl flex flex-row md:flex-col flex-wrap md:pt-20 font-bold gap-3">
    <a onClick={() => handleClick('skills')} className={`relative inline-block group w-fit ${view === 'skills' ? 'text-accent' : 'cursor-pointer hover:text-accent'}`}>
      {locale.skillsLink}
      {view !== 'skills' && <span className="absolute rounded-2xl left-0 bottom-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full animate-pulse"></span>}
    </a>
    <a onClick={() => handleClick('exp')} className={`relative inline-block group w-fit ${view === 'exp' ? 'text-accent' : 'cursor-pointer hover:text-accent'}`}>
      {locale.expLink}
      {view !== 'exp' && <span className="absolute rounded-2xl left-0 bottom-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full animate-pulse"></span>}
    </a>
    <a onClick={() => handleClick('projects')} className={`relative inline-block group w-fit ${view === 'projects' ? 'text-accent' : 'cursor-pointer hover:text-accent'}`}>
      {locale.projectsLink}
      {view !== 'projects' && <span className="absolute rounded-2xl left-0 bottom-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full animate-pulse"></span>}
    </a>
    <a onClick={() => handleClick('contact')} className={`relative inline-block group w-fit ${view === 'contact' ? 'text-accent' : 'cursor-pointer hover:text-accent'} md:pt-7`}>
      {locale.contactLink}
      {view !== 'contact' && <span className="absolute rounded-2xl left-0 bottom-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full animate-pulse"></span>}
    </a>
  </nav >
}

export default NavMenu