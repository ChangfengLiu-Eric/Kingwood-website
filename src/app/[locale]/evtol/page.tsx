import { setRequestLocale } from 'next-intl/server';
import { EvtolHero } from '@/components/evtol/EvtolHero';
import { EvtolSpec } from '@/components/evtol/EvtolSpec';
import { EvtolWhy } from '@/components/evtol/EvtolWhy';
import { EvtolScenario } from '@/components/evtol/EvtolScenario';

export default async function EvtolPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <EvtolHero />
      <EvtolSpec />
      <EvtolWhy />
      <EvtolScenario />
    </>
  );
}
