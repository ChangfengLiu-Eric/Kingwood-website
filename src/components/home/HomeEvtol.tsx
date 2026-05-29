'use client';

import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';

export function HomeEvtol() {
  const t = useTranslations('home.evtol');

  return (
    <section className="bg-white pt-[80px] lg:pt-[140px] pb-16 lg:pb-20">
      <div className="container-content">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

          {/* 左：图片占位 */}
          <Reveal direction="right" className="lg:col-span-6 order-2 lg:order-1">
            <div
              className="aspect-[4/3] rounded-xl flex items-end p-7 relative overflow-hidden"
              aria-label="eVTOL battery module"
            >
              {/* 图片：eVTOL / 无人机飞行场景 */}
              <Image
                src="/images/image-1779800872721.jpg"
                fill
                alt="eVTOL drone in flight"
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* 底部渐变：保证文字可读 */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
              {/* 角标装饰 */}
              <div className="absolute top-6 right-6 w-8 h-8 border-t border-r border-[#b8923f]/60" />
              <div className="absolute bottom-6 left-6 w-8 h-8 border-b border-l border-[#b8923f]/60" />
              <div className="relative z-10">
                <p className="text-[10px] tracking-[0.28em] uppercase text-white/55 mb-1">{t('modelLabel')}</p>
                <p className="text-xs font-mono text-white/80 tracking-widest">{t('modelNumber')}</p>
              </div>
            </div>
          </Reveal>

          {/* 右：文字 */}
          <div className="lg:col-span-6 order-1 lg:order-2">


            <Reveal delay={0.1}>
              <h2 className="kw2-serif text-[clamp(1.875rem,3.8vw,2.375rem)] leading-[1.15] text-[#0e1320]">
                <span className="block">{t('title1')}</span>
                <span className="block">{t('title2')}</span>
              </h2>
            </Reveal>

            <Reveal delay={0.18}>
              <p className="mt-4 text-[14px] font-light tracking-wide text-[#6a7180]">
                {t('subtitle')}
              </p>
            </Reveal>

            <Reveal delay={0.26}>
              <p className="mt-5 text-sm leading-relaxed text-[#3a4150] max-w-md">
                {t('description')}
              </p>
            </Reveal>

            {/* 3 列规格 — 值用金色 */}
            <Reveal delay={0.34}>
              <div className="mt-10 grid grid-cols-3 gap-5">
                <SpecCol label={t('spec1Label')} value={t('spec1Value')} unit={t('spec1Unit')} />
                <SpecCol label={t('spec2Label')} value={t('spec2Value')} unit={t('spec2Unit')} />
                <SpecCol label={t('spec3Label')} value={t('spec3Value')} unit={t('spec3Unit')} />
              </div>
            </Reveal>

            <Reveal delay={0.42}>
              <Link
                href="/evtol"
                className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-[#0e1320] link-underline group"
              >
                <span>{t('cta')}</span>
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function SpecCol({ label, value, unit }: { label: string; value: string; unit: string }) {
  return (
    <div className="pt-4 relative">
      {/* 金色顶线 */}
      <div className="absolute top-0 left-0 w-6 h-px bg-[#b8923f]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-[#e8e8e4]" />
      <p className="text-[10px] tracking-[0.28em] uppercase text-[#8a8f9a] mb-3 mt-0">{label}</p>
      <p className="kw2-serif text-[1.625rem] leading-none text-[#b8923f]">{value}</p>
      <p className="mt-2 unit-muted text-xs">{unit}</p>
    </div>
  );
}
