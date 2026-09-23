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
  slug: 'comatch' | 'fittix' | 'mcnus';
  number: string;
  name: string;
  category: string;
  headline: string;
  description: string;
  period: string;
  role: string;
  stack: string[];
  repository?: string;
  context: string;
  contributions: { title: string; description: string }[];
  focus: string;
};

export const projects: Project[] = [
  {
    slug: 'comatch',
    number: '01',
    name: 'CoMatch',
    category: 'FULL-STACK DEVELOPMENT',
    headline: 'Great ideas deserve great teammates.',
    description:
      'A teammate-matching platform that helps people find collaborators and turn a shared idea into a conversation.',
    period: 'May 2026 – Present',
    role: 'Full-stack developer',
    stack: ['React', 'Next.js', 'Supabase'],
    repository: 'https://github.com/naymin-gif/CoMatch',
    context:
      'Finding a collaborator is only the first step. CoMatch brings project posts, professional profiles, and one-to-one conversations into a single platform, helping people connect around the things they want to build.',
    contributions: [
      {
        title: 'Conversations, in real time',
        description:
          'Engineered a one-to-one messaging system using Supabase WebSockets, enabling users to communicate after discovering each other through project posts and professional profiles.',
      },
      {
        title: 'A secure way in',
        description:
          'Integrated Google and LinkedIn OAuth through Supabase Auth, with protected routing for sensitive dashboard data.',
      },
      {
        title: 'Confidence in the core flows',
        description:
          'Validated critical user journeys with unit tests in Vitest, integration testing, and end-to-end tests in Playwright.',
      },
    ],
    focus:
      'Real-time communication, authentication, and testing across the full stack.',
  },
  {
    slug: 'fittix',
    number: '02',
    name: 'Fittix',
    category: 'DESKTOP APPLICATION',
    headline: 'Less admin. More time for people.',
    description:
      'A command-first client management app, built for personal trainers between training sessions.',
    period: 'Aug 2026 – Present',
    role: 'Developer',
    stack: ['Java', 'JavaFX', 'Git'],
    context:
      'A trainer’s attention belongs with their clients. Fittix is a CLI-first client management application in development, designed to make recording and retrieving client information efficient between training sessions.',
    contributions: [
      {
        title: 'Built around a trainer’s day',
        description:
          'Developing a client management application around the practical needs of personal trainers, with efficient access to client information.',
      },
      {
        title: 'Keyboard-first workflows',
        description:
          'Designing command-driven workflows for recording and retrieving client information without interrupting the flow of a working day.',
      },
    ],
    focus:
      'Command-driven interaction design and desktop application development with Java and JavaFX. Development is ongoing.',
  },
  {
    slug: 'mcnus',
    number: '03',
    name: 'Myanmar Community at NUS',
    category: 'FRONTEND & COMMUNITY',
    headline: 'A digital home for a shared community.',
    description:
      'Making a student community website more consistent, responsive, and welcoming on every screen.',
    period: 'May 2026 – Present',
    role: 'Frontend contributor',
    stack: ['Next.js', 'shadcn/ui', 'Git'],
    repository: 'https://github.com/ZweZeya/mcnus',
    context:
      'The Myanmar Community at NUS brings students together. As a frontend contributor, I work on the website that supports that community, improving the everyday experience of using its student portal.',
    contributions: [
      {
        title: 'Consistency across the interface',
        description:
          'Refactored frontend components to resolve UI and UX inconsistencies across the community portal.',
      },
      {
        title: 'A better fit for smaller screens',
        description:
          'Improved mobile responsiveness so that the website’s layouts work more comfortably across devices.',
      },
      {
        title: 'Working together to ship fixes',
        description:
          'Collaborated with senior developers to identify and patch high-priority frontend bugs.',
      },
    ],
    focus:
      'Responsive interfaces, component consistency, and collaborative frontend development.',
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
