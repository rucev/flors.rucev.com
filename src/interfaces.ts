export type View = 'landing' | 'skills' | 'projects' | 'exp' | 'contact'

export type Topic = 'other' | 'partnership' | 'work' | 'content' | 'feedback' | 'bug' | 'privacy'

export interface ExperienceItem {
  role: string;
  years: string;
  company: string;
  content: string;
}

export type Experience = ExperienceItem[];