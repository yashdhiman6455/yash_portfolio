/**
 * Central configuration for the entire portfolio.
 *
 * Update the URLs below once, and every link across the site picks them up.
 * Placeholder values are intentionally obvious so they are easy to replace.
 */

export const site = {
  name: 'Yash Dhiman',
  initials: 'YD',
  title: 'Web Developer | Full-Stack Developer',
  shortTitle: 'Web Developer',
  tagline: 'Web Developer building scalable web applications.',
  available: true,
  email: 'dyash6455@gmail.com',
  phone: '+91 85698 85563',
  whatsappUrl: 'https://wa.me/918569885563',
  resumeUrl: '/resume/Yash-Resume.pdf',
  resumeDownloadName: 'Yash-Dhiman-Resume.pdf',
  githubUrl: 'https://github.com/yashdhiman6455',
  linkedinUrl: 'https://www.linkedin.com/in/yash-dhiman003/',
  siteUrl: 'YOUR_SITE_URL',
  location: 'India',
  experienceYears: '3+',
  education: {
    degree: 'BCA Graduate',
    current: 'MCA — Chandigarh University (in progress)',
  },
  techStack: ['PHP', 'Laravel', 'MySQL', 'JavaScript', 'Vue', 'Node.js', 'MongoDB'],
}

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

export const hero = {
  badge: 'Available for new opportunities',
  eyebrow: 'PHP • LARAVEL • FULL-STACK',
  headingA: 'Web Developer',
  headingB: 'scalable web applications.',
  description:
    '3+ years of professional experience building Laravel applications, REST APIs, database-driven systems and modern web experiences — now expanding into full-stack JavaScript and MERN.',
  primaryCta: { label: 'View My Work', href: '#projects' },
  secondaryCta: { label: 'Download Resume', href: site.resumeUrl },
  techStack: ['PHP', 'Laravel', 'MySQL', 'JavaScript', 'Vue', 'Node.js', 'MongoDB'],
}

export const about = {
  eyebrow: 'About',
  title: 'About Me',
  paragraphs: [
    "I'm a PHP Laravel developer with over 3 years of professional experience designing and shipping real-world web applications — from authentication and payment integrations to dynamic, database-driven systems built around clean, maintainable code.",
    'My day-to-day work centres on Laravel: modelling relational data with Eloquent, designing REST APIs, wiring third-party services and payment gateways, and keeping applications fast and secure. On the frontend I build reactive interfaces with Vue.js and JavaScript.',
    "I'm currently pursuing my MCA at Chandigarh University and deliberately expanding my stack into Node.js, Express.js, MongoDB and React — moving toward the MERN ecosystem so I can own projects end to end as a full-stack developer.",
  ],
  highlights: [
    { label: 'Experience', value: '3+ years' },
    { label: 'Core Stack', value: 'PHP / Laravel' },
    { label: 'Degree', value: 'BCA' },
    { label: 'In Progress', value: 'MCA + MERN' },
  ],
  journey: [
    { year: '2023', text: 'Started professional web development' },
    { year: '2024', text: 'Expanded Laravel and API development experience' },
    { year: '2025', text: 'Worked on production web applications and integrations' },
    {
      year: '2026',
      text: 'Building advanced Laravel applications and expanding into MERN / full-stack development',
    },
  ],
}

export const experience = [
  {
    role: 'PHP Web Developer',
    company: 'Glocify Technologies',
    period: 'Jan 2025 – July 2026',
    current: false,
    description:
      'Designing and maintaining Laravel-based web applications with a focus on reliability, integrations and performance in production.',
    technologies: ['PHP', 'Laravel', 'MySQL', 'JavaScript', 'Vue.js', 'REST APIs'],
    bullets: [
      'Built and maintained Laravel applications, shipping features from authentication to admin workflows.',
      'Designed and documented REST APIs and integrated them with Vue.js frontends.',
      'Wired third-party services and payment integrations, including webhook handling and error recovery.',
      'Optimized database queries and application performance for production workloads.',
    ],
  },
  {
    role: 'Web Developer',
    company: 'Net Set Software Solutions',
    period: 'June 2023 – Dec 2025',
    current: false,
    description:
      'Developed dynamic, database-driven websites and web applications across PHP and modern frontend tooling.',
    technologies: ['PHP', 'MySQL', 'JavaScript', 'HTML', 'CSS', 'Bootstrap'],
    bullets: [
      'Developed dynamic, database-driven web applications using PHP and MySQL.',
      'Implemented authentication flows and role-based access across client projects.',
      'Collaborated with designers and senior developers to translate requirements into production features.',
      'Improved code quality and maintainability through structured reviews and reusable components.',
    ],
  },
]

