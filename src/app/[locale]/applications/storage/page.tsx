import { setRequestLocale } from 'next-intl/server';
import { ApplicationScene } from '@/components/applications/ApplicationScene';

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <ApplicationScene sceneKey="storage" number="05" />;
}
