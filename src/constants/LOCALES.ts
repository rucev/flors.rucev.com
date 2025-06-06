import type { Project } from "../interfaces";

export const PRIVACY_TEXTS = {
  en: {
    title: "Privacy Policy",
    intro: "This Privacy Policy describes how the website collects, uses, and protects the personal information you provide on flors.rucev.com.",
    sections: [
      {
        heading: "Information We Collect",
        content: "Contact Form: When you submit information through the contact form on our website, we collect your name, email address, and any additional information you provide voluntarily. This information is used solely for responding to your inquiry and will not be shared with third parties."
      },
      {
        heading: "Use of Collected Information",
        content: "Contact Information: We use the contact information you provide (name and email address) to respond to your inquiries or feedback."
      },
      {
        heading: "Security",
        content: "We take reasonable measures to secure your personal information and ensure it is treated confidentially. Our website uses HTTPS to encrypt data transmitted between your browser and our servers, providing a secure connection. Hosting through CloudFront ensures reliable and secure content delivery."
      },
      {
        heading: "Third-Party Services",
        content: "Our contact form is powered by Formspree. Please review Formspree's Privacy Policy for information on how they handle data."
      },
      {
        heading: "Changes to Privacy Policy",
        content: "We reserve the right to update our privacy policy as needed. Changes will be effective immediately upon posting on the website."
      },
      {
        heading: "Contact Us",
        content: "If you have any questions about our privacy policy or the data we collect, please contact us through the contact form on our website."
      }
    ]
  },
  es: {
    title: "Política de Privacidad",
    intro: "Esta Política de Privacidad describe cómo el sitio web recopila, usa y protege la información personal que proporciona en flors.rucev.com.",
    sections: [
      {
        heading: "Información que Recopilamos",
        content: "Formulario de Contacto: Cuando envía información a través del formulario de contacto en nuestro sitio web, recopilamos su nombre, dirección de correo electrónico y cualquier información adicional que proporcione voluntariamente. Esta información se usa únicamente para responder a su consulta y no se compartirá con terceros."
      },
      {
        heading: "Uso de la Información Recopilada",
        content: "Información de Contacto: Usamos la información de contacto que proporciona (nombre y correo electrónico) para responder a sus consultas o comentarios."
      },
      {
        heading: "Seguridad",
        content: "Tomamos medidas razonables para asegurar su información personal y garantizar que se trate con confidencialidad. Nuestro sitio web usa HTTPS para cifrar los datos transmitidos entre su navegador y nuestros servidores, proporcionando una conexión segura. El alojamiento a través de CloudFront garantiza una entrega de contenido fiable y segura."
      },
      {
        heading: "Servicios de Terceros",
        content: "Nuestro formulario de contacto está gestionado por Formspree. Por favor, revise la Política de Privacidad de Formspree para información sobre cómo manejan los datos."
      },
      {
        heading: "Cambios en la Política de Privacidad",
        content: "Nos reservamos el derecho de actualizar nuestra política de privacidad según sea necesario. Los cambios serán efectivos inmediatamente después de publicarse en el sitio web."
      },
      {
        heading: "Contáctenos",
        content: "Si tiene alguna pregunta sobre nuestra política de privacidad o los datos que recopilamos, por favor contáctenos a través del formulario de contacto en nuestro sitio web."
      }
    ]
  },
  ca: {
    title: "Política de Privacitat",
    intro: "Aquesta Política de Privacitat descriu com el lloc web recopila, utilitza i protegeix la informació personal que proporcioneu a flors.rucev.com.",
    sections: [
      {
        heading: "Informació que Recopilem",
        content: "Formulari de Contacte: Quan envieu informació a través del formulari de contacte al nostre lloc web, recopilem el vostre nom, adreça de correu electrònic i qualsevol altra informació addicional que proporcioneu voluntàriament. Aquesta informació s'utilitza exclusivament per respondre a la vostra consulta i no es compartirà amb tercers."
      },
      {
        heading: "Ús de la Informació Recopilada",
        content: "Informació de Contacte: Utilitzem la informació de contacte que proporcioneu (nom i adreça de correu electrònic) per respondre a les vostres consultes o comentaris."
      },
      {
        heading: "Seguretat",
        content: "Prenem mesures raonables per assegurar la vostra informació personal i garantir que es tracti amb confidencialitat. El nostre lloc web utilitza HTTPS per xifrar les dades transmesses entre el vostre navegador i els nostres servidors, proporcionant una connexió segura. L'allotjament a través de CloudFront assegura una entrega de contingut fiable i segura."
      },
      {
        heading: "Serveis de Tercers",
        content: "El nostre formulari de contacte està gestionat per Formspree. Si us plau, reviseu la Política de Privacitat de Formspree per obtenir informació sobre com gestionen les dades."
      },
      {
        heading: "Canvis en la Política de Privacitat",
        content: "Ens reservem el dret d'actualitzar la nostra política de privacitat segons sigui necessari. Els canvis seran efectius immediatament després de publicar-se al lloc web."
      },
      {
        heading: "Contacteu-nos",
        content: "Si teniu qualsevol pregunta sobre la nostra política de privacitat o les dades que recopilem, si us plau, contacteu-nos a través del formulari de contacte al nostre lloc web."
      }
    ]
  }
}

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
    es: '<p>Sigo los principios de <b>código limpio</b> y aplico prácticas <b>SOLID</b>, <b>Agile</b> y de <b>CI/CD</b> para garantizar soluciones mantenibles y escalables.</p><p>Trabajo frecuentemente con JavaScript <b>funcional</b>, desarrollo guiado por tests (<b>TDD</b>) y <b>arquitectura limpia</b>. Aplico <b>patrones de diseño</b> como Repositorio y Mapper para mejorar la organización y reutilización del código.</p><p>También he trabajado con programación orientada a objetos (<b>OOP</b>) y uso con frecuencia la <b>arquitectura hexagonal</b> para separar la lógica central de los sistemas externos, permitiendo flexibilidad y capacidad de prueba.</p>',
    ca: '<p>Segueixo els principis de <b>codi net</b> i aplico pràctiques <b>SOLID</b>, <b>Agile</b> i de <b>CI/CD</b> per garantir solucions mantenibles i escalables.</p><p>Treballo sovint amb JavaScript <b>funcional</b>, desenvolupament dirigit per tests (<b>TDD</b>) i <b>arquitectura neta</b>. Aplico <b>patrons de disseny</b> com Repositori i Mapper per millorar l’organització i la reutilització del codi.</p><p>També he treballat amb programació orientada a objectes (<b>OOP</b>) i faig servir sovint l’<b>arquitectura hexagonal</b> per separar la lògica central dels sistemes externs, permetent flexibilitat i facilitat de prova.</p>',
    en: '<p>I follow <b>clean code principles</b> and embrace <b>SOLID</b>, <b>Agile</b>, and <b>CI/CD</b> practices to ensure maintainable, scalable solutions.</p><p>I work frequently with <b>functional</b> JavaScript, test-driven development (<b>TDD</b>), and <b>clean architecture</b>. I apply <b>design patterns</b> like Repository and Mapper to enhance code organization and reuse.</p><p>I had work too with object-oriented programming (<b>OOP</b>) and frequently use <b>hexagonal architecture</b> to decouple core logic from external systems, enabling flexibility and testability.</p>'
  },
  psy: {
    es: '<p>Tras terminar la carrera de psicología, estudié <b>intervención social</b> y <b>psicopedagogía</b>, además de realizar varios cursos sobre una amplia gama de temas como acompañamiento en el duelo y gamificación. También gané experiencia profesional realizando talleres informativos y dando clases.</p><p>Gracias a estas experiencias, he desarrollado un gran conocimiento sobre <b>dinámicas de grupo</b> y <b>resolución de conflictos</b>. Además, he mejorado habilidades  esenciales que creo que siempre han sido mis puntos fuertes: <b>resolución de problemas</b>, <b>creatividad</b> y <b>empatía</b>.</p>',
    ca: "<p>Després d'acabar la carrera de psicologia, vaig estudiar <b>intervenció social</b> i <b>psicopedagogia</b>, a més de realitzar diversos cursos sobre una àmplia gamma de temes com a acompanyament al dol i ludificació. També vaig guanyar experiència professional realitzant tallers informatius i fent classes.</p><p>Gràcies a aquestes experiències, he desenvolupat un gran coneixement sobre <b>dinàmiques de grup</b> i <b>resolució de conflictes</b>. A més, he millorat habilitats essencials que crec que sempre han estat els meus punts forts: <b>resolució de problemes</b>, <b>creativitat</b> i <b>empatia</b>.</p>",
    en: '<p>After completing my degree in psychology, I studied masters in <b>social intervention</b> and <b>psychopedagogy</b>, in addition to taking various courses on a wide range of topics such as bereavement counseling and gamification. I also gained practical experience by doing informative workshops and teaching.</p><p>Due these experiences, I have developed a deep understanding of <b>group dynamics</b> and <b>conflict resolution</b>. Besides, I have improved essential soft skills that I believe have always been inherent in me: <b>problem-solving</b>, <b>creativity</b>, and <b>empathy</b>.</p>'
  }
}