export const skillCategories = [
  {
    id: 'backend',
    title: 'Backend',
    icon: 'server',
    description: 'Where I spend most of my time — APIs, data and business logic.',
    skills: ['PHP', 'Laravel', 'REST APIs', 'Authentication', 'Eloquent', 'MySQL'],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    icon: 'layout',
    description: 'Reactive, accessible interfaces that talk to the APIs I build.',
    skills: ['HTML', 'CSS', 'JavaScript', 'Vue.js', 'React'],
  },
  {
    id: 'learning',
    title: 'Currently Learning',
    icon: 'sparkles',
    description: 'Actively expanding into the full-stack JavaScript ecosystem.',
    skills: ['Node.js', 'Express.js', 'MongoDB', 'Mongoose'],
    inProgress: true,
  },
  {
    id: 'tools',
    title: 'Tools & Workflow',
    icon: 'wrench',
    description: 'The daily workflow that keeps development fast and consistent.',
    skills: ['Git', 'GitHub', 'Postman', 'Docker', 'Vite', 'Composer'],
  },
]

export const architecture = {
  eyebrow: 'Process',
  title: 'How I Build',
  description:
    'Every feature follows the same clean layering — a thin frontend, an explicit API boundary, isolated business logic and a well-modelled data layer. This keeps applications testable, maintainable and safe to extend over time.',
  layers: [
    {
      title: 'Frontend',
      tech: ['React', 'Vue'],
      detail: 'Reusable components, clean state management, accessible markup.',
      icon: 'layout',
    },
    {
      title: 'API Layer',
      tech: ['Laravel / Node.js'],
      detail: 'REST endpoints with strict validation and consistent responses.',
      icon: 'route',
    },
    {
      title: 'Business Logic',
      tech: ['Services / Controllers'],
      detail: 'Rules isolated from transport and persistence for clarity and reuse.',
      icon: 'cpu',
    },
    {
      title: 'Database',
      tech: ['MySQL / MongoDB'],
      detail: 'Deliberate schema design — relationships modelled before queries.',
      icon: 'database',
    },
    {
      title: 'External Services',
      tech: ['Stripe / AI APIs'],
      detail: 'Integrations wrapped behind services with webhooks and retry handling.',
      icon: 'cloud',
    },
  ],
  principles: [
    'Clean architecture',
    'Reusable components',
    'Input validation',
    'Secure authentication',
    'Maintainability',
  ],
}

export const resume = {
  eyebrow: 'Resume',
  title: 'Interested in working together?',
  text: 'Looking for opportunities where I can contribute my Laravel experience while growing as a full-stack developer.',
  primaryCta: { label: 'Download Resume', href: site.resumeUrl },
  secondaryCta: { label: 'Contact Me', href: '#contact' },
}

export const contact = {
  eyebrow: 'Contact',
  title: "Let's Build Something Great",
  text: 'Have a project, opportunity, or just want to connect? Feel free to reach out.',
  channels: [
    { label: 'Email', value: site.email, href: `mailto:${site.email}`, icon: 'mail' },
    { label: 'WhatsApp', value: site.phone, href: site.whatsappUrl, icon: 'whatsapp' },
    { label: 'LinkedIn', value: 'Connect on LinkedIn', href: site.linkedinUrl, icon: 'linkedin' },
    { label: 'GitHub', value: 'View my code', href: site.githubUrl, icon: 'github' },
  ],
}

