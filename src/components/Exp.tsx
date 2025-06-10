import { useEffect, useState } from "react";
import { EXPERIENCE } from "../constants/LOCALES";
import type { Experience } from "../interfaces";

const Exp = ({ lang }: { lang: string }) => {
  const [exp, setExp] = useState<Experience | null>(null)

  useEffect(() => {
    const experience: Experience = lang === 'es' ? EXPERIENCE.es : lang === 'ca' ? EXPERIENCE.ca : EXPERIENCE.en
    setExp(experience)
  }, [lang])


  return (
    <section className="relative w-full h-fit lg:w-4/5 pt-3 pl-4" aria-labelledby="experience-section">
      <h2 id="experience-section" className="sr-only">
        Work Experience Timeline
      </h2>
      <div className="absolute h-full left-5.75 top-6 bottom-6 w-0.5 rounded-2xl bg-secondary"></div>
      {exp && exp.map((work, index) => {
        const panelId = `exp-panel-${index}`
        const headingId = `exp-header-${index}`

        return <div key={index} className="relative pl-3 mb-6">
          <div className="absolute left-0 top-3 w-4 h-4 bg-secondary rounded-full border-2 border-base-100 z-10" aria-hidden="true"></div>
          <div className="collapse collapse-plus">
            <input type="radio" name="timeline-accordion" aria-expanded="false"
              aria-controls={panelId} id={headingId} />
            <div className="collapse-title flex flex-col -mt-2">
              <h3 className="text-2xl font-bold">{work.role}</h3>
              <span className="text-lg font-light italic">{work.company}</span>
              <time className="text-lg">{work.years}</time>
            </div>
            <div className="collapse-content w-full flex flex-col justify-start gap-1" role="region"
              id={panelId} aria-labelledby={headingId}>
              <div className="text-sm text-justify" dangerouslySetInnerHTML={{ __html: work.content }} />
            </div>

          </div>
        </div>
      })}
    </section>
  );
};


export default Exp