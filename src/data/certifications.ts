export type CertificationType = "certification" | "achievement";

export type Certification = {
  slug: string;
  title: string;
  issuer: string;
  type: CertificationType;
  date?: string;
  credentialId?: string;
  description?: string;
  /** Path under /public, e.g. "/certificates/example.png". Omit if no
   * image exists yet — never fabricate one. */
  certificateImage?: string;
  /** Path under /public, e.g. "/certificates/example.pdf". Omit if none
   * exists. Either this or `certificateImage` alone is fine. */
  certificateFile?: string;
  /** External link to verify the credential. Omit if none exists — no
   * "Verify Credential" action is rendered without it. */
  verificationUrl?: string;
};

// Add new certifications or achievements here as you earn them — the
// section and its detail pages map over this list automatically and grow
// to fit however many entries exist. Omit optional fields (`date`,
// `credentialId`, `description`, `certificateImage`, `certificateFile`,
// `verificationUrl`) rather than filling them with placeholders if they
// aren't set yet.
export const certifications: Certification[] = [
  {
    slug: "salesforce-certified-developer",
    title: "Salesforce Certified Developer",
    issuer: "Salesforce",
    type: "certification",
    description:
      "Salesforce application development and CRM platform concepts.",
  },
  {
    slug: "oracle-certified-associate-database",
    title: "Oracle Certified Associate – Database",
    issuer: "Oracle",
    type: "certification",
    description:
      "SQL programming, relational database concepts, and database fundamentals.",
  },
  {
    slug: "automation-anywhere-rpa-professional",
    title: "Automation Anywhere RPA Professional",
    issuer: "Automation Anywhere",
    type: "certification",
    description: "Robotic process automation using the Automation 360 platform.",
  },
  {
    slug: "linguaskill-english-b2",
    title: "Linguaskill English B2",
    issuer: "Cambridge English",
    type: "certification",
    description: "B2-level English language proficiency certification.",
  },
];

export function getCertificationBySlug(slug: string): Certification | undefined {
  return certifications.find((c) => c.slug === slug);
}