export const EXPERIENCE = {
  es: [
    { years: "Marzo 2024 – presente", role: 'Full Stack Developer', company: 'ISDI Coders', content: "<li>Enseñar en un Bootcamp Full Stack: <b>JavaScript</b>, <b>HTML</b>, <b>CSS</b>, <b>React</b>, <b>Tailwind</b>, <b>Node.js</b>, <b>MongoDB</b> y tests con <b>Mocha</b> y <b>Chai</b>.</li><li>Brindar orientación personalizada uno a uno, retroalimentación y <b>resolución de problemas de código</b> para apoyar el aprendizaje y desarrollo del estudiantado.</li><li>Promover buenas prácticas de programación, incluyendo principios de <b>código limpio</b>, diseño <b>SOLID</b> y <b>estrategias de testing</b> completas.</li><li>Crear un entorno de aprendizaje de apoyo y motivador para los estudiantes.</li>" },
    { years: "Junio 2024 - Octubre 2024", role: 'Tech Lead', company: 'Inspiranza', content: "<li>Definir y priorizar el <b>MVP</b> en colaboración con los <b>stakeholders</b>, estableciendo objetivos claros y alcanzables.</li><li>Seleccionar un stack tecnológico óptimo (<b>React Native</b>) para un desarrollo eficiente y escalable.</li><li><b>Implementar una pipeline de CI/CD</b> para despliegues confiables.</li><li>Configurar la <b>seguridad y los permisos</b> del repositorio de GitHub para proteger la base de código.</li><li><b>Establecer los materiales de onboarding y la documentación</b> para dar la bienvenida a personas con distintos niveles de experiencia al equipo.</li><li><b>Definir estándares de codificación y flujos de trabajo</b> para mejorar la productividad del equipo y asegurar entregables de alta calidad.</li>" },
    { years: "Enero 2024 - Junio 2024", role: 'Full Stack Developer', company: 'Outsideral', content: "<li>Construir landing pages y blogs dinámicos y responsivos con <b>Next.js</b>, optimizando el rendimiento, el SEO y la interacción del usuario.</li><li>Integrar con un <b>backend de WordPress (PHP)</b> para facilitar la gestión de contenido manteniendo una experiencia frontend rápida y moderna.</li><li>Focus en la experiencia de usuario, <b>optimizando los diseños y las interacciones</b> para vistas móviles y de escritorio.</li><li>Implementar <b>buenas prácticas de SEO y optimizaciones de rendimiento</b>, como el renderizado del lado del servidor y la optimización de imágenes.</li><li>Desarrollar herramientas personalizadas para clientes, como <b>aplicaciones de seguimiento de stock</b> y paneles administrativos.</li>" },
    { years: "Mayo 2023 - Diciembre 2023", role: 'Test3', company: 'Beemeral', content: "<li>Construir prototipos con <b>React y Next.js</b>, aprovechando SSR y CSR para mejorar el rendimiento y el SEO.</li><li>Desarrollar <b>funcionalidades interactivas</b> como interfaces de arrastrar y soltar.</li><li>Crear componentes visuales usando <b>Canvas</b>, <b>Three.js</b> y <b>animaciones CSS</b>.</li><li>Evaluar el rendimiento del prototipo y la experiencia de usuario, proporcionando <b>documentación detallada</b> de los hallazgos.</li>" },
  ],
  ca: [
    { years: "Març 2024 – present", role: 'Full Stack Developer', company: 'ISDI Coders', content: "<li>Ensenyar en un Bootcamp Full Stack: <b>JavaScript</b>, <b>HTML</b>, <b>CSS</b>, <b>React</b>, <b>Tailwind</b>, <b>Node.js</b>, <b>MongoDB</b> i testing amb <b>Mocha</b> i <b>Chai</b>.</li><li>Proporcionar orientació personalitzada, comentaris i <b>resolució de problemes de codi</b> per donar suport a l’aprenentatge i desenvolupament de l’alumnat.</li><li>Promoure bones pràctiques de programació, incloent els principis de <b>codi net</b>, el disseny <b>SOLID</b> i <b>estratègies de testing</b> completes.</li><li>Crear un entorn d’aprenentatge acollidor i motivador per a l’alumnat.</li>" },
    { years: "Juny 2024 - Octubre 2024", role: 'Tech Lead', company: 'Inspiranza', content: "<li>Definir i prioritzar el <b>MVP</b> en col·laboració amb els <b>stakeholders</b>, establint objectius clars i assolibles.</li><li>Seleccionar un stack tecnològic òptim (<b>React Native</b>) per a un desenvolupament eficient i escalable.</li><li><b>Implementar una pipeline de CI/CD</b> per a desplegaments fiables.</li><li>Configurar la <b>seguretat i els permisos</b> del repositori de GitHub per protegir la base de codi.</li><li><b>Establir els materials d'onboarding i la documentació</b> per donar la benvinguda a gent amb diferents nivells d'experiència a l'equip.</li><li><b>Definir estàndards de codificació i fluxos de treball</b> per millorar la productivitat de l'equip i garantir lliuraments d'alta qualitat.</li>" },
    { years: "Gener 2024 - Juny 2024", role: 'Full Stack Developer', company: 'Outsideral', content: "<li>Construir landing pages i blogs dinàmics i responsius amb <b>Next.js</b>, optimitzant el rendiment, el SEO i la interacció de l’usuari.</li><li>Integrar amb un <b>backend de WordPress (PHP)</b> per permetre la gestió de continguts mantenint una experiència moderna i ràpida al frontend.</li><li>Focus en l’experiència d’usuari, <b>optimitzant els dissenys i les interaccions</b> per a les vistes mòbils i d’escriptori.</li><li>Implementar <b>bones pràctiques de SEO i optimitzacions de rendiment</b>, com el renderitzat del costat del servidor i l’optimització d’imatges.</li><li>Desenvolupar eines personalitzades per a clients, com ara <b>aplicacions de seguiment d’estoc</b> i interfícies d’administració.</li>" },
    { years: "Maig 2023 - Desembre 2023", role: 'Test3', company: 'Beemeral', content: "<li>Construir prototips amb <b>React i Next.js</b>, aprofitant SSR i CSR per millorar el rendiment i el SEO.</li><li>Desenvolupar <b>funcionalitats interactives</b> com interfícies d’arrossegar i deixar anar.</li><li>Crear components visuals amb <b>Canvas</b>, <b>Three.js</b> i <b>animacions CSS</b>.</li><li>Avaluar el rendiment del prototip i l’experiència d’usuari, proporcionant <b>documentació detallada</b> dels resultats.</li>" },
  ],
  en: [
    { years: "March 2024 – now", role: 'Full Stack Developer', company: 'ISDI Coders', content: "<li>Teach on Full Stack Bootcamp: <b>JavaScript</b>, <b>HTML</b>, <b>CSS</b>, <b>React</b>, <b>Tailwin</b>d, <b>Node.js,<b> MongoDB</b>, and testing with <b>Mocha</b> and <b>Chai</b>.</li><li>Provide personalized one-on-one guidance, feedback, and b>code troubleshooting</b> to support student learning and development.</li><li>Promote coding best practices, including <b>clean code</b> principles, <b>SOLID</b> design, and comprehensive <b>testing strategies</b>.</li><li>Create a supportive, engaging learning environment for students.</li>" },
    { years: "June 2024 - October 2024", role: 'Technical Lead', company: 'Inspiranza', content: "<li>Defined and prioritized the <b>MVP</b> in collaboration with <b>stakeholders</b>, setting clear, achievable goals.</li><li>Selected an optimal tech stack (<b>React Native</b>) for efficient, scalable development.</li><li><b>Implemented a CI/CD</b> pipeline for reliable deployments.</li><li>Configured GitHub repository <b>security and permissions</b> to safeguard the codebase.</li><li><b>Set the onboarding materials and docs</b> to welcome developers of different levels of experience to the team.</li><li><b>Established coding standards and workflows</b> to improve team productivity and ensure high-quality deliverables.</li>" },
    { years: "January 2024 - June 2024", role: 'Full Stack Developer', company: 'Outsideral', content: "<li>Build dynamic, responsive landing pages and blogs using <b>Next.js</b>, optimizing performance, SEO, and user engagement.</li><li>Integrate with a <b>WordPress (PHP) backend</b> to provide content management while ensuring a fast, modern frontend experience.</li><li>Focus on user experience, <b>optimizing layouts and interactions</b> for both mobile and desktop views.</li><li>Implement <b>SEO best practices and performance optimizations</b>, such as server-side rendering and image optimization.</li><li>Develop small custom tools for clients, such as <b>stock tracking applications</b> and admin interfaces.</li>" },
    { years: "May 2023 - December 2023", role: 'Junior Frontend Developer', company: 'Beemeral', content: "<li>Built prototypes with <b>React and Next.js</b>, leveraging SSR and CSR for performance and SEO gains.</li><li>Developed <b>interactive features</b> like drag-and-drop interfaces.</li><li>Created visual components using <b>Canvas</b>, <b>Three.js</b>, and <b>CSS animations</b>.</li><li>Assessed prototype performance and user experience, providing <b>detailed documentation</b> of findings.</li>" },
  ]
}

