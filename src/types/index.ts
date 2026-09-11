export interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  longDescription?: string;
  category: 'Full Stack' | 'Backend / APIs' | 'AI / Machine Learning' | 'Data Analytics';
  tags: string[];
  metrics?: { label: string; value: string }[];
  architectureSummary?: string;
  githubUrl?: string;
  liveUrl?: string;
  isKnownProject?: boolean;
  placeholderNote?: string;
  image?: string;
}

export interface SkillCategory {
  name: string;
  icon: string;
  skills: {
    name: string;
    isPrimary?: boolean;
    note?: string;
  }[];
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  status: string;
  coursework: string[];
  cgpaPlaceholder?: string;
}

export interface ExperienceItem {
  role: string;
  organization: string;
  location: string;
  period: string;
  type: 'Virtual Internship' | 'Academic Project' | 'Upcoming / Target Role';
  description: string;
  highlights: string[];
  isPlaceholder?: boolean;
}

export interface CertificationItem {
  title: string;
  issuer: string;
  status: 'Certified' | 'Completed' | 'Accredited';
  description: string;
  credentialUrl?: string;
}

export interface UserProfile {
  name: string;
  title: string;
  subtitle: string;
  university: string;
  yearOfStudy: string;
  location: string;
  email: string;
  githubUrl: string;
  linkedinUrl: string;
  resumeUrl: string;
  bio: string[];
}
