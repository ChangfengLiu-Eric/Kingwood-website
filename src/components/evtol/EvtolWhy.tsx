'use client';

import { useTranslations } from 'next-intl';
import { Reveal } from '@/components/ui/Reveal';

/**
 * eVTOL 三大论点
 * 1. 已商业化（百万级出货是验证标准）
 * 2. 高能量 + 高倍率（同时满足）
 * 3. 30 年制造积淀
 *
 * 横排 3 列，每列：大号编号 + 标题 + 描述
 */
export function EvtolWhy() {
  const t = useTranslations('evtol.why');
  const items = t.raw('items') as Array<{
    number: string;
    title: string;
    desc: string;
  }>;

  return (
    <section className="bg-white section-padding">
      <div className="container-content">
        {/* 标题 */}
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

        {/* 三列论点 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {items.map((item, i) => (
            <Reveal key={item.number} delay={i * 0.12}>
              <div className="border-t border-ink-200 pt-8">
                <p className="font-serif text-5xl lg:text-6xl font-medium text-[#b8923f] numeric leading-none mb-8">
                  {item.number}
                </p>
                <h3 className="font-serif text-xl lg:text-2xl font-medium text-ink-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-ink-600">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
