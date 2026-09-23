import type { ProjectDetails } from './project-details';
import preview from '../assets/comatch/preview.png';

// Source: the user-supplied CoMatch.md. See docs/COMATCH-CASE-STUDY.md.
export const comatchDetails = {
  tagline: 'A convenient teammate matching app for all purposes',
  hero: {
    image: preview,
    alt: 'CoMatch website showing a project recruitment feed with open roles and a sidebar of owned and joined spaces',
  },
  links: [
    {
      label: 'Live website',
      href: 'https://co-match-two.vercel.app/',
      primary: true,
    },
    {
      label: 'GitHub repo',
      href: 'https://github.com/naymin-gif/CoMatch',
    },
    {
      label: 'Documentation',
      href: 'https://drive.google.com/file/d/1wgBVu-Bw6yaJ8lQwJnzSLLG81Xzvedm5/view?usp=sharing',
    },
  ],
  overview:
    'CoMatch is a web platform designed to help students and young adults find compatible teammates for academic projects, hackathons, competitions, and independent projects. Users can create project spaces, publish recruitment posts, apply for specific roles, manage applications, and communicate with potential teammates through real-time messaging.',
  role: 'Full-stack developer',
  stack: [
    'Next.js',
    'React',
    'TypeScript',
    'Supabase',
    'PostgreSQL',
    'shadcn/ui',
    'Vercel',
  ],
  contributions: [
    [
      'As part of a two-person team, I contributed across both the frontend and backend of CoMatch. I implemented core features including ',
      {
        strong:
          'user authentication, user profiles, and the application dashboard',
      },
      ', integrating the user interface with Supabase authentication and database operations.',
    ],
    [
      "I also worked extensively on the application's UI using ",
      { strong: 'React, Next.js, Tailwind CSS, and shadcn/ui' },
      ', including refactoring and redesigning pages initially developed by my teammate. Through this process, I improved component reusability, code organization, and UI consistency across the application.',
    ],
  ],
  features: [
    {
      title: 'Spaces & Recruitment',
      description:
        'Create dedicated spaces for projects and publish recruitment posts to find teammates for specific roles.',
    },
    {
      title: 'Application Dashboard',
      description:
        'Manage incoming teammate requests and track the status of applications to other projects.',
    },
    {
      title: 'Profiles',
      description:
        'Create customizable profiles showcasing skills, preferred roles, projects, and external links.',
    },
    {
      title: 'Real-Time Chat',
      description:
        'Communicate directly with potential teammates through private, real-time messaging powered by Supabase Realtime.',
    },
  ],
  learnings: [
    [
      'Building CoMatch gave me practical experience developing a larger application with ',
      { strong: 'Next.js and React' },
      ', beyond smaller standalone projects. I became more comfortable structuring pages and components, managing application state, and connecting the frontend to backend services.',
    ],
    [
      'Working on and refactoring the codebase also helped me better understand software engineering principles such as ',
      { strong: 'Separation of Concerns, Single Responsibility, and DRY' },
      '. I learned how reusable components and clear separation between UI, application logic, and data access make a growing codebase easier to maintain.',
    ],
    [
      'I also gained hands-on experience with the ',
      { strong: 'Supabase ecosystem' },
      ', including PostgreSQL-backed data, authentication, storage, and real-time functionality, and saw how these services work together in a full-stack application.',
    ],
  ],
} satisfies ProjectDetails;
