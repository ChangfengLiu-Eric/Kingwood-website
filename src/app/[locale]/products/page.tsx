import { setRequestLocale } from 'next-intl/server';
import { ProductsHero } from '@/components/products/ProductsHero';
import { ProductsList } from '@/components/products/ProductsList';

export default async function ProductsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <>
      <ProductsHero />
      <ProductsList />
    </>
  );
}
