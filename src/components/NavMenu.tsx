import type { View } from "../utils/types";
import type { LinksTranslations } from "../locales";

const NavMenu = ({ t, view, setView, isRowDisplay }: { t: LinksTranslations, view: View, setView: Function, isRowDisplay: Boolean }) => {
  const handleClick = (newView: View) => {
    if (newView !== view) setView(newView);
  };

  const navLinks: { key: View; label: string }[] = [
    { key: "skills", label: t.skillsLink },
    { key: "exp", label: t.expLink },
    { key: "projects", label: t.projectsLink },
    { key: "workshops", label: t.workshopsLink },
    { key: "academic", label: t.academicLink },
    { key: "contact", label: t.contactLink },
  ];

  return (
    <nav
      className={`max-w-screen flex font-bold gap-3 flex-col text-xl md:text-2xl  ${isRowDisplay
        ? "gap-7"
        : "gap-5"
        }`}
      role="navigation"
      aria-label={t.menuLabel}
    >
      <div className={`flex gap-3 ${!isRowDisplay
        ? "flex-row flex-wrap pt-4 w-full"
        : "flex-col pt-3 lg:pt-20"
        }`}>
        {navLinks.map(({ key, label }) => {
          return <div
            key={key}
            aria-current={view === key ? "page" : undefined}
            className={`basis-1/3 w-fit ${key === 'contact' && isRowDisplay ? 'pt-5' : 'pt-0'}`}
          >
            <button onClick={() => handleClick(key)} className={`cursor-pointer relative inline-block group w-fit text-left focus:outline-none ${view === key ? "text-accent" : "hover:text-accent text-base-content"}`}>
              {label}
              {view !== key && (
                <span className="absolute rounded-2xl left-0 bottom-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full animate-pulse" />
              )}
            </button>
          </div>
        })}
      </div>

    </nav>
  );
};

export default NavMenu;
