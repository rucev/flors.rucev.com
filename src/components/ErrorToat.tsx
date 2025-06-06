import { useEffect } from "react"

const ErrorToast = ({ lang, onClose }: { lang: string, onClose: Function }) => {
  useEffect(() => {
    setTimeout(() => {
      onClose()
    }, 2000);
  }, [])

  return <div className="toast toast-end toast-middle">
    <div className="alert alert-error">
      <span>Sorry, something went wrong!</span>
    </div>
  </div>

}

export default ErrorToast