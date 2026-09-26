export type Project = {
  slug: string;
  name: string;
  description: string;
  problem?: string;
  solution?: string;
  architecture?: string;
  challenges?: string;
  outcome?: string;
  tech: string[];
  features?: string[];
  /** Path under /public. Omit if no real screenshot exists yet — a
   * placeholder is rendered instead. Never fabricate a fake screenshot. */
  image?: string;
  /** Full screenshot set for the project-details gallery. Omit if none
   * exist yet; falls back to `image`, or a "coming soon" state if that's
   * also absent. Never fabricate fake screenshots. */
  images?: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    slug: "real-time-polling-platform",
    name: "Real-Time Polling Platform",
    description:
      "A real-time polling platform where users can create and participate in live polling rooms with instant, synced results.",
    problem:
      "Getting live audience feedback usually means refreshing a page or relying on third-party embeds with no control over the data or the experience.",
    solution:
      "A dedicated polling service where every vote is pushed to connected clients over a WebSocket the moment it's cast, backed by a REST API for room and poll management and MongoDB for persistence.",
    tech: ["Node.js", "React.js", "WebSockets", "MongoDB"],
    features: [
      "Real-time vote broadcasting over WebSockets",
      "Shareable live poll rooms with instant result updates",
      "REST API for poll and room management",
      "MongoDB-backed persistence",
    ],
    image: "/projects/real-time-polling-platform-1-home.png",
    images: [
      "/projects/real-time-polling-platform-1-home.png",
      "/projects/real-time-polling-platform-2-features.png",
      "/projects/real-time-polling-platform-3-login.png",
      "/projects/real-time-polling-platform-4-create-poll.png",
      "/projects/real-time-polling-platform-5-dashboard.png",
    ],
    liveUrl: "https://real-time-poll-rooms-beta.vercel.app/",
    featured: true,
  },
  {
    slug: "restobook",
    name: "RestoBook",
    description:
      "A restaurant booking platform for discovering restaurants and reserving a table without back-and-forth.",
    tech: ["React", "Next.js", "Backend APIs", "Database"],
    image: "/projects/restobook.png",
    images: [
      "/projects/restobook-1-home.png",
      "/projects/restobook-2-about.png",
      "/projects/restobook-3-experience.png",
      "/projects/restobook-4-testimonials.png",
    ],
    liveUrl: "https://restobook.vercel.app/",
  },
  {
    slug: "qr-generator",
    name: "QR Generator",
    description:
      "A simple web app for generating QR codes instantly from user-provided information.",
    tech: ["React.js", "JavaScript"],
    image: "/projects/qr-generator.png",
    images: [
      "/projects/qr-generator-1-home.png",
      "/projects/qr-generator-2-features.png",
      "/projects/qr-generator-3-generator.png",
      "/projects/qr-generator-4-dark-theme.png",
    ],
    liveUrl: "https://qr-genrator-iota.vercel.app/",
  },
  {
    slug: "smartdoc-generator",
    name: "SmartDocGenerator",
    description:
      "A document generation app that turns structured input into ready-to-use documents.",
    tech: ["Python", "JavaScript", "Full Stack"],
    image: "/projects/smartdoc-generator.png",
  },
  {
    slug: "ai-image-colorization",
    name: "AI Image Colorization",
    description:
      "An AI-based tool that converts grayscale images into colorized images using a deep learning model.",
    tech: ["Python", "PyTorch", "Flask", "DeOldify"],
    image: "/projects/ai-image-colorization.png",
  },
  {
    slug: "railwaygo",
    name: "RailwayGo",
    description:
      "A railway information platform for checking train schedules, live running status, PNR status, station details, and seat availability.",
    tech: ["Node.js", "Express", "REST APIs"],
    features: [
      "Train schedules between stations",
      "Live train running status",
      "PNR status checking with passenger details",
      "Station details and information",
      "Seat availability checking across classes",
      "Caching, rate limiting, and request logging",
    ],
    image: "/projects/railwaygo-1-home.png",
    images: [
      "/projects/railwaygo-1-home.png",
      "/projects/railwaygo-2-schedules.png",
      "/projects/railwaygo-3-live-status.png",
      "/projects/railwaygo-4-pnr-status.png",
      "/projects/railwaygo-5-stations.png",
      "/projects/railwaygo-6-seats.png",
    ],
  },
  {
    slug: "word-editor",
    name: "WordEditor",
    description:
      "A browser-based text editor with formatting tools, find & replace, PDF/text export, read-aloud, and real-time text analytics.",
    tech: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
    features: [
      "Text transforms: UPPERCASE, lowercase, Capitalize, Reverse (chars/words)",
      "Undo/redo, find & replace, and adjustable font size",
      "Export to PDF or .txt, plus copy and read-aloud text-to-speech",
      "Real-time word, character, sentence, and paragraph counts",
      "Reading time, average word length, and readability score",
      "Word frequency and top keyword density breakdown",
    ],
    image: "/projects/word-editor-1-editor.png",
    images: [
      "/projects/word-editor-1-editor.png",
      "/projects/word-editor-2-stats.png",
      "/projects/word-editor-3-word-frequency.png",
    ],
  },
  {
    slug: "ai-recruit",
    name: "AI Recruit",
    description:
      "An AI-powered recruitment platform with resume analysis, candidate-job matching, mock interviews, and role-based dashboards for candidates and recruiters.",
    tech: ["React", "Tailwind CSS", "Framer Motion", "Recharts"],
    features: [
      "AI-powered resume parsing and skill extraction",
      "Candidate-to-company and job matching",
      "Automated coding rounds and AI mock interviews",
      "Role-based dashboards for candidates and recruiters",
      "Interactive analytics with skills and match-distribution charts",
      "Hackathon portal for competitions and internships",
    ],
    image: "/projects/ai-recruit-1-home.png",
    images: [
      "/projects/ai-recruit-1-home.png",
      "/projects/ai-recruit-2-features.png",
      "/projects/ai-recruit-3-sign-in.png",
      "/projects/ai-recruit-4-hackathons.png",
    ],
  },
  {
    slug: "portfolio",
    name: "Portfolio",
    description:
      "A personal developer portfolio with a premium dark and gold aesthetic, featuring a blog, certifications, client authentication, and a project inquiry system.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    features: [
      "Animated hero section with profile photo and role headline",
      "\"What I Do\" services and \"My Process\" workflow sections",
      "Interactive skill cards with animated proficiency indicators",
      "Dedicated Certifications and Blog sections",
      "User authentication with login and registration",
      "Contact form with project type and budget selection",
    ],
    image: "/projects/portfolio-1-home.png",
    images: [
      "/projects/portfolio-1-home.png",
      "/projects/portfolio-2-what-i-do.png",
      "/projects/portfolio-3-process.png",
      "/projects/portfolio-4-expertise.png",
      "/projects/portfolio-5-contact.png",
    ],
  },
];

export const featuredProject = projects.find((p) => p.featured);
export const otherProjects = projects.filter((p) => !p.featured);

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
