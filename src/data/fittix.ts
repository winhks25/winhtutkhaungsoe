import type { ProjectDetails } from './project-details';

// Source: the user-supplied Fittix.md.
export const fittixDetails = {
  tagline: 'Fast Client Tracking for Fast-Paced Gym Trainers',
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
  role: 'Project Lead · Full-Stack Developer',
  stack: ['Java', 'JavaFX'],
  status: [
    'Currently in active development',
    'MVP targeted for release in October',
  ],
  contributions: [
    [
      'As both a developer and project lead in a five-person team, I contribute to the implementation of the application while coordinating the overall development process. I organize team meetings, define user stories and project scope, prioritize the problems we aim to solve, delegate development tasks, track progress, and ensure that each development milestone is completed on schedule.',
    ],
  ],
  features: [
    {
      title: 'Client Management',
      description:
        'Record and manage client information such as dietary restrictions, fitness goals, workout plans, and other training details.',
    },
    {
      title: 'Workout Tracking',
      description:
        "Track workout sessions and monitor each client's improvements over time.",
    },
    {
      title: 'Progress Visualization',
      description:
        'Visualize client progress through graphs and diagrams and explore how factors such as diet and workouts relate to their results.',
    },
    {
      title: 'Schedule Conflict Assistance',
      description:
        'Detect conflicting training sessions and suggest alternative time slots when scheduling a new session.',
    },
  ],
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
