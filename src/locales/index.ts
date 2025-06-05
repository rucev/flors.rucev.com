import ca from "./ca";
import en from "./en";
import es from "./es";

export interface Locale {
  titleName: string,
  role: string,
  skillsLink: string,
  expLink: string,
  projectsLink: string,
  contactLink: string,
}

export const LOCALES = [
  { locale: 'es', tag: 'Español' },
  { locale: 'ca', tag: 'Català' },
  { locale: 'en', tag: 'English' }]

export const SKILLS_TITLES = [
  { id: 'front', en: 'Frontend Development', es: 'Desarrollo Frontend', ca: 'Desenvolupament Frontend' },
  { id: 'back', en: 'Backend Development', es: 'Desarrollo Backend', ca: 'Desenvolupament Backend' },
  { id: 'devops', en: 'DevOps & Deployment', es: 'DevOps y Despliegue', ca: 'DevOps i Desplegament' },
  { id: 'practices', en: 'Development Practices & Methodologies', es: 'Prácticas y Metodologías', ca: 'Pràctiques i Metodologies' },
  { id: 'tools', en: 'Tools & Libraries', es: 'Herramientas y Librerías', ca: 'Eines i Llibreries' },
  { id: 'psy', en: 'Psychology', es: 'Psicología', ca: 'Psicologia' },
];

export const SKILLS_DETAILS = {
  practices: {
    es: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, orci nec congue faucibus, turpis nulla sollicitudin eros, non convallis arcu nisl vitae nulla. Aenean porta bibendum tortor, vitae tincidunt elit blandit ac. Ut ullamcorper, eros non posuere imperdiet, justo elit luctus mi, in volutpat massa lectus nec nisi. Morbi sed magna id sapien fermentum pharetra. Integer tincidunt malesuada odio, non sagittis nisl convallis vel. Aliquam erat volutpat. Pellentesque accumsan lorem nec nibh elementum, a pulvinar sapien interdum. Donec at bibendum leo.',
    ca: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, orci nec congue faucibus, turpis nulla sollicitudin eros, non convallis arcu nisl vitae nulla. Aenean porta bibendum tortor, vitae tincidunt elit blandit ac. Ut ullamcorper, eros non posuere imperdiet, justo elit luctus mi, in volutpat massa lectus nec nisi. Morbi sed magna id sapien fermentum pharetra. Integer tincidunt malesuada odio, non sagittis nisl convallis vel. Aliquam erat volutpat. Pellentesque accumsan lorem nec nibh elementum, a pulvinar sapien interdum. Donec at bibendum leo.',
    en: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, orci nec congue faucibus, turpis nulla sollicitudin eros, non convallis arcu nisl vitae nulla. Aenean porta bibendum tortor, vitae tincidunt elit blandit ac. Ut ullamcorper, eros non posuere imperdiet, justo elit luctus mi, in volutpat massa lectus nec nisi. Morbi sed magna id sapien fermentum pharetra. Integer tincidunt malesuada odio, non sagittis nisl convallis vel. Aliquam erat volutpat. Pellentesque accumsan lorem nec nibh elementum, a pulvinar sapien interdum. Donec at bibendum leo.'
  },
  psy: {
    es: '<p>Tras terminar la carrera de psicología, estudié <b>intervención social</b> y <b>psicopedagogía</b>, además de realizar varios cursos sobre una amplia gama de temas como acompañamiento en el duelo y gamificación. También gané experiencia profesional realizando talleres informativos y dando clases.</p><p>Gracias a estas experiencias, he desarrollado un gran conocimiento sobre <b>dinámicas de grupo</b> y <b>resolución de conflictos</b>. Además, he mejorado habilidades  esenciales que creo que siempre han sido mis puntos fuertes: <b>resolución de problemas</b>, <b>creatividad</b> y <b>empatía</b>.</p>',
    ca: "<p>Després d'acabar la carrera de psicologia, vaig estudiar <b>intervenció social</b> i <b>psicopedagogia</b>, a més de realitzar diversos cursos sobre una àmplia gamma de temes com a acompanyament al dol i ludificació. També vaig guanyar experiència professional realitzant tallers informatius i fent classes.</p><p>Gràcies a aquestes experiències, he desenvolupat un gran coneixement sobre <b>dinàmiques de grup</b> i <b>resolució de conflictes</b>. A més, he millorat habilitats essencials que crec que sempre han estat els meus punts forts: <b>resolució de problemes</b>, <b>creativitat</b> i <b>empatia</b>.</p>",
    en: '<p>After completing my degree in psychology, I studied masters in <b>social intervention</b> and <b>psychopedagogy</b>, in addition to taking various courses on a wide range of topics such as bereavement counseling and gamification. I also gained practical experience by doing informative workshops and teaching.</p><p>Due these experiences, I have developed a deep understanding of <b>group dynamics</b> and <b>conflict resolution</b>. Besides, I have improved essential soft skills that I believe have always been inherent in me: <b>problem-solving</b>, <b>creativity</b>, and <b>empathy</b>.</p>'
  }
}

export default {
  ca: ca,
  es: es,
  en: en
}