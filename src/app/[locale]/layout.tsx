import type { Metadata, Viewport } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import '../globals.css';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

// ✅ 关键修复：Next.js 14 必须显式声明 viewport
// 没有这段，移动端浏览器会按桌面宽度（~980px）渲染再缩放，
// 看起来就是"所有要素全部挤在一起 / 互相重叠"
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#FFFFFF',
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'meta' });

  return {
    title: {
      default: t('siteName'),
      template: `%s · ${t('siteName')}`,
    },
    description: t('siteDescription'),
    metadataBase: new URL('https://www.020k.com'),
    alternates: {
      canonical: '/',
      languages: {
        'zh-CN': '/cn',
        en: '/en',
      },
    },
    openGraph: {
      title: t('siteName'),
      description: t('siteDescription'),
      type: 'website',
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale === 'cn' ? 'zh-CN' : 'en'} className="scroll-smooth">
      {/* ✅ overflow-x-hidden 兜底，防止任何子元素意外撑破横向 */}
      <body className="min-h-screen flex flex-col antialiased overflow-x-hidden">
        <NextIntlClientProvider messages={messages}>
          <Header />
          {/* 注：Header 是 fixed (h-16 mobile / h-20 desktop)
              各 hero 组件已通过 pt-32 lg:pt-40 自留顶部空间，
              这里不重复加 padding-top，避免双倍间距 */}
          <main className="flex-1">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
