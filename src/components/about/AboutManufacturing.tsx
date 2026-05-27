'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Reveal } from '@/components/ui/Reveal';
import { MapPin, Cpu, ShieldCheck, TrendingUp } from 'lucide-react';

const ICONS = [MapPin, Cpu, ShieldCheck, TrendingUp];

export function AboutManufacturing() {
  const t = useTranslations('about.manufacturing');
  const items = t.raw('items') as Array<{
    label: string;
    title: string;
    sub: string;
  }>;

  return (
    <section className="bg-white section-padding">
      <div className="container-content">

        {/* ── 眉标 + 标题 ──────────────────────────────────────── */}
        <div className="mb-12 lg:mb-16">
          <Reveal>
            <p className="eyebrow text-[#b8923f] mb-5">{t('eyebrow')}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-[2rem] font-medium text-[#0e1320] leading-[1.1]">
              {t('title')}
              <span className="block text-sm tracking-[0.18em] italic text-[#8a8f9a] mt-2">
                {t('subtitle')}
              </span>
            </h2>
          </Reveal>
        </div>

        {/* ── 主体：图片 + 数据 ────────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">

          {/* 左：工厂图片 */}
          <Reveal className="lg:col-span-6">
            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden">
              <Image
                src="/images/factory-image.jpg"
                fill
                alt="Kingwood Meizhou Manufacturing Base"
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* 底部渐变遮罩 */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c1728]/60 via-transparent to-transparent" />
              {/* 左下角标签 */}
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-[10px] tracking-[0.3em] uppercase text-white/50 mb-1">
                  KINGWOOD · 广东金华达
                </p>
                <p className="text-white text-sm font-medium tracking-wide">
                  梅州生产基地 · Meizhou, Guangdong
                </p>
              </div>
              {/* 右上角装饰框 */}
              <div className="absolute top-5 right-5 w-7 h-7 border-t border-r border-[#b8923f]/50" />
            </div>
          </Reveal>

          {/* 右：数据 + 详情 */}
          <div className="lg:col-span-6 flex flex-col gap-5">

            {/* 深色指标卡 */}
            <Reveal direction="left" delay={0.15}>
              <div className="bg-[#0c1728] rounded-xl px-6 py-5 relative overflow-hidden">
                {/* 背景格栅 */}
                <div className="absolute inset-0 pointer-events-none" style={{
                  backgroundImage: [
                    'linear-gradient(rgba(184,146,63,1) 1px, transparent 1px)',
                    'linear-gradient(to right, rgba(184,146,63,1) 1px, transparent 1px)',
                  ].join(','),
                  backgroundSize: '40px 40px',
                  opacity: 0.03,
                }} />
                <div className="absolute top-4 right-4 w-5 h-5 border-t border-r border-[#b8923f]/30" />

                <div className="flex items-end justify-between relative">
                  <div>
                    <p className="text-[10px] tracking-[0.28em] uppercase text-white/35 mb-2">
                      {t('capacityLabel')}
                    </p>
                    <p className="font-bold text-[2.8rem] leading-none tabular-nums text-white">
                      {t('capacityValue')}
                    </p>
                  </div>
                  <div className="text-right pb-1">
                    <p className="font-bold text-2xl text-white leading-none">{t('staffValue')}</p>
                    <p className="text-[10px] tracking-[0.2em] uppercase text-white/40 mt-1.5">
                      {t('staffLabel')}
                    </p>
                  </div>
                </div>

                <div className="h-px w-full bg-gradient-to-r from-[#b8923f]/50 via-[#b8923f]/15 to-transparent mt-4 mb-3" />

                <div className="flex flex-wrap gap-x-5 gap-y-1.5">
                  {['IATF 16949', t('badge1'), t('badge2')].map((b) => (
                    <span key={b} className="flex items-center gap-1.5 text-[9px] tracking-[0.18em] uppercase text-white/30">
                      <span className="w-1 h-1 rounded-full bg-[#b8923f]/60 flex-shrink-0" />
                      {b}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* 四项详情：2×2 网格 */}
            <div className="grid grid-cols-2 gap-px bg-[#e8e8e4]">
              {items.map((item, i) => {
                const Icon = ICONS[i];
                return (
                  <Reveal key={i} delay={0.1 + i * 0.07}>
                    <div className="bg-white p-4 flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#b8923f]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Icon size={11} className="text-[#b8923f]" />
                      </div>
                      <div>
                        <p className="text-[9px] tracking-[0.22em] uppercase text-[#9a9fa8] mb-0.5">
                          {item.label}
                        </p>
                        <p className="text-xs font-medium text-[#0e1320] leading-snug">
                          {item.title}
                        </p>
                        <p className="text-[11px] text-[#7a818e] mt-0.5 leading-relaxed">
                          {item.sub}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
