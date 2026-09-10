export type ExperienceItem = {
  role: string;
  company?: string;
  period: string;
  current?: boolean;
  points: string[];
};

// Add entries here as your work history grows. Omit `company` entirely
// rather than filling it with a placeholder if it isn't set yet.
export const experience: ExperienceItem[] = [
  {
    role: "Backend Software Engineer",
    period: "2026 — Present",
    current: true,
    points: [
      "Developing backend services and REST APIs",
      "Working with database-driven applications",
      "Contributing to modular and scalable software architecture",
      "Collaborating with frontend and backend teams",
    ],
  },
];
