'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

/**
 * LTO 专题页 Hero
 * 左：FLAGSHIP·02 / 标题 + 描述
 * 右：温度刻度 SVG —— 从 -68 到 +55，标注 LTO 的工作范围（远超普通锂电）
 */
export function LtoHero() {
  const t = useTranslations('lto.hero');

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

          {/* 右：温度刻度 SVG */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1.2 }}
            className="lg:col-span-5"
          >
            <TemperatureScaleSvg />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/**
 * 垂直温度刻度尺
 * -68°C (极限) -- -40°C (常温工作) -- 0 -- +55°C (上限)
 * LTO 工作范围用青色高亮带标注
 */
function TemperatureScaleSvg() {
  // 温度→y 坐标映射：-68 在底部 (y=440)，+55 在顶部 (y=40)
  const tempToY = (t: number) => {
    // y 范围 40..440 对应温度 +55..-68
    return 40 + ((55 - t) / (55 - -68)) * 400;
  };

  const marks = [
    { temp: 55, label: '+55°C', sub: '上限' },
    { temp: 25, label: '+25°C', sub: '室温' },
    { temp: 0, label: '0°C', sub: '冰点' },
    { temp: -20, label: '−20°C' },
    { temp: -40, label: '−40°C', sub: 'LTO 常温工作', highlight: true },
    { temp: -68, label: '−68°C', sub: 'LTO 极限工作', highlight: true },
  ];

  return (
    <div className="relative w-full max-w-[400px] mx-auto">
      <svg
        viewBox="0 0 320 480"
        className="w-full h-auto"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* 标题 */}
        <text
          x="40"
          y="24"
          fontSize="9"
          fontFamily="JetBrains Mono, monospace"
          fill="#5C6778"
          letterSpacing="2"
        >
          TEMP · °C
        </text>

        {/* 主竖线 */}
        <line x1="80" y1="40" x2="80" y2="440" stroke="#0A2540" strokeWidth="0.5" opacity="0.4" />

        {/* LTO 工作范围高亮带（-68 到 +55 全段） */}
        <motion.rect
          x="75"
          y={tempToY(55)}
          width="10"
          height={tempToY(-68) - tempToY(55)}
          fill="#14B8B0"
          opacity="0.15"
          initial={{ scaleY: 0, transformOrigin: '50% 50%' }}
          animate={{ scaleY: 1 }}
          transition={{ duration: 1.5, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
        />
        {/* LTO 极寒高亮（-40 到 -68） */}
        <motion.rect
          x="72"
          y={tempToY(-40)}
          width="16"
          height={tempToY(-68) - tempToY(-40)}
          fill="#14B8B0"
          opacity="0.4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 1, delay: 1.5 }}
        />

        {/* 普通锂电工作范围参考线（仅装饰，灰色） */}
        <line
          x1="60"
          y1={tempToY(0)}
          x2="60"
          y2={tempToY(45)}
          stroke="#5C6778"
          strokeWidth="1"
          opacity="0.3"
        />
        <text
          x="20"
          y={tempToY(22) + 3}
          fontSize="8"
          fontFamily="JetBrains Mono, monospace"
          fill="#5C6778"
          letterSpacing="0.5"
          opacity="0.5"
        >
          NMC
        </text>

        {/* 刻度点 */}
        {marks.map((m, i) => (
          <motion.g
            key={m.temp}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 + i * 0.1, duration: 0.6 }}
          >
            {/* 刻度横线 */}
            <line
              x1="80"
              y1={tempToY(m.temp)}
              x2={m.highlight ? '96' : '88'}
              y2={tempToY(m.temp)}
              stroke={m.highlight ? '#14B8B0' : '#0A2540'}
              strokeWidth={m.highlight ? 1.5 : 0.75}
              opacity={m.highlight ? 1 : 0.5}
            />
            {/* 温度数值 */}
            <text
              x={m.highlight ? 104 : 96}
              y={tempToY(m.temp) + 4}
              fontSize="11"
              fontFamily="JetBrains Mono, monospace"
              fill={m.highlight ? '#14B8B0' : '#0A0E14'}
              fontWeight={m.highlight ? 600 : 400}
              letterSpacing="0.5"
            >
              {m.label}
            </text>
            {/* 描述 */}
            {m.sub && (
              <text
                x={m.highlight ? 104 : 96}
                y={tempToY(m.temp) + 18}
                fontSize="8"
                fontFamily="Inter, sans-serif"
                fill="#5C6778"
                letterSpacing="0.5"
              >
                {m.sub}
              </text>
            )}
          </motion.g>
        ))}

        {/* 底部标签 */}
        <text
          x="80"
          y="468"
          fontSize="9"
          fontFamily="JetBrains Mono, monospace"
          fill="#5C6778"
          letterSpacing="2"
          textAnchor="start"
        >
          KW-LTO-14500
        </text>
      </svg>
    </div>
  );
}
