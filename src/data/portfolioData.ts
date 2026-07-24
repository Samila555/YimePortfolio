import { Project, Skill, Certification, ExperienceItem, GalleryItem } from '../types';

export const personalInfo = {
  name: 'Yimenu Shiferaw',
  fullTitle: 'Information Systems Graduate | Junior Software Developer',
  titles: [
    'Information Systems Graduate',
    'Junior Software Developer',
    'Mobile & Web Applications Developer',
    'UI/UX Designer & Problem Solver'
  ],
  bio: 'Motivated Information Systems graduate with solid knowledge of software development, database management, system analysis, networking, and information security. Passionate about building impactful mobile and web applications and seeking an opportunity to apply technical expertise and problem-solving skills in a professional environment to drive meaningful outcomes.',
  email: 'yimenu122@gmail.com',
  phone: '+251 942 114 205',
  location: 'Addis Ababa, Ethiopia',
  university: 'University of Gondar',
  cgpa: '3.18 / 4.00',
  exitExam: '67%',
  github: 'https://github.com/yimenu122-sudo',
  linkedin: 'https://www.linkedin.com/in/yimenu-shiferaw',
  profileImage: '/assets/photo.png',
  cvPath: '/Yimenu_Shiferaw_CV.pdf',
  stats: [
    { label: 'CGPA Score', value: 3.18, suffix: ' / 4.0' },
    { label: 'National Exit Exam', value: 67, suffix: '%' },
    { label: 'Full-Stack Projects', value: 4, suffix: '+' },
    { label: 'Hackathon Award', value: 1, suffix: 'st Place' },
  ]
};

export const skillsData: Skill[] = [
  // Programming Languages
  { name: 'Java', level: 85, category: 'programming' },
  { name: 'Python', level: 80, category: 'programming' },
  { name: 'JavaScript (ES6+)', level: 90, category: 'programming' },
  { name: 'PHP (OOP)', level: 82, category: 'programming' },
  { name: 'HTML5', level: 95, category: 'programming' },
  { name: 'CSS3', level: 90, category: 'programming' },

  // Frontend
  { name: 'React.js', level: 88, category: 'frontend' },
  { name: 'React Native', level: 85, category: 'frontend' },
  { name: 'Expo', level: 88, category: 'frontend' },
  { name: 'Flutter', level: 75, category: 'frontend' },
  { name: 'Tailwind CSS', level: 92, category: 'frontend' },
  { name: 'Bootstrap 5', level: 85, category: 'frontend' },

  // Backend
  { name: 'Node.js', level: 85, category: 'backend' },
  { name: 'Express.js', level: 85, category: 'backend' },

  // Databases
  { name: 'PostgreSQL', level: 82, category: 'database' },
  { name: 'MySQL', level: 88, category: 'database' },
  { name: 'MongoDB', level: 78, category: 'database' },

  // Tools
  { name: 'Git', level: 88, category: 'tools' },
  { name: 'GitHub', level: 90, category: 'tools' },
  { name: 'VS Code', level: 95, category: 'tools' },
  { name: 'Figma', level: 80, category: 'tools' },

  // Soft Skills
  { name: 'Leadership', level: 90, category: 'soft' },
  { name: 'Teamwork', level: 95, category: 'soft' },
  { name: 'Problem Solving', level: 92, category: 'soft' },
  { name: 'Critical Thinking', level: 88, category: 'soft' },
  { name: 'Time Management', level: 90, category: 'soft' },
];

export const experienceData: ExperienceItem[] = [
  {
    id: 'exp-1',
    title: 'University of Gondar Incubation Center',
    organization: 'University of Gondar Incubation Center',
    location: 'Gondar, Ethiopia',
    period: 'January 2026 – June 2026',
    type: 'incubation',
    description: [
      'Engineered scalable mobile and web application solutions under university incubation mentorship.',
      'Developed AI-assisted multi-tenant platforms (EthioHome & RAS DEJEN) for real-world municipal & housing deployment.',
      'Optimized backend SQL queries and database schemas for high performance and concurrency.'
    ],
    technologies: ['React Native', 'React.js', 'Node.js', 'Express.js', 'PostgreSQL', 'AI Integration']
  },
  {
    id: 'exp-2',
    title: 'AI-Driven Hackathon Participant & 1st Prize Winner',
    organization: 'University of Gondar College of Informatics & NURTURE Project',
    location: 'Gondar, Ethiopia',
    period: 'April 18–20, 2026',
    type: 'hackathon',
    description: [
      'Participated in the competitive AI-Driven Innovation Hackathon and awarded 1st Prize Winner.',
      'Awarded 7th Prize in the Graduate Final Project Competition Challenge for outstanding innovation and technical execution.',
      'Built interactive AI features including real-time translation and smart mobility algorithm optimizations.'
    ],
    technologies: ['AI Algorithms', 'React Native', 'Expo', 'Python', 'Node.js']
  },
  {
    id: 'exp-3',
    title: 'Junior Software Developer & System Architect',
    organization: 'Academic & Personal Initiatives',
    location: 'Addis Ababa & Gondar, Ethiopia',
    period: '2024 – Present',
    type: 'freelance',
    description: [
      'Designed and deployed complete end-to-end full-stack applications with web and mobile cross-platform support.',
      'Implemented bilingual support (English & Amharic), secure authentication, and responsive modern glassmorphic UIs.'
    ],
    technologies: ['React.js', 'PHP OOP', 'MySQL', 'Tailwind CSS', 'Bootstrap']
  },
  {
    id: 'exp-4',
    title: 'BSc in Information Systems',
    organization: 'University of Gondar',
    location: 'Gondar, Ethiopia',
    period: '2022 – 2026',
    type: 'education',
    description: [
      'Graduated with a CGPA of 3.18 / 4.00 and scored 67% in the National Exit Examination.',
      'Specialized in Software Engineering, Database Systems, Network Administration, System Analysis & Information Security.'
    ],
    technologies: ['Systems Analysis', 'Database Administration', 'OOP', 'Data Structures']
  }
];

