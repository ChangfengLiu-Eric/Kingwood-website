'use client';

import { useTranslations } from 'next-intl';
import { Reveal } from '@/components/ui/Reveal';

export function AboutCredentials() {
  const t = useTranslations('about.credentials');
  const items = t.raw('items') as Array<{
    label: string;
    title: string;
    desc: string;
  }>;

  return (
    <section className="bg-ink-50 section-padding">
      <div className="container-content">
        {/* 标题 */}
        <div className="mb-16 lg:mb-20 max-w-2xl">
          <Reveal>
            <p className="eyebrow mb-6">{t('eyebrow')}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-[2.25rem] font-medium text-ink-900 leading-[1.15]">
              <span className="block">{t('title1')}</span>
              <span className="block">
                <span className="accent">{t('title2')}</span>
              </span>
            </h2>
          </Reveal>
        </div>

        {/* 4 列 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-ink-200">
          {items.map((item, i) => (
            <Reveal key={item.label} delay={i * 0.1}>
              <div className="bg-ink-50 p-8 lg:p-10 h-full flex flex-col">
                <p className="eyebrow text-[#b8923f] mb-6">{item.label}</p>
                <h3 className="font-serif text-xl lg:text-2xl font-medium text-ink-900 mb-3 leading-tight">
                  {item.title}
                </h3>
                <p className="text-xs lg:text-sm text-ink-500 leading-relaxed mt-auto">
                  {item.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
