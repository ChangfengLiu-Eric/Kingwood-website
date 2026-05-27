'use client';

import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';

/**
 * LTO 应用场景区
 * 灰底 / 左标题右场景列表
 */
export function LtoApplications() {
  const t = useTranslations('lto.applications');
  const tCommon = useTranslations('common');
  const items = t.raw('items') as string[];

  return (
    <section className="bg-ink-50 section-padding">
      <div className="container-content">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow mb-6">{t('eyebrow')}</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-ink-900 leading-[1.1]">
                {t('title')}
              </h2>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <ul>
              {items.map((item, i) => (
                <Reveal key={item} delay={i * 0.08}>
                  <li className="flex items-baseline gap-6 py-5 lg:py-6 border-b border-ink-200 last:border-0">
                    <span className="font-mono text-xs text-[#b8923f] tracking-wider numeric shrink-0">
                      0{i + 1}
                    </span>
                    <span className="text-base lg:text-lg text-ink-700">{item}</span>
                  </li>
                </Reveal>
              ))}
            </ul>

            <Reveal delay={items.length * 0.08}>
              <div className="mt-10">
                <Link href="/contact" className="btn-primary group">
                  <span>{tCommon('contactForSpecs')}</span>
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