export const projectsData: Project[] = [
  {
    id: 'ethiohome',
    name: 'EthioHome',
    subtitle: 'Digital House Rent & Sale Brokering System',
    description: 'A comprehensive, full-stack rental and sale brokerage platform designed for nationwide deployment across all Ethiopian cities. Features cross-platform web and mobile apps, bilingual support (English/Amharic), appointment scheduling, and property management.',
    image: '/assets/ethiohome.png',
    technologies: ['React Native', 'Expo', 'React.js', 'Node.js', 'Express.js', 'PostgreSQL'],
    features: [
      'Cross-Platform (Android, iOS & Web)',
      'Bilingual Support (English & Amharic)',
      'Property Owner & Renter Portals',
      'Agent Appointment & Schedule Management',
      'Interactive Property Search & Filters',
      'Secure Authentication & Role-Based Access'
    ],
    githubUrl: 'https://github.com/yimenu122-sudo/ethiohome',
    liveDemoUrl: 'https://github.com/yimenu122-sudo',
    category: 'fullstack',
    featured: true
  },
  {
    id: 'ras-dejen',
    name: 'RAS DEJEN',
    subtitle: 'Smart Bajaj AI-Powered Secure Mobility Platform',
    description: 'An AI-powered secure mobility solution designed specifically for Bajaj (auto-rickshaw) services in Gondar City. Integrates real-time ride booking, GPS tracking, passenger & driver mobile applications, and a centralized admin control panel.',
    image: '/assets/Smart-bajaj-home.png',
    technologies: ['React Native', 'Expo', 'React.js', 'Node.js', 'Express.js', 'PostgreSQL'],
    features: [
      'Real-Time Passenger Ride Booking',
      'Driver Dispatch & Request Approvals',
      'AI-Powered Route Optimization & Fare Calculator',
      'Live GPS Vehicle Tracking',
      'Bilingual Interface (Amharic & English)',
      'Super Admin & Pricing Control Dashboard'
    ],
    githubUrl: 'https://github.com/yimenu122-sudo/ras-dejen',
    liveDemoUrl: 'https://github.com/yimenu122-sudo',
    category: 'ai',
    featured: true
  },
  {
    id: 'amharic-geez',
    name: 'Amharic ↔ Ge\'ez Translator',
    subtitle: 'AI-Powered Cross-Platform Language Translation Engine',
    description: 'A native cross-platform mobile and web application dedicated to bidirectional translation between Amharic and ancient Ge\'ez. Designed with intuitive typography and smart AI text processing.',
    image: '/assets/amharic-geez.png',
    technologies: ['React Native', 'Expo', 'React.js', 'AI Translation Engine', 'TypeScript'],
    features: [
      'Bidirectional Amharic ↔ Ge\'ez Translation',
      'Cross-Platform (Android, iOS, Web)',
      'Fidel Keyboard Input Integration',
      'Favorite Words & Translation History',
      'Clean Modern Mobile-First UX'
    ],
    githubUrl: 'https://github.com/yimenu122-sudo/amharic-geez-translator',
    liveDemoUrl: 'https://github.com/yimenu122-sudo',
    category: 'mobile',
    featured: true
  },
  {
    id: 'ict-helpdesk',
    name: 'ICT Help Desk Management System',
    subtitle: 'University IT Support & Ticketing System',
    description: 'An end-to-end enterprise IT ticketing and support system engineered for the University of Gondar. Allows faculty and staff to submit support requests, track ticket progress, and manage IT assets.',
    image: '/assets/ICT-home.png',
    technologies: ['PHP (OOP)', 'JavaScript (ES6+)', 'Bootstrap 5', 'MySQL', 'HTML5/CSS3'],
    features: [
      'Staff Support Ticket Generation & Tracking',
      'Admin & Technician Assignment Dashboard',
      'Category-based Ticket Escalation',
      'System Audit Logs & Performance Reports',
      'Secure User Authentication & Session Control'
    ],
    githubUrl: 'https://github.com/yimenu122-sudo/ict-help-desk',
    liveDemoUrl: 'https://github.com/yimenu122-sudo',
    category: 'web',
    featured: true
  }
];

