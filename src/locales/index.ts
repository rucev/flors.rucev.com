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
    es: '<p>Sigo los principios de <b>código limpio</b> y aplico prácticas <b>SOLID</b>, <b>Agile</b> y de <b>CI/CD</b> para garantizar soluciones mantenibles y escalables.</p><p>Trabajo frecuentemente con JavaScript <b>funcional</b>, desarrollo guiado por pruebas (<b>TDD</b>) y <b>arquitectura limpia</b>. Aplico <b>patrones de diseño</b> como Repositorio y Mapper para mejorar la organización y reutilización del código.</p><p>También he trabajado con programación orientada a objetos (<b>OOP</b>) y uso con frecuencia la <b>arquitectura hexagonal</b> para separar la lógica central de los sistemas externos, permitiendo flexibilidad y capacidad de prueba.</p>',
    ca: '<p>Segueixo els principis de <b>codi net</b> i aplico pràctiques <b>SOLID</b>, <b>Agile</b> i de <b>CI/CD</b> per garantir solucions mantenibles i escalables.</p><p>Treballo sovint amb JavaScript <b>funcional</b>, desenvolupament dirigit per tests (<b>TDD</b>) i <b>arquitectura neta</b>. Aplico <b>patrons de disseny</b> com Repositori i Mapper per millorar l’organització i la reutilització del codi.</p><p>També he treballat amb programació orientada a objectes (<b>OOP</b>) i faig servir sovint l’<b>arquitectura hexagonal</b> per separar la lògica central dels sistemes externs, permetent flexibilitat i facilitat de prova.</p>',
    en: '<p>I follow <b>clean code principles</b> and embrace <b>SOLID</b>, <b>Agile</b>, and <b>CI/CD</b> practices to ensure maintainable, scalable solutions.</p><p>I work frequently with <b>functional</b> JavaScript, test-driven development (<b>TDD</b>), and <b>clean architecture</b>. I apply <b>design patterns</b> like Repository and Mapper to enhance code organization and reuse.</p><p>I had work too with object-oriented programming (<b>OOP</b>) and frequently use <b>hexagonal architecture</b> to decouple core logic from external systems, enabling flexibility and testability.</p>'
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