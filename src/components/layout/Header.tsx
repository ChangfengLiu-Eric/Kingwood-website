'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';
import { LocaleSwitcher } from './LocaleSwitcher';

export function Header() {
  const t = useTranslations('nav');
  const [scrolled,   setScrolled]   = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const getY = () =>
      window.pageYOffset ?? document.documentElement.scrollTop ?? document.body.scrollTop ?? 0;

    const update = () => setScrolled(getY() > 80);
    update();

    window.addEventListener('scroll', update, { passive: true });
    document.addEventListener('scroll', update, { passive: true });

    const sentinel = document.getElementById('scroll-sentinel');
    let observer: IntersectionObserver | null = null;
    if (sentinel) {
      observer = new IntersectionObserver(
        ([entry]) => setScrolled(!entry.isIntersecting),
        { threshold: 0 }
      );
      observer.observe(sentinel);
    }

    return () => {
      window.removeEventListener('scroll', update);
      document.removeEventListener('scroll', update);
      observer?.disconnect();
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  // 只有首页顶部（深色 Hero）才用白字，其他页面始终用深色
  const pathname = usePathname();
  const isHomePage = /^\/(cn|en)?\/?$/.test(pathname);
  const isLight = isHomePage && !scrolled && !mobileOpen;

  const navItems: {
    href: '/' | '/about' | '/evtol' | '/lto' | '/sodium-ion' | '/products' | '/applications' | '/contact';
    label: string;
  }[] = [
    { href: '/products',     label: t('products')     },
    { href: '/about',        label: t('about')        },
    { href: '/applications', label: t('applications') },
    { href: '/contact',      label: t('contact')      },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        mobileOpen
          ? 'bg-white border-b border-[#e8e8e4]'
          : scrolled
          ? 'bg-white/96 backdrop-blur-md border-b border-[#e8e8e4]'
          : 'bg-transparent'
      }`}
    >
      <div className="container-content">
        <div className="flex items-center justify-between h-16 lg:h-20">

          {/* 左：Logo — 跟随背景深浅切换 */}
          <Logo variant={isLight ? 'light' : 'dark'} />

          {/* 中：导航 */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-[13px] tracking-wide transition-colors hover:text-[#b8923f] ${
                  isLight ? 'text-white/80' : 'text-[#3a4150]'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* 右：语言切换 + CTA */}
          <div className="hidden lg:flex items-center gap-6">
            {/* LocaleSwitcher 颜色跟随 */}
            <span className={isLight ? '[&_*]:text-white/70 [&_*]:hover:text-white' : ''}>
              <LocaleSwitcher />
            </span>
            <Link
              href="/contact"
              className={`text-[12px] tracking-[0.08em] px-4 py-2 transition-colors ${
                isLight
                  ? 'bg-white/15 text-white border border-white/25 hover:bg-white/25'
                  : 'bg-[#14181f] text-white hover:bg-[#1e2530]'
              }`}
            >
              {t('cta')}
            </Link>
          </div>

          {/* 移动端汉堡 */}
          <button
            className={`lg:hidden p-2 -mr-2 transition-colors ${isLight ? 'text-white' : 'text-[#0e1320]'}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* 移动端展开菜单（始终白底） */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-[#e8e8e4] min-h-[calc(100vh-4rem)] overflow-y-auto">
            <nav className="flex flex-col gap-4 py-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-base text-[#3a4150] py-2 hover:text-[#b8923f] transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex items-center justify-between pt-6 mt-2 border-t border-[#e8e8e4]">
                <LocaleSwitcher />
                <Link
                  href="/contact"
                  className="text-sm px-5 py-2 bg-[#14181f] text-white"
                  onClick={() => setMobileOpen(false)}
                >
                  {t('cta')}
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>

      {/* 底部分割线 */}
      {!mobileOpen && (
        <div
          className={`absolute bottom-0 left-0 right-0 h-px transition-opacity duration-300 ${
            scrolled ? 'opacity-100 bg-[#e8e8e4]' : 'opacity-0'
          }`}
        />
      )}
    </header>
  );
}
