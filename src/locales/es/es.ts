import exp from './exp'
import privacy from './privacy'
import projects from './projects'
import skills from './skills'

export default {
  titleName: 'Flors Rueda Cebollero',
  role: 'Full Stack Developer',
  links: {
    skillsLink: 'Habilidades',
    expLink: 'Experiencia',
    projectsLink: 'Proyectos',
    contactLink: '¡Charlemos!',
    menuLabel: 'Navegación principal'
  },
  contact: {
    title: '¡Charlemos!',
    formNameLabel: 'Nombre',
    formNamePlaceholder: 'Juana Reno',
    formEmailLabel: 'Correo Electrónico',
    formEmailPlaceholder: 'juana-reno@email.com',
    formMessageLabel: 'Mensaje',
    formMessagePlaceholderOther: 'Cuéntame en qué estas pensando.',
    formMessagePlaceholderPartnership: '¿Quieres colaborar? ¡Cuéntame más!',
    formMessagePlaceholderWork: 'Dame los detalles del trabajo que tienes en mente.',
    formMessagePlaceholderContent: '¿Algo específico que quieras solicitar para el blog?',
    formMessagePlaceholderFeedback: '¿Qué opinas de esta página web?',
    formMessagePlaceholderBug: 'Si encuentras un error, ¡avísame!',
    formMessagePlaceholderPrivacy: '¿Alguna pregunta relacionada con las políticas de privacidad?',
    formTopicsLabel: '¿De qué quieres hablar?',
    formTagOther: 'Otros',
    formTagPartnership: 'Colaboraciones',
    formTagWork: 'Ofertas de Trabajo',
    formTagContent: 'Solicitud de Contenido',
    formTagFeedback: 'Comentarios',
    formTagBug: 'Reportar un Error',
    formTagPrivacy: 'Privacidad',
    formButton: 'ENVIAR',
    formAgree: 'Estoy de acuerdo con ',
    formPrivacy: 'las políticas de privacidad',
    formNameError: 'Por favor, ingresa tu nombre.',
    formEmailError: 'Por favor, ingresa un correo electrónico válido.',
    formMessageError: 'Por favor, proporciona un mensaje más detallado.',
    formTermsError: 'Por favor, revisa y accepta las condiciones de privacidad.',
    ariaLabelTag: 'Elegir ',
    ariaLabelSend: 'Enviar mensaje',
    ariaLabelOpenTerms: 'Ir a políticas de privacidad'
  },
  footer: {
    linkedin: 'Abrir perfil de Linkedin de Flors Rueda en una nueva pestaña',
    github: 'Abrir perfil de GitHub de Flors Rueda en una nueva pestaña',
    lang: 'Cambiar idioma'
  },
  other: {
    errorMessage: 'Sorry, something went wrong!',
    smallScreenMessage: 'Looks like your screen’s a bit small! Try resizing your window or using a larger device for the best view.',
    submitMessage: 'Message sent successfully'
  },
  privacy: {
    title: "Política de Privacidad",
    intro: "Esta Política de Privacidad describe cómo el sitio web recopila, usa y protege la información personal que proporciona en flors.rucev.com.",
    sections: privacy
  },
  exp: {
    title: 'Línea temporal laboral',
    experience: exp,
  },
  skills: {
    title: 'Habilidades i tecnologias',
    skills: skills,
  },
  projects: {
    title: 'Portfolio de proyectos',
    projects: projects
  }
}
