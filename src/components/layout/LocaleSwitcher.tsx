'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/routing';
import { useTransition } from 'react';

/**
 * 语言切换器
 * 保持当前路径，仅切换 locale
 */
export function LocaleSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const switchTo = (target: 'cn' | 'en') => {
    if (target === locale) return;
    startTransition(() => {
      router.replace(pathname, { locale: target });
    });
  };

  return (
    <div className="inline-flex items-center text-[11px] tracking-widest-2 font-medium">
      <button
        onClick={() => switchTo('cn')}
        className={`px-1.5 py-1 transition-colors ${
          locale === 'cn'
            ? 'text-ink-900'
            : 'text-ink-400 hover:text-teal-500'
        }`}
        aria-label="切换到中文"
      >
        CN
      </button>
      <span className="text-ink-200 mx-1">/</span>
      <button
        onClick={() => switchTo('en')}
        className={`px-1.5 py-1 transition-colors ${
          locale === 'en'
            ? 'text-ink-900'
            : 'text-ink-400 hover:text-teal-500'
        }`}
        aria-label="Switch to English"
      >
        EN
      </button>
    </div>
  );
}
