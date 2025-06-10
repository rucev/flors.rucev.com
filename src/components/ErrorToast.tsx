import { useEffect } from "react"

//TODO: translate toasts!

const ErrorToast = ({ onClose }: { onClose: Function }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose()
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  return <div className="toast toast-end toast-middle" role="alert" aria-live="assertive">
    <div className="alert alert-error">
      <span>Sorry, something went wrong!</span>
    </div>
  </div>

}

export default ErrorToast