export const projects = [
  {
    id: 'shopsphere',
    name: 'ShopSphere',
    tagline: 'Full-stack e-commerce storefront built with Laravel, Vue.js and MySQL.',
    status: 'Latest Project',
    year: '2025',
    featured: true,
    preview: 'storefront',
    screenshots: [
      '/images/shopsphere-1.png',
      '/images/shopsphere-2.png',
      '/images/shopsphere-3.png',
    ],
    description:
      'A full-stack e-commerce storefront with a Laravel backend serving a Vue.js single-page application — products, categories, cart and checkout, built with MySQL, Vite, HTML, CSS and JavaScript.',
    problem:
      'Many small retailers need a complete, modern storefront — catalogue, cart and checkout — without tying themselves to a closed platform. Existing options are expensive or lock merchants into their ecosystem.',
    solution:
      'A Laravel-driven e-commerce platform backed by MySQL, with a Vue.js single-page frontend bundled through Vite. Product browsing, cart management and checkout are powered by a clean structure of HTML, CSS and JavaScript.',
    features: [
      'Product and category browsing',
      'Product search and filtering',
      'Shopping cart with persistent state',
      'Checkout flow with order creation',
      'Order history and lifecycle tracking',
      'Laravel backend with a MySQL database',
      'Vue.js single-page frontend',
      'Responsive UI built with HTML, CSS and JavaScript',
    ],
    highlights: [
      'Laravel + MySQL backend',
      'Vue.js Composition API frontend',
      'Vite build tooling',
      'Clean separation of HTML, CSS and JavaScript',
      'Relational database design for products, carts and orders',
      'Responsive storefront UI',
    ],
    flow: [],
    challenges: [
      'Keeping cart state consistent between the Vue.js frontend and the Laravel backend.',
      'Modelling relational data for products, carts and orders in MySQL.',
    ],
    learned: [
      'Building a full-stack e-commerce flow from product catalogue to order checkout.',
      'Structuring a Vue.js SPA with clean, maintainable components.',
      'Designing MySQL schemas that keep cart and order data consistent.',
    ],
    tech: ['Laravel', 'PHP', 'Vue.js', 'MySQL', 'Vite', 'JavaScript', 'CSS', 'HTML'],
    demoCredentials: [
      { role: 'Customer', email: 'john@example.com', password: 'password' },
      { role: 'Seller', email: 'seller@shopsphere.com', password: 'password' },
      { role: 'Admin', email: 'admin@shopsphere.com', password: 'password' },
    ],
    links: {
      demo: 'https://shopsphere-frontend-one.vercel.app/',
      github: 'YOUR_GITHUB_URL',
    },
  },
  {
    id: 'formgenius-ai',
    name: 'FormGenius AI',
    tagline: 'AI-powered dynamic form builder built with Laravel and Livewire.',
    status: 'Latest Project',
    year: '2026',
    featured: true,
    preview: 'form-builder',
    screenshots: [
      '/images/formgenius-1.png',
      '/images/formgenius-2.png',
      '/images/formgenius-3.png',
      '/images/formgenius-4.png',
    ],
    description:
      'FormGenius AI lets users describe a form in plain language and get a fully structured, publishable form back — powered by an AI API and rendered dynamically from a generated JSON schema.',
    problem:
      'Building forms manually is repetitive and slow. Non-technical users need forms for surveys, applications and data collection, but existing builders force every field to be configured by hand, field by field.',
    solution:
      'A Laravel + Livewire application that takes a natural-language prompt, calls an AI API to produce a validated JSON form schema, renders the schema as an editable dynamic form, and handles publishing, public submissions and analytics on top of it.',
    features: [
      'AI-powered form generation from a natural-language prompt',
      'Dynamic form builder with drag-and-drop field ordering',
      'Create, edit and delete fields on a live form canvas',
      'Dynamic form schema stored as structured JSON',
      'Form publishing with shareable public forms',
      'Form submissions and an analytics dashboard',
      'Demo submission generation for testing',
      'Word / Excel import functionality',
      'Authentication and per-user form ownership',
      'AI API integration with structured output parsing',
    ],
    highlights: [
      'Laravel architecture with services and actions',
      'Livewire reactive UI with no page reloads',
      'Dynamic JSON form schemas driving rendering and validation',
      'Eloquent relationships across forms, fields and submissions',
      'External AI API integration with typed, validated responses',
      'Analytics queries over submission data',
      'Production deployment and configuration',
    ],
    flow: [
      { label: 'User', detail: 'Describes the form in plain language' },
      { label: 'Laravel', detail: 'Validates the request and orchestrates the flow' },
      { label: 'Livewire', detail: 'Reactive UI responds without full reloads' },
      { label: 'AI API', detail: 'Generates a structured form specification' },
      { label: 'JSON Schema', detail: 'Parsed, validated and stored as the form definition' },
      { label: 'Dynamic Form', detail: 'Rendered and edited from the schema' },
      { label: 'Submissions', detail: 'Published forms collect responses' },
      { label: 'Analytics', detail: 'Dashboards summarize submission data' },
    ],
    challenges: [
      'Normalising unstructured AI output into a strict, validated JSON schema.',
      'Keeping the editor reactive across many field types without page reloads.',
      'Designing a submission model flexible enough for arbitrary form schemas.',
    ],
    learned: [
      'How to design flexible, schema-driven data models that scale beyond fixed forms.',
      'Leveraging Livewire for rich, real-time interfaces without a heavy JS build.',
      'Integrating and hardening third-party AI APIs behind a clean service layer.',
    ],
    tech: ['Laravel 11', 'PHP', 'Livewire', 'MySQL', 'AI API', 'Tailwind CSS', 'Vite'],
    demoCredentials: [
      { role: 'Demo', email: 'demo@gmail.com', password: 'demo1234' },
    ],
    links: {
      demo: 'YOUR_LIVE_DEMO_URL',
      github: 'YOUR_GITHUB_URL',
    },
  },
  {
    id: 'getmyinvoices',
    name: 'GetMyInvoices',
    tagline: 'Browser automation that collects and manages invoices from multiple portals in one place.',
    status: 'Latest Project',
    year: '2025',
    featured: true,
    preview: 'automation',
    screenshots: [],
    description:
      'Selenium-based browser automation built with core PHP for an invoice collection platform — automating login, form filling, navigation and invoice document downloads across supported portals, replacing repetitive manual collection with reliable automated workflows.',
    problem:
      'Collecting invoices meant logging into each portal, navigating inconsistent page layouts and downloading documents one by one — repetitive, error-prone work that did not scale.',
    solution:
      'Automation scripts written in core PHP on top of Selenium WebDriver that authenticate into supported invoice portals, navigate dynamic pages, and locate and download invoice documents into a centralized collection.',
    features: [
      'Automated login and authentication for supported invoice portals',
      'Form filling, navigation and button interactions on dynamic pages',
      'Automated invoice discovery and document location flows',
      'Automatic downloading of invoice documents',
      'Handling of redirects, page-load timing and changing page structures',
      'Reusable automation workflows that reduce manual invoice collection',
    ],
    highlights: [
      'Selenium WebDriver-driven browser automation',
      'Robust element handling for dynamic web pages',
      'Reliable handling of redirects, timing and session state',
      'Maintainable and reusable automation scripts',
    ],
    flow: [],
    challenges: [
      'Debugging flaky element locators on pages with changing structures.',
      'Handling redirects, page-load timing and session state across different portals.',
      'Keeping workflows reliable as portal layouts evolved.',
    ],
    learned: [
      'Hardening browser automation against dynamic-element and timing issues.',
      'Building reusable, maintainable automation workflows for repeated tasks.',
    ],
    tech: ['Selenium', 'Web Automation', 'Core PHP', 'Browser Automation'],
    demoCredentials: [],
    links: {
      demo: '',
      github: 'YOUR_GITHUB_URL',
    },
  },
]
