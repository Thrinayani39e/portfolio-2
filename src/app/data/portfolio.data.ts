import {
  SkillGroup,
  ExperienceEntry,
  Education,
  Project,
  Publication,
  Recommendation,
  ContactItem,
  NavLink,
} from './portfolio.types';

// ─── Avatar ───────────────────────────────────────────────────────────────────
export const AVATAR_URL = 'https://avatars.githubusercontent.com/u/81462878?v=4';

// ─── About (personal) ─────────────────────────────────────────────────────────
export const ABOUT = {
  headline: 'Software engineer by training. Researcher by curiosity. Mentor by instinct.',
  paragraphs: [
    'I grew up endlessly curious about how complex systems work — from how factories talk to PLCs to how a spiking neuron fires. That curiosity eventually landed me at Schneider Electric R&D, where I built production software for industrial plants, and later at UW Bothell, where I research computer vision and AI.',
    'Outside of building things, I spend a lot of time helping people learn. Whether it\'s walking a junior RF engineer through machine learning fundamentals or tutoring algorithms at 11pm before an exam — I genuinely love watching things click for someone.',
    'I believe the best engineers write code that\'s obvious, ship things that work, and explain ideas to anyone.',
  ],
  currentFocus: [
    'MS Computer Science @ UW Bothell (GPA 3.83)',
    'Open to Summer / Fall 2026 SWE internships',
    'Researching computer vision & generative AI',
  ],
  funFacts: [
    'Collaborated with the Engineering Director of Minecraft on a C++ research project',
    'Two IEEE-published papers, both from my undergrad years',
    'I\'ve tutored students in everything from Linear Algebra to OS internals',
    'Built a local-first focus tool that runs an LLM entirely on your laptop',
  ],
  location: 'Redmond, WA (F-1 OPT/CPT eligible)',
};

// ─── Personal ─────────────────────────────────────────────────────────────────
export const OWNER = {
  name: 'Thrinayani Yedhoti',
  nameShort: 'TY',
  email: 'thri9e@uw.edu',
  phone: '+1 (425) 321-9128',
  location: 'Redmond, WA',
  visaStatus: 'F-1 CPT/OPT Eligible',
  github: 'https://github.com/Thrinayani39e',
  linkedin: 'https://linkedin.com/in/thrinayani-yedhoti-a65044210',
  tagline: 'Open to Summer / Fall 2026 Internships',
};

// ─── Hero ─────────────────────────────────────────────────────────────────────
export const HERO = {
  roles: [
    'Software Design Engineer',
    'Backend Systems Builder',
    'AI / ML Researcher',
    'Full-Stack Developer',
    'IEEE-Published Author',
  ],
  bio: {
    line1: 'MS Computer Science &#64; UW Bothell · GPA 3.83',
    highlights: ['backend engineering', 'industrial automation', 'AI research'],
    line2: 'Building production systems at the intersection of',
  },
  stats: [
    { value: '1.5+', label: 'yrs prod exp' },
    { value: '2',    label: 'IEEE papers' },
    { value: '10+',  label: 'languages & frameworks' },
  ],
};

// ─── Navigation ───────────────────────────────────────────────────────────────
export const NAV_LINKS: NavLink[] = [
  { id: 'about',           label: 'About' },
  { id: 'skills',          label: 'Skills' },
  { id: 'experience',      label: 'Experience' },
  { id: 'projects',        label: 'Projects' },
  { id: 'publications',    label: 'Publications' },
  { id: 'recommendations', label: 'Recommendations' },
  { id: 'contact',         label: 'Contact' },
];

export const NAV_SECTIONS = ['hero', ...NAV_LINKS.map(l => l.id)];

// ─── Skills ───────────────────────────────────────────────────────────────────
export const SKILLS: SkillGroup[] = [
  { key: 'languages',    category: 'Languages',    icon: '{ }', color: 'violet', skills: ['Java', 'Python', 'TypeScript', 'C#', 'C++', 'JavaScript', 'SQL'] },
  { key: 'backend_apis', category: 'Backend & APIs', icon: '⚡', color: 'cyan',   skills: ['Spring Boot', 'FastAPI', 'ASP.NET', 'Node.js', 'REST APIs', '.NET', 'Hibernate / JPA'] },
  { key: 'databases',    category: 'Databases',    icon: '▣',  color: 'violet', skills: ['PostgreSQL', 'MySQL', 'Redis', 'SQLite', 'SQLAlchemy'] },
  { key: 'frontend_ui',  category: 'Frontend & UI', icon: '◈',  color: 'cyan',   skills: ['Angular', 'WPF', 'RBAC / OAuth', 'HTML / SCSS'] },
  { key: 'devops_cloud', category: 'DevOps & Cloud', icon: '☁', color: 'violet', skills: ['Docker', 'Docker Compose', 'Docker Swarm', 'CI/CD', 'GitHub Actions', 'Azure DevOps'] },
  { key: 'ai_ml',        category: 'AI / ML',      icon: '◉',  color: 'cyan',   skills: ['PyTorch', 'CNNs', 'Spiking Neural Networks', 'OpenCV', 'Computer Vision', 'LLM Integration', 'Ollama'] },
];