export const certificationsData: Certification[] = [
  {
    id: 'cert-1',
    title: 'Final Project Achievement Certificate',
    issuer: 'University of Gondar College of Informatics in collaboration with the NURTURE Project',
    issueDate: 'Issued June 24, 2026',
    description: 'Awarded Seventh Prize in the Graduate Final Project Competition Challenge.',
    icon: 'Award',
    image: '/assets/Final project.png'
  },
  {
    id: 'cert-2',
    title: 'Certificate of Participation',
    issuer: 'Center of Employability and Entrepreneurship Development, University of Gondar',
    issueDate: 'Issued June 20–21, 2026',
    description: 'Completed training on Purpose-Driven Life, Employability Skills, and Entrepreneurship.',
    icon: 'CheckCircle',
    image: '/assets/Partisipation.png'
  },
  {
    id: 'cert-3',
    title: 'Bachelor of Science in Information Systems',
    issuer: 'University of Gondar | 2022–2026',
    issueDate: 'Academic Achievement',
    description: 'CGPA: 3.18/4.00\nNational Exit Exam: 67%',
    icon: 'GraduationCap',
    image: '/assets/Tempo.png'
  },
  {
    id: 'cert-4',
    title: 'Programming Fundamentals',
    issuer: 'Udacity Nanodegree Program',
    issueDate: 'Issued May 18, 2026',
    description: 'Mastery of foundational programming concepts, algorithmic logic, and clean code.',
    icon: 'Code',
    image: '/assets/udacity1.png'
  }
];

