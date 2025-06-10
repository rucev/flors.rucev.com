import type { View, WindowsType } from "../interfaces";
import type { Locale } from "../locales";

const NavMenu = ({ locale, view, setView, windowsType, }: { locale: Locale, view: View, setView: Function, windowsType: WindowsType }) => {
  const handleClick = (newView: View) => {
    if (newView !== view) setView(newView);
  };

  const isPortrait =
    windowsType === "sm/portrait" ||
    windowsType === "md/portrait" ||
    windowsType === "lg/portrait";

  const navLinks: { key: View; label: string }[] = [
    { key: "skills", label: locale.skillsLink },
    { key: "exp", label: locale.expLink },
    { key: "projects", label: locale.projectsLink },
    { key: "contact", label: locale.contactLink },
  ];

  return (
    <nav
      className={`max-w-screen text-2xl flex font-bold gap-3 ${isPortrait
        ? "flex-row flex-wrap pt-4 w-full"
        : "flex-col w-1/3 pt-3 lg:pt-20"
        }`}
      role="navigation"
      aria-label={"Main Navigation" /*Add aria label to locale*/}
    >
      {navLinks.map(({ key, label }) => (
        <button
          key={key}
          onClick={() => handleClick(key)}
          aria-current={view === key ? "page" : undefined}
          className={`cursor-pointer relative inline-block group w-fit text-left focus:outline-none ${view === key ? "text-accent" : "hover:text-accent text-base-content"
            } ${key === "contact" ? (isPortrait ? "pl-4" : "pt-2 lg:pt-7") : ""}`}
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
