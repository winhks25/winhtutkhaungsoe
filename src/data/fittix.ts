import fittixUI from '../assets/fittix/fittixUI.png';
import type { ProjectDetails } from './project-details';

// Source: the user-supplied Fittix.md.
export const fittixDetails = {
  tagline: 'Fast Client Tracking for Fast-Paced Gym Trainers',
  hero: {
    image: fittixUI,
    alt: 'Screenshot of the Fittix desktop application interface',
  },
  links: [
    {
      label: 'GitHub repo',
      href: 'https://github.com/AY2627S1-CS2103T-T14-1/tp',
      primary: true,
    },
    {
      label: 'Download v1.4',
      href: 'https://github.com/AY2627S1-CS2103T-T14-1/tp/releases/tag/v1.4',
    },
  ],
  overview: [
    [
      'A client management and tracking application designed for gym trainers. Trainers often need to manage information across many clients, including body measurements, fitness goals, dietary restrictions, diet and workout plans, payment records, and training schedules.',
    ],
    [
      'The app brings this information into one place while using a CLI-first workflow for fast data entry with commands such as ',
      {
        code: 'add n/Josh g/lose 10kg',
      },
      ". A GUI complements the command interface by presenting client information visually. The app also supports progress tracking and visualization to help trainers understand how factors such as diet and workouts relate to a client's progress.",
    ],
  ],
  role: 'Full-stack developer, Project Lead',
  stack: [
    'Java 25',
    'Gradle',
    'JavaFX',
    'CSS',
    'TestFX',
    'OpenFX',
    'JUnit 5',
  ],
  status: ['In progress'],
  contributions: [
    [
      'Led and coordinated the development team, overseeing project planning, task allocation, and overall progress.',
    ],
    [
      'Defined project goals, established development priorities, and ensured the team stayed aligned and on track.',
    ],
    [
      'Designed and implemented key features, including workout plan management, membership plans, and payment records.',
    ],
    [
      'Conducted code reviews, reviewed pull requests, and performed feature testing to maintain code quality and drive continuous improvement.',
    ],
  ],
  contributionsFormat: 'list',
  features: [
    {
      title: 'Record clients',
      description:
        'Add, remove, and edit client details, with support functions such as search, list all clients, clear data, and view all commands.',
    },
    {
      title: 'Training schedule',
      description: "Plan and manage each client's training sessions.",
    },
    {
      title: 'Workout plan management',
      description: 'Create and assign workout plans to clients.',
    },
    {
      title: 'Workout session logging',
      description: 'Record completed workout sessions.',
    },
    {
      title: 'Workout history',
      description: "View a client's past workout history.",
    },
    {
      title: 'Diet goals',
      description: 'Set dietary goals for clients.',
    },
    {
      title: 'Fitness goal tracking',
      description: "Record each client's individual fitness goal.",
    },
    {
      title: 'Health considerations',
      description: 'Note injuries and physical limitations.',
    },
    {
      title: 'Dietary restrictions',
      description: 'Record food restrictions and allergies.',
    },
    {
      title: 'Body progress tracker',
      description: "Track a client's body metrics over time.",
    },
    {
      title: 'Membership plan',
      description: 'Manage client subscriptions and plans.',
    },
    {
      title: 'Advanced scheduling & monitoring',
      description: 'More sophisticated scheduling and client tracking.',
    },
    {
      title: 'Payment records',
      description: 'Record, review, and reverse client payments.',
    },
  ],
  caseStudy: 'fittix',
  learnings: [
    [
      'Working on this project has strengthened my experience building applications with ',
      {
        strong: 'Java and JavaFX',
      },
      ', while giving me practical experience developing a larger application iteratively.',
    ],
    [
      'As the codebase grows across multiple development cycles, I am learning how to structure and refactor code to keep it ',
      {
        strong:
          'maintainable, extensible, and easy for multiple developers to work on',
      },
      '.',
    ],
    [
      'Leading a five-person team has also given me experience with ',
      {
        strong: 'project planning and team coordination',
      },
      ', including defining scope, prioritizing user stories, delegating work, tracking progress, and keeping the team aligned with development milestones.',
    ],
  ],
} satisfies ProjectDetails;
