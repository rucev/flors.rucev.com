import ca from "./ca";
import en from "./en";
import es from "./es";

export interface Locale {
  titleName: string,
  role: string,
  skillsLink: string,
  expLink: string,
  projectsLink: string,
  contactLink: string
}

export default {
  ca: ca,
  es: es,
  en: en
}