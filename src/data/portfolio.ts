import { comatchDetails } from './comatch';
import { fittixDetails } from './fittix';
import { mcnusDetails } from './mcnus';
import { bikeDatalakehouseDetails } from './bike-datalakehouse';
import { projectText } from './project-details';
import type { ProjectDetails } from './project-details';

export const profile = {
  name: 'Win Htut Khaung Soe',
  shortName: 'Win',
  email: 'winhks@u.nus.edu',
  github: 'https://github.com/winhks25',
  linkedin: 'https://www.linkedin.com/in/winhks25/',
  location: 'Singapore',
  description:
    'AI student at NUS, developer, and community builder. I build thoughtful software that helps people connect and get things done.',
};

export type Project = {
  slug: 'comatch' | 'fittix' | 'mcnus' | 'bike-datalakehouse';
  number: string;
  name: string;
  category: string;
  headline: string;
  description: string;
  period: string;
  role: string;
  stack: string[];
  repository?: string;
  details: ProjectDetails;
};

export const projects: Project[] = [
  {
    slug: 'bike-datalakehouse',
    number: '01',
    name: 'Bike Sales Data Lakehouse',
    category: 'DATA ENGINEERING',
    headline: bikeDatalakehouseDetails.tagline,
    description:
      'An end-to-end Databricks lakehouse that turns fragmented CRM and ERP bike-sales data into a validated, analytics-ready star schema.',
    period: '2026',
    role: bikeDatalakehouseDetails.role,
    stack: ['Databricks', 'PySpark', 'Spark SQL', 'Delta Lake'],
    details: bikeDatalakehouseDetails,
  },
  {
    slug: 'comatch',
    number: '02',
    name: 'CoMatch',
    category: 'FULL-STACK DEVELOPMENT',
    headline: 'Great ideas deserve great teammates.',
    description:
      'Find teammates for hackathons, academic projects, and independent ideas through shared Spaces, role-based recruitment, and real-time chat.',
    period: 'May 2026 – Present',
    role: comatchDetails.role,
    stack: comatchDetails.stack,
    repository: 'https://github.com/naymin-gif/CoMatch',
    details: comatchDetails,
  },
  {
    slug: 'fittix',
    number: '03',
    name: 'Fittix',
    category: 'DESKTOP APPLICATION',
    headline: fittixDetails.tagline,
    description:
      'A CLI-first client management and tracking app for gym trainers, in active development. Brings client information, workout tracking, progress visualization, and scheduling into one place.',
    period: 'Aug 2026 – Present',
    role: fittixDetails.role,
    stack: fittixDetails.stack,
    details: fittixDetails,
  },
  {
    slug: 'mcnus',
    number: '04',
    name: 'Myanmar Community at NUS',
    category: 'FRONTEND & COMMUNITY',
    headline: mcnusDetails.tagline,
    description: projectText(mcnusDetails.overview.slice(0, 1)),
    period: 'May 2026 – Present',
    role: mcnusDetails.role,
    stack: ['Next.js', 'shadcn/ui', 'Git'],
    repository: 'https://github.com/ZweZeya/mcnus',
    details: mcnusDetails,
  },
];

export const experience = [
  {
    title: 'Teaching Assistant · CS2030S',
    organization: 'National University of Singapore',
    period: 'Aug 2026 – Present',
    description:
      'Mentoring 40+ undergraduates each week in Java, object-oriented and functional programming. Helping students debug, think through design, and become more confident developers.',
    tag: 'TEACHING',
  },
  {
    title: 'Residential Assistant',
    organization: 'PGP Residence · NUS',
    period: 'May 2026 – Present',
    description:
      'Helping build a safe, enriching residential community and supporting cluster leaders in bringing students together.',
    tag: 'COMMUNITY',
  },
  {
    title: 'Vice President',
    organization: 'Myanmar Community at NUS',
    period: 'Sep 2025 – Sep 2026',
    description:
      'Led event planning, coordinated collaborations with student groups and external organisations, and supported the executive committee in strengthening the community.',
    tag: 'LEADERSHIP',
  },
  {
    title: 'YSEALI Academic Fellow',
    organization: 'Portland State University · United States',
    period: 'Oct 2024',
    description:
      'Selected by the U.S. Department of State for community involvement in Myanmar to study leadership, civic engagement, and social service.',
    tag: 'FELLOWSHIP',
  },
];

export const skills = [
  {
    label: 'Languages',
    items: [
      'Java',
      'Python',
      'TypeScript',
      'JavaScript',
      'C',
      'SQL',
      'HTML / CSS',
    ],
  },
  {
    label: 'Interfaces & systems',
    items: [
      'React',
      'Next.js',
      'Tailwind CSS',
      'shadcn/ui',
      'Framer Motion',
      'Supabase',
      'PostgreSQL',
    ],
  },
  {
    label: 'Tools & testing',
    items: [
      'Git',
      'GitHub',
      'Vitest',
      'Playwright',
      'Vercel',
      'VS Code',
      'IntelliJ',
    ],
  },
];
