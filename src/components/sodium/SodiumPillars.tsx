'use client';

import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';

/**
 * 钠离子 4 大支柱
 * 白底 / 4 个论点横排（移动端 2x2）
 * 底部 CTA
 */
export function SodiumPillars() {
  const t = useTranslations('sodium.pillars');
  const tCommon = useTranslations('common');
  const items = t.raw('items') as Array<{
    number: string;
    title: string;
    desc: string;
  }>;

  return (
    <section className="bg-white section-padding">
      <div className="container-content">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-6 lg:gap-x-10">
          {items.map((item, i) => (
            <Reveal key={item.number} delay={i * 0.1}>
              <div className="border-t border-ink-200 pt-6">
                <p className="font-serif text-4xl lg:text-5xl font-medium text-[#b8923f] numeric leading-none mb-6">
                  {item.number}
                </p>
                <h3 className="font-serif text-xl lg:text-2xl font-medium text-ink-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-xs lg:text-sm text-ink-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* 底部 CTA */}
        <Reveal delay={0.4}>
          <div className="mt-20 lg:mt-24 text-center">
            <Link href="/contact" className="btn-primary group">
              <span>{tCommon('contactForSpecs')}</span>
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
