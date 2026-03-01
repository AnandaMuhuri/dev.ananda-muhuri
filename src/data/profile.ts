/**
 * Portfolio content — matches Ananda_Muhuri_stashfin.pdf resume.
 */

export const PROFILE = {
  name: 'Ananda Muhuri',
  title: 'Backend Engineer | Distributed Systems | Fintech',
  tagline:
    'I build low-latency, scalable backend systems for fin-tech applications and deliver production-grade financial services at Stashfin with NodeJS, TypeScript, MySQL, gRPC and AWS.',
}

export const ABOUT = {
  heading: 'Building High-Impact Fintech Infrastructure',
  paragraphs: [
    `Backend Engineer with experience building low latency, scalable backend systems for fin-tech applications. Currently delivering production-grade financial services and internal platforms at Stashfin using NodeJS, Typescript, MySQL, gRPC and AWS.`,
    `Strong in API design, SQL optimization, micro-service integration and distributed system design. From RBAC and secure internal portals to gRPC/REST micro-services and AWS integrations, I deliver infrastructure that teams can operate at scale.`,
  ],
  metrics: [
    { value: '1000+', label: 'Monthly Users' },
    { value: '<100ms', label: 'Target Latency' },
    { value: '99.9%', label: 'System Uptime' },
    { value: 'RBAC', label: 'Secure Workflows' },
  ],
}

export const EXPERIENCES = [
  {
    title: 'Software Development Engineer (Backend)',
    company: 'Stashfin',
    period: 'Sep 2025 - Present',
    bullets: [
      'Core contributor to the pre-distributed journey of LAMF, contributing to its successful launch as a Closed User Group.',
      'Grew collaborative environment by designing and integrating backend workflows across multiple internal services.',
      'Designed and developed a secure internal Admin Portal for Ops teams, implementing RBAC and Google OAuth, supporting daily customer operations at scale.',
      'Optimized internal workflows by building service-to-service integrations, improving query resolution and performance by up to 20%.',
    ],
  },
  {
    title: 'Software Development Engineer Intern (Full Stack)',
    company: 'Stashfin',
    period: 'Jun 2025 - Aug 2025',
    bullets: [
      'Developed secure file-storage APIs using AWS S3 to handle daily Excel uploads of transaction data, improving scalability and ensuring data integrity.',
      'Designed and deployed gRPC and REST-based micro-services serving 1000+ monthly users with API latency consistently under 100ms.',
      'Built DBPS and RBA service APIs powering 100+ daily financial transactions, enabling real-time MySQL updates.',
      'Collaborated on frontend enhancements using React, improving UI usability for internal teams.',
    ],
  },
  {
    title: 'Summer Intern',
    company: 'National Informatics Centre (NIC)',
    period: 'May 2024 - Jun 2024',
    bullets: [
      'Developed an AI-driven FAQ Chatbot to automate customer inquiries using PostgreSQL, Python, LangChain, and LLM.',
      'Achieved 90% interpretation accuracy in generating SQL queries from natural language during internal testing.',
    ],
  },
]

export const SKILLS = [
  'C',
  'C++',
  'JavaScript',
  'TypeScript',
  'Python',
  'SQL',
  'Java',
  'Golang',
  'Node.js',
  'Express',
  'NestJS',
  'REST APIs',
  'gRPC',
  'Spring Boot',
  'React',
  'Redux',
  'Next.js',
  'Material UI',
  'MySQL',
  'PostgreSQL',
  'MongoDB',
  'AWS',
  'Docker',
  'Kubernetes',
  'Redis',
  'Kafka',
  'CI/CD',
]

export const FEATURED_PROJECTS = [
  {
    id: 'sociosync',
    name: 'SocioSync',
    subtitle: 'MERN Social Hub',
    date: 'Feb 2023',
    description:
      'Built a full-featured social media platform with text, auth, posts, likes and media uploads. Implemented OAuth, optimized Redis-powered state management, and handled images via Multer with Cloudinary integration.',
    tags: ['MongoDB', 'Express', 'React', 'Node.js', 'Redis', 'Multer', 'Mongoose', 'JWT'],
    url: 'https://github.com/AnandaMuhuri',
  },
  {
    id: 'faq-chatbot',
    name: 'FAQ Chatbot',
    subtitle: 'SQL Query Generation',
    date: 'Jan 2024',
    description:
      'Built an NLP-driven chatbot translating natural language queries to precise SQL statements. Improved accessibility by enabling non-technical users to query databases without SQL knowledge.',
    tags: ['PostgreSQL', 'Python', 'LangChain', 'Flask', 'LLM'],
    url: 'https://github.com/AnandaMuhuri',
  },
]

export const EDUCATION = [
  {
    institution: 'National Institute of Technology Agartala',
    degree: 'B.Tech in Electronics and Communication Engineering',
    period: '2021 - 2025',
  },
]

export const ACHIEVEMENTS = [
  'Qualified GATE 2025 (ECE) — Top 13% nationwide',
  'Awarded Idana Uhay Scholarship by UGC — granted to 10,000 students annually from the North-Eastern Region',
  'Secured 2nd position in Junior Mathematics Olympiad (2017)',
]

export const CONTACT = {
  email: 'anandamuhuri@gmail.com',
  linkedin: 'anandamuhuri',
  linkedinUrl: 'https://www.linkedin.com/in/ananda-muhuri-694365220/',
  twitter: 'AnandaMuhuri',
  blurb: `I'm open to new opportunities and collaborations. Whether you have a project in mind or just want to say hi, feel free to reach out.`,
}

export const SOCIAL_LINKS = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/ananda-muhuri-694365220/',
    ariaLabel: 'LinkedIn',
    icon: 'linkedin',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/AnandaMuhuri',
    ariaLabel: 'GitHub',
    icon: 'github',
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/ananda_muhuri09',
    ariaLabel: 'Instagram',
    icon: 'instagram',
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/ananda.muhuri.09',
    ariaLabel: 'Facebook',
    icon: 'facebook',
  },
  {
    label: 'X',
    href: 'https://x.com/ananda_muhuri',
    ariaLabel: 'X',
    icon: 'x',
  },
]
