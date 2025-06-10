import { useEffect } from "react"
import type { OtherTranslations } from "../locales"

const ErrorToast = ({ onClose, t }: { onClose: Function, t: OtherTranslations }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose()
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  return <div className="toast toast-end toast-middle" role="alert" aria-live="assertive">
    <div className="alert alert-error">
      <span>{t.errorMessage}</span>
    </div>
  </div>

}

export default ErrorToast