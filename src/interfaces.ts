export type View = 'landing' | 'skills' | 'projects' | 'exp' | 'contact'

export type Topic = 'other' | 'partnership' | 'work' | 'content' | 'feedback' | 'bug' | 'privacy'

export interface ExperienceItem {
  role: string;
  years: string;
  company: string;
  content: string;
}

export type Project = {
  id: string;
  title: {
    en: string;
    es: string;
    ca: string;
  };
  tags: string[];
  links: { name?: string; web?: string; github?: string; url?: string; info?: string }[];
  about: {
    en: string;
    es: string;
    ca: string;
  };
};

export type Experience = ExperienceItem[];

export type WindowsType = 'sm/portrait' | 'sm/landscape' | 'md/portrait' | 'md/landscape' | 'lg/portrait' | 'lg/landscape' | '?' | 'not'