import type { ProjectDetails } from './project-details';
import preview from '../assets/beans&beats/beans&beats-preview.png';

export const beansBeatsQmsDetails = {
  tagline: 'Orders, queues, and pickup in one place.',
  hero: {
    image: preview,
    alt: 'Beans&Beats QMS Preview.',
  },
  links: [
    {
      label: 'Live website',
      href: 'https://beans-beats-qms.vercel.app/',
      primary: true,
    },
    {
      label: 'GitHub repository',
      href: 'https://github.com/bnb-qms/beans-beats-qms',
    },
  ],
  overview: [
    [
      'Beans&Beats QMS is a web-based ',
      { strong: 'queue management system' },
      ' designed to streamline order and queue management for the charity coffee booth at Christmas Together 2026. The event is organized by Beans&Beats Coffee Shop and expected to welcome over 40,000 visitors, with all booth profits donated to ',
      { strong: 'Singapore Red Cross Young Hearts' },
      '.',
    ],
    [
      'It allows staff to manage orders, track preparation progress, and update statuses in real time. Customers can track their orders and receive notifications when their drinks are ready. The system aims to reduce waiting times, improve operational efficiency, and enhance the overall customer experience.',
    ],
  ],
  role: 'Full-stack developer · Project Lead',
  stack: [
    'Next.js (App Router, Route Handlers)',
    'TypeScript',
    'Tailwind CSS',
    'Supabase (Postgres)',
    'Vitest',
    'Vercel',
    'IndexedDB',
    'Service worker',
  ],
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
      'Contribute to feature implementation and testing, deployment, and technical documentation.',
    ],
  ],
  features: [
    {
      title: 'Order Management',
      description:
        'Allows staff to create orders, customise drinks and calculate total prices.',
    },
    {
      title: 'Barista Queue',
      description:
        'Displays incoming orders and allows baristas to update preparation and collection statuses in real time.',
    },
    {
      title: 'Guest Order Tracking',
      description:
        'Enables customers to track their orders through QR codes and receive pickup alerts.',
    },
    {
      title: 'Ready Board',
      description:
        'Displays completed orders and pickup numbers for customers to collect their drinks.',
    },
    {
      title: 'Menu Management',
      description:
        'Allows staff to manage drink prices, availability and menu items.',
    },
    {
      title: 'Sales Reports',
      description:
        'Provides daily sales summaries and CSV exports for revenue tracking and reconciliation.',
    },
    {
      title: 'Offline Support',
      description:
        'Allows staff to continue operations during internet outages and synchronise data upon reconnection.',
    },
    {
      title: 'Staff Authentication',
      description:
        'Provides secure login and role-based access for staff and administrators.',
    },
  ],
  technicalHighlights: [
    {
      title: 'Full-Stack Web Application',
      description:
        'Built with Next.js, TypeScript and Tailwind CSS for a responsive, modern interface.',
    },
    {
      title: 'Real-Time Order Synchronisation',
      description:
        'Uses periodic polling to synchronise order statuses across staff, customer and display screens.',
    },
    {
      title: 'Offline-First Architecture',
      description:
        'Uses IndexedDB and service workers to support offline operations and automatic synchronisation after reconnection.',
    },
    {
      title: 'QR Code Integration',
      description:
        'Generates unique QR codes for order tracking and supports webcam-based QR scanning for order collection.',
    },
    {
      title: 'Role-Based Access Control (RBAC)',
      description:
        'Implements secure staff authentication, session management and server-side authorisation for different roles.',
    },
    {
      title: 'Cloud Database Integration',
      description:
        'Uses Supabase PostgreSQL for persistent order storage, menu management and sales reporting.',
    },
    {
      title: 'Data Privacy & Security',
      description:
        'Implements token-based guest tracking, restricted data access and personal data anonymisation.',
    },
    {
      title: 'Automated Testing & CI/CD',
      description:
        'Uses Vitest for automated testing, GitHub Actions for continuous integration and Vercel for deployment.',
    },
  ],
  learnings: [],
} satisfies ProjectDetails;
