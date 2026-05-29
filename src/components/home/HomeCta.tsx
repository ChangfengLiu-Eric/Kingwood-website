'use client';

import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';

export function HomeCta() {
  const t = useTranslations('home.cta');

  return (
    <section className="bg-white py-[120px] lg:py-[180px]">
      <div className="container-content">
        <div className="max-w-3xl mx-auto text-center">

          <Reveal>
            <p className="eyebrow-gold mb-10">{t('eyebrow')}</p>
          </Reveal>

          <Reveal delay={0.12}>
            <h2 className="kw2-serif text-[clamp(1.875rem,4.5vw,3.25rem)] leading-[1.2] text-[#0e1320]">
              <span className="block">{t('title1')}，</span>
              <span className="block">
                {t('title2')}
                <span className="text-[#b8923f]">{t('titleHighlight')}</span>？
              </span>
            </h2>
          </Reveal>

          <Reveal delay={0.22}>
            <p className="mt-7 text-[15px] font-light leading-relaxed text-[#6a7180]">
              {t('description')}
            </p>
          </Reveal>

          <Reveal delay={0.32}>
            <div className="mt-12 flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn-primary group">
                <span>{t('ctaPrimary')}</span>
                <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="/products" className="btn-secondary">
                {t('ctaSecondary')}
              </Link>
            </div>
          </Reveal>

          {/* 联系信息 */}
          <Reveal delay={0.42}>
            <div className="mt-20 pt-10 border-t border-[#e8e8e4] grid grid-cols-1 sm:grid-cols-3 gap-8">
              <ContactItem label={t('phone')}    value={t('phoneValue')}    />
              <ContactItem label={t('email')}    value={t('emailValue')}    />
              <ContactItem label={t('location')} value={t('locationValue')} />
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}

function ContactItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="text-center">
      <p className="eyebrow text-[#8a8f9a] mb-3">{label}</p>
      <p className="text-sm font-mono tracking-wider text-[#3a4150]">{value}</p>
    </div>
  );
}
