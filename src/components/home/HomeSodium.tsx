'use client';

import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';

/**
 * 钠离子押注 - 整页唯一深色区块
 * navy #0A2540 背景
 * 表达"前瞻战略布局"的克制叙事
 * 4 个支柱横排展示
 */
export function HomeSodium() {
  const t = useTranslations('home.sodium');

  const pillars = [
    {
      number: '01',
      title: t('pillar1Title'),
      desc: t('pillar1Desc'),
    },
    {
      number: '02',
      title: t('pillar2Title'),
      desc: t('pillar2Desc'),
    },
    {
      number: '03',
      title: t('pillar3Title'),
      desc: t('pillar3Desc'),
    },
    {
      number: '04',
      title: t('pillar4Title'),
      desc: t('pillar4Desc'),
    },
  ];

  return (
    <section className="bg-navy-900 text-white section-padding relative overflow-hidden">
      {/* 左侧竖排水印 */}
      <div className="hidden lg:block absolute left-8 top-1/2 -translate-y-1/2 pointer-events-none">
        <p
          className="vertical-watermark whitespace-nowrap"
          style={{ color: '#14B8B0', opacity: 0.1 }}
        >
          {t('watermark')}
        </p>
      </div>

      <div className="container-content relative">
        {/* 上半：标题 + 两段叙事 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-20 lg:mb-24">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="eyebrow text-teal-400 mb-8">{t('label')}</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-[1.1] font-medium text-white">
                <span className="block">{t('title1')}</span>
                <span className="block">{t('title2')}</span>
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-5 lg:pt-4">
            <Reveal delay={0.2}>
              <p className="text-sm lg:text-base leading-relaxed text-white/70 mb-6">
                {t('p1')}
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="text-sm lg:text-base leading-relaxed text-white/70 mb-8">
                {t('p2')}
              </p>
            </Reveal>
            <Reveal delay={0.4}>
              <Link
                href="/sodium-ion"
                className="inline-flex items-center gap-2 text-sm text-teal-400 link-underline group"
              >
                <span>{t('moreLink')}</span>
                <ArrowRight
                  size={14}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </Reveal>
          </div>
        </div>

        {/* 下半：4 个支柱横排 */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 pt-12 border-t border-white/10">
          {pillars.map((pillar, i) => (
            <Reveal key={pillar.number} delay={i * 0.1}>
              <div>
                <p className="eyebrow text-teal-400 numeric">{pillar.number}</p>
                <h3 className="mt-4 font-serif text-xl lg:text-2xl font-medium text-white">
                  {pillar.title}
                </h3>
                <p className="mt-3 text-xs lg:text-sm text-white/60 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
