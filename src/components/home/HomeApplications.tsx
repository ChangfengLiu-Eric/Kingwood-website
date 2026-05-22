'use client';

import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';

/**
 * 应用六宫格
 * 标题 "服务最严苛的 B 端市场"
 * 2x3 网格（移动端 1 列）
 * 每格：编号 + 中文标题 + 英文小标 + 描述
 * hover 时显示青色 ArrowRight
 */
export function HomeApplications() {
  const t = useTranslations('home.applications');

  // 六大场景，对应 /applications/* 子路由
  const items: {
    key: string;
    href: '/applications/low-altitude' | '/applications/defense' | '/applications/industrial-vehicles' | '/applications/commercial-transport' | '/applications/storage' | '/applications/telecom';
  }[] = [
    { key: 'lowAltitude', href: '/applications/low-altitude' },
    { key: 'defense', href: '/applications/defense' },
    { key: 'industrial', href: '/applications/industrial-vehicles' },
    { key: 'commercial', href: '/applications/commercial-transport' },
    { key: 'storage', href: '/applications/storage' },
    { key: 'telecom', href: '/applications/telecom' },
  ];

  return (
    <section className="bg-white section-padding">
      <div className="container-content">
        {/* 标题 */}
        <div className="mb-16 lg:mb-20">
          <Reveal>
            <p className="eyebrow mb-8">{t('eyebrow')}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-[1.1] font-medium text-ink-900 max-w-2xl">
              <span className="block">{t('title1')}</span>
              <span className="block">{t('title2')}</span>
            </h2>
          </Reveal>
        </div>

        {/* 六宫格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-ink-100">
          {items.map((item, i) => {
            const number = t(`items.${item.key}.number` as 'items.lowAltitude.number');
            const title = t(`items.${item.key}.title` as 'items.lowAltitude.title');
            const titleEn = t(`items.${item.key}.titleEn` as 'items.lowAltitude.titleEn');
            const desc = t(`items.${item.key}.desc` as 'items.lowAltitude.desc');
            return (
              <Reveal key={item.key} delay={(i % 2) * 0.1}>
                <Link
                  href={item.href}
                  className="group block bg-white p-8 lg:p-10 xl:p-12 h-full transition-colors hover:bg-ink-50"
                >
                  <div className="flex justify-between items-start mb-8">
                    <p className="eyebrow numeric text-ink-400">{number}</p>
                    <p className="eyebrow text-ink-300">{titleEn}</p>
                  </div>
                  <h3 className="font-serif text-2xl lg:text-3xl font-medium text-ink-900 mb-3">
                    {title}
                  </h3>
                  <p className="text-sm text-ink-500 mb-8">{desc}</p>
                  <div className="flex items-center gap-2 text-xs text-ink-400 group-hover:text-teal-500 transition-colors">
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity eyebrow">
                      EXPLORE
                    </span>
                    <ArrowRight
                      size={14}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>

        {/* 中央 CTA */}
        <Reveal delay={0.3}>
          <div className="mt-16 text-center">
            <Link
              href="/applications"
              className="inline-flex items-center gap-2 px-8 py-3 bg-ink-900 text-white text-sm hover:bg-teal-500 transition-colors"
            >
              <span>{t('cta')}</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
