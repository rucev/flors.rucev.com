import type { View, WindowsType } from "../interfaces";
import type { Locale } from "../locales";

const NavMenu = ({ locale, view, setView, windowsType }: { locale: Locale, view: View, setView: Function, windowsType: WindowsType }) => {
  const handleClick = (newView: View) => {
    if (newView !== view) setView(newView)
  }

  return <nav className={`max-w-screen text-2xl flex font-bold gap-3 ${windowsType === 'sm/portrait' || windowsType === 'md/portrait' || windowsType === 'lg/portrait' ? 'flex-row flex-wrap pt-4 w-full' : 'flex-col w-1/3 pt-3 lg:pt-20'}`}>
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
    <a onClick={() => handleClick('contact')} className={`relative inline-block group w-fit ${view === 'contact' ? 'text-accent' : 'cursor-pointer hover:text-accent'} ${windowsType === 'sm/portrait' || windowsType === 'md/portrait' || windowsType === 'lg/portrait' ? 'pl-4' : 'pt-2 lg:pt-7'}`}>
      {locale.contactLink}
      {view !== 'contact' && <span className="absolute rounded-2xl left-0 bottom-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full animate-pulse"></span>}
    </a>
  </nav >
}

export default NavMenu