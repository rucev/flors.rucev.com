import type { WindowsType } from "../interfaces"

const Footer = ({ lang, setIsMenuOpen, isMenuOpen, windowsType }: { lang: string, isMenuOpen: Boolean, setIsMenuOpen: Function, windowsType: WindowsType }) => {

  return <div className="fixed bottom-0 w-screen max-w-screen flex flex-col" >
    <footer className={`text-sm md:text-lg w-full h-10 bg-neutral flex ${windowsType === 'sm/portrait' ? 'flex-col' : 'flex-row'} items-center justify-between px-5`}>
      <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="hover:cursor-pointer hover:text-accent flex flex-row gap-2">
        <i className="bi bi-translate"></i>
        {lang === 'es' ? 'Español' : lang === 'ca' ? 'Català' : 'English'}
      </button>
      <div className="flex flex-row gap-5 items-center">
        <span>hi@rucev.com</span>
        <a href="https://github.com/rucev" target="_blank" rel="noopener" aria-label="Open Flors Rueda GitHub profile in a new tab" className="hover:cursor-pointer hover:text-accent hover:animate-wiggle px-1 py-0.5 w-fit">
          <i className="bi bi-github"></i>
        </a>
        <a href="https://www.linkedin.com/in/flors-rueda" target="_blank" rel="noopener" aria-label="Open Flors Rueda Linkedin profile in a new tab" className="hover:cursor-pointer hover:text-accent hover:animate-wiggle px-1 py-0.5">
          <i className="bi bi-linkedin"></i>
        </a>
      </div>
    </footer>
  </div>

}

export default Footer