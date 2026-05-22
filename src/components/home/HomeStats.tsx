'use client';

import { useTranslations } from 'next-intl';
import { Reveal } from '@/components/ui/Reveal';

/**
 * 数据带：浅灰背景，四列展示
 * - 大字号数字（衬线 + 等距数字）
 * - 单位小字
 * - eyebrow + 中文 label
 * 间距充分，分隔线低调
 */
export function HomeStats() {
  const t = useTranslations('home.stats');

  const stats = [
    { key: 'heritage', valueKey: 'heritage.value', suffixKey: 'heritage.suffix', labelKey: 'heritage.label', eyebrowKey: 'heritage.eyebrow' },
    { key: 'capacity', valueKey: 'capacity.value', suffixKey: 'capacity.suffix', labelKey: 'capacity.label', eyebrowKey: 'capacity.eyebrow' },
    { key: 'chemistry', valueKey: 'chemistry.value', suffixKey: 'chemistry.suffix', labelKey: 'chemistry.label', eyebrowKey: 'chemistry.eyebrow' },
    { key: 'quality', valueKey: 'quality.value', suffixKey: 'quality.suffix', labelKey: 'quality.label', eyebrowKey: 'quality.eyebrow' },
  ] as const;

  return (
    <section className="bg-ink-50 py-20 lg:py-24">
      <div className="container-content">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8 lg:gap-x-12">
          {stats.map((stat, i) => {
            const value = t(stat.valueKey as 'heritage.value');
            const suffix = t(stat.suffixKey as 'heritage.suffix');
            const label = t(stat.labelKey as 'heritage.label');
            const eyebrow = t(stat.eyebrowKey as 'heritage.eyebrow');
            // 如果数字是"IATF 16949"这种带空格的，用更小的字号
            const isLongText = value.length > 5;

            return (
              <Reveal key={stat.key} delay={i * 0.1}>
                <div className="flex flex-col gap-3 lg:gap-4">
                  <p className="eyebrow text-ink-400">{eyebrow}</p>
                  <div className="flex items-baseline gap-1">
                    <span
                      className={`font-serif font-medium text-ink-900 leading-none ${
                        isLongText
                          ? 'text-2xl lg:text-3xl'
                          : 'text-5xl lg:text-6xl xl:text-7xl numeric'
                      }`}
                    >
                      {value}
                    </span>
                    {suffix && (
                      <span className="text-sm lg:text-base text-ink-500 font-medium">
                        {suffix}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-ink-500">{label}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
