import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

interface LogoProps {
  variant?: 'light' | 'dark';
}

/**
 * Logo 组件：还原原始 LOGO 图标（双边框 + 左向三角）+ 文字
 * - light: 深色背景用（图标白色框 + 金三角，文字白色）
 * - dark:  浅色背景用（图标深色框 + 金三角，文字深色）
 */
export function Logo({ variant = 'dark' }: LogoProps) {
  const t = useTranslations('brand');
  const isLight = variant === 'light';

  // 边框颜色跟随背景
  const frameColor  = isLight ? 'rgba(255,255,255,0.90)' : '#0e1320';
  const frame2Color = isLight ? 'rgba(255,255,255,0.60)' : '#2a3040';
  // 三角始终金色
  const goldColor   = '#b8923f';

  return (
    <Link href="/" className="inline-flex items-center gap-2.5 group flex-shrink-0">

      {/* ── 图标 SVG ──────────────────────────────────────────────────── */}
      <svg
        width="34"
        height="34"
        className="w-12 h-12 lg:w-[34px] lg:h-[34px]"
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* 外层圆角矩形框 */}
        <rect
          x="2" y="2" width="40" height="40" rx="7.5"
          stroke={frameColor}
          strokeWidth="2.2"
        />
        {/* 内层圆角矩形框（双边框效果） */}
        <rect
          x="6.5" y="6.5" width="31" height="31" rx="5"
          stroke={frame2Color}
          strokeWidth="1.5"
        />
        {/* K 左竖：实心长方形 */}
        <rect
          x="10" y="10" width="8" height="24" rx="1"
          fill={goldColor}
        />
        {/* K 右侧：向左实心三角 */}
        <polygon
          points="33,11 19,22 33,33"
          fill={goldColor}
        />
      </svg>

      {/* ── 文字 ──────────────────────────────────────────────────────── */}
      <div className="flex flex-col justify-center leading-none">
        {/* KINGWOOD 主文字 */}
        <span
          className={`text-[18px] lg:text-[15px] font-bold tracking-[0.22em] uppercase transition-colors ${
            isLight ? 'text-white' : 'text-[#0e1320]'
          }`}
          style={{ fontFamily: 'var(--font-sans), system-ui, sans-serif' }}
        >
          {t('name')}
        </span>
        {/* 金华达 副文字 */}
        <span
          className={`text-[12px] lg:text-[10px] tracking-[0.28em] mt-1 transition-colors ${
            isLight ? 'text-white/55' : 'text-[#8a8f9a]'
          }`}
          style={{ fontFamily: 'var(--font-sans), "PingFang SC", system-ui, sans-serif' }}
        >
          {t('subName')}
        </span>
      </div>
    </Link>
  );
}
