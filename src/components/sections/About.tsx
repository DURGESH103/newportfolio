import Image from "next/image";
import { profile } from "@/data/profile";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function About() {
  return (
    <section id="about" className="scroll-mt-24 py-20 sm:py-24">
      <Container>
        <SectionHeading eyebrow="About" title="Who I am" />

        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <Reveal className="lg:col-span-8">
            <div className="max-w-2xl space-y-5 text-base leading-relaxed text-fg-muted">
              {profile.bio.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-4">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-[320px] overflow-hidden rounded-2xl border border-border shadow-2xl shadow-black/25">
              <Image
                src="/profile.png"
                alt={`Portrait of ${profile.name}`}
                fill
                sizes="(min-width: 1024px) 320px, 70vw"
                className="object-cover"
                priority
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
