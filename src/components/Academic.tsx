import type { AcademicTranslations } from "../locales"

const Academic = ({ t }: { t: AcademicTranslations }) => {

  return (
    <section className="relative w-full h-fit lg:w-4/5 pt-3 md:pt-12 pl-4 pb-10" aria-labelledby="experience-section">
      <h2 id="experience-section" className="sr-only">
        {t.title} Timeline
      </h2>
      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
        <table className="table">
          <tbody>
            {t.background.map(course => {
              return <tr key={course.id}>
                <td className="flex flex-col">
                  <span className="text-lg font-bold text-secondary">{course.title}</span>
                  <div className="flex flex-row gap-3">
                    <span className="text-primary">{course.school}</span>
                    <span className="font-light italic">{course.date}</span>
                  </div>
                </td>
              </tr>
            })}
          </tbody>

        </table>
      </div>
    </section>
  );
};


export default Academic