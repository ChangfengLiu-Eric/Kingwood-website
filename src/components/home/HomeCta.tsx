'use client';

import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';

/**
 * 首页底部 CTA
 * "期待与您 / 开启合作"
 * 双按钮 + 三联系信息（电话/邮箱/地点）
 */
export function HomeCta() {
  const t = useTranslations('home.cta');

  return (
    <section className="bg-white py-24 lg:py-32 border-t border-ink-100">
      <div className="container-content text-center">
        <Reveal>
          <p className="eyebrow mb-8">{t('eyebrow')}</p>
        </Reveal>

        <Reveal delay={0.1}>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-[1.1] font-medium text-ink-900">
            <span className="block">{t('title1')}</span>
            <span className="block">
              {t('title2')}
              <span className="accent">{t('titleHighlight')}</span>
            </span>
          </h2>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-8 max-w-xl mx-auto text-sm lg:text-base leading-relaxed text-ink-600">
            {t('description')}
          </p>
        </Reveal>

        {/* 双按钮 */}
        <Reveal delay={0.3}>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary group">
              <span>{t('ctaPrimary')}</span>
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
            <Link href="/products" className="btn-secondary">
              {t('ctaSecondary')}
            </Link>
          </div>
        </Reveal>

        {/* 三联系信息 */}
        <Reveal delay={0.4}>
          <div className="mt-20 lg:mt-24 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto pt-12 border-t border-ink-100">
            <ContactItem label={t('phone')} value={t('phoneValue')} />
            <ContactItem label={t('email')} value={t('emailValue')} />
            <ContactItem label={t('location')} value={t('locationValue')} />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ContactItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="text-center">
      <p className="eyebrow text-ink-400 mb-3">{label}</p>
      <p className="text-sm font-mono tracking-wider text-ink-700">{value}</p>
    </div>
  );
}
