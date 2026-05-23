'use client';

import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

/**
 * 首页 Hero
 * 左侧：eyebrow + 大标题（衬线，关键词青色高亮）+ 副标 + 描述 + CTA
 * 右侧：抽象 SVG 圆环 + 中心点 + 脉冲呼吸
 * 极简、留白充分、品牌优先
 *
 * 移动端修复要点：
 * 1. 小屏不再强制 min-h-[100svh] + items-center —— 内容多时会把标题顶到 Header 后面
 *    改为：小屏自然流（pt-24 pb-16），桌面端才保留全屏居中视觉
 * 2. SCROLL 提示在小屏隐藏 —— 否则它会绝对定位在 SVG/CTA 上方造成重叠
 */
export function HomeHero() {
  const t = useTranslations('home.hero');

  // 标题动画序列：逐行浮现
  const titleVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 + i * 0.15,
        duration: 1,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    }),
  };

  return (
    <section className="relative pt-24 pb-16 lg:pt-24 lg:pb-0 lg:min-h-[100svh] lg:flex lg:items-center overflow-hidden">
      {/* 极轻网格背景 */}
      <div className="absolute inset-0 bg-grid-faint opacity-60 pointer-events-none" />

      <div className="container-content relative w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* 左侧：文字 */}
          <div className="lg:col-span-7">
            {/* Eyebrow */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="eyebrow mb-8 lg:mb-10"
            >
              {t('eyebrow')}
            </motion.p>

            {/* 主标题
                小屏从 text-4xl 起（不再用更小的 text-3xl 起步）
                超大屏不变 */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] tracking-tight text-ink-900 font-medium">
              <motion.span
                custom={0}
                variants={titleVariants}
                initial="hidden"
                animate="visible"
                className="block"
              >
                {t('titleLine1')}
                <span className="accent">{t('titleHighlight1')}</span>
              </motion.span>
              <motion.span
                custom={1}
                variants={titleVariants}
                initial="hidden"
                animate="visible"
                className="block"
              >
                {t('titleLine2')}
                <span className="accent">{t('titleHighlight2')}</span>
              </motion.span>
            </h1>

            {/* 英文副标 */}
            <motion.p
              custom={2}
              variants={titleVariants}
              initial="hidden"
              animate="visible"
              className="mt-6 lg:mt-8 text-base lg:text-lg text-ink-500 font-light tracking-wide"
            >
              {t('subtitle')}
            </motion.p>

            {/* 描述 */}
            <motion.p
              custom={3}
              variants={titleVariants}
              initial="hidden"
              animate="visible"
              className="mt-6 max-w-xl text-sm lg:text-base leading-relaxed text-ink-600"
            >
              {t('description')}
            </motion.p>

            {/* CTA */}
            <motion.div
              custom={4}
              variants={titleVariants}
              initial="hidden"
              animate="visible"
              className="mt-10 lg:mt-12 flex flex-wrap items-center gap-4"
            >
              <Link href="/evtol" className="btn-primary group">
                <span>{t('ctaPrimary')}</span>
                <ArrowRight
                  size={16}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
              <Link href="/about" className="btn-secondary">
                {t('ctaSecondary')}
              </Link>
            </motion.div>
          </div>

          {/* 右侧：抽象 SVG
              小屏限制最大高度，避免 480px 的 aspect-square 在窄屏吃掉过多空间 */}
          <div className="lg:col-span-5 relative flex items-center justify-center min-h-[280px] sm:min-h-[360px] lg:min-h-[480px]">
            <HeroVisual />
          </div>
        </div>
      </div>

      {/* 底部 SCROLL 提示
          ⚠️ 仅在 lg 以上显示 —— 小屏单列布局时，绝对定位的 SCROLL 会叠在
          下方 SVG 或上方 CTA 按钮上造成重叠 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="hidden lg:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-3"
      >
        <span className="eyebrow text-ink-400">{t('scroll')}</span>
        <motion.div
          animate={{ height: [12, 24, 12] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="w-px bg-ink-300"
        />
      </motion.div>
    </section>
  );
}

/**
 * Hero 右侧的抽象视觉：
 * - 外层细圆环
 * - 内层细圆环
 * - 中心青色点 + 脉冲扩散
 * - 远处一两条切线 / 半径
 * 整体很克制，呼应"能量从一点向外辐射"的意象
 */
function HeroVisual() {
  return (
    <div className="relative w-full aspect-square max-w-[480px]">
      <svg
        viewBox="0 0 480 480"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="centerGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#14B8B0" stopOpacity="0.18" />
            <stop offset="100%" stopColor="#14B8B0" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* 极轻光晕 */}
        <circle cx="240" cy="240" r="200" fill="url(#centerGlow)" />

        {/* 外层细圆环 */}
        <motion.circle
          cx="240"
          cy="240"
          r="200"
          stroke="#14B8B0"
          strokeWidth="0.5"
          strokeDasharray="2 4"
          opacity="0.4"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.4 }}
          transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
        />

        {/* 中层圆环 */}
        <motion.circle
          cx="240"
          cy="240"
          r="140"
          stroke="#0A2540"
          strokeWidth="0.5"
          opacity="0.15"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
        />

        {/* 内层小圆环 */}
        <motion.circle
          cx="240"
          cy="240"
          r="80"
          stroke="#14B8B0"
          strokeWidth="0.75"
          opacity="0.6"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1], delay: 1.1 }}
        />

        {/* 脉冲圆 1 */}
        <motion.circle
          cx="240"
          cy="240"
          r="20"
          stroke="#14B8B0"
          strokeWidth="1"
          fill="none"
          initial={{ r: 20, opacity: 0.8 }}
          animate={{ r: [20, 180], opacity: [0.8, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeOut',
            delay: 1.5,
          }}
        />
        {/* 脉冲圆 2（错峰） */}
        <motion.circle
          cx="240"
          cy="240"
          r="20"
          stroke="#14B8B0"
          strokeWidth="1"
          fill="none"
          initial={{ r: 20, opacity: 0.8 }}
          animate={{ r: [20, 180], opacity: [0.8, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeOut',
            delay: 3,
          }}
        />

        {/* 中心实心点 */}
        <motion.circle
          cx="240"
          cy="240"
          r="6"
          fill="#14B8B0"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, delay: 1.4, ease: 'backOut' }}
        />

        {/* 远处的切点：模拟卫星节点 */}
        <motion.circle
          cx="440"
          cy="240"
          r="3"
          fill="#0A2540"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 0.6, delay: 2.2 }}
        />
        <motion.circle
          cx="40"
          cy="240"
          r="2"
          fill="#14B8B0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 0.6, delay: 2.4 }}
        />
        <motion.circle
          cx="240"
          cy="40"
          r="2"
          fill="#0A2540"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 0.6, delay: 2.6 }}
        />

        {/* 一条极细的对角线，暗示信号方向 */}
        <motion.line
          x1="240"
          y1="240"
          x2="440"
          y2="240"
          stroke="#14B8B0"
          strokeWidth="0.5"
          strokeDasharray="1 3"
          opacity="0.4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 2 }}
        />
      </svg>
    </div>
  );
}
