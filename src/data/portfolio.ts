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
  plan?: {
    status: string;
    target: string;
    team: string[];
    command: string;
    commandDescription: string;
    features: { title: string; description: string }[];
  };
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
      'Find teammates for hackathons, academic projects, and independent ideas through shared Spaces, role-based recruitment, and real-time chat.',
    period: 'May 2026 – Present',
    role: 'Full-stack developer',
    stack: ['Next.js', 'React', 'Supabase', 'PostgreSQL'],
    repository: 'https://github.com/naymin-gif/CoMatch',
    context:
      'Finding teammates often means searching through scattered group chats and spreadsheets. Recruitment posts get buried, availability becomes unclear, and applicants struggle to track responses. CoMatch gives discovery, recruitment, and communication a shared structure.',
    contributions: [
      {
        title: 'Conversations, in real time',
        description:
          'I built the one-to-one messaging system with Supabase Realtime, connecting teammate discovery to direct conversations. The workspace brings message history, live updates, and conversation navigation into the same interface.',
      },
      {
        title: 'A secure way in',
        description:
          'I integrated Google and LinkedIn OAuth through Supabase Auth and protected routing for the dashboard. This work connected provider callbacks, authenticated sessions, and access to personal application data.',
      },
      {
        title: 'Confidence in the core flows',
        description:
          'I contributed testing across the stack using Vitest, database integration checks, and Playwright. The documented coverage includes reusable UI behaviour, database queries, and unauthenticated access to protected pages.',
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
      'A CLI-first client tracking app for gym trainers, currently in ideation. Planned to bring client records, training plans, and progress into one visual workspace.',
    period: 'Aug 2026 – Present',
    role: 'Developer & project manager',
    stack: ['Java', 'JavaFX', 'Git'],
    plan: {
      status: 'In progress · Ideation phase',
      target: 'October 2026',
      team: ['Win Htut Khaung Soe', 'Khoa', 'Hein', 'Fiko', 'Kaiwen'],
      command: 'add n/Josh g/to lose 10kg',
      commandDescription:
        'The proposed command adds Josh as a client and records his goal of losing 10 kg. A graphical interface would present the recorded information for trainers to review.',
      features: [
        {
          title: 'Client information in one place',
          description:
            'Keep client details, body measurements, goals, and dietary restrictions together so trainers can refer to them when planning sessions.',
        },
        {
          title: 'Diet and exercise plans',
          description:
            'Record each client’s diet and workout plans alongside their profile, keeping the guidance and the person it belongs to connected.',
        },
        {
          title: 'Sessions and fee records',
          description:
            'Track workout session dates and times, together with fee-payment records, to keep day-to-day client administration organized.',
        },
        {
          title: 'Progress, with context',
          description:
            'Use graphs or diagrams to review progress alongside diet and workout information, helping trainers spot patterns and discuss changes with their clients.',
        },
      ],
    },
    context:
      'Gym trainers juggle more than exercise sessions: client body information, dietary restrictions, diet and workout plans, fee payments, and session schedules. Fittix aims to bring these records into one place, combining quick, command-driven input with a graphical view of the information.',
    contributions: [
      {
        title: 'Define the problem and scope',
        description:
          'I work as both a developer and project manager. During ideation, I organize meetings, decide on user stories and the problems we should solve, and define the scope of the project.',
      },
      {
        title: 'Coordinate the five-person team',
        description:
          'I delegate work across the team and track each member’s progress, keeping responsibilities clear as we move through the project phases.',
      },
      {
        title: 'Keep deliverables on track',
        description:
          'I coordinate each phase’s deliverables and follow up on progress to keep the team working toward the planned MVP release in October.',
      },
    ],
    focus:
      'The planned technical direction combines Java and JavaFX: fast CLI-first input with a graphical view of client records and progress. The project is currently in ideation; the features above describe the intended scope, with the MVP targeted for October 2026.',
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
