export type ExperienceItem = {
  /** Stable id — used as the React key. Kebab-case the role is fine. */
  id: string;
  role: string;
  company?: string;
  startDate: string;
  /** "Present" marks this as the current role — the timeline detects this
   * automatically, nothing to toggle by hand. */
  endDate: string;
  description?: string;
  responsibilities: string[];
  technologies?: string[];
};

// Add new entries here as your work history grows — the timeline UI maps
// over this list automatically (newest first) and adapts to however many
// entries exist. Omit optional fields (`company`, `description`,
// `technologies`) rather than filling them with placeholders if they
// aren't set yet.
export const experience: ExperienceItem[] = [
  {
    id: "backend-software-engineer",
    role: "Backend Software Engineer",
    startDate: "2026",
    endDate: "Present",
    responsibilities: [
      "Developing backend services and REST APIs",
      "Working with database-driven applications",
      "Contributing to modular and scalable software architecture",
      "Collaborating with frontend and backend teams",
    ],
  },
];

export function isCurrentExperience(item: ExperienceItem): boolean {
  return item.endDate.trim().toLowerCase() === "present";
}
