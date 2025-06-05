

const Footer = ({ lang, setIsMenuOpen, isMenuOpen }: { lang: string, isMenuOpen: Boolean, setIsMenuOpen: Function }) => {

  return <div className="max-w-full flex flex-col" >
    <footer className="text-sm md:text-lg w-full h-10 bg-neutral flex flex-row items-center justify-between px-5">
      <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="hover:cursor-pointer hover:text-accent flex flex-row gap-2">
        <i className="bi bi-translate"></i>
        {lang === 'es' ? 'Español' : lang === 'ca' ? 'Català' : 'English'}
      </button>
      <div className="flex flex-row gap-5 items-center">
        <span>hi@rucev.com</span>
        <a className="hover:cursor-pointer hover:text-accent hover:animate-wiggle px-1 py-0.5 w-fit">
          <i className="bi bi-github"></i>
        </a>
        <a className="hover:cursor-pointer hover:text-accent hover:animate-wiggle px-1 py-0.5">
          <i className="bi bi-linkedin"></i>
        </a>
      </div>
    </footer>
  </div>

}

export default Footer