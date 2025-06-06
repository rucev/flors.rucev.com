const LandingBg = () => {

  return (
    <div className="absolute w-full h-[70vh] md:h-[80vh] max-w-screen md:w-3/4 lg:w-3/5 z-0 top-1/4 md:top-20 right-0">
      <img src="/my-face.jpeg" className="absolute w-46 rounded-xl bottom-1/7 left-1/5 md:left-3/12 lg:bottom-2/7 z-30" />
      <div className="animate-scale-2 absolute w-64 h-64 md:w-80 md:h-80 bg-accent rounded-full bottom-2/7 left-1/12 md:left-4/12 md:bottom-2/6 z-10"></div>
      <div className="animate-scale-1 absolute w-32 h-32 md:w-44 md:h-44 bg-secondary rounded-full bottom-3/7 left-1/12 md:left-4/12 md:top-1/6 z-20"></div>
      <div className="animate-scale-3 absolute w-72 h-72 md:w-96 md:h-96 bg-base-100 rounded-full bottom-1/9 left-1/12 md:left-4/12 md:bottom-1/5 z-0"></div>
      <div className="hidden lg:block">
        <div className="animate-scale-2 absolute w-64 h-64 bg-primary rounded-full top-20 left-1/12 z-10"></div>
        <div className="animate-scale-1 absolute w-32 h-32 bg-accent rounded-full top-70 left-1/12 z-20"></div>
        <div className="animate-scale-3 absolute w-60 h-60 bg-secondary rounded-full bottom-1/12 right-1/12 z-10"></div>
      </div>
    </div>
  )
}

export default LandingBg
