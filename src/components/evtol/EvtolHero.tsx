'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

/**
 * eVTOL 专题页 Hero
 * 左：FLAGSHIP·01 / 型号 KW-eVTOL-01 / 大标题 + 描述
 * 右：低空飞行场景的极简线条 SVG（地平线 + eVTOL 简笔 + 信号波）
 */
export function EvtolHero() {
  const t = useTranslations('evtol.hero');

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

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.8 }}
              className="font-mono text-sm tracking-wider text-ink-700 mb-6"
            >
              P / N · {t('model')}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] font-medium text-ink-900"
            >
              <span className="block">{t('title1')}</span>
              <span className="block">
                {t('title2')}
                <span className="accent">{t('titleHighlight')}</span>
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

          {/* 右：低空场景视觉 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1.2 }}
            className="lg:col-span-5 relative"
          >
            <EvtolSceneSvg />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/**
 * 低空 eVTOL 场景：
 * - 远处地平线
 * - 一架抽象 eVTOL（双旋翼 + 机身）
 * - 从机身向外延伸的脉冲波（暗示动力电池在工作）
 * - 远处的城市天际线低轮廓
 */
function EvtolSceneSvg() {
  return (
    <div className="relative aspect-square w-full max-w-[460px] mx-auto">
      <svg
        viewBox="0 0 460 460"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <radialGradient id="evtolGlow" cx="50%" cy="40%" r="55%">
            <stop offset="0%" stopColor="#14B8B0" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#14B8B0" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* 背景光晕 */}
        <circle cx="230" cy="180" r="180" fill="url(#evtolGlow)" />

        {/* 地平线 */}
        <line x1="20" y1="340" x2="440" y2="340" stroke="#0A2540" strokeWidth="0.5" opacity="0.3" />

        {/* 远方城市轮廓 */}
        <path
          d="M 60 340 L 60 320 L 90 320 L 90 305 L 120 305 L 120 325 L 150 325 L 150 310 L 180 310 L 180 320 L 200 320 L 200 340"
          stroke="#0A2540"
          strokeWidth="0.5"
          opacity="0.2"
        />
        <path
          d="M 260 340 L 260 318 L 280 318 L 280 308 L 310 308 L 310 322 L 340 322 L 340 312 L 380 312 L 380 340"
          stroke="#0A2540"
          strokeWidth="0.5"
          opacity="0.2"
        />

        {/* eVTOL 主体：抽象的双桨翼飞行器 */}
        {/* 中央机身 */}
        <ellipse cx="230" cy="180" rx="40" ry="10" stroke="#0A2540" strokeWidth="1" fill="white" />

        {/* 左旋翼支臂 */}
        <line x1="190" y1="180" x2="155" y2="160" stroke="#0A2540" strokeWidth="1" />
        {/* 左旋翼盘 */}
        <ellipse cx="145" cy="155" rx="22" ry="3" stroke="#0A2540" strokeWidth="0.75" opacity="0.6" />
        <line x1="123" y1="155" x2="167" y2="155" stroke="#14B8B0" strokeWidth="0.5" opacity="0.5" />

        {/* 右旋翼支臂 */}
        <line x1="270" y1="180" x2="305" y2="160" stroke="#0A2540" strokeWidth="1" />
        {/* 右旋翼盘 */}
        <ellipse cx="315" cy="155" rx="22" ry="3" stroke="#0A2540" strokeWidth="0.75" opacity="0.6" />
        <line x1="293" y1="155" x2="337" y2="155" stroke="#14B8B0" strokeWidth="0.5" opacity="0.5" />

        {/* 机身下方 landing skid */}
        <line x1="210" y1="190" x2="200" y2="200" stroke="#0A2540" strokeWidth="0.75" opacity="0.5" />
        <line x1="250" y1="190" x2="260" y2="200" stroke="#0A2540" strokeWidth="0.75" opacity="0.5" />
        <line x1="200" y1="200" x2="260" y2="200" stroke="#0A2540" strokeWidth="0.75" opacity="0.5" />

        {/* 中央电池能量核心 */}
        <circle cx="230" cy="180" r="3" fill="#14B8B0" />

        {/* 脉冲波 1 */}
        <motion.circle
          cx="230"
          cy="180"
          r="20"
          stroke="#14B8B0"
          strokeWidth="0.75"
          fill="none"
          initial={{ r: 20, opacity: 0.7 }}
          animate={{ r: [20, 100], opacity: [0.7, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeOut', delay: 1 }}
        />
        {/* 脉冲波 2 */}
        <motion.circle
          cx="230"
          cy="180"
          r="20"
          stroke="#14B8B0"
          strokeWidth="0.75"
          fill="none"
          initial={{ r: 20, opacity: 0.7 }}
          animate={{ r: [20, 100], opacity: [0.7, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeOut', delay: 2.5 }}
        />

        {/* 上升的飞行轨迹（虚线） */}
        <motion.path
          d="M 230 340 Q 230 270 230 190"
          stroke="#14B8B0"
          strokeWidth="0.5"
          strokeDasharray="2 4"
          fill="none"
          opacity="0.4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 2, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
        />

        {/* 顶部刻度（航空感） */}
        <line x1="40" y1="60" x2="80" y2="60" stroke="#0A2540" strokeWidth="0.5" opacity="0.4" />
        <text x="40" y="50" fontSize="8" fontFamily="JetBrains Mono, monospace" fill="#5C6778" letterSpacing="1">
          ALT
        </text>
        <text x="40" y="78" fontSize="9" fontFamily="JetBrains Mono, monospace" fill="#5C6778" letterSpacing="1">
          ≥330 Wh/kg
        </text>

        <line x1="380" y1="60" x2="420" y2="60" stroke="#0A2540" strokeWidth="0.5" opacity="0.4" />
        <text x="380" y="50" fontSize="8" fontFamily="JetBrains Mono, monospace" fill="#5C6778" letterSpacing="1">
          PWR
        </text>
        <text x="380" y="78" fontSize="9" fontFamily="JetBrains Mono, monospace" fill="#5C6778" letterSpacing="1">
          ≥8C
        </text>
      </svg>
    </div>
  );
}
