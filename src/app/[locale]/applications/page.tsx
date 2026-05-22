import { setRequestLocale } from 'next-intl/server';
import { ApplicationsHero } from '@/components/applications/ApplicationsHero';
import { ApplicationsGrid } from '@/components/applications/ApplicationsGrid';

export default async function ApplicationsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <ApplicationsHero />
      <ApplicationsGrid />
    </>
  );
}
