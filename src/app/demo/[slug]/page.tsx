import { notFound } from 'next/navigation';
import { getProspectBySlug, sampleProspects } from '@/lib/prospects';
import { ProspectDemoContent } from './ProspectDemoContent';

interface ProspectDemoPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProspectDemoPage({ params }: ProspectDemoPageProps) {
  const resolvedParams = await params;
  const prospect = getProspectBySlug(resolvedParams.slug);

  if (!prospect) {
    notFound();
  }

  return <ProspectDemoContent prospect={prospect} />;
}

export async function generateStaticParams() {
  return sampleProspects.map((prospect) => ({
    slug: prospect.slug,
  }));
}
