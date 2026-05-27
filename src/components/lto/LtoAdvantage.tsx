'use client';

import { useTranslations } from 'next-intl';
import { Reveal } from '@/components/ui/Reveal';

/**
 * LTO 四大优势
 * 2x2 大格栅，每格：标题（衬线）+ 描述
 * 不用编号，直接用 4 个特性铺开
 */
export function LtoAdvantage() {
  const t = useTranslations('lto.advantage');
  const items = t.raw('items') as Array<{ title: string; desc: string }>;

  return (
    <section className="bg-white section-padding">
      <div className="container-content">
        <div className="mb-16 lg:mb-20 max-w-2xl">
          <Reveal>
            <p className="eyebrow mb-6">{t('eyebrow')}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-ink-900 leading-[1.1]">
              <span className="block">{t('title1')}</span>
              <span className="block">{t('title2')}</span>
            </h2>
          </Reveal>
        </div>

        {/* 2 列 4 项 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-12 lg:gap-x-20">
          {items.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.1}>
              <div className="border-t border-ink-200 pt-6">
                <p className="eyebrow numeric text-[#b8923f] mb-4">
                  0{i + 1}
                </p>
                <h3 className="font-serif text-2xl lg:text-3xl font-medium text-ink-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-ink-600 max-w-md">
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
