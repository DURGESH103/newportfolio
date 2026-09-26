import Link from "next/link";
import { Award, ArrowUpRight } from "lucide-react";
import { certifications } from "@/data/certifications";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

function CertificationCard({ item }: { item: (typeof certifications)[number] }) {
  const hasFile = Boolean(item.certificateImage || item.certificateFile);

  return (
    <Link
      href={`/certifications/${item.slug}`}
      aria-label={`View details: ${item.title}`}
      className="group flex h-full flex-col rounded-xl border border-border bg-bg-elevated p-6 transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/30 hover:shadow-lg hover:shadow-black/10"
    >
      <div className="flex items-start justify-between gap-4">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent-soft text-accent transition-shadow duration-200 group-hover:shadow-[0_0_14px_-4px_var(--color-accent)]">
          <Award className="h-5 w-5" aria-hidden="true" />
        </span>
        {item.date ? (
          <span className="font-mono text-xs text-fg-subtle">{item.date}</span>
        ) : null}
      </div>

      <h3 className="mt-4 text-base font-semibold leading-snug text-fg">
        {item.title}
      </h3>
      <p className="mt-1 text-sm font-medium text-accent">{item.issuer}</p>

      {item.description ? (
        <p className="mt-3 text-sm leading-relaxed text-fg-muted">
          {item.description}
        </p>
      ) : null}

      {item.credentialId ? (
        <p className="mt-3 break-words font-mono text-xs text-fg-subtle">
          Credential ID: {item.credentialId}
        </p>
      ) : null}

      <div className="mt-5 flex items-center gap-1.5 border-t border-border pt-4 text-sm font-medium text-fg-muted transition-colors duration-200 group-hover:text-accent">
        {hasFile ? "View Certificate" : "Credential details"}
        <ArrowUpRight
          className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          aria-hidden="true"
        />
      </div>
    </Link>
  );
}

export function Certifications() {
  return (
    <section
      id="certifications"
      className="scroll-mt-24 border-t border-border py-20 sm:py-24"
    >
      <Container>
        <SectionHeading
          eyebrow="Certifications & Achievements"
          title="Proof of continuous learning"
          description="Certifications, credentials, and milestones that reflect my continuous learning and technical growth."
        />

        <div className="grid gap-5 sm:grid-cols-2">
          {certifications.map((item, index) => (
            <Reveal key={item.slug} delay={(index % 2) * 0.05}>
              <CertificationCard item={item} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