export const PROJECTS: Project[] = [
  {
    id: "fetch",
    title: {
      en: "Fetch It!",
      es: "¡Fetch It!",
      ca: "Fetch It!",
    },
    tags: ["Vue", "TypeScript", "Tailwind", "API", "Vite"],
    links: [{ name: "web", url: "https://rucev.github.io/fetch-it" }, { name: "github", url: "https://github.com/rucev/fetch-it" }],
    about: {
      en: `<p><b>Fetch It!</b> is a <b>lightweight, privacy-first frontend</b> built as an alternative to bloated or invasive API explorers. It offers a clean, performant UI for <em>quick, local testing</em> of APIs.</p>
         <p>It provides  a responsive and distraction-free interface. No telemetry, no analytics — just fast and focused API interaction using <b>Vue</b> and <b>TypeScript</b>.</p>`,
      es: `<p><b>Fetch It!</b> es una <b>interfaz ligera y respetuosa con la privacidad</b>, pensada como alternativa a exploradores de APIs más invasivos o complejos. Permite probar APIs de forma <em>rápida, limpia y local</em>.</p>
         <p>Ofrece una interfaz enfocada y sin distracciones. Sin telemetría ni analíticas, solo interacción directa con APIs usando <b>Vue</b> y <b>TypeScript</b>.</p>`,
      ca: `<p><b>Fetch It!</b> és una <b>interfície lleugera i orientada a la privacitat</b>, pensada com a alternativa a exploradors d’API més invasius o carregats. Permet fer <em>proves ràpides i locals</em> amb APIs de tercers.</p>
         <p>Disenyada amb una interfície clara i sense distraccions. Sense analítiques ni telemetria — només <b>Vue</b>, <b>TypeScript</b> i rendiment pur per probar una API.</p>`
    }
  },
  {
    id: "lemon",
    title: {
      en: "Lemon Economists",
      es: "Lemon Economists",
      ca: "Lemon Economists",
    },

    tags: ["Typescript", "Next.js", "Tailwind", "Vercel", "i18n"],
    links: [{ name: "web", url: "https://www.lemoneconomists.com/" }],
    about: {
      en: "<p>This project is a fast, SEO-friendly website built with <b>Next.js</b> and <b>TypeScript</b>, using <b>WordPress as a headless CMS</b>. It serves as both a <b>landing page and a blog</b> for a small business, featuring full <b>multilingual support</b> through localized routes and translated slugs.</p><p>The frontend pulls structured content from the WordPress REST API and adapts dynamically to the selected language, with a custom routing system that handles internationalized paths and metadata.</p>",
      es: "<p>Este proyecto es un sitio web rápido y optimizado para SEO construido con <b>Next.js</b> y <b>TypeScript</b>, utilizando <b>WordPress como CMS sin cabeza</b>. Funciona como <b>landing page y blog</b> para un pequeño negocio, con soporte completo para <b>múltiples idiomas</b> gracias a rutas localizadas y slugs traducidos.</p><p>El frontend consume contenido desde la API REST de WordPress y lo adapta dinámicamente al idioma seleccionado, con un sistema de rutas personalizado que maneja paths y metadatos internacionalizados.</p>",
      ca: "<p>Aquest projecte és un lloc web ràpid i optimitzat per SEO, construït amb <b>Next.js</b> i <b>TypeScript</b>, i integrat amb <b>WordPress com a CMS sense cap</b>. Serveix com a <b>landing page i blog</b> per a un petit negoci, amb suport complet per a <b>múltiples idiomes</b> mitjançant rutes localitzades i slugs traduïts.</p><p>El frontend s'adapta automàticament al contingut que arriba de la API REST de WordPress, amb un sistema de rutes personalitzat per gestionar paths i metadades internacionalitzades.</p>"
    }

  },
  {
    id: "ballopolis",
    title: {
      en: "Ballopolis: Maze Riders",
      es: "Ballopolis: Maze Riders",
      ca: "Ballopolis: Maze Riders",
    },
    tags: [
      "Javascript", "React", "Vite", "NodeJs", "MongoDB", "Socket.io",
      "Tailwind", "ThreeJs", "AWS", "EC2", "Route53", "Docker", "Nginx", "Github Actions",
    ],
    links: [
      { name: "github", url: "https://github.com/rucev/ballopolis" },
      { name: "web", url: "https://ballopolis-demo.netlify.app/" },
    ],
    about: {
      en: `<p><b>Ballopolis</b> is a <b>social game</b> where players <b>create and play custom levels</b>. Completing levels rewards players with <b>Customization Credits</b> and unlockable <b>achievements</b> based on creativity and skill.</p>
       <p>This was my <b>first project deployed on AWS</b>. I learned to use <b>Docker</b>, <b>Nginx</b>, <b>GitHub Actions</b>, and services like <b>Route53</b>. I also integrated <b>Three.js</b> to bring in 3D visuals.</p>
       <p><em>The full-stack version was sunset due to budget</em>, but a <b>demo remains online</b>.</p>`,
      es: `<p><b>Ballopolis</b> es un <b>juego social</b> donde los jugadores <b>crean y juegan niveles personalizados</b>. Al completarlos, reciben <b>Créditos de Personalización</b> y <b>logros</b> desbloqueables que premian creatividad y habilidad.</p>
       <p>Fue mi <b>primer proyecto desplegado en AWS</b>, donde aprendí a usar <b>Docker</b>, <b>Nginx</b>, <b>GitHub Actions</b> y servicios como <b>Route53</b>. También integré <b>Three.js</b> para efectos 3D.</p>
       <p><em>La versión full-stack se dio de baja por costes</em>, pero <b>el demo sigue disponible</b>.</p>`,
      ca: `<p><b>Ballopolis</b> és un <b>joc social</b> on els jugadors <b>creen i juguen nivells personalitzats</b>. En completar-los reben <b>Crèdits de Personalització</b> i <b>logros</b> desbloquejables segons la seva creativitat i habilitat.</p>
       <p>Va ser el meu <b>primer projecte desplegat a AWS</b>, on vaig aprendre a utilitzar <b>Docker</b>, <b>Nginx</b>, <b>GitHub Actions</b> i serveis com <b>Route53</b>. També hi vaig integrar <b>Three.js</b> per visuals en 3D.</p>
       <p><em>La versió full-stack es va retirar per motius de pressupost</em>, però <b>el demo encara és en línia</b>.</p>`
    }

  },
  {
    id: "aquelarre",
    title: {
      en: "Aquelarre: Character Generator",
      es: "Aquelarre: Generador de Personajes",
      ca: "Aquelarre: Generador de Personatges",
    },
    tags: ["Javascript", "HTML", "CSS"],
    links: [
      { name: "github", url: "https://github.com/rucev/AquelarreCharacterGenerator" },
      { name: "web", url: "https://aquelarrepersonaje.surge.sh/" },
    ],
    about: {
      en: `<p>A <b>character generator</b> based on the classic Spanish RPG <b>Aquelarre</b>, set in a <em>myth-infused medieval Iberia</em>. This tool creates random characters using the game’s traditional <b>dice-based system</b>.</p>`,
      es: `<p>Un <b>generador de personajes</b> basado en el clásico juego de rol español <b>Aquelarre</b>, ambientado en una <em>Iberia medieval mítica</em>. Crea personajes aleatorios con el <b>sistema clásico de tiradas</b>.</p>`,
      ca: `<p>Un <b>generador de personatges</b> basat en el clàssic joc de rol espanyol <b>Aquelarre</b>, ambientat en una <em>Ibèria medieval mítica</em>. Crea personatges aleatoris amb el <b>sistema tradicional de daus</b>.</p>`
    }

  },
  {
    id: "pokemontypes",
    title: {
      en: "Pokémon Types Game",
      es: "Juego de Tipos Pokémon",
      ca: "Joc de Tipus Pokémon",
    },
    tags: ["Javascript", "HTML", "CSS", "Python", "React"],
    links: [
      { name: "web", url: "https://pokemon-types-game.netlify.app/" },
      { name: "github", url: "https://github.com/rucev/PokemonTypesGame/" },
      { name: "info-circle", url: "https://www.linkedin.com/pulse/my-first-steps-web-development-flors-rueda-cebollero" },
    ],
    about: {
      en: `<p>Started as a basic <b>Python rock-paper-scissors</b> game, and evolved into a <b>React app</b> exploring <b>Pokémon type matchups</b>. Players fight the CPU, with score tracking.</p>
       <p>It was my <b>first web app</b>, and a major step in learning <b>React</b> and <b>web UI design</b>.</p>`,
      es: `<p>Comenzó como un juego básico de <b>piedra, papel o tijera en Python</b>, y evolucionó a una <b>app en React</b> sobre <b>ventajas de tipos Pokémon</b>. El jugador compite contra la CPU, con seguimiento de puntuación.</p>
       <p>Fue mi <b>primera app web</b>, y un gran paso para aprender <b>React</b> y <b>diseño de interfaces</b>.</p>`,
      ca: `<p>Va començar com un joc senzill de <b>pedra, paper o tisora en Python</b>, i va evolucionar a una <b>aplicació en React</b> sobre <b>avantatges de tipus Pokémon</b>. El jugador s'enfronta a la CPU amb puntuació acumulada.</p>
       <p>Va ser la meva <b>primera app web</b> i un gran pas per aprendre <b>React</b> i <b>disseny de UI</b>.</p>`
    }

  },
  {
    id: "auca",
    title: {
      en: "Auca",
      es: "Auca",
      ca: "Auca",
    },
    tags: ["Python", "DeepAI API"],
    links: [
      { name: "info-circle", url: "https://devpost.com/software/auca" },
    ],
    about: {
      en: `<p><b>Auca</b> was built for <b>Technica 2022</b> and uses <b>AI-generated art</b> to create <em>visual storytelling</em>. Inspired by traditional Catalan <b>aucas</b>, it replaces speech bubbles with <b>narrative text</b>.</p>
       <p>We used the <b>DeepAI API</b> to render scenes from user prompts.</p>`,
      es: `<p><b>Auca</b> se creó para la <b>hackathon Technica 2022</b> y utiliza <b>arte generado por IA</b> para contar <em>historias visuales</em>. Se inspira en las <b>aucas catalanas</b> usando texto narrativo en vez de viñetas.</p>
       <p>Utilizamos la <b>API de DeepAI</b> para generar las imágenes a partir de entradas del usuario.</p>`,
      ca: `<p><b>Auca</b> va ser creat per a la <b>hackathon Technica 2022</b> i utilitza <b>imatges generades amb IA</b> per explicar <em>històries visuals</em>. Inspirat en les <b>aucas catalanes</b>, fa servir text narratiu en lloc de bafarades.</p>
       <p>Vam utilitzar l’<b>API de DeepAI</b> per generar escenes a partir de frases de l’usuari.</p>`
    }

  },
  {
    id: "percy",
    title: {
      en: "Percy the Dog",
      es: "Percy el Perro",
      ca: "Percy el Gos",
    },
    tags: ["HTML", "CSS"],
    links: [
      { name: "web", url: "https://rucev.github.io/Percy-the-Dog" },
      { name: "github", url: "https://github.com/rucev/Percy-the-Dog" },
    ],
    about: {
      en: `<p><b>Percy the Dog</b> is a <b>static responsive site</b> created to practice <b>mobile-first design</b>. It features a <b>navbar</b>, animated <b>skill bars</b>, and a <b>contact form</b>.</p>
       <p>Built over a few days, it helped me get comfortable with <b>HTML</b>, <b>CSS</b>, and responsive styling.</p>`,
      es: `<p><b>Percy the Dog</b> es una <b>página web estática y responsive</b> hecha para practicar <b>diseño mobile-first</b>. Tiene <b>barra de navegación</b>, <b>barras de habilidad animadas</b> y un <b>formulario de contacto</b>.</p>
       <p>Hecha en pocos días, me ayudó a afianzar <b>HTML</b>, <b>CSS</b> y diseño adaptable.</p>`,
      ca: `<p><b>Percy the Dog</b> és un <b>lloc web estàtic i responsive</b> creat per practicar <b>disseny mobile-first</b>. Inclou una <b>barra de navegació</b>, <b>barres d’habilitat animades</b> i un <b>formulari de contacte</b>.</p>
       <p>Fet en pocs dies, em va servir per consolidar <b>HTML</b>, <b>CSS</b> i disseny responsive.</p>`
    }
  },
];
