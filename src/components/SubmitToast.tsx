import { useEffect } from "react"
import type { OtherTranslations } from "../locales";

const SubmitToast = ({ onClose, t }: { onClose: Function, t: OtherTranslations }) => {
  useEffect(() => {
    setTimeout(() => {
      onClose()
    }, 3000);
  }, [])

  return <div className="toast toast-end toast-middle">
    <div className="alert alert-success">
      <span>{t.submitMessage}</span>
    </div>
  </div>

}

export default SubmitToast