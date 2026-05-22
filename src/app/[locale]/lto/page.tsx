import { setRequestLocale } from 'next-intl/server';
import { LtoHero } from '@/components/lto/LtoHero';
import { LtoSpec } from '@/components/lto/LtoSpec';
import { LtoAdvantage } from '@/components/lto/LtoAdvantage';
import { LtoApplications } from '@/components/lto/LtoApplications';

export default async function LtoPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <LtoHero />
      <LtoSpec />
      <LtoAdvantage />
      <LtoApplications />
    </>
  );
}
