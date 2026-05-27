import { setRequestLocale } from 'next-intl/server';
import { HomeHero }         from '@/components/home/HomeHero';
import { HomeEvtol }        from '@/components/home/HomeEvtol';
import { HomeLto }          from '@/components/home/HomeLto';
import { HomeSodium }       from '@/components/home/HomeSodium';
import { HomeApplications } from '@/components/home/HomeApplications';
import { HomeCta }          from '@/components/home/HomeCta';

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <HomeHero />
      <HomeEvtol />
      <HomeLto />
      <HomeSodium />
      <HomeApplications />
      <HomeCta />
    </>
  );
}
