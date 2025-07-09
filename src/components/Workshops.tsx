import type { WorkshopsTranslations } from "../locales"

const Workshops = ({ t }: { t: WorkshopsTranslations }) => {


  return <section className="w-full max-h-screen lg:w-4/5 pt-6 mb-28">
    <ul className="list bg-base-100 rounded-box shadow-md">
      {
        t.workshops.map((workshop, index) => (
          <li className="list-row" key={index}>
            <a href={workshop.link} target="_blank" rel="noopener" aria-label={workshop.title} className="btn btn-square btn-ghost">
              <i className="bi bi-github text-xl opacity-60"></i>
            </a>
            <div>
              <h2 className="text-sm text-secondary uppercase font-semibold">{workshop.title}</h2>
              <p className="" dangerouslySetInnerHTML={{ __html: workshop.about }}></p>
            </div>
          </li>
        ))
      }
    </ul>
  </section >
}

export default Workshops