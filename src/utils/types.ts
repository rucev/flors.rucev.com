export type View = 'landing' | 'skills' | 'projects' | 'exp' | 'contact' | 'workshops'

export type Topic = 'other' | 'partnership' | 'work' | 'content' | 'feedback' | 'bug' | 'privacy'

export type ExperienceItem = {
  role: string
  years: string
  company: string
  contentInner: string,
  stack: string[],
  id: string
}

export type Skill = {
  id: string,
  title: string,
  detailsInner: string | null
}

export type Project = {
  id: string
  title: string
  tags: string[]
  links: { name?: string; web?: string; github?: string; url?: string; info?: string }[]
  about: string
}

export type Workshop = {
  title: string
  link: string
  about: string
}

export type PrivacySection = {
  heading: string,
  content: string
}

export type Experience = ExperienceItem[];

export type WindowsType = 'sm/portrait' | 'sm/landscape' | 'md/portrait' | 'md/landscape' | 'lg/portrait' | 'lg/landscape' | '?' | 'not'