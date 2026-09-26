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
    liveUrl: "https://real-time-poll-rooms-beta.vercel.app/",
    featured: true,
  },
  {
    slug: "restobook",
    name: "RestoBook",
    description:
      "A restaurant booking platform for discovering restaurants and reserving a table without back-and-forth.",
    tech: ["React", "Next.js", "Backend APIs", "Database"],
    liveUrl: "https://restobook.vercel.app/",
  },
  {
    slug: "qr-generator",
    name: "QR Generator",
    description:
      "A simple web app for generating QR codes instantly from user-provided information.",
    tech: ["React.js", "JavaScript"],
    liveUrl: "https://qr-genrator-iota.vercel.app/",
  },
  {
    slug: "smartdoc-generator",
    name: "SmartDocGenerator",
    description:
      "A document generation app that turns structured input into ready-to-use documents.",
    tech: ["Python", "JavaScript", "Full Stack"],
  },
  {
    slug: "ai-image-colorization",
    name: "AI Image Colorization",
    description:
      "An AI-based tool that converts grayscale images into colorized images using a deep learning model.",
    tech: ["Python", "PyTorch", "Flask", "DeOldify"],
  },
];

export const featuredProject = projects.find((p) => p.featured);
export const otherProjects = projects.filter((p) => !p.featured);

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
