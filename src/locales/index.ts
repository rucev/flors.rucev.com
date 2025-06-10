import type { Project, Topic } from "../interfaces";
import ca from "./ca";
import en from "./en";
import es from "./es";

export interface Locale {
  titleName: string;
  role: string;
  skillsLink: string;
  expLink: string;
  projectsLink: string;
  contactLink: string;
  formNameLabel: string;
  formNamePlaceholder: string;
  formEmailLabel: string;
  formEmailPlaceholder: string;
  formMessageLabel: string;
  formMessagePlaceholderOther: string;
  formMessagePlaceholderPartnership: string;
  formMessagePlaceholderWork: string;
  formMessagePlaceholderContent: string;
  formMessagePlaceholderFeedback: string;
  formMessagePlaceholderBug: string;
  formMessagePlaceholderPrivacy: string;
  formTopicsLabel: string;
  formTagOther: string;
  formTagPartnership: string;
  formTagWork: string;
  formTagContent: string;
  formTagFeedback: string;
  formTagBug: string;
  formTagPrivacy: string;
  formButton: string;
  formAgree: string;
  formPrivacy: string;
  formNameError: string;
  formEmailError: string;
  formMessageError: string;
  formTermsError: string;
  ariaLabelTag: string;
  ariaLabelSend: string;
  ariaLabelOpenTerms: string;
}

type validLocales = 'es' | 'en' | 'ca'

interface LocaleItem {
  locale: validLocales,
  tag: string
}

export const LOCALES: LocaleItem[] = [
  { locale: 'es', tag: 'Español' },
  { locale: 'ca', tag: 'Català' },
  { locale: 'en', tag: 'English' }]

export const getFormTagKey = (topic: Topic): keyof Locale => {
  switch (topic) {
    case 'other': return 'formTagOther';
    case 'partnership': return 'formTagPartnership';
    case 'work': return 'formTagWork';
    case 'content': return 'formTagContent';
    case 'feedback': return 'formTagFeedback';
    case 'bug': return 'formTagBug';
    case 'privacy': return 'formTagPrivacy';
  }
}

export const getFormTagPlaceholder = (topic: Topic): keyof Locale => {
  switch (topic) {
    case 'other': return 'formMessagePlaceholderOther';
    case 'partnership': return 'formMessagePlaceholderPartnership';
    case 'work': return 'formMessagePlaceholderWork';
    case 'content': return 'formMessagePlaceholderContent';
    case 'feedback': return 'formMessagePlaceholderFeedback';
    case 'bug': return 'formMessagePlaceholderBug';
    case 'privacy': return 'formMessagePlaceholderPrivacy';
  }
}

export const getTitleByLang = (project: Project, lang: 'es' | 'en' | 'ca'): string => {
  return project.title[lang];
}

export const getAboutByLang = (project: Project, lang: 'es' | 'en' | 'ca'): string => {
  return project.about[lang];
}

export default {
  ca: ca,
  es: es,
  en: en
}