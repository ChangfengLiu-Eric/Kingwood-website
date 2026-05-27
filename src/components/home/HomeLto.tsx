'use client';

import Image from 'next/image';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';

export function HomeLto() {
  const t = useTranslations('home.lto');

  return (
    <section className="bg-white pt-0 pb-[80px] lg:pb-[140px]">
      <div className="container-content">

        {/* 分割线：两段金色端点 + 细线 */}
        <div className="flex items-center gap-3 mb-16 lg:mb-20">
          <span className="w-2 h-2 rounded-full bg-[#b8923f]/40 flex-shrink-0" />
          <div className="flex-1 h-px bg-[#e8e8e4]" />
          <span className="w-2 h-2 rounded-full bg-[#b8923f]/40 flex-shrink-0" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

          {/* 左：文字 */}
          <div className="lg:col-span-6">

            <Reveal>
              <span className="inline-block border border-[#b8923f] text-[#b8923f] text-[10px] tracking-[0.32em] uppercase px-3 py-1 mb-8">
                {t('flagshipLabel')}
              </span>
            </Reveal>

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

            {/* 3 列规格 — 值金色 */}
            <Reveal delay={0.34}>
              <div className="mt-10 grid grid-cols-3 gap-5">
                <SpecCol label={t('spec1Label')} value={t('spec1Value')} sub=""        />
                <SpecCol label={t('spec2Label')} value={t('spec2Value')} sub={t('spec2Sub')} />
                <SpecCol label={t('spec3Label')} value={t('spec3Value')} sub={t('spec3Sub')} dim />
              </div>
            </Reveal>

            <Reveal delay={0.42}>
              <Link
                href="/lto"
                className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-[#0e1320] link-underline group"
              >
                <span>{t('cta')}</span>
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>

          {/* 右：深色占位图 */}
          <Reveal direction="left" className="lg:col-span-6">
            <div
              className="aspect-[4/3] rounded-xl flex items-end p-7 relative overflow-hidden"
              aria-label="LTO battery cells"
            >
              {/* 图片：工业重型设备场景 */}
              <Image
                src="/images/artem-korolev-Kk8tEGeyxO4-unsplash (1).jpg"
                fill
                alt="Industrial heavy machinery"
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* 深色蒙层：保持品牌深色调 */}
              <div className="absolute inset-0 bg-[#0e1420]/35" />
              {/* 装饰角标 */}
              <div className="absolute top-6 right-6 w-8 h-8 border-t border-r border-[#b8923f]/40" />
              <div className="absolute bottom-6 left-6 w-8 h-8 border-b border-l border-[#b8923f]/40" />
              {/* 中间极细金线 */}
              <div className="absolute left-7 right-7 top-1/2 -translate-y-1/2 h-px bg-[#b8923f]/15" />
              <div className="relative z-10 flex gap-8">
                <div>
                  <p className="eyebrow-light mb-1">{t('sizeLabel')}</p>
                  <p className="text-xs font-mono text-white/55 tracking-widest">{t('sizeValue')}</p>
                </div>
                <div>
                  <p className="eyebrow-light mb-1">{t('chemistryLabel')}</p>
                  <p className="text-xs font-mono text-white/55 tracking-widest">{t('chemistryValue')}</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function SpecCol({ label, value, sub, dim = false }: { label: string; value: string; sub: string; dim?: boolean }) {
  return (
    <div className="pt-4 relative">
      <div className="absolute top-0 left-0 w-6 h-px bg-[#b8923f]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-[#e8e8e4]" />
      <p className="text-[10px] tracking-[0.28em] uppercase text-[#8a8f9a] mb-3">{label}</p>
      <p className={`kw2-serif text-[1.625rem] leading-none ${dim ? 'text-[#6a7180]' : 'text-[#b8923f]'}`}>
        {value}
      </p>
      {sub && <p className="mt-2 unit-muted text-xs">{sub}</p>}
    </div>
  );
}
