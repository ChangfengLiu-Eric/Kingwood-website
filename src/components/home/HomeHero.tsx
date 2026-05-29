'use client';

import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

/** 工业无人机：俯视角，旋翼持续旋转（translate 旋转中心法） */
function DroneDetailed() {
  // 四个电机位置（相对 120x120 画布）
  const motors: Array<{ tx: number; ty: number; ccw: boolean }> = [
    { tx: 24, ty: 24, ccw: false },
    { tx: 96, ty: 24, ccw: true  },
    { tx: 24, ty: 96, ccw: true  },
    { tx: 96, ty: 96, ccw: false },
  ];

  return (
    <svg width="130" height="130" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* 机臂 */}
      <line x1="60" y1="60" x2="24" y2="24" stroke="#c8a24f" strokeWidth="3"   strokeLinecap="round"/>
      <line x1="60" y1="60" x2="96" y2="24" stroke="#c8a24f" strokeWidth="3"   strokeLinecap="round"/>
      <line x1="60" y1="60" x2="24" y2="96" stroke="#c8a24f" strokeWidth="3"   strokeLinecap="round"/>
      <line x1="60" y1="60" x2="96" y2="96" stroke="#c8a24f" strokeWidth="3"   strokeLinecap="round"/>

      {/* 四个电机 + 旋翼 */}
      {motors.map(({ tx, ty, ccw }, i) => (
        <g key={i} transform={`translate(${tx}, ${ty})`}>
          {/* 旋翼盘 */}
          <circle r="14" fill="rgba(184,146,63,0.07)" stroke="#c8a24f" strokeWidth="1" strokeOpacity="0.6"/>
          {/* 旋转桨叶：以原点为中心旋转 */}
          <motion.g
            animate={{ rotate: ccw ? -360 : 360 }}
            transition={{ duration: 0.4, repeat: Infinity, ease: 'linear' }}
          >
            <line x1="-13" y1="0" x2="13" y2="0" stroke="#d4a84a" strokeWidth="2.8" strokeLinecap="round"/>
            <line x1="0" y1="-13" x2="0" y2="13" stroke="#d4a84a" strokeWidth="2.8" strokeLinecap="round"/>
          </motion.g>
          {/* 电机壳 */}
          <circle r="5.5" fill="rgba(30,48,80,0.98)" stroke="#c8a24f" strokeWidth="1.4"/>
          <circle r="2.2" fill="#d4a84a"/>
        </g>
      ))}

      {/* 机身 */}
      <rect x="42" y="42" width="36" height="36" rx="6" fill="rgba(22,38,62,0.98)" stroke="#c8a24f" strokeWidth="1.8"/>
      <line x1="42" y1="52" x2="78" y2="52" stroke="#c8a24f" strokeWidth="0.6" strokeOpacity="0.4"/>
      <line x1="42" y1="68" x2="78" y2="68" stroke="#c8a24f" strokeWidth="0.6" strokeOpacity="0.4"/>

      {/* 摄像头云台 */}
      <circle cx="60" cy="60" r="8.5" stroke="#c8a24f" strokeWidth="1.2" strokeOpacity="0.7" fill="rgba(184,146,63,0.1)"/>
      <circle cx="60" cy="60" r="5"   fill="#c8a24f" fillOpacity="0.9"/>
      <circle cx="60" cy="60" r="2.4" fill="rgba(255,255,255,0.95)"/>

      {/* 前向指示灯（顶部） */}
      <motion.circle cx="60" cy="30" r="2.8" fill="#d4a84a"
        animate={{ opacity: [1, 0.2, 1] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
      />
    </svg>
  );
}

/** 轨道视觉：三环 + 无人机浮动 */
function OrbitalVisual() {
  return (
    <div className="relative flex items-center justify-center" style={{ height: 420 }}>

      {/* ── 外环 (360px)：极慢 ───────────────────────────────────── */}
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{ width: 360, height: 360, border: '1px solid rgba(255,255,255,0.07)' }}
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
      />

      {/* ── 倾斜椭圆环 (280px)：逆时针 ─────────────────────────── */}
      <div style={{ transform: 'perspective(500px) rotateX(68deg) rotateZ(15deg)', position: 'absolute' }}>
        <motion.div
          className="rounded-full"
          style={{ width: 280, height: 280, border: '1px solid rgba(184,146,63,0.22)' }}
          animate={{ rotate: -360 }}
          transition={{ duration: 16, repeat: Infinity, ease: 'linear' }}
        >
          <div className="absolute w-2 h-2 rounded-full bg-white/55"
            style={{ top: -4, left: '50%', transform: 'translateX(-50%)' }} />
          <div className="absolute w-1.5 h-1.5 rounded-full bg-[#b8923f]/65"
            style={{ bottom: -3, left: '50%', transform: 'translateX(-50%)' }} />
        </motion.div>
      </div>

      {/* ── 中环 (220px)：轨道跑点 ──────────────────────────────── */}
      <div className="absolute" style={{ width: 220, height: 220 }}>
        <motion.div
          className="absolute inset-0 rounded-full"
          style={{ border: '1px solid rgba(184,146,63,0.50)' }}
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        >
          <div className="absolute w-2.5 h-2.5 rounded-full bg-[#b8923f]"
            style={{ top: -5, left: '50%', transform: 'translateX(-50%)', boxShadow: '0 0 10px 4px rgba(184,146,63,0.75)' }} />
        </motion.div>
      </div>

      {/* ── 无人机背景光晕 ───────────────────────────────────────── */}
      <div className="absolute w-56 h-56 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(184,146,63,0.10) 0%, transparent 65%)' }} />

      {/* ── 无人机：上下浮动 ─────────────────────────────────────── */}
      <motion.div
        className="absolute"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        style={{ filter: 'drop-shadow(0 0 20px rgba(184,146,63,0.60))' }}
      >
        <DroneDetailed />
      </motion.div>

    </div>
  );
}

