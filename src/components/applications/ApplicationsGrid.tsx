'use client';

import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { ArrowRight } from 'lucide-react';
import { Reveal } from '@/components/ui/Reveal';

/**
 * 应用总览 — 6 个场景大卡片（移动单列，桌面 2 列）
 * 每个卡片：编号 + 英文小标 + 大标题 + lead + 进入链接
 * 完整版（首页是简化版）
 */
export function ApplicationsGrid() {
  const t = useTranslations('applications');

  // 6 个场景的路由 + key
  const scenes: {
    key: 'lowAltitude' | 'defense' | 'industrial' | 'commercial' | 'storage' | 'telecom';
    number: string;
    href: '/applications/low-altitude' | '/applications/defense' | '/applications/industrial-vehicles' | '/applications/commercial-transport' | '/applications/storage' | '/applications/telecom';
  }[] = [
    { key: 'lowAltitude', number: '01', href: '/applications/low-altitude' },
    { key: 'defense', number: '02', href: '/applications/defense' },
    { key: 'industrial', number: '03', href: '/applications/industrial-vehicles' },
    { key: 'commercial', number: '04', href: '/applications/commercial-transport' },
    { key: 'storage', number: '05', href: '/applications/storage' },
    { key: 'telecom', number: '06', href: '/applications/telecom' },
  ];

  return (
    <section className="bg-white pb-24 lg:pb-32">
      <div className="container-content">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-ink-200">
          {scenes.map((scene, i) => (
            <Reveal key={scene.key} delay={(i % 2) * 0.1}>
              <Link
                href={scene.href}
                className="group block bg-white p-8 lg:p-12 h-full transition-colors hover:bg-ink-50"
              >
                {/* 顶部：编号 + 英文标 */}
                <div className="flex justify-between items-start mb-12">
                  <p className="font-serif text-3xl lg:text-4xl font-medium numeric text-[#b8923f] leading-none">
                    {scene.number}
                  </p>
                  <p className="eyebrow text-ink-300 text-right">
                    {t(`${scene.key}.titleEn` as 'lowAltitude.titleEn')}
                  </p>
                </div>

                {/* 大标题 */}
                <h3 className="font-serif text-2xl lg:text-3xl xl:text-4xl font-medium text-ink-900 mb-4 leading-tight">
                  {t(`${scene.key}.title` as 'lowAltitude.title')}
                </h3>

                {/* lead */}
                <p className="text-sm lg:text-base text-ink-600 leading-relaxed mb-8 max-w-md">
                  {t(`${scene.key}.lead` as 'lowAltitude.lead')}
                </p>

                {/* 进入提示 */}
                <div className="flex items-center gap-2 text-xs text-ink-400 group-hover:text-[#b8923f] transition-colors mt-auto pt-6 border-t border-ink-100">
                  <span className="eyebrow">EXPLORE</span>
                  <ArrowRight
                    size={14}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
