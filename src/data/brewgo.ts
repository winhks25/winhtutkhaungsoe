import type { ProjectDetails } from './project-details';

export const brewgoDetails = {
  tagline: 'A smoother queue. A better coffee break.',
  hero: {
    artwork: 'brewgo',
    alt: 'BrewGo project cover: charity coffee, orders, queue, and collection.',
  },
  overview: [
    [
      'BrewGo is an open-source, web-based queue management system being developed for a charity coffee booth. It brings order management and preparation progress into one workflow, while customers can follow their orders and receive notifications when drinks are ready.',
    ],
    [
      'The project aims to reduce waiting times and help booth staff coordinate service, from taking an order to handing over a finished drink.',
    ],
  ],
  role: 'Project Lead · Full-Stack Developer',
  stack: ['Next.js'],
  status: ['In progress'],
  contributionsFormat: 'list',
  contributions: [
    [
      'Lead a team of six developers with varying experience levels in building the application.',
    ],
    [
      'Oversee project planning, technology stack selection, and system architecture design.',
    ],
    [
      'Contribute to feature implementation, testing, deployment, and technical documentation.',
    ],
  ],
  features: [
    {
      title: 'Order Management',
      description: 'Create, update, and manage customer orders in real time.',
    },
    {
      title: 'Queue Management',
      description:
        'Organize orders into a queue and track preparation progress.',
    },
    {
      title: 'Customer Order Tracking',
      description:
        'Let customers track order status through a QR-code-accessible webpage.',
    },
    {
      title: 'Real-Time Notifications',
      description:
        'Notify customers when their drinks are ready for collection.',
    },
    {
      title: 'Live Pickup Display',
      description:
        'Display completed orders on a shared screen for collection.',
    },
    {
      title: 'Menu Management',
      description: 'Manage drink menus, prices, and item availability.',
    },
    {
      title: 'Sales Reporting',
      description:
        'Provide daily sales summaries and insights into booth performance.',
    },
    {
      title: 'Offline Support',
      description:
        'Support essential operations during internet disruptions and synchronize data when connectivity returns.',
    },
    {
      title: 'Role-Based Access Control',
      description:
        'Restrict functionality based on staff roles and responsibilities.',
    },
  ],
  learnings: [],
} satisfies ProjectDetails;
