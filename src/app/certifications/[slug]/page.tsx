import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { certifications, getCertificationBySlug } from "@/data/certifications";
import { CertificationDetails } from "@/components/certifications/CertificationDetails";

export function generateStaticParams() {
  return certifications.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/certifications/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const item = getCertificationBySlug(slug);

  if (!item) {
    return { title: "Certification not found" };
  }

  return {
    title: item.title,
    description: item.description ?? `${item.title} — ${item.issuer}`,
  };
}

export default async function CertificationDetailsPage({
  params,
}: PageProps<"/certifications/[slug]">) {
  const { slug } = await params;
  const item = getCertificationBySlug(slug);

  if (!item) {
    notFound();
  }

  return <CertificationDetails item={item} />;
}
