import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { Logo } from './Logo';

export function Footer() {
  const t    = useTranslations('footer');
  const tNav = useTranslations('nav');

  const columns = [
    {
      title: t('company'),
      links: [
        { href: '/about'        as const, label: tNav('about')        },
      ],
    },
    {
      title: t('products'),
      links: [
        { href: '/evtol'        as const, label: tNav('evtol')        },
        { href: '/lto'          as const, label: tNav('lto')          },
        { href: '/sodium-ion'   as const, label: tNav('sodium')       },
        { href: '/products'     as const, label: tNav('products')     },
      ],
    },
    {
      title: t('applications'),
      links: [
        { href: '/applications' as const, label: tNav('applications') },
      ],
    },
    {
      title: t('contact'),
      links: [
        { href: '/contact'      as const, label: tNav('contact')      },
      ],
    },
  ];

  return (
    <footer className="bg-[#0a1220] text-white">
      <div className="container-content py-16 lg:py-24">

        {/* 上半：品牌 + 四列链接 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 mb-12 lg:mb-20">

          {/* 品牌区 */}
          <div className="lg:col-span-5">
            <Logo variant="light" />
            <p className="mt-6 text-sm leading-relaxed text-white/50 max-w-sm">
              {t('tagline')}
            </p>
            <div className="mt-8 space-y-2 text-xs text-white/30">
              <p>{t('factory')}</p>
            </div>
          </div>

          {/* 四列导航链接 */}
          <div className="lg:col-span-7 grid grid-cols-4 gap-4 lg:gap-8">
            {columns.map((col) => (
              <div key={col.title}>
                <h4 className="eyebrow-light mb-4 text-[10px] lg:text-[11px]">{col.title}</h4>
                <ul className="space-y-2.5">
                  {col.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-xs lg:text-sm text-white/65 hover:text-white transition-colors leading-snug block"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* 版权行 */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
          <p className="text-xs text-white/35">{t('copyright')}</p>
          <p className="text-xs text-white/25">{t('icp')}</p>
        </div>
      </div>
    </footer>
  );
}
