'use client';

import { useTranslations } from 'next-intl';
import { Reveal } from '@/components/ui/Reveal';

export function HomeStats() {
  const t = useTranslations('home.stats');

  const cols = [
    { value: t('heritage.value'),  suffix: t('heritage.suffix'),  label: t('heritage.label'),  eyebrow: t('heritage.eyebrow')  },
    { value: t('capacity.value'),  suffix: t('capacity.suffix'),  label: t('capacity.label'),  eyebrow: t('capacity.eyebrow')  },
    { value: t('chemistry.value'), suffix: t('chemistry.suffix'), label: t('chemistry.label'), eyebrow: t('chemistry.eyebrow') },
    { value: t('quality.value'),   suffix: t('quality.suffix'),   label: t('quality.label'),   eyebrow: t('quality.eyebrow')   },
  ];

  const isLong = (v: string) => v.length > 5;

  return (
    <section className="bg-[#0a1220] text-white py-[80px] lg:py-[96px]">
      <div className="container-content">

        {/* 标题行 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 lg:mb-20 pb-10 border-b border-white/10">
          <Reveal>
            <div>
              <h2 className="kw2-serif text-[clamp(2rem,4vw,3rem)] leading-tight text-white">
                <span className="block">{t('sectionTitle')}</span>
                <span className="block text-[#b8923f]">{t('sectionLine2')}</span>
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-white/55 max-w-sm">
                {t('sectionDesc')}
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="lg:pt-2 lg:pl-12">
              {/* 金色小装饰线 */}
              <span className="block w-8 h-px bg-[#b8923f] mb-5" />
              <p className="text-xs tracking-[0.28em] uppercase text-[#b8923f]/60 mb-3">NOTE</p>
              <p className="text-sm text-white/35 leading-relaxed">{t('sectionNote')}</p>
            </div>
          </Reveal>
        </div>

        {/* 4 列数据格 */}
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x-0 lg:divide-x divide-white/[0.08]">
          {cols.map((col, i) => (
            <Reveal key={col.eyebrow} delay={i * 0.08}>
              <div className={`flex flex-col gap-3 py-2 ${i > 0 ? 'lg:pl-10' : ''} ${i < 3 ? 'lg:pr-10' : ''}`}>
                {/* eyebrow：数字金色，标签名白色淡 */}
                <p className="text-[10px] tracking-[0.32em] uppercase font-medium">
                  <span className="text-[#b8923f]">{col.eyebrow.split(' / ')[0]}</span>
                  {col.eyebrow.split(' / ')[1] && (
                    <span className="text-white/30"> / {col.eyebrow.split(' / ')[1]}</span>
                  )}
                </p>
                {/* 数值 */}
                <div className="flex items-baseline gap-1.5 mt-1 flex-wrap">
                  <span
                    className={`font-bold leading-none text-white tabular-nums ${
                      isLong(col.value)
                        ? 'text-2xl lg:text-3xl'
                        : 'text-[clamp(2.5rem,4.5vw,3.5rem)]'
                    }`}
                  >
                    {col.value}
                  </span>
                  {col.suffix && (
                    <span className="unit-gold text-base">{col.suffix}</span>
                  )}
                </div>
                <p className="text-sm text-white/40">{col.label}</p>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
