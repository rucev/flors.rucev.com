import type { WindowsType } from "../interfaces"

const LandingBg = ({ windowsType }: { windowsType: WindowsType }) => {
  const version = windowsType === 'sm/landscape' ? 'min' : windowsType === 'sm/portrait' || windowsType === 'md/portrait' ? 'reduced' : windowsType === 'lg/portrait' ? 'complete-v' : 'complete-h'

  return (<>
    {
      version === 'min' &&
      <div className={`absolute max-w-screen z-0 top-2 w-full right-0`}>
        <img src="/my-face.jpeg" alt="That's me!" className="absolute w-46 rounded-xl top-20 right-2/12 z-30" />
        <div className="animate-scale-2 absolute w-48 h-48 bg-accent rounded-full top-30 right-1/12 z-10"></div>
        <div className="animate-scale-1 absolute w-32 h-32  bg-primary rounded-full top-40 right-4/12 z-20"></div>
        <div className="animate-scale-3 absolute w-28 h-28  bg-secondary rounded-full top-30 right-4/12 z-20"></div>
        <div className="animate-scale-1 absolute w-64 h-64  bg-base-100 rounded-full top-20 right-2/12  z-10"></div>
      </div>
    }
    {
      version === 'reduced' && <div className="absolute w-full top-40 left-0">
        <img src="/my-face.jpeg" alt="That's me!" className="absolute w-46 rounded-xl bottom-1/7 left-3/12 top-25 z-30" />
        <div className="animate-scale-2 absolute w-80 h-80 bg-accent rounded-full top-30 left-0 z-10"></div>
        <div className="animate-scale-3 absolute w-72 h-72 bg-base-100 rounded-full top-50 left-1/12 z-0"></div>
        <div className="animate-scale-2 absolute w-64 h-64 bg-primary rounded-full top-20 left-1/12 z-10"></div>
        <div className="animate-scale-1 absolute w-32 h-32 bg-secondary rounded-full top-70 left-1/12 z-20"></div>
      </div>
    }
    {
      version === 'complete-v' && <div className="absolute w-full top-50">
        <img src="/my-face.jpeg" alt="That's me!" className="absolute w-46 rounded-xl bottom-1/7 right-3/12 top-25 z-30" />
        <div className="animate-scale-2 absolute w-80 h-80 bg-accent rounded-full top-30 z-10 right-1/9"></div>
        <div className="animate-scale-3 absolute w-96 h-96 bg-base-100 rounded-full top-50 right-2/9 z-0"></div>
        <div className="animate-scale-2 absolute w-64 h-64 bg-primary rounded-full top-20 right-1/9 z-10"></div>
        <div className="animate-scale-1 absolute w-32 h-32 bg-secondary rounded-full top-70 right-1/9 z-20"></div>
        <div className="animate-scale-3 absolute w-56 h-56 bg-secondary rounded-full top-20 right-4/12 z-10"></div>
      </div>
    }
    {
      version === 'complete-h' && <div className="absolute z-0 right-3/12 top-0 w-3/5 h-[80vh]">
        <div className="absolute h-[80vh] w-3/5 z-0 top-20 right-0">
          <img src="/my-face.jpeg" alt="That's me!" className="absolute h-80 rounded-xl left-6/12 top-20 z-30" />
          <div className="animate-scale-2 absolute w-80 h-80 bg-accent rounded-full left-7/12 top-30 z-20"></div>
          <div className="animate-scale-1 absolute w-44 h-44 bg-secondary rounded-full left-5/12 top-10 z-10"></div>
          <div className="animate-scale-3 absolute w-96 h-96 bg-base-100 rounded-full left-7/12 top-3 z-0"></div>
          <div className="animate-scale-2 absolute w-64 h-64 bg-primary rounded-full top-20 left-1/12 z-10"></div>
          <div className="animate-scale-1 absolute w-32 h-32 bg-base-100 rounded-full top-65 left-4/12 z-10"></div>
          <div className="animate-scale-3 absolute w-60 h-60 bg-secondary rounded-full top-75 right-2/12 z-10"></div>
        </div>
      </div>
    }
  </>




  )
}

export default LandingBg




/**
 * 

 *     
 */