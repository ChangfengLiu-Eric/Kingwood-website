'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

/**
 * 关于页 Hero
 * 极简：eyebrow + 大标题（三十年 / 专注一件事）+ 副标 + 描述
 * 右侧放一个抽象的"1995→2025"时间刻度
 */
export function AboutHero() {
  const t = useTranslations('about.hero');

  return (
    <section className="relative pt-32 lg:pt-40 pb-20 lg:pb-32 overflow-hidden">
      <div className="absolute inset-0 bg-grid-faint opacity-50 pointer-events-none" />

      <div className="container-content relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* 左：文字 */}
          <div className="lg:col-span-7">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="eyebrow text-teal-500 mb-8"
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
              className="mt-6 max-w-xl text-sm lg:text-base leading-relaxed text-ink-600"
            >
              {t('description')}
            </motion.p>
          </div>

          {/* 右：年份刻度 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 1.2 }}
            className="lg:col-span-5"
          >
            <YearScaleSvg />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/**
 * 1995 → 2025 时间刻度
 * 横向时间轴，30 年的厚度感
 */
function YearScaleSvg() {
  return (
    <div className="w-full max-w-[440px] mx-auto">
      <svg
        viewBox="0 0 440 320"
        className="w-full h-auto"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* 顶部 30 YEARS */}
        <text
          x="220"
          y="100"
          fontSize="120"
          fontFamily="Cormorant Garamond, serif"
          fontWeight="500"
          fill="#0A0E14"
          textAnchor="middle"
          letterSpacing="-4"
        >
          30
        </text>
        <text
          x="220"
          y="130"
          fontSize="11"
          fontFamily="JetBrains Mono, monospace"
          fontWeight="500"
          fill="#14B8B0"
          textAnchor="middle"
          letterSpacing="6"
        >
          YEARS
        </text>

        {/* 时间轴 */}
        <line x1="40" y1="220" x2="400" y2="220" stroke="#0A2540" strokeWidth="0.5" opacity="0.4" />

        {/* 起点 1995 */}
        <motion.circle
          cx="40"
          cy="220"
          r="5"
          fill="#14B8B0"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        />
        <text
          x="40"
          y="250"
          fontSize="12"
          fontFamily="JetBrains Mono, monospace"
          fontWeight="600"
          fill="#0A0E14"
          textAnchor="middle"
        >
          1995
        </text>
        <text
          x="40"
          y="266"
          fontSize="8"
          fontFamily="Inter, sans-serif"
          fill="#5C6778"
          textAnchor="middle"
          letterSpacing="1"
        >
          FOUNDED
        </text>

        {/* 中间节点 */}
        {[100, 160, 220, 280, 340].map((x, i) => (
          <motion.circle
            key={x}
            cx={x}
            cy="220"
            r="2"
            fill="#0A2540"
            opacity="0.4"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1.3 + i * 0.1, duration: 0.4 }}
          />
        ))}

        {/* 终点 2025 */}
        <motion.circle
          cx="400"
          cy="220"
          r="5"
          fill="#14B8B0"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1.8, duration: 0.6 }}
        />
        <text
          x="400"
          y="250"
          fontSize="12"
          fontFamily="JetBrains Mono, monospace"
          fontWeight="600"
          fill="#0A0E14"
          textAnchor="middle"
        >
          2025
        </text>
        <text
          x="400"
          y="266"
          fontSize="8"
          fontFamily="Inter, sans-serif"
          fill="#5C6778"
          textAnchor="middle"
          letterSpacing="1"
        >
          AVIATION
        </text>

        {/* 进度延伸 */}
        <motion.line
          x1="40"
          y1="220"
          x2="400"
          y2="220"
          stroke="#14B8B0"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ delay: 1, duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        />
      </svg>
    </div>
  );
}
