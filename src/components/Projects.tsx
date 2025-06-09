import { useRef, useState } from "react";
import { PROJECTS } from "../constants/LOCALES";
import { getAboutByLang, getTitleByLang } from "../locales";


export default function Projects({ lang }: { lang: "es" | "en" | "ca" }) {
  const [active, setActive] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const goToSlide = (index: number) => {
    setActive(index)
    const container = containerRef.current
    if (container) {
      const child = container.children[index] as HTMLElement
      container.scrollTo({
        left: child.offsetLeft,
        behavior: 'smooth',
      })
    }
  }

  const handleArrowClick = (index: number) => {
    if (index < 0) goToSlide(PROJECTS.length - 1)
    else if (index >= PROJECTS.length) goToSlide(0)
    else goToSlide(index)
  }

  return (
    <section className="w-11/12 max-h-screen lg:w-4/5 gap-3 flex flex-col">
      <div className="flex justify-center gap-2 pt-5">
        {PROJECTS.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`pt-1 btn btn-xs ${index === active ? "btn-accent" : "btn-secondary hover:btn-accent"}`}
          >
            {index + 1}
          </button>
        ))}
      </div>
      <div ref={containerRef} className="carousel flex overflow-x-auto scroll-smooth gap-4">
        {PROJECTS.map((project, index) => {
          const title = getTitleByLang(project, lang)
          const about = getAboutByLang(project, lang)
          return (
            <article
              key={index}
              className="carousel-item flex-shrink-0 w-full snap-center relative h-full"
              tabIndex={0}
            >
              <div className="flex flex-col gap-4 w-full pt-4 h-full justify-between rounded-lg shadow">
                <h3 className="text-3xl font-bold w-1/2 pr-1 text-secondary">{title}</h3>
                <div className="flex flex-col md:flex-row gap-7 h-full">
                  <div className="flex flex-col gap-7 pt-1 w-full">
                    <ul className="flex w-full gap-1 flex-wrap justify-start">
                      {
                        project.tags.map((tag, index) => {
                          return <li key={index} className="badge badge-primary">{tag}</li>
                        })
                      }
                    </ul>
                    <ul className="flex w-full gap-4 text-xl flex-wrap justify-start">
                      {
                        project.links.map((link, index) => {
                          const icon = link.name === 'web' ? 'caret-right-square-fill' : link.name
                          return <a key={index} href={link.url} target="_blank" rel="noopener" className="link link-accent">
                            <i className={`bi bi-${icon}`}></i>
                          </a>
                        })
                      }
                    </ul>
                    <div className="flex flex-col gap-1 w-full text-justify" dangerouslySetInnerHTML={{ __html: about }} />
                  </div>
                  <img src={`/${project.id}.svg`} className="w-full md:w-[400px] rounded h-fit md:h-[400px]" />
                </div>

              </div>
              <div className="absolute left-5 right-5 top-11/12 flex -translate-y-1/2 transform justify-between opacity-40">
                <button onClick={() => handleArrowClick(index - 1)} className="btn btn-neutral btn-circle hover:btn-accent pt-1">❮</button>
                <button onClick={() => handleArrowClick(index + 1)} className="btn btn-neutral btn-circle hover:btn-accent pt-1">❯</button>
              </div>
            </article>
          )

        })}
      </div>
    </section>
  );
}
