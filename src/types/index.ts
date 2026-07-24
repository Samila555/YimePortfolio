export interface Skill {
  name: string;
  level: number; // 0 - 100
  iconName?: string;
  category: 'programming' | 'frontend' | 'backend' | 'database' | 'tools' | 'soft';
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Project {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  image: string;
  technologies: string[];
  features: string[];
  githubUrl?: string;
  liveDemoUrl?: string;
  category: 'mobile' | 'web' | 'fullstack' | 'ai';
  featured?: boolean;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  description?: string;
  icon?: string;
  image?: string;
  credentialUrl?: string;
}

export interface ExperienceItem {
  id: string;
  title: string;
  organization: string;
  location: string;
  period: string;
  type: 'hackathon' | 'incubation' | 'education' | 'freelance';
  description: string[];
  technologies?: string[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
}
