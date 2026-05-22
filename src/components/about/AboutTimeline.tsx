'use client';

import { useTranslations } from 'next-intl';
import { Reveal } from '@/components/ui/Reveal';

/**
 * 时间轴：7 个里程碑
 * 设计：左侧年份大字（衬线 + 等距）+ 中间竖线和节点 + 右侧事件
 * 每个里程碑都用浮现动画
 */
export function AboutTimeline() {
  const t = useTranslations('about.timeline');
  const items = t.raw('items') as Array<{
    year: string;
    title: string;
    desc: string;
  }>;

  return (
    <section className="bg-white section-padding">
      <div className="container-content">
        {/* 标题 */}
        <div className="mb-16 lg:mb-24 max-w-2xl">
          <Reveal>
            <p className="eyebrow mb-6">{t('eyebrow')}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-ink-900 leading-[1.1]">
              {t('title')}
            </h2>
          </Reveal>
        </div>

        {/* 时间轴主体 */}
        <div className="relative max-w-5xl mx-auto">
          {/* 中间竖线（桌面）/ 左侧竖线（移动） */}
          <div className="absolute top-0 bottom-0 left-[88px] md:left-[200px] lg:left-[260px] w-px bg-ink-200" />

          {/* 节点列表 */}
          <div className="space-y-12 lg:space-y-16">
            {items.map((item, i) => (
              <Reveal key={item.year} delay={i * 0.08}>
                <div className="relative grid grid-cols-[88px_1fr] md:grid-cols-[200px_1fr] lg:grid-cols-[260px_1fr] gap-6 md:gap-12">
                  {/* 左：年份 */}
                  <div className="text-right pr-6">
                    <p className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-ink-900 numeric leading-none">
                      {item.year}
                    </p>
                  </div>

                  {/* 中：节点圆点（绝对定位在竖线上） */}
                  <div className="absolute left-[88px] md:left-[200px] lg:left-[260px] -translate-x-1/2 top-2 lg:top-4 w-2.5 h-2.5 rounded-full bg-teal-500 ring-4 ring-white" />

                  {/* 右：标题 + 描述 */}
                  <div className="pl-6">
                    <h3 className="font-serif text-xl lg:text-2xl font-medium text-ink-900 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-sm lg:text-base leading-relaxed text-ink-600 max-w-2xl">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
