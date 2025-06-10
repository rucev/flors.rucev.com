import type { ExperienceItem, PrivacySection, Project, Skill, Topic } from "../utils/types"
import ca from "./ca/ca"
import en from "./en/en"
import es from "./es/es"

export interface LinksTranslations {
  skillsLink: string
  expLink: string
  projectsLink: string
  contactLink: string,
  menuLabel: string
}

export interface ContactTranslations {
  title: string,
  formNameLabel: string
  formNamePlaceholder: string
  formEmailLabel: string
  formEmailPlaceholder: string
  formMessageLabel: string
  formMessagePlaceholderOther: string
  formMessagePlaceholderPartnership: string
  formMessagePlaceholderWork: string
  formMessagePlaceholderContent: string
  formMessagePlaceholderFeedback: string
  formMessagePlaceholderBug: string
  formMessagePlaceholderPrivacy: string
  formTopicsLabel: string
  formTagOther: string
  formTagPartnership: string
  formTagWork: string
  formTagContent: string
  formTagFeedback: string
  formTagBug: string
  formTagPrivacy: string
  formButton: string
  formAgree: string
  formPrivacy: string
  formNameError: string
  formEmailError: string
  formMessageError: string
  formTermsError: string
  ariaLabelTag: string
  ariaLabelSend: string
  ariaLabelOpenTerms: string
}

export interface FooterTranslations {
  linkedin: string
  github: string
  lang: string
}

export interface OtherTranslations {
  errorMessage: string
  smallScreenMessage: string
  submitMessage: string
}

export interface PrivacyTranslations {
  title: string
  intro: string
  sections: PrivacySection[]
}

export interface ExperienceTranslations {
  title: string
  experience: ExperienceItem[]
}

export interface SkillsTranslations {
  title: string
  skills: Skill[]
}

export interface ProjectsTranslations {
  title: string
  projects: Project[]
}

export interface Translation {
  titleName: string
  role: string
  links: LinksTranslations
  contact: ContactTranslations
  footer: FooterTranslations
  other: OtherTranslations
  privacy: PrivacyTranslations
  exp: ExperienceTranslations
  skills: SkillsTranslations
  projects: ProjectsTranslations
}

export type validLocales = 'es' | 'en' | 'ca'

interface LocaleItem {
  locale: validLocales,
  tag: string
}

export const LOCALES: LocaleItem[] = [
  { locale: 'es', tag: 'Español' },
  { locale: 'ca', tag: 'Català' },
  { locale: 'en', tag: 'English' }]

export const getFormTagKey = (topic: Topic): keyof ContactTranslations => {
  switch (topic) {
    case 'other': return 'formTagOther'
    case 'partnership': return 'formTagPartnership'
    case 'work': return 'formTagWork'
    case 'content': return 'formTagContent'
    case 'feedback': return 'formTagFeedback'
    case 'bug': return 'formTagBug'
    case 'privacy': return 'formTagPrivacy'
  }
}

export const getFormTagPlaceholder = (topic: Topic): keyof ContactTranslations => {
  switch (topic) {
    case 'other': return 'formMessagePlaceholderOther'
    case 'partnership': return 'formMessagePlaceholderPartnership'
    case 'work': return 'formMessagePlaceholderWork'
    case 'content': return 'formMessagePlaceholderContent'
    case 'feedback': return 'formMessagePlaceholderFeedback'
    case 'bug': return 'formMessagePlaceholderBug'
    case 'privacy': return 'formMessagePlaceholderPrivacy'
  }
}

const locales: { ca: Translation, es: Translation, en: Translation } = {
  ca: ca,
  es: es,
  en: en
}

export default locales