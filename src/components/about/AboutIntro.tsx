'use client';

import { useTranslations } from 'next-intl';
import { Reveal } from '@/components/ui/Reveal';

export function AboutIntro() {
  const t = useTranslations('about.intro');

  return (
    <section className="bg-ink-50 section-padding">
      <div className="container-content">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* 左标题 */}
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow mb-6">{t('eyebrow')}</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-[2.25rem] font-medium text-ink-900 leading-[1.15]">
                <span className="block">{t('title1')}</span>
                <span className="block">{t('title2')}</span>
              </h2>
            </Reveal>
          </div>

          {/* 右三段 */}
          <div className="lg:col-span-7 lg:pt-4">
            <Reveal delay={0.2}>
              <p className="text-sm lg:text-base leading-relaxed text-ink-700 mb-6">
                {t('p1')}
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="text-sm lg:text-base leading-relaxed text-ink-700 mb-6">
                {t('p2')}
              </p>
            </Reveal>
            <Reveal delay={0.4}>
              <p className="text-sm lg:text-base leading-relaxed text-ink-700">
                {t('p3')}
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