// ─── Education ────────────────────────────────────────────────────────────────
export const EDUCATION: Education = {
  degree: 'MS, Computer Science & Software Engineering',
  school: 'University of Washington, Bothell',
  gpa: '3.83 / 4.0',
  expected: 'Expected March 2027',
  courses: [
    'Advanced Computer Vision',
    'Algorithm Analysis & Design',
    'Software Architecture',
    'Generative AI',
    'Research Methods in SE',
  ],
  extra: 'CS Grader — Introduction to AI (Jan – Mar 2026)',
};

// ─── Experience ───────────────────────────────────────────────────────────────
export const EXPERIENCE: ExperienceEntry[] = [
  {
    company: 'Schneider Electric',
    role: 'Software Design Engineer',
    period: 'Feb 2025 – Aug 2025',
    location: 'Bengaluru, India · R&D / Industrial Automation',
    type: 'full',
    bullets: [
      'Reduced PLC license validation time by 30% by engineering a GSE mechanism for Unity M580 industrial controllers using C# and WPF with full unit test coverage.',
      'Decreased carbon emission reporting latency for manufacturing plants by architecting a real-time edge computing pipeline in Python and FastAPI.',
      'Accelerated vulnerability inspection workflows by building user management dashboards and RBAC-based access controls using Angular and ASP.NET.',
    ],
    tags: ['C#', 'WPF', 'FastAPI', 'Python', 'Angular', 'ASP.NET', 'RBAC'],
  },
  {
    company: 'Schneider Electric',
    role: 'Graduate Engineer Trainee',
    period: 'Aug 2024 – Feb 2025',
    location: 'Bengaluru, India · R&D / Industrial Automation',
    type: 'full',
    bullets: [
      'Reduced application load times by 20% by refactoring .NET, WPF, and Angular codebases supporting industrial automation software with maintained unit test coverage.',
      'Accelerated database query execution by 40% by designing an ORM-based data architecture using SQLite and SQLAlchemy.',
    ],
    tags: ['.NET', 'WPF', 'Angular', 'SQLite', 'SQLAlchemy', 'Unit Testing'],
  },
  {
    company: 'Schneider Electric',
    role: 'Software Engineer Intern',
    period: 'Jan 2024 – Jul 2024',
    location: 'Bengaluru, India · R&D / Industrial Automation',
    type: 'intern',
    bullets: [
      'Shipped a production-ready RBAC system using C#, Angular, and .NET with zero vulnerabilities across Sonar and Coverity static analysis.',
      'Delivered clean, well-tested code reviewed by senior engineers across the full development lifecycle.',
    ],
    tags: ['C#', 'Angular', '.NET', 'SonarQube', 'Coverity'],
  },
];

