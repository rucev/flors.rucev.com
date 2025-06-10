import { SKILLS_DETAILS, SKILLS_TITLES } from "../constants/LOCALES"
import { BACKEND_BADGES, DEVOPS_BADGES, FRONTEND_BADGES, LIBRARY_BADGES } from "../constants/BADGES"

const Skills = ({ lang }: { lang: string }) => {


  return <section className="w-full max-h-screen lg:w-4/5 pt-3">
    <div className="collapse collapse-arrow bg-neutral border border-base-300 mb-3">
      <input type="radio" name="my-accordion-1" />
      <div className="collapse-title font-semibold">
        {lang === 'es' ? SKILLS_TITLES[0].es : lang === 'ca' ? SKILLS_TITLES[0].ca : SKILLS_TITLES[0].en}
      </div>
      <div className="collapse-content text-sm">
        <div className="w-full flex flex-wrap gap-2 pt-5">
          {FRONTEND_BADGES.map((badge, index) => <img className="rounded-lg" key={index} src={badge.url} alt={badge.name} />)}
        </div>
      </div>
    </div>
    <div className="collapse collapse-arrow bg-neutral border border-base-300 mb-3">
      <input type="radio" name="my-accordion-1" />
      <div className="collapse-title font-semibold">
        {lang === 'es' ? SKILLS_TITLES[1].es : lang === 'ca' ? SKILLS_TITLES[1].ca : SKILLS_TITLES[1].en}
      </div>
      <div className="collapse-content text-sm">
        <div className="w-full flex flex-wrap gap-2">
          {BACKEND_BADGES.map((badge, index) => <img className="rounded-lg" key={index} src={badge.url} alt={badge.name} />)}
        </div>
      </div>
    </div>
    <div className="collapse collapse-arrow bg-neutral border border-base-300 mb-3">
      <input type="radio" name="my-accordion-1" />
      <div className="collapse-title font-semibold">
        {lang === 'es' ? SKILLS_TITLES[2].es : lang === 'ca' ? SKILLS_TITLES[2].ca : SKILLS_TITLES[2].en}
      </div>
      <div className="collapse-content text-sm">
        <div className="w-full flex flex-wrap gap-2">
          {DEVOPS_BADGES.map((badge, index) => <img className="rounded-lg" key={index} src={badge.url} alt={badge.name} />)}
        </div>
      </div>
    </div>
    <div className="collapse collapse-arrow bg-neutral border border-base-300 mb-3">
      <input type="radio" name="my-accordion-1" />
      <div className="collapse-title font-semibold">
        {lang === 'es' ? SKILLS_TITLES[3].es : lang === 'ca' ? SKILLS_TITLES[3].ca : SKILLS_TITLES[3].en}
      </div>
      <div className="collapse-content text-sm text-justify">
        <div className="w-full flex flex-wrap gap-2" dangerouslySetInnerHTML={{ __html: lang === 'es' ? SKILLS_DETAILS.practices.es : lang === 'ca' ? SKILLS_DETAILS.practices.ca : SKILLS_DETAILS.practices.en }}>
        </div>
      </div>
    </div>
    <div className="collapse collapse-arrow bg-neutral border border-base-300 mb-3">
      <input type="radio" name="my-accordion-1" />
      <div className="collapse-title font-semibold">
        {lang === 'es' ? SKILLS_TITLES[4].es : lang === 'ca' ? SKILLS_TITLES[4].ca : SKILLS_TITLES[4].en}
      </div>
      <div className="collapse-content text-sm">
        <div className="w-full flex flex-wrap gap-2">
          {LIBRARY_BADGES.map((badge, index) => <img className="rounded-lg" key={index} src={badge.url} alt={badge.name} />)}
        </div>
      </div>
    </div>
    <div className="collapse collapse-arrow bg-neutral border border-base-300 mb-3">
      <input type="radio" name="my-accordion-1" />
      <div className="collapse-title font-semibold">
        {lang === 'es' ? SKILLS_TITLES[5].es : lang === 'ca' ? SKILLS_TITLES[5].ca : SKILLS_TITLES[5].en}
      </div>
      <div className="collapse-content text-sm text-justify">
        <div className="w-full flex flex-wrap gap-2" dangerouslySetInnerHTML={{ __html: lang === 'es' ? SKILLS_DETAILS.psy.es : lang === 'ca' ? SKILLS_DETAILS.psy.ca : SKILLS_DETAILS.psy.en }}>
        </div>
      </div>
    </div>
  </section >
}

export default Skills