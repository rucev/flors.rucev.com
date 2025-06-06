import { PRIVACY_TEXTS } from "../constants/LOCALES";

const TermsModal = ({ lang }: { lang: 'en' | 'es' | 'ca' }) => {
  const text = PRIVACY_TEXTS[lang] || PRIVACY_TEXTS.en;

  return (
    <dialog id="terms_modal" className="modal w-screen h-screen max-w-none max-h-none p-0">
      <div className="modal-box w-full h-full max-w-none rounded-none p-6 overflow-y-auto">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
        </form>
        <h3 className="font-bold text-lg mb-4 text-primary">{text.title}</h3>
        <p className="mb-4">{text.intro}</p>
        {text.sections.map(({ heading, content }, index) => (
          <section key={index} className="mb-4">
            <h4 className="font-semibold text-accent">{heading}</h4>
            <p>{content}</p>
          </section>
        ))}
      </div>
    </dialog>
  );
};

export default TermsModal;
