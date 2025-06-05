const Footer = ({ lang }: { lang: string }) => {
  return <footer className="text-sm md:text-lg w-full h-10 bg-neutral flex flex-row items-center justify-between px-5">
    <button className="hover:cursor-pointer hover:text-accent flex flex-row gap-2">
      <i className="bi bi-translate"></i>
      {lang}
    </button>
    <div className="transform-gpu flex flex-row gap-5 items-center">
      <span>hi@rucev.com</span>
      <a className="hover:cursor-pointer hover:text-accent hover:animate-wiggle px-1 py-0.5 w-fit">
        <i className="bi bi-github"></i>
      </a>
      <a className="hover:cursor-pointer hover:text-accent hover:animate-wiggle px-1 py-0.5">
        <i className="bi bi-linkedin"></i>
      </a>
    </div>
  </footer>
}

export default Footer