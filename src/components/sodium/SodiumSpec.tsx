'use client';

import { useTranslations } from 'next-intl';
import { Reveal } from '@/components/ui/Reveal';

/**
 * 钠离子参数区
 * 白底（区别于 navy hero），4 个大号规格
 */
export function SodiumSpec() {
  const t = useTranslations('sodium.spec');
  const items = t.raw('items') as Array<{
    label: string;
    value: string;
    unit: string;
    desc: string;
  }>;

  return (
    <section className="bg-white section-padding">
      <div className="container-content">
        <Reveal>
          <p className="eyebrow mb-6">{t('eyebrow')}</p>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-ink-900 mb-16 lg:mb-20">
            {t('title')}
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-ink-200">
          {items.map((item, i) => (
            <Reveal key={item.label} delay={i * 0.08}>
              <div className="bg-white p-8 lg:p-10 h-full flex flex-col">
                <p className="eyebrow text-ink-400 mb-6">{item.label}</p>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="font-serif text-4xl lg:text-5xl xl:text-6xl font-medium text-ink-900 numeric leading-none">
                    {item.value}
                  </span>
                </div>
                <p className="text-xs lg:text-sm text-ink-500 numeric tracking-wide mb-4">{item.unit}</p>
                <p className="text-xs text-ink-500 leading-relaxed mt-auto">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
