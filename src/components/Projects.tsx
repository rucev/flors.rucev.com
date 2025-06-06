import { useRef, useState } from "react";

const slides = [
  { title: "Project 1", text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae hic quae eum rerum qui recusandae quas exercitationem, architecto unde? Dicta quibusdam ea minus voluptatibus fuga hic nulla voluptatum blanditiis accusamus.", tags: ['JavaScript', 'AWS', 'patata'], links: [{ github: 'https://github.com/rucev/flors.rucev.com', deploy: 'https://github.com/rucev/flors.rucev.com', other: 'https://github.com/rucev/flors.rucev.com' }], img: "https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp" },
  { title: "Project 2", text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae hic quae eum rerum qui recusandae quas exercitationem, architecto unde? Dicta quibusdam ea minus voluptatibus fuga hic nulla voluptatum blanditiis accusamus. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae hic quae eum rerum qui recusandae quas exercitationem, architecto unde? Dicta quibusdam ea minus voluptatibus fuga hic nulla voluptatum blanditiis accusamus.", tags: ['JavaScript', 'AWS', 'patata'], links: [{ github: 'https://github.com/rucev/flors.rucev.com' }], img: "https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp" },
  { title: "Project 3", text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit.", tags: ['JavaScript', 'AWS', 'patata'], links: [{ github: 'https://github.com/rucev/flors.rucev.com', other: 'https://github.com/rucev/flors.rucev.com' }], img: "https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp" },
];

export default function Projects({ lang }: { lang: string }) {
  const [active, setActive] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)

  const goToSlide = (index: number) => {
    setActive(index)
    const container = containerRef.current
    if (container) {
      const child = container.children[index] as HTMLElement
      child.scrollIntoView({ behavior: "smooth", inline: "center" })
    }
  }

  const handleArrowClick = (index: number) => {
    if (index < 0) goToSlide(slides.length - 1)
    else if (index >= slides.length) goToSlide(0)
    else goToSlide(index)
  }

  return (
    <section className="w-full max-h-screen lg:w-4/5 pt-5 gap-3 flex flex-col-reverse md:flex-col">
      <div
        ref={containerRef}
        className="carousel flex overflow-x-auto scroll-snap-x scroll-smooth gap-4 h-full"
      >
        {slides.map((slide, index) => (
          <article
            key={index}
            className="carousel-item flex-shrink-0 w-full snap-center relative h-full"
          >
            <div className="flex flex-col gap-4 w-full p-4 h-full justify-between rounded-lg shadow">
              <div className="flex flex-row w-full justify-between">
                <h3 className="text-3xl font-bold w-1/2 pr-1 text-secondary">{slide.title}</h3>
                <ul className="flex w-1/2 gap-1 flex-wrap justify-end">
                  {
                    slide.tags.map((tag, index) => {
                      return <li key={index} className="badge badge-primary">{tag}</li>
                    })
                  }
                </ul>
              </div>
              <p>{slide.text}</p>
              <img src={slide.img} className="w-full rounded" />
            </div>
            <div className="absolute left-5 right-5 top-2/3 flex -translate-y-1/2 transform justify-between">
              <button onClick={() => handleArrowClick(index - 1)} className="btn btn-circle">❮</button>
              <button onClick={() => handleArrowClick(index + 1)} className="btn btn-circle">❯</button>
            </div>
          </article>
        ))}
      </div>

      <div className="flex justify-center mt-4 gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`btn btn-xs ${idx === active ? "btn-secondary" : ""}`}
          >
            {idx + 1}
          </button>
        ))}
      </div>
    </section>
  );
}
