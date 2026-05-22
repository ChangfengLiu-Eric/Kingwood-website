'use client';

import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';

/**
 * eVTOL Flagship - 旗舰 01
 * 左侧：极简线性 SVG 电池模组示意
 * 右侧：FLAGSHIP·01 + 双行大标题（"为低空经济 / 提供动力"）+ 关键参数 + CTA
 */
export function HomeEvtol() {
  const t = useTranslations('home.evtol');

  return (
    <section className="bg-white section-padding">
      <div className="container-content">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* 左：电池视觉 */}
          <Reveal direction="right" className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative aspect-[4/5] max-w-md mx-auto lg:max-w-none flex items-center justify-center">
              {/* 顶部 P/N 标签 */}
              <div className="absolute top-4 left-4 z-10">
                <p className="eyebrow text-ink-400">{t('modelLabel')}</p>
                <p className="mt-1 text-xs font-mono text-ink-700 tracking-wider">
                  {t('modelNumber')}
                </p>
              </div>

              {/* 底部模组标签 */}
              <div className="absolute bottom-4 left-4 z-10">
                <p className="eyebrow text-ink-400">{t('moduleLabel')}</p>
              </div>

              {/* SVG 电池示意 */}
              <EvtolBatterySvg />
            </div>
          </Reveal>

          {/* 右：文字 */}
          <div className="lg:col-span-6 order-1 lg:order-2">
            <Reveal>
              <p className="eyebrow text-teal-500 mb-8">{t('flagshipLabel')}</p>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-[1.1] font-medium text-ink-900">
                <span className="block">{t('title1')}</span>
                <span className="block">{t('title2')}</span>
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="mt-5 text-sm lg:text-base text-ink-500 font-light tracking-wide">
                {t('subtitle')}
              </p>
            </Reveal>

            <Reveal delay={0.3}>
              <p className="mt-6 max-w-lg text-sm lg:text-base leading-relaxed text-ink-600">
                {t('description')}
              </p>
            </Reveal>

            {/* 三个关键参数：横排 */}
            <Reveal delay={0.4}>
              <div className="mt-10 lg:mt-12 grid grid-cols-3 gap-4 lg:gap-6 max-w-md">
                <SpecBlock
                  label={t('spec1Label')}
                  value={t('spec1Value')}
                  unit={t('spec1Unit')}
                />
                <SpecBlock
                  label={t('spec2Label')}
                  value={t('spec2Value')}
                  unit={t('spec2Unit')}
                />
                <SpecBlock
                  label={t('spec3Label')}
                  value={t('spec3Value')}
                  unit={t('spec3Unit')}
                />
              </div>
            </Reveal>

            <Reveal delay={0.5}>
              <Link
                href="/evtol"
                className="mt-10 lg:mt-12 inline-flex items-center gap-2 text-sm font-medium text-ink-900 link-underline group"
              >
                <span>{t('cta')}</span>
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/** 单个规格小块 */
function SpecBlock({ label, value, unit }: { label: string; value: string; unit: string }) {
  return (
    <div className="border-t border-ink-200 pt-4">
      <p className="eyebrow text-ink-400">{label}</p>
      <p className="mt-3 font-serif text-2xl lg:text-3xl font-medium text-ink-900 numeric leading-none">
        {value}
      </p>
      <p className="mt-2 text-xs text-ink-500">{unit}</p>
    </div>
  );
}

/**
 * eVTOL 软包电池的极简线性 SVG
 * - 顶部双极耳
 * - 矩形电芯主体
 * - 中心一个细小的青色圆点（呼应能量核心）
 */
function EvtolBatterySvg() {
  return (
    <svg
      viewBox="0 0 240 360"
      className="w-full h-full max-w-[200px] lg:max-w-[240px]"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* 左极耳 */}
      <rect x="56" y="20" width="40" height="20" stroke="#0A2540" strokeWidth="1" fill="none" />
      {/* 右极耳 */}
      <rect x="144" y="20" width="40" height="20" stroke="#0A2540" strokeWidth="1" fill="none" />

      {/* 极耳到主体的过渡 */}
      <line x1="56" y1="40" x2="40" y2="60" stroke="#0A2540" strokeWidth="1" />
      <line x1="96" y1="40" x2="96" y2="60" stroke="#0A2540" strokeWidth="1" />
      <line x1="144" y1="40" x2="144" y2="60" stroke="#0A2540" strokeWidth="1" />
      <line x1="184" y1="40" x2="200" y2="60" stroke="#0A2540" strokeWidth="1" />

      {/* 主体软包外形 */}
      <rect
        x="40"
        y="60"
        width="160"
        height="280"
        rx="2"
        stroke="#0A2540"
        strokeWidth="1"
        fill="none"
      />

      {/* 内层封装边线 */}
      <rect
        x="48"
        y="68"
        width="144"
        height="264"
        rx="1"
        stroke="#0A2540"
        strokeWidth="0.5"
        opacity="0.3"
        fill="none"
      />

      {/* 中心青色能量点 */}
      <circle cx="120" cy="200" r="3" fill="#14B8B0" />
      <circle
        cx="120"
        cy="200"
        r="8"
        stroke="#14B8B0"
        strokeWidth="0.5"
        opacity="0.4"
        fill="none"
      />
      <circle
        cx="120"
        cy="200"
        r="16"
        stroke="#14B8B0"
        strokeWidth="0.5"
        opacity="0.2"
        fill="none"
      />
    </svg>
  );
}
