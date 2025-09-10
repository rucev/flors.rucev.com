import { useRef, useState } from "react"
import { type ProjectsTranslations } from "../locales"

const Projects = ({ t }: { t: ProjectsTranslations }) => {
  const [active, setActive] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const projects = t.projects

  const goToSlide = (index: number) => {
    setActive(index);
    const container = containerRef.current
    if (container) {
      const child = container.children[index] as HTMLElement
      container.scrollTo({
        left: child.offsetLeft,
        behavior: "smooth",
      });
    }
  };

  const handleArrowClick = (index: number) => {
    if (index < 0) goToSlide(projects.length - 1)
    else if (index >= projects.length) goToSlide(0)
    else goToSlide(index)
  };

  return (
    <section
      className="w-11/12 h-fit pb-20 lg:pb-1 lg:w-4/5 gap-3 flex flex-col"
      aria-label="Project carousel"
    >
      <div className="flex justify-center gap-2 pt-5">
        {projects.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            aria-label={`Go to project ${index + 1}`}
            aria-current={index === active ? "true" : undefined}
            className={`pt-1 btn btn-xs ${index === active ? "btn-accent" : "btn-secondary hover:btn-accent"
              }`}
          >
            {index + 1}
          </button>
        ))}
      </div>

      <div
        ref={containerRef}
        className="carousel flex overflow-x-auto scroll-smooth gap-4"
        role="region"
        aria-roledescription="carousel"
        aria-label="Project gallery"
      >
        {projects.map((project, index) => {

          return (
            <article
              key={index}
              className="carousel-item flex-shrink-0 w-full snap-center relative h-full"
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${projects.length}: ${project.title}`}
              tabIndex={0}
            >
              <div className="flex flex-col gap-4 w-full pt-4 h-full justify-between rounded-lg shadow">
                <div className="w-full flex flex-col gap-1 md:flex-row md:gap-5 z-10">
                  <h3 className="text-3xl font-bold pr-1 text-secondary">
                    {project.title}
                  </h3>
                  <ul
                    className="flex gap-4 text-xl flex-wrap pt-1"
                    aria-label="Project links"
                  >
                    {project.links.map((link, _index) => {
                      const icon =
                        link.name === "web"
                          ? "caret-right-square-fill"
                          : link.name;
                      return (
                        <li key={_index}>
                          <a
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="link link-accent"
                            aria-label={`${link.name} link`}
                          >
                            <i className={`bi bi-${icon}`}></i>
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
                <div className="flex flex-col md:flex-row gap-7 h-full">
                  <div className="flex flex-col gap-7 pt-1 w-full">
                    <ul className="flex w-full gap-1 flex-wrap justify-start z-10" aria-label="Technology tags">
                      {project.tags.map((tag, i) => (
                        <li key={i} className="badge badge-primary">
                          {tag}
                        </li>
                      ))}
                    </ul>
                    <div className="flex-col lg:flex-row flex w-full gap-2">
                      <div
                        className="flex flex-col gap-1 w-full text-justify"
                        dangerouslySetInnerHTML={{ __html: project.about }}
                        aria-label="Project description"
                      />
                      <img
                        src={`/${project.id}.svg`}
                        alt={`${project.title} illustration`}
                        className="w-full mt-0 self-center lg:-mt-28 md:w-[350px] rounded h-fit md:h-[350px] border-0"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute left-5 right-5 top-11/12 flex -translate-y-1/2 transform justify-between opacity-40">
                <button
                  onClick={() => handleArrowClick(index - 1)}
                  aria-label="Previous project"
                  className="btn btn-neutral btn-circle hover:btn-accent pt-1"
                >
                  ❮
                </button>
                <button
                  onClick={() => handleArrowClick(index + 1)}
                  aria-label="Next project"
                  className="btn btn-neutral btn-circle hover:btn-accent pt-1"
                >
                  ❯
                </button>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Projects