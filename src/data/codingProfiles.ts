import { socialLinks } from "./profile";

export type CodingProfile = {
  name: string;
  url: string;
  icon: "github" | "leetcode" | "geeksforgeeks" | "codechef";
};

export const codingProfiles: CodingProfile[] = [
  { name: "GitHub", url: socialLinks.github, icon: "github" },
  { name: "LeetCode", url: socialLinks.leetcode, icon: "leetcode" },
  {
    name: "GeeksforGeeks",
    url: socialLinks.geeksforgeeks,
    icon: "geeksforgeeks",
  },
  { name: "CodeChef", url: socialLinks.codechef, icon: "codechef" },
];
