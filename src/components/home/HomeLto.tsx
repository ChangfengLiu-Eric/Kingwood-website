'use client';

import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';

/**
 * LTO Flagship - 旗舰 02
 * 浅灰背景区块
 * 右侧带竖排水印 "L·T·O·B·A·T·T·E·R·Y"
 * 左侧：FLAGSHIP·02 + 双行大标题 + 描述 + 3个超大数字（20K+ / -40°C / 0）
 * 右侧：三节圆柱电池 SVG + 规格标签
 */
export function HomeLto() {
  const t = useTranslations('home.lto');

  return (
    <section className="bg-ink-50 section-padding relative overflow-hidden">
      {/* 右侧竖排水印 */}
      <div className="hidden lg:block absolute right-4 xl:right-8 top-1/2 -translate-y-1/2 pointer-events-none">
        <p className="vertical-watermark whitespace-nowrap">
          {t('watermark')}
        </p>
      </div>

      <div className="container-content relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* 左：文字 + 数据 */}
          <div className="lg:col-span-6">
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

            {/* 三个超大数字 */}
            <Reveal delay={0.4}>
              <div className="mt-10 lg:mt-12 grid grid-cols-3 gap-4 lg:gap-6 max-w-lg">
                <BigMetric
                  label={t('spec1Label')}
                  value={t('spec1Value')}
                  sub=""
                />
                <BigMetric
                  label={t('spec2Label')}
                  value={t('spec2Value')}
                  sub={t('spec2Sub')}
                />
                <BigMetric
                  label={t('spec3Label')}
                  value={t('spec3Value')}
                  sub={t('spec3Sub')}
                  accent
                />
              </div>
            </Reveal>

            <Reveal delay={0.5}>
              <Link
                href="/lto"
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

          {/* 右：三节圆柱电池 + 规格 */}
          <Reveal direction="left" className="lg:col-span-6">
            <div className="relative">
              <LtoBatteriesSvg />

              {/* 底部 SIZE / CHEMISTRY 标签 */}
              <div className="mt-8 flex flex-col sm:flex-row gap-6 sm:gap-12">
                <div>
                  <p className="eyebrow text-ink-400">{t('sizeLabel')}</p>
                  <p className="mt-2 text-sm font-mono text-ink-700 tracking-wider">
                    {t('sizeValue')}
                  </p>
                </div>
                <div>
                  <p className="eyebrow text-ink-400">{t('chemistryLabel')}</p>
                  <p className="mt-2 text-sm font-mono text-ink-700 tracking-wider">
                    {t('chemistryValue')}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/** 一个超大数字+小标签 */
function BigMetric({
  label,
  value,
  sub,
  accent = false,
}: {
  label: string;
  value: string;
  sub: string;
  accent?: boolean;
}) {
  return (
    <div className="border-t border-ink-200 pt-4">
      <p className="eyebrow text-ink-400">{label}</p>
      <p
        className={`mt-3 font-serif text-3xl lg:text-4xl xl:text-5xl font-medium numeric leading-none ${
          accent ? 'text-teal-500' : 'text-ink-900'
        }`}
      >
        {value}
      </p>
      {sub && <p className="mt-2 text-xs text-ink-500">{sub}</p>}
    </div>
  );
}

/**
 * LTO 三节小圆柱电池
 * 中间一节标 LTO，体现"军工技术进入日常"
 */
function LtoBatteriesSvg() {
  return (
    <svg
      viewBox="0 0 480 280"
      className="w-full h-auto max-w-[480px]"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* 三节电池：从左到右尺寸略相同 */}
      {[80, 200, 320].map((x, i) => (
        <g key={x}>
          {/* 顶部正极突起 */}
          <rect x={x + 14} y="20" width="32" height="6" rx="1" stroke="#0A2540" strokeWidth="1" fill="none" />
          {/* 主体 */}
          <rect
            x={x}
            y="26"
            width="60"
            height="220"
            rx="2"
            stroke="#0A2540"
            strokeWidth={i === 1 ? 1.5 : 1}
            fill={i === 1 ? '#FFFFFF' : 'none'}
          />
          {/* 顶端环线 */}
          <line x1={x} y1="36" x2={x + 60} y2="36" stroke="#0A2540" strokeWidth="0.5" opacity="0.4" />
          {/* 中间 LTO 文字（只有中间一节）*/}
          {i === 1 && (
            <>
              <text
                x={x + 30}
                y="130"
                textAnchor="middle"
                fontSize="14"
                fontFamily="JetBrains Mono, monospace"
                fontWeight="600"
                fill="#14B8B0"
                letterSpacing="2"
              >
                LTO
              </text>
              <text
                x={x + 30}
                y="148"
                textAnchor="middle"
                fontSize="8"
                fontFamily="JetBrains Mono, monospace"
                fill="#5C6778"
                letterSpacing="1"
              >
                1.7V
              </text>
              {/* 中间装饰青色细线 */}
              <line x1={x + 6} y1="180" x2={x + 54} y2="180" stroke="#14B8B0" strokeWidth="0.5" />
              <line x1={x + 6} y1="186" x2={x + 54} y2="186" stroke="#14B8B0" strokeWidth="0.5" opacity="0.5" />
            </>
          )}
          {/* 底部环 */}
          <line x1={x} y1="240" x2={x + 60} y2="240" stroke="#0A2540" strokeWidth="0.5" opacity="0.4" />
        </g>
      ))}
    </svg>
  );
}
