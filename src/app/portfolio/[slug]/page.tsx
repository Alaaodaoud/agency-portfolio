import { notFound } from 'next/navigation';
import { getClientBySlug, demoClients } from '@/lib/clients';
import { ClientProfileContent } from './ClientProfileContent';

interface ClientProfilePageProps {
  params: Promise<{ slug: string }>;
}

export default async function ClientProfilePage({ params }: ClientProfilePageProps) {
  const resolvedParams = await params;
  const client = getClientBySlug(resolvedParams.slug);

  if (!client) {
    notFound();
  }

  return <ClientProfileContent client={client} />;
}

export async function generateStaticParams() {
  return demoClients.map((client) => ({
    slug: client.slug,
  }));
}
