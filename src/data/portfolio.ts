export const roles = [
  'Full Stack Software Engineer',
  'React & NestJS Developer',
  'Cloud & API Developer',
  'AI-Enhanced Developer',
];

export const skillGroups = [
  { title: 'Frontend', items: ['React', 'Angular 17/19', 'Astro', 'Preact', 'TypeScript', 'JavaScript', 'RxJS', 'Tailwind', 'PrimeNG'] },
  { title: 'Backend', items: ['Node.js', 'NestJS', 'Java', 'C#', '.NET Core', 'ASP.NET', 'REST APIs', 'Microservices', 'TypeORM'] },
  { title: 'Databases', items: ['PostgreSQL', 'MySQL', 'SQL Server', 'MongoDB'] },
  { title: 'Cloud & DevOps', items: ['Docker', 'AWS S3', 'CloudFront', 'Azure', 'Firebase', 'CI/CD', 'Git Flow'] },
  { title: 'Workflow', items: ['Jira', 'Postman', 'VS Code', 'Agile', 'Scrum', 'Spanish', 'English'] },
  { title: 'AI-Assisted Dev', items: ['ChatGPT', 'Claude AI'], ai: true, note: 'Used for code review, debugging, documentation and rapid prototyping.' },
];

export const experiences = [
  {
    company: 'Cineplanet', period: 'April 2026 – June 2026', role: 'Full Stack Software Engineer · Digital Area',
    headline: "Powering Peru's largest cinema chain — end to end.",
    bullets: [
      'Developed full-stack features for digital products using React, Astro and Preact on the frontend, plus NestJS and Java services on the backend.',
      'Built and maintained backend services integrating PostgreSQL, MySQL and SQL Server through TypeORM.',
      'Designed secure REST APIs with JWT/Passport and Azure AD authentication.',
      'Integrated Firebase, Azure Storage and asynchronous processing for content, notifications and operational workflows.',
      'Built a customer-facing Prime room experience for requesting waiter service from the cinema seat.',
    ],
    stack: ['NestJS', 'React', 'Astro', 'Java', 'PostgreSQL', 'Azure AD', 'Firebase'],
  },
  {
    company: 'Fyranova S.A.C.', period: 'October 2025 – March 2026', role: 'Full Stack Software Engineer',
    headline: 'Mission-critical features delivered at pace.',
    bullets: [
      'Designed Angular enterprise modules and C#/.NET backend services for corporate transportation platforms.',
      'Built REST APIs, stored-procedure integrations and reusable domain services.',
      'Implemented Excel-based bulk service creation, production incident fixes and performance improvements.',
      'Worked with AWS S3, CloudFront, Docker and CI/CD-oriented delivery workflows.',
    ],
    stack: ['Angular', 'C#', '.NET Core', 'SQL Server', 'AWS', 'Docker'],
  },
  {
    company: 'Nexus Virtual E.I.R.L.', period: 'February 2022 – September 2025', role: 'Web / Full Stack Developer',
    headline: 'Enterprise systems for transportation and operations.',
    bullets: [
      'Developed administrative and customer-facing applications with Angular, Next.js, C#/.NET and Node.js.',
      'Implemented modules for service control, approvals, reporting, operational automation and integrations.',
      'Optimized SQL Server queries and stored procedures used by high-demand business workflows.',
      'Supported deployments and infrastructure across IIS, AWS S3, CloudFront and related environments.',
    ],
    stack: ['Angular', 'Next.js', 'C# .NET', 'Node.js', 'SQL Server', 'AWS'],
  },
];

export const projects = [
  { name: 'Bulk Transport Service Loader', description: 'Excel-driven module that validates and creates multiple transportation services, routes and passengers from a controlled template.', stack: ['Angular', '.NET', 'SQL Server', 'EPPlus'] },
  { name: 'Prime Room Waiter Request', description: 'Mobile-first customer flow for requesting in-seat assistance, with anti-spam controls and session-aware behavior.', stack: ['Angular', 'NestJS', 'PostgreSQL'] },
  { name: 'Cinema Recommendation API', description: 'Secure recommendation endpoint with optional member identification, hashing and external API integration.', stack: ['NestJS', 'PostgreSQL', 'REST API'] },
];
