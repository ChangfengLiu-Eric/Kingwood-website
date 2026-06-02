'use client';

import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';

export function HomeSodium() {
  const t = useTranslations('home.sodium');

  const params = [
    { label: t('pillar1Title'), value: t('pillar1Desc') },
    { label: t('pillar2Title'), value: t('pillar2Desc') },
    { label: t('pillar3Title'), value: t('pillar3Desc') },
    { label: t('pillar4Title'), value: t('pillar4Desc') },
  ];

  return (
    <section className="bg-[#0a2540] text-white py-[100px] lg:py-[160px] relative overflow-hidden">

      {/* 大号背景水印 "Na" */}
      <div
        className="absolute right-[-2rem] top-1/2 -translate-y-1/2 pointer-events-none select-none leading-none"
        aria-hidden="true"
        style={{
          fontFamily: 'Georgia, serif',
          fontSize: 'clamp(12rem, 22vw, 20rem)',
          fontWeight: 700,
          color: 'rgba(184,146,63,0.055)',
          letterSpacing: '-0.05em',
        }}
      >
        Na
      </div>

      <div className="container-content relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

          {/* 左：标题 + 描述 + 链接 */}
          <div className="lg:col-span-6">

            <Reveal>
              <div className="flex items-center gap-3 mb-8">
                <span className="text-[15px] lg:text-[22px] font-mono tracking-[0.2em] text-[#b8923f]">03</span>
                <span className="h-px w-12 bg-[#b8923f]" />
              </div>
            </Reveal>

            {/* eyebrow 明确写出"钠离子电池" */}
            <Reveal>
              <p className="eyebrow-gold mb-8">{t('label')}</p>
            </Reveal>

            {/* 大标题 */}
            <Reveal delay={0.1}>
              <h2 className="kw2-serif text-[clamp(2rem,4vw,3rem)] leading-[1.15] text-white">
                <span className="block">{t('title1')}</span>
                <span className="block">{t('title2')}</span>
              </h2>
            </Reveal>

            {/* 化学式 badge：Na-ion / NaXO₂ 标注，一眼看懂 */}
            <Reveal delay={0.18}>
              <div className="mt-7 inline-flex items-center gap-3">
                <span
                  className="text-[2rem] font-bold text-[#b8923f] leading-none"
                  style={{ fontFamily: 'Georgia, serif' }}
                >
                  Na
                </span>
                <div className="h-8 w-px bg-white/15" />
                <div>
                  <p className="text-[11px] tracking-[0.25em] uppercase text-white/40">Sodium-Ion</p>
                  <p className="text-xs text-white/55 mt-0.5">Na-ion · NaXO₂ cathode</p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.26}>
              <p className="mt-7 text-sm leading-relaxed text-white/60 max-w-md">
                {t('p1')}
              </p>
            </Reveal>
            <Reveal delay={0.32}>
              <p className="mt-4 text-sm leading-relaxed text-white/60 max-w-md">
                {t('p2')}
              </p>
            </Reveal>
            <Reveal delay={0.4}>
              <Link
                href="/sodium-ion"
                className="mt-10 inline-flex items-center gap-2 text-sm text-[#b8923f] link-underline group"
              >
                <span>{t('moreLink')}</span>
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>

          {/* 右：参数卡片 */}
          <Reveal delay={0.15} className="lg:col-span-6">
            <div className="border border-white/15 rounded-xl overflow-hidden bg-white/[0.03]">
              {/* 卡片顶部金色细线 */}
              <div className="h-px bg-[#b8923f]/40" />
              <div className="p-8 divide-y divide-white/[0.08]">
                {params.map((p, i) => (
                  <div key={i} className="py-5 first:pt-0 last:pb-0 grid grid-cols-5 gap-4 items-baseline">
                    <span className="col-span-2 text-[11px] tracking-[0.22em] uppercase text-[#b8923f]/70 font-medium">
                      {p.label}
                    </span>
                    <span className="col-span-3 text-sm text-white/75 leading-snug">
                      {p.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
