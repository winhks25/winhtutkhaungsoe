import type { ProjectDetails } from './project-details';
import preview from '../assets/mcnus/preview.png';

// Source: the user-supplied Myanmar Community At NUS.md.
export const mcnusDetails = {
  hero: {
    image: preview,
    alt: 'Myanmar Community at NUS website showing a community group photo and the Who We Are section',
  },
  tagline: 'Built by the community, for the community.',
  links: [
    {
      label: 'Live website',
      href: 'https://www.myanmarcommunitynus.com/',
      primary: true,
    },
    {
      label: 'GitHub repo',
      href: 'https://github.com/ZweZeya/mcnus',
    },
  ],
  role: 'Front-end Contributor',
  overview: [
    [
      'The official website of the ',
      {
        strong: 'Myanmar Community at NUS',
      },
      ', built to connect Burmese students and alumni while sharing community news, events, initiatives, and support resources.',
    ],
    [
      {
        strong: 'Mission:',
      },
      ' To promote cultural exchange and mutual support among NUS students and alumni.',
    ],
    [
      {
        strong: 'Vision:',
      },
      ' To foster a vibrant and united community through shared experiences.',
    ],
  ],
  contributions: [
    [
      'Refactored and improved the ',
      {
        strong: 'Admin Dashboard UI',
      },
      ', enhancing its structure, consistency, and usability.',
    ],
    [
      'Redesigned and refined ',
      {
        strong: 'event-related pages',
      },
      ' to provide a more polished and consistent user experience.',
    ],
  ],
  contributionsFormat: 'list',
  learnings: [
    [
      'Contributing to an existing codebase gave me experience ',
      {
        strong: 'understanding and improving code written by other developers',
      },
      ' rather than building everything from scratch. I also gained practical experience ',
      {
        strong: 'refactoring React UI components',
      },
      ', working with an established design system, and collaborating through ',
      {
        strong: 'Git and GitHub',
      },
      ' in a team environment.',
    ],
  ],
} satisfies ProjectDetails;