// ─── Projects ─────────────────────────────────────────────────────────────────
export const PROJECTS: Project[] = [
  {
    title: 'LockIn',
    slug: 'lockin',
    subtitle: 'Local-first Focus & Productivity Guard',
    description:
      'A privacy-first productivity tool that uses a locally-running LLM (Ollama) to filter YouTube content and quarantine off-topic desktop files — zero cloud dependency, zero API costs.',
    highlights: [
      'Real-time YouTube overlay via Chrome extension (Manifest V3)',
      'Desktop file guard scanning ~/Desktop for focus alignment',
      'Profile-based LLM classification using llama3.2 & gemma4',
      'Full local stack — JavaFX + Ollama over localhost only',
    ],
    tags: ['Java 21', 'JavaFX', 'Chrome Extension', 'Ollama', 'LLM', 'Manifest V3'],
    github: 'https://github.com/Thrinayani39e/LockIn',
    featured: true,
    color: 'violet',
  },
  {
    title: 'Distributed Rate Limiter',
    slug: 'rate-limiter-service',
    subtitle: 'Production-grade Microservice',
    description:
      'A production-ready distributed rate-limiting backend implementing token bucket and sliding window algorithms via Redis atomic operations, with full audit trails persisted to PostgreSQL.',
    highlights: [
      'Token bucket (10 req/s) + sliding window (20 req/60s) via Redis',
      'Full audit trail persisted via Hibernate/JPA to PostgreSQL',
      'HTTP 429 enforcement with per-client analytics endpoints',
      'Deployed via Docker Swarm with GitHub Actions CI/CD',
    ],
    tags: ['Java 17', 'Spring Boot 3', 'Redis', 'PostgreSQL', 'Docker Swarm', 'CI/CD'],
    github: 'https://github.com/Thrinayani39e/rate-limiter-service',
    featured: true,
    color: 'cyan',
  },
  {
    title: 'Fast Marching Method',
    slug: 'fast-marching-method',
    subtitle: 'Ride the Wave — Optimal Image Seamlines',
    description:
      "Outperformed OpenCV's GraphCutSeamFinder and DPSeamFinder by implementing an FMM-based seam finder. Collaborated with Lawrence Sanchez (Engineering Director, Minecraft/Microsoft).",
    highlights: [
      'Solved Eikonal equation over fused cost fields (color, edge, texture, saliency)',
      'Globally optimal seam paths with stable runtime across benchmarks',
      'Outperformed GraphCutSeamFinder and DPSeamFinder on parallax artifact suppression',
      'Collaboration with Engineering Director at Minecraft/Microsoft',
    ],
    tags: ['C++', 'OpenCV', 'Computer Vision', 'Image Processing', 'FMM'],
    github: 'https://github.com/Thrinayani39e/Fast_Marching_Method_Ride_the_Wave',
    color: 'violet',
  },
  {
    title: 'Spiking Neural Networks',
    slug: 'snn-research',
    subtitle: 'IEEE-Published · Fashion & Anomaly Detection',
    description:
      'Dual IEEE-published research on applying attention-based spiking neural networks to fashion product labelling and network anomaly detection — biologically-inspired temporal computation.',
    highlights: [
      'IEEE 2024: Fashion Product Labelling via Attention-SNN',
      'IEEE 2024: Network Anomaly Detection via SNN',
      'Temporal spike coding for energy-efficient inference',
      'PyTorch-based spiking neuron models with attention mechanisms',
    ],
    tags: ['Python', 'PyTorch', 'SNNs', 'Deep Learning', 'IEEE', 'Jupyter'],
    github: 'https://github.com/Thrinayani39e/FashionItemsSNN',
    color: 'cyan',
  },
  {
    title: 'CNN Age Estimation',
    slug: 'age-detection-cnn',
    subtitle: 'IEEE-Published · Diverse Facial Datasets',
    description:
      'IEEE-published research on accurate age estimation using CNNs trained on diverse, multi-demographic facial datasets — addressing bias in neural age prediction.',
    highlights: [
      'IEEE 2024: CNN-Based Age Estimation',
      'Multi-demographic dataset evaluation for fairness',
      'Custom CNN architecture with data augmentation pipelines',
      'OpenCV preprocessing + PyTorch training pipeline',
    ],
    tags: ['Python', 'PyTorch', 'CNNs', 'OpenCV', 'Computer Vision', 'IEEE'],
    github: 'https://github.com/Thrinayani39e/AgeDetectionCNN',
    color: 'violet',
  },
];

// ─── Publications ─────────────────────────────────────────────────────────────
export const PUBLICATIONS: Publication[] = [
  {
    title: 'Attention-Based Spiking Neural Networks for Fashion Product Labelling',
    venue: 'IEEE',
    year: 2024,
    abstract:
      'Explores biologically-inspired spiking neural networks augmented with attention mechanisms for multi-label fashion product classification. Demonstrates energy-efficient temporal spike coding outperforming conventional CNNs on fashion datasets.',
    tags: ['Spiking Neural Networks', 'Attention Mechanisms', 'Fashion AI', 'PyTorch'],
    github: 'https://github.com/Thrinayani39e/FashionItemsSNN',
    color: 'violet',
  },
  {
    title: 'CNN-Based Age Estimation using Diverse Facial Datasets',
    venue: 'IEEE',
    year: 2024,
    abstract:
      'Proposes a convolutional neural network architecture for robust age estimation trained on demographically diverse facial datasets, addressing bias and improving prediction accuracy across age groups and ethnicities.',
    tags: ['CNNs', 'Computer Vision', 'Fairness in AI', 'OpenCV', 'PyTorch'],
    github: 'https://github.com/Thrinayani39e/AgeDetectionCNN',
    color: 'cyan',
  },
];

