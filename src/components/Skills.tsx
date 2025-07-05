import type { SkillsTranslations } from "../locales"
import { BACKEND_BADGES, DEVOPS_BADGES, FRONTEND_BADGES, LIBRARY_BADGES } from "../utils/BADGES"

const Skills = ({ t }: { t: SkillsTranslations }) => {


  return <section className="w-full max-h-screen lg:w-4/5 pt-3 mb-28">
    <div className="collapse collapse-arrow bg-neutral border border-base-300 mb-3">
      <input type="radio" name="my-accordion-1" />
      <div className="collapse-title font-semibold">
        {t.skills[0].title}
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
        {t.skills[1].title}
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
        {t.skills[2].title}
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
        {t.skills[3].title}
      </div>
      <div className="collapse-content text-sm text-justify">
        <div className="w-full flex flex-wrap gap-2" dangerouslySetInnerHTML={{ __html: t.skills[3].detailsInner ? t.skills[3].detailsInner : '' }}>
        </div>
      </div>
    </div>
    <div className="collapse collapse-arrow bg-neutral border border-base-300 mb-3">
      <input type="radio" name="my-accordion-1" />
      <div className="collapse-title font-semibold">
        {t.skills[4].title}
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
        {t.skills[5].title}
      </div>
      <div className="collapse-content text-sm text-justify">
        <div className="w-full flex flex-wrap gap-2" dangerouslySetInnerHTML={{ __html: t.skills[5].detailsInner ? t.skills[5].detailsInner : '' }}>
        </div>
      </div>
    </div>
  </section >
}

export default Skills