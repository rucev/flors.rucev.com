import type { OtherTranslations } from "../locales"

const SmallScreenMsg = ({ t }: { t: OtherTranslations }) => {

  return <div className="w-screen h-screen min-h-fit max-w-screen flex flex-col gap-2 justify-center items-center py-2 px-1">
    <i className="bi bi-arrows-fullscreen text-accent text-3xl"></i>
    <span className="font-bold text-accent text-center">{t.smallScreenMessage}</span>
  </div>

}

export default SmallScreenMsg