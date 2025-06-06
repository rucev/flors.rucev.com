import { useEffect } from "react"

const SubmitToast = ({ onClose }: { onClose: Function }) => {
  useEffect(() => {
    setTimeout(() => {
      onClose()
    }, 3000);
  }, [])

  return <div className="toast toast-end toast-middle">
    <div className="alert alert-success">
      <span>Message sent successfully.</span>
    </div>
  </div>

}

export default SubmitToast