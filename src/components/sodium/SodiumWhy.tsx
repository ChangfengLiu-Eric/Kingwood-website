'use client';

import { useTranslations } from 'next-intl';
import { Reveal } from '@/components/ui/Reveal';

/**
 * 钠离子 Why 区
 * 浅灰背景，两段叙事 + 标题
 * 左标题右双段
 */
export function SodiumWhy() {
  const t = useTranslations('sodium.why');

  return (
    <section className="bg-ink-50 section-padding">
      <div className="container-content">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          {/* 左：eyebrow + 标题 */}
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow mb-6">{t('eyebrow')}</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-ink-900 leading-[1.1]">
                <span className="block">{t('title1')}</span>
                <span className="block">
                  <span className="accent">{t('title2')}</span>
                </span>
              </h2>
            </Reveal>
          </div>

          {/* 右：两段叙事 */}
          <div className="lg:col-span-7 lg:pt-4">
            <Reveal delay={0.2}>
              <p className="text-base lg:text-lg leading-relaxed text-ink-700 mb-8">
                {t('p1')}
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="text-base lg:text-lg leading-relaxed text-ink-700">
                {t('p2')}
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
