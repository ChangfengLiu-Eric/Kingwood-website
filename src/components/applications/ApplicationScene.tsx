'use client';

import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';

type SceneKey =
  | 'lowAltitude'
  | 'defense'
  | 'industrial'
  | 'commercial'
  | 'storage'
  | 'telecom';

interface Props {
  sceneKey: SceneKey;
  number: string; // 01..06
}

/**
 * 应用子页模板
 * Hero（带场景编号 + 标题 + 引导文）→ 双段叙事 → 4 个具体场景 → 推荐产品 → CTA
 */
export function ApplicationScene({ sceneKey, number }: Props) {
  const t = useTranslations(`applications.${sceneKey}`);
  const tCommon = useTranslations('common');
  const scenarios = t.raw('scenarios') as string[];
  const products = t.raw('products') as string[];

  return (
    <>
      {/* Hero */}
      <section className="relative pt-32 lg:pt-40 pb-16 lg:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-grid-faint opacity-50 pointer-events-none" />

        <div className="container-content relative">
          <Link
            href="/applications"
            className="inline-flex items-center gap-2 text-xs text-ink-500 hover:text-[#b8923f] transition-colors mb-12"
          >
            <ArrowLeft size={14} />
            <span className="eyebrow">{tCommon('allApplications')}</span>
          </Link>

          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-baseline gap-6 mb-8"
            >
              <span className="font-serif text-5xl lg:text-6xl font-medium text-[#b8923f] numeric leading-none">
                {number}
              </span>
              <div>
                <p className="eyebrow text-ink-400 mb-2">{t('titleEn')}</p>
                <p className="text-sm text-ink-500 italic">APPLICATION</p>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] font-medium text-ink-900 mb-6"
            >
              {t('title')}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-base lg:text-lg text-ink-600 max-w-2xl"
            >
              {t('lead')}
            </motion.p>
          </div>
        </div>
      </section>

      {/* 叙事段 */}
      <section className="bg-ink-50 section-padding">
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-5">
              <Reveal>
                <p className="eyebrow mb-6">CONTEXT</p>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="font-serif text-3xl lg:text-4xl font-medium text-ink-900 leading-[1.1]">
                  {tCommon('context')}
                </h2>
              </Reveal>
            </div>
            <div className="lg:col-span-7 lg:pt-2">
              <Reveal delay={0.2}>
                <p className="text-base lg:text-lg leading-relaxed text-ink-700 mb-6">
                  {t('p1')}
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <p className="text-base lg:text-lg leading-relaxed text-ink-700">
                  {t('p2')}
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* 具体场景列表 */}
      <section className="bg-white section-padding">
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
            <div className="lg:col-span-5">
              <Reveal>
                <p className="eyebrow mb-6">SCENARIOS</p>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="font-serif text-3xl lg:text-4xl font-medium text-ink-900 leading-[1.1]">
                  {tCommon('scenarios')}
                </h2>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <ul>
                {scenarios.map((sc, i) => (
                  <Reveal key={sc} delay={i * 0.08}>
                    <li className="flex items-baseline gap-6 py-5 lg:py-6 border-b border-ink-200 last:border-0">
                      <span className="font-mono text-xs text-[#b8923f] tracking-wider numeric shrink-0">
                        0{i + 1}
                      </span>
                      <span className="text-base lg:text-lg text-ink-700">{sc}</span>
                    </li>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 推荐产品 */}
      <section className="bg-ink-50 section-padding">
        <div className="container-content">
          <div className="max-w-2xl mb-12">
            <Reveal>
              <p className="eyebrow mb-6">RECOMMENDED PRODUCTS</p>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="font-serif text-3xl lg:text-4xl font-medium text-ink-900 leading-[1.1]">
                {tCommon('recommendedProducts')}
              </h2>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {products.map((model, i) => (
              <Reveal key={model} delay={i * 0.1}>
                <Link
                  href="/products"
                  className="block bg-white p-8 border border-ink-200 hover:border-[#b8923f] transition-colors group"
                >
                  <p className="eyebrow text-ink-400 mb-3">MODEL</p>
                  <p className="font-mono text-lg lg:text-xl tracking-wider text-ink-900 group-hover:text-[#b8923f] transition-colors">
                    {model}
                  </p>
                  <div className="mt-6 inline-flex items-center gap-2 text-xs text-ink-400 group-hover:text-[#b8923f] transition-colors">
                    <span className="eyebrow">{tCommon('viewModel')}</span>
                    <ArrowRight
                      size={12}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          {/* CTA */}
          <Reveal delay={0.4}>
            <div className="mt-20 text-center">
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
    </>
  );
}
