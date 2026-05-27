'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

/**
 * 应用总览 Hero
 */
export function ApplicationsHero() {
  const t = useTranslations('applications.hero');

  return (
    <section className="relative pt-32 lg:pt-40 pb-16 lg:pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-grid-faint opacity-50 pointer-events-none" />

      <div className="container-content relative">
        <div className="max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="eyebrow text-[#b8923f] mb-8"
          >
            {t('eyebrow')}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] font-medium text-ink-900"
          >
            <span className="block">{t('title1')}</span>
            <span className="block">
              <span className="accent">{t('title2')}</span>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-6 lg:mt-8 text-sm lg:text-base text-ink-500 font-light tracking-wide"
          >
            {t('subtitle')}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.8 }}
            className="mt-6 max-w-2xl text-sm lg:text-base leading-relaxed text-ink-600"
          >
            {t('description')}
          </motion.p>
        </div>
      </div>
    </section>
  );
}
