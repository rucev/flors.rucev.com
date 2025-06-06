const Exp = ({ lang }: { lang: string }) => {
  const items = [
    { years: "2024–2025", role: 'Test', company: 'the comp', content: "Lorem ipsum dolor sit amet..." },
    { years: "2022–2024", role: 'Test2', company: 'the comp2', content: "Lorem ipsum dolor sit amet..." },
    { years: "2018–2022", role: 'Test3', company: 'the comp3', content: "Lorem ipsum dolor sit amet..." },
  ];

  return (
    <section className="relative w-full max-h-screen lg:w-4/5 pt-3 pl-4">
      <div className="absolute left-5.75 top-6 bottom-6 w-0.5 rounded-2xl bg-secondary"></div>
      {items.map((work, index) => (
        <div key={index} className="relative pl-3 mb-6">
          <div className="absolute left-0 top-3 w-4 h-4 bg-secondary rounded-full border-2 border-base-100 z-10"></div>
          <div className="collapse collapse-plus">
            <input type="radio" name="timeline-accordion" />
            <div className="collapse-title flex flex-col -mt-2">
              <div className="flex flex-row items-center gap-5">
                <h3 className="text-2xl font-bold">{work.role}</h3>
                <span className="text-xl font-semibold">{work.company}</span>
              </div>
              <time className="text-lg">{work.years}</time>
            </div>
            <div className="collapse-content text-sm">{work.content}</div>
          </div>
        </div>
      ))}
    </section>
  );
};


export default Exp