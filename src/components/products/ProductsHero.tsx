'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

/**
 * 产品中心 Hero
 * 极简：eyebrow + 大标题 + 副标 + 描述
 * 右侧放一个抽象的"8 款电芯"网格示意
 */
export function ProductsHero() {
  const t = useTranslations('products.hero');

  return (
    <section className="relative pt-32 lg:pt-40 pb-20 lg:pb-24 overflow-hidden">
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

          {/* 右：8 款电芯网格示意 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 1.2 }}
            className="lg:col-span-5"
          >
            <ProductsGridSvg />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/**
 * 抽象的 8 款电芯阵列：5 软包 + 3 圆柱
 */
function ProductsGridSvg() {
  return (
    <div className="w-full max-w-[440px] mx-auto">
      <svg
        viewBox="0 0 440 320"
        className="w-full h-auto"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* 5 软包电芯（上排） */}
        {[0, 1, 2, 3, 4].map((i) => {
          const isFlagship = i === 3; // 第 4 个用青色高亮（KW-eVTOL-01）
          return (
            <motion.g
              key={`pouch-${i}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + i * 0.08, duration: 0.6 }}
            >
              <rect
                x={20 + i * 78}
                y="40"
                width="60"
                height="160"
                rx="2"
                stroke={isFlagship ? '#14B8B0' : '#0A2540'}
                strokeWidth={isFlagship ? 1.5 : 0.75}
                fill={isFlagship ? 'rgba(20, 184, 176, 0.05)' : 'none'}
                opacity={isFlagship ? 1 : 0.5}
              />
              {/* 顶部极耳 */}
              <rect
                x={32 + i * 78}
                y="32"
                width="14"
                height="8"
                stroke={isFlagship ? '#14B8B0' : '#0A2540'}
                strokeWidth="0.5"
                opacity={isFlagship ? 0.8 : 0.4}
              />
              <rect
                x={54 + i * 78}
                y="32"
                width="14"
                height="8"
                stroke={isFlagship ? '#14B8B0' : '#0A2540'}
                strokeWidth="0.5"
                opacity={isFlagship ? 0.8 : 0.4}
              />
              {/* 中心点 */}
              {isFlagship && (
                <circle cx={50 + i * 78} cy="120" r="2" fill="#14B8B0" />
              )}
            </motion.g>
          );
        })}

        {/* 3 圆柱电芯（下排） */}
        {[0, 1, 2].map((i) => {
          const isFlagship = i === 0; // KW-LTO-14500 旗舰
          return (
            <motion.g
              key={`cyl-${i}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 + i * 0.08, duration: 0.6 }}
            >
              {/* 顶端 */}
              <rect
                x={70 + i * 100}
                y="232"
                width="40"
                height="4"
                rx="1"
                stroke={isFlagship ? '#14B8B0' : '#0A2540'}
                strokeWidth="0.5"
                opacity={isFlagship ? 0.8 : 0.4}
              />
              {/* 主体 */}
              <rect
                x={65 + i * 100}
                y="236"
                width="50"
                height="60"
                rx="2"
                stroke={isFlagship ? '#14B8B0' : '#0A2540'}
                strokeWidth={isFlagship ? 1.5 : 0.75}
                fill={isFlagship ? 'rgba(20, 184, 176, 0.05)' : 'none'}
                opacity={isFlagship ? 1 : 0.5}
              />
              {/* 标签 */}
              {isFlagship && (
                <text
                  x={90 + i * 100}
                  y="272"
                  fontSize="8"
                  fontFamily="JetBrains Mono, monospace"
                  fill="#14B8B0"
                  textAnchor="middle"
                  letterSpacing="1"
                >
                  LTO
                </text>
              )}
            </motion.g>
          );
        })}

        {/* 顶部标签 */}
        <text
          x="20"
          y="24"
          fontSize="9"
          fontFamily="JetBrains Mono, monospace"
          fill="#5C6778"
          letterSpacing="2"
        >
          POUCH × 5
        </text>
        <text
          x="65"
          y="222"
          fontSize="9"
          fontFamily="JetBrains Mono, monospace"
          fill="#5C6778"
          letterSpacing="2"
        >
          CYLINDRICAL × 3
        </text>
      </svg>
    </div>
  );
}
