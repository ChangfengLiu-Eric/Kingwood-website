'use client';

import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';

export function HomeApplications() {
  const t = useTranslations('home.applications');

  const items: {
    key: string;
    href: '/applications/low-altitude' | '/applications/defense' | '/applications/industrial-vehicles' | '/applications/commercial-transport' | '/applications/storage' | '/applications/telecom';
  }[] = [
    { key: 'lowAltitude', href: '/applications/low-altitude'       },
    { key: 'defense',     href: '/applications/defense'            },
    { key: 'industrial',  href: '/applications/industrial-vehicles' },
    { key: 'commercial',  href: '/applications/commercial-transport'},
    { key: 'storage',     href: '/applications/storage'            },
    { key: 'telecom',     href: '/applications/telecom'            },
  ];

  return (
    <section className="bg-[#fafaf8] py-[100px] lg:py-[140px]">
      <div className="container-content">

        {/* 标题行：左标题 + 右定位语 */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14 lg:mb-16">
          <div>
            <Reveal>
              <p className="eyebrow mb-6">{t('eyebrow')}</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="kw2-serif text-[clamp(1.875rem,4vw,3rem)] leading-[1.15] text-[#0e1320]">
                <span className="block">{t('title1')}</span>
                <span className="block">{t('title2')}</span>
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <p className="text-sm text-[#6a7180] max-w-xs leading-relaxed lg:text-right lg:pb-1">
              {t('subtitle')}
            </p>
          </Reveal>
        </div>

        {/* 3×2 卡片网格：gap 作为 1px 边框效果 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#dedad4] overflow-hidden rounded-sm">
          {items.map((item, i) => {
            const number  = t(`items.${item.key}.number`  as 'items.lowAltitude.number');
            const title   = t(`items.${item.key}.title`   as 'items.lowAltitude.title');
            const titleEn = t(`items.${item.key}.titleEn` as 'items.lowAltitude.titleEn');
            const desc    = t(`items.${item.key}.desc`    as 'items.lowAltitude.desc');
            return (
              <Reveal key={item.key} delay={(i % 3) * 0.07}>
                <Link
                  href={item.href}
                  className="group block bg-[#fafaf8] p-8 lg:p-10 h-full hover:bg-white transition-colors"
                >
                  {/* 编号（金色） */}
                  <p className="text-[11px] tracking-[0.32em] uppercase text-[#b8923f] font-medium mb-6">
                    {number}
                  </p>

                  {/* 中文名 */}
                  <h3 className="kw2-serif text-[22px] leading-snug text-[#0e1320] mb-1">
                    {title}
                  </h3>

                  {/* 英文名 */}
                  <p className="text-[12px] tracking-[0.18em] uppercase text-[#8a8f9a] mb-5">
                    {titleEn}
                  </p>

                  {/* 应用标签 */}
                  <p className="text-[13px] text-[#6a7180] leading-relaxed">{desc}</p>

                  {/* hover arrow */}
                  <div className="mt-6 flex items-center gap-1.5 text-[11px] tracking-[0.2em] uppercase text-[#b8923f] opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>EXPLORE</span>
                    <ArrowRight size={12} className="transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>

        {/* 查看全部 */}
        <Reveal delay={0.2}>
          <div className="mt-12 text-center">
            <Link
              href="/applications"
              className="inline-flex items-center gap-2 px-8 py-3 bg-[#14181f] text-white text-sm hover:bg-[#1e2530] transition-colors"
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
