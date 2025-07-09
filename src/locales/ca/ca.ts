import exp from './exp'
import privacy from './privacy'
import projects from './projects'
import skills from './skills'

export default {
  titleName: 'Flors Rueda Cebollero',
  role: 'Full Stack Developer',
  links: {
    skillsLink: 'Habilitats',
    expLink: 'Experiència',
    projectsLink: 'Projectes',
    contactLink: 'Parlem!',
    workshopsLink: 'Tallers',
    menuLabel: 'Navegació principal'
  },
  contact: {
    title: 'Parlem!',
    formNameLabel: 'Nom',
    formNamePlaceholder: 'Joan Cérvol',
    formEmailLabel: 'Correu Electrònic',
    formEmailPlaceholder: 'joan-cervol@email.com',
    formMessageLabel: 'Missatge',
    formMessagePlaceholderOther: 'Digue’m què et passa pel cap.',
    formMessagePlaceholderPartnership: 'Vols que col·laborem? Explica’m més!',
    formMessagePlaceholderWork: 'Dona’m els detalls del treball que tens pensat.',
    formMessagePlaceholderContent: 'Alguna cosa concreta que vulguis sol·licitar per al blog?',
    formMessagePlaceholderFeedback: 'Què en penses d’aquesta pàgina web?',
    formMessagePlaceholderBug: 'Si trobes un error, informa’m!',
    formMessagePlaceholderPrivacy: 'Alguna pregunta relacionada amb les condicions de privacitat?',
    formTopicsLabel: 'De què vols parlar?',
    formTagOther: 'Altres',
    formTagPartnership: 'Col·laboracions',
    formTagWork: 'Ofertes de Treball',
    formTagContent: 'Sol·licitud de Contingut',
    formTagFeedback: 'Comentaris',
    formTagBug: 'Informar d’un Error',
    formTagPrivacy: 'Privacitat',
    formButton: 'ENVIAR',
    formAgree: 'Estic d’acord amb ',
    formPrivacy: 'les condicions de privacitat',
    formNameError: 'Si us plau, introdueix el teu nom.',
    formEmailError: 'Si us plau, introdueix un correu electrònic vàlid.',
    formMessageError: 'Si us plau, proporciona un missatge més detallat.',
    formTermsError: 'Si us plau, revisa i accepta les condicions de privacitat.',
    ariaLabelTag: 'Elegir ',
    ariaLabelSend: 'Enviar missatge',
    ariaLabelOpenTerms: 'Anar a condicions de privacitat'
  },
  footer: {
    linkedin: 'Obrir perfil de Linkedin de Flors Rueda en una nova pestanya',
    github: 'Obrir perfil de GitHub de Flors Rueda en una nova pestanya',
    lang: 'Canviar idioma'
  },
  other: {
    errorMessage: 'Sorry, something went wrong!',
    smallScreenMessage: 'Looks like your screen’s a bit small! Try resizing your window or using a larger device for the best view.',
    submitMessage: 'Message sent successfully'
  },
  privacy: {
    title: "Política de Privacitat",
    intro: "Aquesta Política de Privacitat descriu com el lloc web recopila, utilitza i protegeix la informació personal que proporcioneu a flors.rucev.com.",
    sections: privacy
  },
  exp: {
    title: 'Línea temporal laboral',
    experience: exp,
  },
  skills: {
    title: 'Habilitats i tecnologies',
    skills: skills,
  },
  projects: {
    title: 'Portfolio de projectes',
    projects: projects
  }
}
