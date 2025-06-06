import { useEffect } from "react"

const TermsModal = ({ lang }: { lang: string }) => {

  return <dialog id="terms_modal" className="modal w-screen h-screen max-w-none max-h-none p-0">
    <div className="modal-box w-full h-full max-w-none rounded-none p-6">
      <form method="dialog">
        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
      </form>
      <h3 className="font-bold text-lg">Hello!</h3>
      <p className="py-4">Terms & Conditions.
        Privacy Policy.
        This Privacy Policy describes how the website collects, uses, and protects the personal information you provide on flors.rucev.com.

        Information We Collect:
        Contact Form: When you submit information through the contact form on our website, we collect your name, email address, and any additional information you provide voluntarily. This information is used solely for the purpose of responding to your inquiry and will not be shared with third parties.

        Use of Collected Information
        Contact Information: We use the contact information you provide (name and email address) to respond to your inquiries or feedback.

        Security:
        We take reasonable measures to secure your personal information and ensure that it is treated confidentially.
        Our website uses HTTPS to encrypt data transmitted between your browser and our servers, providing a secure connection.
        Hosting through CloudFront ensures reliable and secure content delivery.

        Third-Party Services:
        Our contact form is powered by Formspree. Please review Formspree's Privacy Policy for information on how they handle data.

        Changes to Privacy Policy:
        We reserve the right to update our privacy policy as needed. Changes will be effective immediately upon posting on the website.

        Contact Us:
        If you have any questions about our privacy policy or the data we collect, please contact us through the contact form on our website</p>
    </div>
  </dialog>

}

export default TermsModal