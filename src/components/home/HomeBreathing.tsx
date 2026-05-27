'use client';

import { useTranslations } from 'next-intl';
import { Reveal } from '@/components/ui/Reveal';

export function HomeBreathing() {
  const t      = useTranslations('home.breathing');
  const tBrand = useTranslations('brand');

  return (
    <section className="bg-[#fafaf8] py-[120px] lg:py-[180px]">
      <div className="container-content">
        <div className="max-w-2xl mx-auto text-center">

          {/* 金色 eyebrow */}
          <Reveal>
            <p className="eyebrow-gold mb-10">{t('eyebrow')}</p>
          </Reveal>

          {/* 上装饰线 */}
          <Reveal delay={0.08}>
            <div className="flex items-center justify-center gap-4 mb-10">
              <span className="h-px flex-1 max-w-[80px] bg-[#b8923f]/35" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#b8923f]/60" />
              <span className="h-px flex-1 max-w-[80px] bg-[#b8923f]/35" />
            </div>
          </Reveal>

          {/* 引用句 */}
          <Reveal delay={0.16}>
            <blockquote className="kw2-serif text-[clamp(1.875rem,4vw,2.875rem)] leading-[1.3] tracking-tight text-[#0e1320]">
              {tBrand('tagline')}
            </blockquote>
          </Reveal>

          {/* 下装饰线 */}
          <Reveal delay={0.22}>
            <div className="flex items-center justify-center gap-4 mt-10">
              <span className="h-px flex-1 max-w-[80px] bg-[#b8923f]/35" />
              <span className="w-1.5 h-1.5 rounded-full bg-[#b8923f]/60" />
              <span className="h-px flex-1 max-w-[80px] bg-[#b8923f]/35" />
            </div>
          </Reveal>

          {/* 英文说明 */}
          <Reveal delay={0.3}>
            <p className="mt-8 text-[15px] font-light tracking-wide text-[#8a8f9a]">
              {tBrand('taglineEn')}
            </p>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
