import type { IconType } from "react-icons";
import {
  SiApacheairflow,
  SiApachespark,
  SiCss,
  SiDjango,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiNodedotjs,
  SiPython,
  SiReact,
  SiSnowflake,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export type Skill = {
  name: string;
  note?: string;
  /** Omitted when no reliable, recognizable brand icon exists for it. */
  icon?: IconType;
};

export type SkillGroup = {
  title: string;
  skills: Skill[];
  /** The category most relevant to this portfolio's backend positioning. */
  emphasis?: boolean;
};

// Order and `emphasis` drive layout in Skills.tsx: Backend leads and is
// visually stronger (this is a backend-focused portfolio).
export const skillGroups: SkillGroup[] = [
  {
    title: "Backend",
    emphasis: true,
    skills: [
      { name: "Node.js", note: "APIs · WebSockets", icon: SiNodedotjs },
      { name: "Django", note: "REST APIs · ORM", icon: SiDjango },
      { name: "Django REST Framework" },
      { name: "REST APIs" },
      { name: "WebSockets", note: "Real-time features" },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "Python", note: "Backend · Scripting", icon: SiPython },
      { name: "Java" },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "SQL" },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React.js", note: "Hooks · Components", icon: SiReact },
      { name: "Next.js", note: "App Router · SSR", icon: SiNextdotjs },
      { name: "HTML5", icon: SiHtml5 },
      { name: "CSS3", icon: SiCss },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MySQL", note: "Relational", icon: SiMysql },
      { name: "MongoDB", note: "NoSQL", icon: SiMongodb },
    ],
  },
  {
    title: "Cloud & Data",
    skills: [
      { name: "Azure Data Factory", note: "ETL / ELT" },
      { name: "Azure Key Vault" },
      { name: "Azure Blob Storage" },
      { name: "ADLS" },
      { name: "Apache Spark", note: "Big data processing", icon: SiApachespark },
      { name: "Airflow", icon: SiApacheairflow },
      { name: "Snowflake", icon: SiSnowflake },
      { name: "Power BI" },
      { name: "DAX" },
    ],
  },
];
