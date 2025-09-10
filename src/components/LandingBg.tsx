import type { WindowsType } from "../utils/types"

const LandingBg = ({ windowsType }: { windowsType: WindowsType }) => {
  const version = windowsType === 'sm/landscape' || windowsType === 'lg/landscape' ? 'right' : 'top'
  return (<>

    <div className={`absolute max-w-screen z-0 ${version === 'top' ? 'top-60 left-6' : 'top-40 right-20'} w-full`}>
      <img src="/landing.svg" alt="background" className={` absolute animate-landing w-96 ${version === 'top' ? 'left-0 top-6' : 'right-1/3'}`} />
      <img src="/my-face.jpeg" alt="That's me!" className={`absolute rounded-lg w-56 ${version === 'top' ? 'left-14 top-16' : 'right-2/5 top-12'}`} />
    </div>

  </>
  )
}

export default LandingBg