import { setRequestLocale } from 'next-intl/server';
import { AboutHero } from '@/components/about/AboutHero';
import { AboutIntro } from '@/components/about/AboutIntro';
import { AboutTimeline } from '@/components/about/AboutTimeline';
import { AboutCredentials } from '@/components/about/AboutCredentials';

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <AboutHero />
      <AboutIntro />
      <AboutTimeline />
      <AboutCredentials />
    </>
  );
}