export const galleryData: GalleryItem[] = [
  // ── EthioHome ──────────────────────────────────────────────────────────────
  {
    id: 'gal-eth-1',
    title: 'EthioHome – Main Landing Page',
    category: 'EthioHome',
    image: '/assets/ethiohome.png',
    description: 'Full-page hero view of the EthioHome digital house rent & sale brokering platform.'
  },
  {
    id: 'gal-eth-2',
    title: 'EthioHome – Renter Home Screen',
    category: 'EthioHome',
    image: '/assets/ethiohome-renter-home.png',
    description: 'Renter-facing home with bilingual property listings, search filters, and recommended homes.'
  },
  {
    id: 'gal-eth-3',
    title: 'EthioHome – Admin Dashboard',
    category: 'EthioHome',
    image: '/assets/ehiohome-admin dashboard.png',
    description: 'Administrative control panel for analytics, user management, and property verification.'
  },
  {
    id: 'gal-eth-4',
    title: 'EthioHome – Owner My Property',
    category: 'EthioHome',
    image: '/assets/ethiohome-ower myproperty.png',
    description: 'Property owner dashboard for uploading listings and tracking tenant inquiries.'
  },
  {
    id: 'gal-eth-5',
    title: 'EthioHome – Agent Appointments',
    category: 'EthioHome',
    image: '/assets/ethiohome-agent-apotnment.png',
    description: 'Broker appointment scheduling and calendar management interface.'
  },
  {
    id: 'gal-eth-6',
    title: 'EthioHome – Renter Schedule',
    category: 'EthioHome',
    image: '/assets/ethiohome-renter -schedule.png',
    description: 'Renter side schedule for viewing upcoming home viewing appointments.'
  },

  // ── RAS DEJEN (Smart Bajaj) ────────────────────────────────────────────────
  {
    id: 'gal-rd-1',
    title: 'RAS DEJEN – Bajaj App Home',
    category: 'RAS DEJEN',
    image: '/assets/Smart-bajaj-home.png',
    description: 'Passenger-facing landing screen for booking Bajaj (auto-rickshaw) rides in Gondar.'
  },
  {
    id: 'gal-rd-2',
    title: 'RAS DEJEN – Login Screen',
    category: 'RAS DEJEN',
    image: '/assets/smart-bajaj-login.png',
    description: 'Secure multi-role login page for passengers, drivers, and administrators.'
  },
  {
    id: 'gal-rd-3',
    title: 'RAS DEJEN – Passenger Home',
    category: 'RAS DEJEN',
    image: '/assets/smrt-bajaj-passenger-home.png',
    description: 'Passenger mobile app showing available routes, driver locations, and fare estimate.'
  },
  {
    id: 'gal-rd-4',
    title: 'RAS DEJEN – Passenger Sidebar',
    category: 'RAS DEJEN',
    image: '/assets/smrt-bajaj-passenger-sidebare.png',
    description: 'Passenger app sidebar navigation with profile, history, and settings.'
  },
  {
    id: 'gal-rd-5',
    title: 'RAS DEJEN – Driver Login',
    category: 'RAS DEJEN',
    image: '/assets/smart-bajaj-driver-login.png',
    description: 'Driver authentication screen with credential verification flow.'
  },
  {
    id: 'gal-rd-6',
    title: 'RAS DEJEN – Driver Home Dashboard',
    category: 'RAS DEJEN',
    image: '/assets/smart-bajaj-driver-home.png',
    description: 'Driver dashboard for receiving ride requests, earnings, and trip history.'
  },
  {
    id: 'gal-rd-7',
    title: 'RAS DEJEN – Super Admin Approvals',
    category: 'RAS DEJEN',
    image: '/assets/smart-bajaj-super-admin-approvals.png',
    description: 'Super admin panel for driver document verification and fleet approval.'
  },
  {
    id: 'gal-rd-8',
    title: 'RAS DEJEN – Admin Pricing Panel',
    category: 'RAS DEJEN',
    image: '/assets/smart-bajaj-admin-pricing.png',
    description: 'Administrative fare and pricing management control panel.'
  },

  // ── Amharic ↔ Ge'ez Translator ─────────────────────────────────────────────
  {
    id: 'gal-ag-1',
    title: "Amharic ↔ Ge'ez – Translator UI",
    category: "Amharic-Ge'ez",
    image: '/assets/amharic-geez.png',
    description: "Main translation interface for bidirectional Amharic and Ge'ez conversion."
  },
  {
    id: 'gal-ag-2',
    title: "Amharic ↔ Ge'ez – Fidel Script View",
    category: "Amharic-Ge'ez",
    image: '/assets/amharic-geez1.png',
    description: "Detailed Fidel character breakdown with phonetic pronunciation guide."
  },
  {
    id: 'gal-ag-3',
    title: "Amharic ↔ Ge'ez – Screen 3",
    category: "Amharic-Ge'ez",
    image: '/assets/amharic-geez2.png',
    description: "Additional translator view showing character mapping and history."
  },
  {
    id: 'gal-ag-4',
    title: "Amharic ↔ Ge'ez – Screen 4",
    category: "Amharic-Ge'ez",
    image: '/assets/amharic-geez3.png',
    description: "Translation result display with copy and share functionality."
  },
  {
    id: 'gal-ag-5',
    title: "Amharic ↔ Ge'ez – Screen 5",
    category: "Amharic-Ge'ez",
    image: '/assets/amharic-geez4.png',
    description: "Favorite words and translation history management screen."
  },

  // ── ICT Help Desk ──────────────────────────────────────────────────────────
  {
    id: 'gal-ict-1',
    title: 'ICT Help Desk – Home Portal',
    category: 'ICT Help Desk',
    image: '/assets/ICT-home.png',
    description: 'Staff-facing IT support portal for submitting and tracking support tickets.'
  },
  {
    id: 'gal-ict-2',
    title: 'ICT Help Desk – Login Page',
    category: 'ICT Help Desk',
    image: '/assets/ICT-login.png',
    description: 'Secure authentication login page for University of Gondar IT Help Desk system.'
  },
  {
    id: 'gal-ict-3',
    title: 'ICT Help Desk – Admin Dashboard',
    category: 'ICT Help Desk',
    image: '/assets/ICT=Admin-Dashboard.png',
    description: 'Admin panel for managing, assigning, and resolving IT support tickets.'
  },

  // ── Certificates ───────────────────────────────────────────────────────────
  {
    id: 'gal-cert-1',
    title: 'Final Project Achievement Certificate',
    category: 'Certificates',
    image: '/assets/Final project.png',
    description: '7th Prize in the Graduate Final Project Competition Challenge – UoG & NURTURE Project.'
  },
  {
    id: 'gal-cert-2',
    title: 'Certificate of Participation – CEED',
    category: 'Certificates',
    image: '/assets/Partisipation.png',
    description: 'Participation in entrepreneurship & employability training – University of Gondar CEED.'
  },
  {
    id: 'gal-cert-3',
    title: 'BSc Degree – Tempo Document',
    category: 'Certificates',
    image: '/assets/Tempo.png',
    description: 'Official Bachelor of Science in Information Systems degree confirmation document.'
  },
  {
    id: 'gal-cert-4',
    title: 'Udacity – Programming Fundamentals',
    category: 'Certificates',
    image: '/assets/udacity1.png',
    description: 'Verified Udacity Nanodegree certificate for Programming Fundamentals.'
  }
];

