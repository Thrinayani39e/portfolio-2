export interface SkillGroup {
  key: string;
  category: string;
  icon: string;
  color: 'violet' | 'cyan';
  skills: string[];
}

export interface ExperienceEntry {
  company: string;
  role: string;
  period: string;
  location: string;
  type: 'full' | 'intern';
  bullets: string[];
  tags: string[];
}

export interface Education {
  degree: string;
  school: string;
  gpa: string;
  expected: string;
  courses: string[];
  extra: string;
}

export interface Project {
  title: string;
  slug: string;
  subtitle: string;
  image?: string;
  description: string;
  highlights: string[];
  tags: string[];
  github: string;
  featured?: boolean;
  color: 'violet' | 'cyan';
}

export interface Publication {
  title: string;
  venue: string;
  year: number;
  abstract: string;
  tags: string[];
  github: string;
  color: 'violet' | 'cyan';
}

export interface Recommendation {
  text: string;
  author: string;
  title: string;
  company: string;
  relation: string;
  initials: string;
  color: 'violet' | 'cyan';
}

export interface ContactItem {
  icon: string;
  label: string;
  value: string;
  link: string | null;
}

export interface NavLink {
  id: string;
  label: string;
}
