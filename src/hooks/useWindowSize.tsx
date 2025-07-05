import { useState, useEffect } from 'react'
import type { WindowsType } from '../utils/types'

export default (): WindowsType => {
  const hasWindow: boolean = typeof window !== 'undefined'

  const getWindowSize = (): { width: number, height: number } => {
    const width: number = hasWindow ? window.innerWidth : 0
    const height: number = hasWindow ? window.innerHeight : 0
    return {
      width,
      height,
    }
  }

  const getWindowType = (): WindowsType => {
    const { width, height } = getWindowSize()
    if (width < 320 || height < 320 || height < 610 && width < 590) return 'not'

    const isPortrait = height >= width
    const isLandscape = width > height

    if (height <= 480 && isLandscape) return 'sm/landscape'
    if (width <= 480 && isPortrait) return 'sm/portrait'

    if (height <= 1030 && isPortrait) return 'md/portrait'
    if (width <= 1030 && isLandscape) return 'md/landscape'

    if (isLandscape) return 'lg/landscape'
    if (isPortrait) return 'lg/portrait'

    return '?'
  }

  const [windowType, setWindowsType] = useState(getWindowType())

  useEffect(() => {
    if (hasWindow) {
      const handleResize = () => setWindowsType(getWindowType())

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize)
    }
  }, [hasWindow])

  return windowType
}