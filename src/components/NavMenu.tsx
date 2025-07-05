import type { View, WindowsType } from "../utils/types";
import type { LinksTranslations } from "../locales";

const NavMenu = ({ t, view, setView, windowsType, }: { t: LinksTranslations, view: View, setView: Function, windowsType: WindowsType }) => {
  const handleClick = (newView: View) => {
    if (newView !== view) setView(newView);
  };

  const isPortrait =
    windowsType === "sm/portrait" ||
    windowsType === "sm/landscape" ||
    windowsType === "md/portrait" ||
    windowsType === "md/landscape" ||
    windowsType === "lg/portrait";

  const navLinks: { key: View; label: string }[] = [
    { key: "skills", label: t.skillsLink },
    { key: "exp", label: t.expLink },
    { key: "projects", label: t.projectsLink },
    { key: "contact", label: t.contactLink },
  ];

  return (
    <nav
      className={`max-w-screen text-2xl flex font-bold gap-3 ${isPortrait
        ? "flex-row flex-wrap pt-4 w-full"
        : "flex-col w-1/3 pt-3 lg:pt-20"
        }`}
      role="navigation"
      aria-label={t.menuLabel}
    >
      {navLinks.map(({ key, label }) => (
        <button
          key={key}
          onClick={() => handleClick(key)}
          aria-current={view === key ? "page" : undefined}
          className={`cursor-pointer relative inline-block group w-fit text-left focus:outline-none ${view === key ? "text-accent" : "hover:text-accent text-base-content"
            } ${key === "contact" ? (isPortrait ? "ml-4" : "pt-2 lg:pt-7") : ""}`}
        >
          {label}
          {view !== key && (
            <span className="absolute rounded-2xl left-0 bottom-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full animate-pulse" />
          )}
        </button>
      ))}
    </nav>
  );
};

export default NavMenu;
