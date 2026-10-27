import type { ProjectDetails } from './project-details';
import preview from '../assets/nus-exchange-planner/preview.png';

export const nusExchangePlannerDetails = {
  tagline: 'Find where your degree can take you.',
  hero: {
    image: preview,
    alt: 'NUS Exchange Planner recommendation page with faculty, degree programme, continent, country, and city filters.',
  },
  links: [
    {
      label: 'GitHub Repository',
      href: 'https://github.com/winhks25/nus-exchange-planner',
      primary: true,
    },
  ],
  overview: [
    [
      'An open-source web application helping NUS students explore overseas exchange opportunities, browse partner universities, and find course mappings between NUS and partner institutions.',
    ],
    [
      'Recommendations rank partner universities by mapped modules for a selected degree, with faculty and geographic filters to narrow the search. More advanced recommendations and personalized planning support are planned for future versions.',
    ],
    [
      'The Next.js frontend connects to a FastAPI backend for recommendation and mapping logic. Supabase PostgreSQL stores the production catalog, with a JSON snapshot available for local development or rollback.',
    ],
  ],
  role: 'Full-Stack Developer · Individual Project',
  stack: [
    'Next.js 16',
    'React 19',
    'FastAPI',
    'PostgreSQL',
    'Supabase',
    'Python',
    'TypeScript 5.9',
    'Tailwind CSS 4',
    'shadcn/ui',
    'Lucide React',
    'Pydantic 2',
    'Uvicorn',
  ],
  status: ['In progress'],
  contributions: [
    [
      'Developing the application as an individual full-stack project, connecting the university discovery interface with recommendation logic and course-mapping data.',
    ],
  ],
  features: [
    {
      title: 'University Recommendations',
      description:
        'Ranks partner universities based on mapped modules for a selected degree.',
    },
    {
      title: 'Course Mappings',
      description:
        'Shows equivalent courses between NUS and partner universities.',
    },
    {
      title: 'Partner University Directory',
      description:
        'Displays university locations, photos, websites, and course-mapping links.',
    },
    {
      title: 'Geographic Filtering',
      description: 'Narrows universities by continent, country, and city.',
    },
  ],
  learnings: [],
} satisfies ProjectDetails;
