import type { Metadata, Viewport } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Noto_Serif_SC, Inter } from 'next/font/google';
import { routing } from '@/i18n/routing';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import '../globals.css';

/**
 * 字体通过 next/font/google 加载：构建时下载到本地，页面不再向 Google 发请求。
 * 彻底解决国内访问 Google Fonts 超时导致页面卡住的问题。
 */
const serifFont = Noto_Serif_SC({
  weight: ['500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
  preload: false, // CJK 字体较大，不预加载，按需获取
});

const sansFont = Inter({
  weight: ['300', '400', '500', '600'],
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

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
    <html
      lang={locale === 'cn' ? 'zh-CN' : 'en'}
      className={`scroll-smooth ${serifFont.variable} ${sansFont.variable}`}
    >
      <body className="min-h-screen flex flex-col antialiased overflow-x-hidden">
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className="flex-1">
            <div id="scroll-sentinel" aria-hidden="true" className="absolute top-24 pointer-events-none" />
            {children}
          </main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
