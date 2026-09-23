import spaces from '../assets/comatch/spaces.png';
import recruitment from '../assets/comatch/recruitment.png';
import dashboard from '../assets/comatch/dashboard.png';
import chat from '../assets/comatch/chat.png';

// Content and screenshot provenance: docs/COMATCH-CASE-STUDY.md.
export const comatchStudy = {
  team: 'Win Htut Khaung Soe & Nay Min Thar',
  demo: 'https://co-match-two.vercel.app/',
  introduction:
    'CoMatch helps students find teammates for hackathons, academic projects, and independent ideas. It brings project discovery, role-based recruitment, application tracking, and real-time conversations into one place.',
  solution:
    'A shared Space gives each module, competition, or project community a home. Users can create their own Spaces, publish the roles they need, and review potential teammates through profiles and conversations. Recruitment stays connected to the project it belongs to.',
  cover: {
    image: spaces,
    alt: 'CoMatch Spaces page with owned project communities and links to explore or create a Space',
    caption: 'Spaces bring related projects and potential teammates together.',
  },
  journey: [
    {
      title: 'Discover a project. Find your role.',
      description:
        'Within a Space, recruitment posts describe the idea, open roles, available positions, and expected weekly commitment. Applicants choose a role and introduce themselves; profiles add context about their skills and interests.',
      image: recruitment,
      alt: 'CoMatch recruitment post showing open roles, available positions, and an Apply button',
    },
    {
      title: 'Keep every application in view.',
      description:
        'The dashboard separates requests received from applications sent. Project owners review applicants and confirm decisions, while applicants track pending, approved, or rejected requests. Unread indicators point to new activity.',
      image: dashboard,
      alt: 'CoMatch incoming applications dashboard with applicant cards and approved or rejected status badges',
    },
    {
      title: 'Turn an introduction into a conversation.',
      description:
        'Chat links on profiles, posts, and member directories lead into one-to-one messaging. Existing conversations reopen with their history, and new messages arrive through Supabase Realtime without a page refresh.',
      image: chat,
      alt: 'CoMatch chat workspace with a conversation list and a two-person message thread',
    },
  ],
  decisions: [
    {
      title: 'One conversation, whichever person starts it',
      problem:
        'The same two people can begin a conversation from several places in the product.',
      decision:
        'The documented data model links messages to a conversation between two users. Opening a chat looks for that pair before creating a thread, so the interface can return to the same history.',
      tradeoff:
        'A database constraint and concurrent-request testing are important follow-ups: a lookup alone does not guarantee that simultaneous requests cannot create duplicate threads.',
    },
    {
      title: 'Notifications that explain what changed',
      problem:
        'An applicant and a project owner need to act on different kinds of updates.',
      decision:
        'Separate incoming and outgoing tabs use owner_seen and applicant_seen flags. A global badge draws attention to the dashboard; tab and card indicators identify the request or decision to review.',
      tradeoff:
        'Read state adds coordination across the navigation and dashboard. Multiple tabs and simultaneous updates are useful cases for deeper behavioural testing.',
    },
    {
      title: 'Comments that stay with the post',
      problem:
        'The documentation records scrolling and focus problems with overlay-based comments.',
      decision:
        'Comments expand inside the recruitment card instead. Readers can ask a question while keeping the project details in the same page context.',
      tradeoff:
        'Long discussions make cards taller. Collapsing comments keeps the feed manageable; pagination would be a natural next step as discussions grow.',
    },
  ],
  testing: [
    {
      title: 'Components',
      tools: 'Vitest · React Testing Library',
      description:
        'The documented unit suites cover rendering and interaction for buttons, badges, cards, avatars, and search input, with external dependencies mocked.',
    },
    {
      title: 'Database integration',
      tools: 'Vitest · Supabase',
      description:
        'Integration checks exercise schema and query compatibility for Space membership, conversations and messages, application status, and notification fields.',
    },
    {
      title: 'Browser journeys',
      tools: 'Playwright',
      description:
        'The documented browser suites check login controls, redirects from protected routes, and search-input interaction. These are focused checks, rather than proof of every signed-in workflow.',
    },
  ],
};
