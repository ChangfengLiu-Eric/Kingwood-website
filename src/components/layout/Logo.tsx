import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';

interface LogoProps {
  variant?: 'light' | 'dark';
}

/**
 * Logo 组件：KINGWOOD 文字 + 金华达副标
 * - light: 用于深色背景（白字）
 * - dark: 用于浅色背景（深字，默认）
 */
export function Logo({ variant = 'dark' }: LogoProps) {
  const t = useTranslations('brand');
  const isLight = variant === 'light';

  return (
    <Link href="/" className="inline-flex items-baseline gap-2 group">
      <span
        className={`font-serif text-xl font-semibold tracking-wide transition-colors ${
          isLight ? 'text-white' : 'text-ink-900'
        }`}
      >
        {t('name')}
      </span>
      <span
        className={`text-[10px] font-medium tracking-widest-2 uppercase transition-colors ${
          isLight ? 'text-white/50' : 'text-ink-400'
        }`}
      >
        {t('subName')}
      </span>
    </Link>
  );
}