// ─── Recommendations ──────────────────────────────────────────────────────────
export const RECOMMENDATIONS: Recommendation[] = [
  {
    text: 'I had the pleasure of working with Thrinayani on a group project for a graduate-level course at the University of Washington. Thrinayani demonstrated a level of professionalism and maturity I would expect from an industry hire rather than a student. Thrinayani played many different roles on the project: implementing features in C++, co-authoring proposals and design documents, and representing the group during in-class presentations. Thrinayani always met deadlines and even found time to help other members of the team meet their deadlines. Thrinayani already possesses many of the key attributes found in engineering leaders, and I would be happy to work with her again in either an academic or professional setting.',
    author: 'Lawrence Sanchez',
    title: 'Engineering Director, Minecraft',
    company: 'Microsoft',
    relation: 'Worked together on the same team',
    initials: 'LS',
    color: 'violet',
  },
  {
    text: 'I received mentorship from Thrinayani as I explored machine learning beyond my core Electronics and Communication Engineering curriculum. Thrinayani provided exceptional guidance in structuring my learning journey. She offered comprehensive roadmaps for prioritizing topics and identifying beneficial resources suited to my engineering background. Her strategic approach helped me navigate the field systematically. Thrinayani\'s comprehensive understanding of machine learning principles, combined with her ability to structure learning paths for students from different engineering backgrounds, establishes her as an invaluable mentor for interdisciplinary exploration.',
    author: 'Gayatri Lakshmi Apoorva Maturi',
    title: 'Junior RF Engineer',
    company: '',
    relation: 'Mentored in machine learning',
    initials: 'GM',
    color: 'cyan',
  },
  {
    text: 'I had the chance to study alongside Thrinayani during our BTech in Computer Science. Her ability to break down complex technical topics and explain them with clarity consistently impressed me. She\'s a natural educator with a deep understanding of the subject matter — highly recommend working with her in any academic or technical setting.',
    author: 'Pradyumna Machavarapu',
    title: 'Software Engineer',
    company: '',
    relation: 'Studied together',
    initials: 'PM',
    color: 'violet',
  },
  {
    text: 'I\'m delighted to write about my friend Thrinayani. She patiently clarified complex topics like Object-Oriented Programming, making them accessible. Her enthusiasm for Computer Networks ignited my passion, leading me to earn my CCNA certification. As research teammates, her dedication and sharp thinking were crucial to our published paper. Beyond her brilliance, Thrinayani\'s ability to instill confidence makes her an exceptional friend and teammate. The most notable quality she has is that her interest in a topic is contagious, making her an exceptional mentor.',
    author: 'Yogeshwar Kulkarni',
    title: 'Risk Consultant',
    company: 'PwC India',
    relation: 'Studied and researched together',
    initials: 'YK',
    color: 'cyan',
  },
  {
    text: 'For Design and Analysis of Algorithms and Operating Systems, Thrinayani provided me with peer tutoring sessions. Thrinayani continuously showed remarkable patience and commitment. She approached the material from many angles and gave me several explanations until I fully understood any difficult concepts. My academic achievement showed how beneficial her peer tutoring was — my grades significantly improved, demonstrating true comprehension rather than rote memory. Thrinayani\'s dedication to guaranteeing comprehensive concept understanding and her technical proficiency make her an outstanding peer instructor.',
    author: 'Periyavaram Rithika Reddy',
    title: 'Student',
    company: 'Amrita School of Engineering',
    relation: 'Peer tutoring in Algorithms & OS',
    initials: 'PR',
    color: 'violet',
  },
  {
    text: 'I received tutoring sessions from Thrinayani for Linear Algebra, Discrete Mathematics, and foundational programming concepts. Thrinayani demonstrated exceptional patience and adapted her teaching approach to match my learning pace. She ensured thorough understanding of complex concepts before advancing to more challenging material, helping me bridge the knowledge gap with my classmates. Her instruction resulted in substantial improvement in my academic performance. Thrinayani combines strong technical knowledge with excellent teaching skills and genuine dedication to student success.',
    author: 'Sidda Siri Chandana',
    title: 'Software Engineer I',
    company: 'Lam Research',
    relation: 'Peer tutoring in Math & Programming',
    initials: 'SC',
    color: 'cyan',
  },
];

// ─── Contact ──────────────────────────────────────────────────────────────────
export const CONTACT_INFO: ContactItem[] = [
  {
    icon: 'mail',
    label: 'Email',
    value: 'thri9e@uw.edu',
    link: 'mailto:thri9e@uw.edu',
  },
  {
    icon: 'linkedin',
    label: 'LinkedIn',
    value: 'thrinayani-yedhoti',
    link: OWNER.linkedin,
  },
  {
    icon: 'github',
    label: 'GitHub',
    value: 'Thrinayani39e',
    link: OWNER.github,
  },
  {
    icon: 'location',
    label: 'Location',
    value: 'Redmond, WA (F-1 CPT/OPT)',
    link: null,
  },
];

export const CONTACT_INTRO =
  'I\'m actively seeking <strong>Summer / Fall 2026 software engineering internships</strong>, especially in backend systems, industrial software, or AI-adjacent roles. Don\'t hesitate to reach out!';
