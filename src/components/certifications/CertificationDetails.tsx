import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Award, ExternalLink } from "lucide-react";
import type { Certification } from "@/data/certifications";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

function BackToCertificationsLink({ className }: { className?: string }) {
  return (
    <Link
      href="/#certifications"
      className={`inline-flex items-center gap-2 text-sm font-medium text-fg-muted transition-colors duration-150 hover:text-accent ${className ?? ""}`}
    >
      <ArrowLeft className="h-4 w-4" aria-hidden="true" />
      Back to Certifications
    </Link>
  );
}

function CertificateViewer({ item }: { item: Certification }) {
  if (item.certificateImage) {
    return (
      <div>
        <div className="relative h-[420px] w-full overflow-hidden rounded-2xl border border-border bg-bg-elevated sm:h-[560px]">
          <Image
            src={item.certificateImage}
            alt={`${item.title} certificate`}
            fill
            sizes="(min-width: 1024px) 800px, 100vw"
            className="object-contain p-4"
          />
        </div>
        {item.certificateFile ? (
          <a
            href={item.certificateFile}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-fg-muted transition-colors duration-150 hover:text-accent"
          >
            View original PDF
            <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        ) : null}
      </div>
    );
  }

  if (item.certificateFile) {
    return (
      <div>
        <iframe
          src={item.certificateFile}
          title={`${item.title} certificate`}
          className="h-[600px] w-full rounded-2xl border border-border bg-bg"
        />
        <a
          href={item.certificateFile}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-fg-muted transition-colors duration-150 hover:text-accent"
        >
          Open PDF in a new tab
          <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
        </a>
      </div>
    );
  }

  return (
    <div className="flex h-[280px] w-full flex-col items-center justify-center gap-3 rounded-2xl border border-border bg-bg-elevated text-fg-subtle">
      <span className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-bg">
        <Award className="h-5 w-5" aria-hidden="true" />
      </span>
      <span className="font-mono text-xs">Certificate file not added yet</span>
    </div>
  );
}

export function CertificationDetails({ item }: { item: Certification }) {
  return (
    <div className="py-16 sm:py-20">
      <Container>
        <BackToCertificationsLink className="mb-8" />

        <p className="mb-3 font-mono text-sm font-medium tracking-wide text-accent">
          {item.type === "achievement" ? "Achievement" : "Certification"}
        </p>
        <h1 className="max-w-3xl text-3xl font-bold tracking-tight text-fg sm:text-4xl">
          {item.title}
        </h1>

        <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
          <span className="font-medium text-accent">{item.issuer}</span>
          {item.date ? (
            <span className="font-mono text-fg-subtle">{item.date}</span>
          ) : null}
        </div>

        {item.verificationUrl ? (
          <div className="mt-6">
            <Button href={item.verificationUrl} external>
              Verify Credential
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </Button>
          </div>
        ) : null}

        <div className="mt-10">
          <CertificateViewer item={item} />
        </div>

        {item.description ? (
          <div className="mt-10">
            <h2 className="mb-3 text-xl font-semibold text-fg">Description</h2>
            <p className="max-w-2xl text-base leading-relaxed text-fg-muted">
              {item.description}
            </p>
          </div>
        ) : null}

        {item.credentialId ? (
          <p className="mt-6 break-words font-mono text-xs text-fg-subtle">
            Credential ID: {item.credentialId}
          </p>
        ) : null}

        <div className="mt-16 border-t border-border pt-8">
          <BackToCertificationsLink />
        </div>
      </Container>
    </div>
  );
}