export function HomeHero() {
  const t  = useTranslations('home.hero');
  const ts = useTranslations('home.stats');

  const fade = (delay: number) => ({
    initial:    { opacity: 0, y: 20 },
    animate:    { opacity: 1, y: 0  },
    transition: { duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  });

  const metrics = [
    { value: ts('heritage.value'), suffix: ts('heritage.suffix'), label: ts('heritage.label') },
    { value: ts('capacity.value'),  suffix: ts('capacity.suffix'),  label: ts('capacity.label')  },
    { value: ts('chemistry.value'), suffix: '',                     label: ts('chemistry.label') },
    { value: ts('quality.value'),   suffix: '',                     label: ts('quality.label')   },
  ];

  return (
    <section className="relative text-white overflow-hidden min-h-[90vh] flex items-center">

      {/* ── 背景层 ──────────────────────────────────────────────────────── */}
      <div className="absolute inset-0">
        <div className="absolute inset-0" style={{ background: 'linear-gradient(160deg, #04090f 0%, #080f1e 35%, #0c1728 60%, #060e1a 100%)' }} />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 100% 55% at 38% -5%, rgba(28,58,110,0.55) 0%, transparent 65%)' }} />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 60% 50% at 90% 110%, rgba(14,32,64,0.45) 0%, transparent 70%)' }} />
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 45% 60% at 80% 50%, rgba(184,146,63,0.04) 0%, transparent 70%)' }} />
        <div className="absolute inset-0 pointer-events-none" style={{
          backgroundImage: ['linear-gradient(rgba(184,146,63,1) 1px, transparent 1px)', 'linear-gradient(to right, rgba(184,146,63,1) 1px, transparent 1px)'].join(','),
          backgroundSize: '88px 88px',
          opacity: 0.028,
        }} />
        <div className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none" style={{ background: 'linear-gradient(to bottom, transparent 0%, rgba(4,9,15,0.65) 100%)' }} />

        {/* 手机端：轨道图形背景，偏右居中 */}
        <motion.div
          className="lg:hidden absolute pointer-events-none"
          style={{ top: '65%', right: '-90px', transform: 'translateY(-50%) scale(0.72)', transformOrigin: 'center right', opacity: 0.65 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.65 }}
          transition={{ duration: 1.2, delay: 0.5 }}
        >
          <OrbitalVisual />
        </motion.div>
      </div>

      {/* ── 内容 ────────────────────────────────────────────────────────── */}
      <div className="container-content relative w-full pt-32 pb-20 lg:pt-40 lg:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

          {/* 左：文字 */}
          <div className="lg:col-span-7 relative z-10">
            <motion.div {...fade(0.08)} className="flex items-center gap-5 mb-10 lg:mb-12">
              <span className="text-[11px] tracking-[0.32em] uppercase text-white/45 font-medium whitespace-nowrap">
                {t('eyebrow')}
              </span>
              <span className="h-px w-12 bg-[#b8923f] flex-shrink-0" />
            </motion.div>

            <motion.h1
              {...fade(0.2)}
              className="kw2-serif text-[clamp(1.75rem,3.8vw,3rem)] leading-[1.15] tracking-tight text-white"
            >
              {/* 桌面端：两行 */}
              <span className="hidden sm:block">{t('titleLine1')}{t('titleHighlight1')}</span>
              <span className="hidden sm:block">
                {t('titleLine2')}
                <span className="text-[#b8923f]">{t('titleHighlight2')}</span>
              </span>
              {/* 手机端：三行 */}
              <span className="block sm:hidden leading-[1.4]">{t('titleMobileLine1')}</span>
              <span className="block sm:hidden leading-[1.4]">{t('titleMobileLine2')}</span>
              <span className="block sm:hidden leading-[1.4]">
                {t('titleMobileLine3')}
                <span className="text-[#b8923f]">{t('titleMobileHighlight3')}</span>
              </span>
            </motion.h1>

            <motion.p {...fade(0.34)} className="mt-6 text-[17px] font-light tracking-wide text-white/50 max-w-md">
              {t('subtitle')}
            </motion.p>

            <motion.div {...fade(0.48)} className="mt-10 flex flex-wrap gap-4">
              <Link href="/evtol" className="group inline-flex items-center gap-2 px-6 py-3.5 bg-[#b8923f] text-white text-sm font-medium tracking-wide hover:bg-[#a07c36] transition-colors">
                <span>{t('ctaPrimary')}</span>
                <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="/about" className="inline-flex items-center gap-2 px-6 py-3.5 border border-white/20 text-white/75 text-sm font-medium tracking-wide hover:border-white/45 hover:text-white transition-colors">
                {t('ctaSecondary')}
              </Link>
            </motion.div>
          </div>

          {/* 桌面端：右列轨道图形 */}
          <motion.div
            className="hidden lg:flex lg:col-span-5 items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.5 }}
          >
            <OrbitalVisual />
          </motion.div>

        </div>

        {/* 底部数据行 */}
        <motion.div
          {...fade(0.62)}
          className="mt-20 lg:mt-24 pt-8 border-t border-white/10 grid grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-6"
        >
          {metrics.map((m, i) => (
            <div key={i}>
              <div className="flex items-baseline gap-1.5 flex-wrap">
                <span className="font-bold text-[clamp(1.75rem,3.2vw,2.625rem)] leading-none tracking-tight text-white tabular-nums">
                  {m.value}
                </span>
                {m.suffix && <span className="unit-gold text-sm">{m.suffix}</span>}
              </div>
              <p className="mt-2 text-[11px] tracking-[0.2em] uppercase text-white/40">{m.label}</p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
