'use client';

import { useState, useEffect } from 'react';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';
import { LocaleSwitcher } from './LocaleSwitcher';

/**
 * 主导航
 * - 桌面：水平菜单 + 右侧 CTA + 语言切换
 * - 移动：汉堡菜单
 * - 滚动 4px 后增加边框分隔感
 */
export function Header() {
  const t = useTranslations('nav');
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // 一级菜单（按需可加入子菜单）
  const navItems: { href: '/' | '/about' | '/evtol' | '/lto' | '/sodium-ion' | '/products' | '/applications'; label: string }[] = [
    { href: '/', label: t('home') },
    { href: '/about', label: t('about') },
    { href: '/evtol', label: t('evtol') },
    { href: '/lto', label: t('lto') },
    { href: '/sodium-ion', label: t('sodium') },
    { href: '/products', label: t('products') },
    { href: '/applications', label: t('applications') },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-ink-100'
          : 'bg-white/0 backdrop-blur-0'
      }`}
    >
      <div className="container-content">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Logo />

          {/* 桌面菜单 */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-ink-700 hover:text-teal-500 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* 右侧：语言切换 + CTA */}
          <div className="hidden lg:flex items-center gap-6">
            <LocaleSwitcher />
            <Link
              href="/contact"
              className="text-sm px-5 py-2 border border-ink-200 hover:border-teal-500 hover:text-teal-500 transition-colors"
            >
              {t('cta')}
            </Link>
          </div>

          {/* 移动端汉堡按钮 */}
          <button
            className="lg:hidden p-2 -mr-2"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* 移动端展开菜单 */}
        {mobileOpen && (
          <div className="lg:hidden border-t border-ink-100 py-6">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-sm text-ink-700 py-1"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="flex items-center justify-between pt-4 mt-2 border-t border-ink-100">
                <LocaleSwitcher />
                <Link
                  href="/contact"
                  className="text-sm px-5 py-2 border border-ink-200"
                  onClick={() => setMobileOpen(false)}
                >
                  {t('cta')}
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
