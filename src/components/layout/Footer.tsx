import { profile, socialLinks } from "@/data/profile";
import { codingProfiles } from "@/data/codingProfiles";
import { Container } from "@/components/ui/Container";
import {
  CodeChefIcon,
  GeeksforGeeksIcon,
  GitHubIcon,
  LeetCodeIcon,
  LinkedInIcon,
} from "@/components/ui/BrandIcons";

const codingIconMap = {
  github: GitHubIcon,
  leetcode: LeetCodeIcon,
  geeksforgeeks: GeeksforGeeksIcon,
  codechef: CodeChefIcon,
};

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <Container className="flex flex-col items-center gap-6 py-10 text-center sm:flex-row sm:justify-between sm:text-left">
        <div>
          <p className="font-mono text-sm font-semibold text-fg">
            {profile.name}
          </p>
          <p className="mt-1 text-sm text-fg-muted">{profile.role}</p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="text-fg-muted transition-colors duration-150 hover:text-accent"
          >
            <LinkedInIcon className="h-5 w-5" aria-hidden="true" />
          </a>
          {codingProfiles.map((item) => {
            const Icon = codingIconMap[item.icon];
            return (
              <a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.name}
                className="text-fg-muted transition-colors duration-150 hover:text-accent"
              >
                <Icon className="h-5 w-5" />
              </a>
            );
          })}
        </div>
      </Container>
      <div className="border-t border-border py-5 text-center text-xs text-fg-subtle">
        © {year} {profile.name}. All rights reserved.
      </div>
    </footer>
  );
}
