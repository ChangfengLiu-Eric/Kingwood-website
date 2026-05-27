'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

/**
 * 钠离子 Hero
 * 深色 navy 背景 — 区别于其他专题页的浅色，强化"押注、前瞻"的叙事感
 * 左：eyebrow + 大标题 + 描述
 * 右：抽象的"周期表 Na 节点 + 全链条"SVG
 */
export function SodiumHero() {
  const t = useTranslations('sodium.hero');

  return (
    <section className="relative pt-32 lg:pt-40 pb-20 lg:pb-32 overflow-hidden bg-navy-900 text-white">
      {/* 极轻的 navy 装饰 */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 80% 30%, rgba(184, 146, 63, 0.12) 0%, transparent 50%)',
        }}
      />

      <div className="container-content relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* 左：文字 */}
          <div className="lg:col-span-7">
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
              className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-[1.05] font-medium text-white"
            >
              <span className="block">{t('title1')}</span>
              <span className="block">{t('title2')}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mt-6 lg:mt-8 text-sm lg:text-base text-white/60 font-light tracking-wide"
            >
              {t('subtitle')}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.8 }}
              className="mt-6 max-w-xl text-sm lg:text-base leading-relaxed text-white/70"
            >
              {t('description')}
            </motion.p>
          </div>

          {/* 右：周期表 Na 节点 + 链条 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1.2 }}
            className="lg:col-span-5"
          >
            <SodiumNaElementSvg />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/**
 * 周期表 Na 元素卡，配合外围连接线
 */
function SodiumNaElementSvg() {
  return (
    <div className="relative w-full max-w-[420px] mx-auto aspect-square">
      <svg
        viewBox="0 0 420 420"
        className="w-full h-full"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* 外围环节点 */}
        {[
          { x: 80, y: 80, label: 'MATERIAL' },
          { x: 340, y: 80, label: 'CELL' },
          { x: 80, y: 340, label: 'MODULE' },
          { x: 340, y: 340, label: 'PACK' },
        ].map((node, i) => (
          <motion.g
            key={node.label}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 + i * 0.2, duration: 0.8 }}
          >
            <circle cx={node.x} cy={node.y} r="4" fill="#b8923f" opacity="0.6" />
            <text
              x={node.x}
              y={node.y + (node.y < 200 ? -14 : 22)}
              fontSize="9"
              fontFamily="JetBrains Mono, monospace"
              fill="#b8923f"
              letterSpacing="2"
              textAnchor="middle"
              opacity="0.7"
            >
              {node.label}
            </text>
          </motion.g>
        ))}

        {/* 连接到中心的线 */}
        {[
          [80, 80],
          [340, 80],
          [80, 340],
          [340, 340],
        ].map(([x, y], i) => (
          <motion.line
            key={i}
            x1={x}
            y1={y}
            x2="210"
            y2="210"
            stroke="#b8923f"
            strokeWidth="0.5"
            strokeDasharray="3 4"
            opacity="0.3"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ delay: 1.5 + i * 0.15, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          />
        ))}

        {/* 中央 Na 卡 */}
        <motion.g
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8, ease: 'backOut' }}
        >
          {/* 卡片背景 */}
          <rect
            x="130"
            y="130"
            width="160"
            height="160"
            stroke="#b8923f"
            strokeWidth="1"
            fill="rgba(184, 146, 63, 0.06)"
          />
          {/* 左上原子序数 */}
          <text
            x="146"
            y="155"
            fontSize="14"
            fontFamily="JetBrains Mono, monospace"
            fill="#b8923f"
            letterSpacing="1"
            fontWeight="500"
          >
            11
          </text>
          {/* 元素符号 Na（大） */}
          <text
            x="210"
            y="230"
            fontSize="80"
            fontFamily="Cormorant Garamond, serif"
            fill="white"
            letterSpacing="-1"
            fontWeight="500"
            textAnchor="middle"
          >
            Na
          </text>
          {/* 名称 Sodium */}
          <text
            x="210"
            y="258"
            fontSize="10"
            fontFamily="JetBrains Mono, monospace"
            fill="#b8923f"
            letterSpacing="3"
            textAnchor="middle"
            opacity="0.8"
          >
            SODIUM
          </text>
          {/* 原子量 */}
          <text
            x="210"
            y="278"
            fontSize="9"
            fontFamily="JetBrains Mono, monospace"
            fill="white"
            opacity="0.5"
            textAnchor="middle"
            letterSpacing="0.5"
          >
            22.989
          </text>
        </motion.g>
      </svg>
    </div>
  );
}
