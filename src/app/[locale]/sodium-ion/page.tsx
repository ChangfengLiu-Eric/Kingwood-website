import { setRequestLocale } from 'next-intl/server';
import { SodiumHero } from '@/components/sodium/SodiumHero';
import { SodiumSpec } from '@/components/sodium/SodiumSpec';
import { SodiumWhy } from '@/components/sodium/SodiumWhy';
import { SodiumPillars } from '@/components/sodium/SodiumPillars';

export default async function SodiumPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <SodiumHero />
      <SodiumSpec />
      <SodiumWhy />
      <SodiumPillars />
    </>
  );
}
