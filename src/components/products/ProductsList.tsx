'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion, AnimatePresence } from 'framer-motion';
import { Star } from 'lucide-react';

interface Cell {
  id: string;
  model: string;
  name: string;
  format: string;
  chemistry: string;
  dimensions: string;
  capacity: string;
  voltage: string;
  density: string;
  cycles: string;
  tempRange: string;
  charge: string;
  discharge: string;
  weight: string;
  flagship?: boolean;
}

type FilterKey = 'all' | 'pouch' | 'cylindrical' | 'lto' | 'sodium' | 'nmc';

/**
 * 产品列表
 * - 顶部过滤标签栏
 * - 8 张电芯卡片网格（移动单列，桌面 2 列）
 * - 旗舰产品有青色高亮 + STAR 角标
 * - 每张卡片：型号 + 名称 + 8 项规格（grid 2 列）
 */
export function ProductsList() {
  const t = useTranslations('products');
  const tCommon = useTranslations('common');
  const allCells = t.raw('cells') as Cell[];
  const [filter, setFilter] = useState<FilterKey>('all');

  // 过滤逻辑
  const filteredCells = allCells.filter((cell) => {
    if (filter === 'all') return true;
    if (filter === 'pouch') return cell.format.toLowerCase().includes('pouch') || cell.format.includes('软包');
    if (filter === 'cylindrical') return cell.format.toLowerCase().includes('cylindrical') || cell.format.includes('圆柱');
    if (filter === 'lto') return cell.chemistry.toLowerCase().includes('lto');
    if (filter === 'sodium') return cell.chemistry.toLowerCase().includes('nfm') || cell.chemistry.toLowerCase().includes('hc');
    if (filter === 'nmc') return cell.chemistry.toLowerCase().includes('nmc') || cell.chemistry.toLowerCase().includes('nca') || cell.chemistry.toLowerCase().includes('ncm');
    return true;
  });

  const filters: { key: FilterKey; labelKey: 'all' | 'pouch' | 'cylindrical' | 'lto' | 'sodium' | 'nmc' }[] = [
    { key: 'all', labelKey: 'all' },
    { key: 'pouch', labelKey: 'pouch' },
    { key: 'cylindrical', labelKey: 'cylindrical' },
    { key: 'lto', labelKey: 'lto' },
    { key: 'sodium', labelKey: 'sodium' },
    { key: 'nmc', labelKey: 'nmc' },
  ];

  return (
    <section className="bg-white pb-24 lg:pb-32">
      <div className="container-content">
        {/* 过滤栏 */}
        <div className="sticky top-16 lg:top-20 z-30 bg-white/95 backdrop-blur-md border-b border-ink-100 -mx-6 md:-mx-10 xl:-mx-12 px-6 md:px-10 xl:px-12 py-4 mb-12 lg:mb-16">
          <div className="flex flex-wrap gap-2 lg:gap-3">
            {filters.map((f) => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                className={`px-4 py-2 text-xs lg:text-sm font-medium tracking-wide transition-all ${
                  filter === f.key
                    ? 'bg-ink-900 text-white'
                    : 'bg-ink-50 text-ink-600 hover:bg-ink-100'
                }`}
              >
                {t(`filter.${f.labelKey}` as 'filter.all')}
              </button>
            ))}
            {/* 计数 */}
            <span className="ml-auto self-center text-xs text-ink-400 font-mono tracking-wider">
              {String(filteredCells.length).padStart(2, '0')} / {String(allCells.length).padStart(2, '0')}
            </span>
          </div>
        </div>

        {/* 卡片网格 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredCells.map((cell, i) => (
              <motion.div
                key={cell.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.05,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <ProductCard cell={cell} t={t} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* 底部提示 */}
        <div className="mt-16 lg:mt-20 text-center">
          <p className="text-sm text-ink-500">
            {tCommon('contactForSpecs')} ·{' '}
            <a href="mailto:020k@vip.com" className="text-teal-500 link-underline">
              020k@vip.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

/** 单个产品卡片 */
function ProductCard({
  cell,
  t,
}: {
  cell: Cell;
  t: ReturnType<typeof useTranslations<'products'>>;
}) {
  const isFlagship = cell.flagship;

  return (
    <div
      className={`relative p-8 lg:p-10 border transition-all group ${
        isFlagship
          ? 'border-teal-500 bg-teal-50/20 hover:bg-teal-50/40'
          : 'border-ink-200 bg-white hover:border-ink-400'
      }`}
    >
      {/* FLAGSHIP 角标 */}
      {isFlagship && (
        <div className="absolute top-0 right-0 inline-flex items-center gap-1.5 px-3 py-1.5 bg-teal-500 text-white text-[10px] tracking-widest font-mono">
          <Star size={10} fill="currentColor" />
          <span>FLAGSHIP</span>
        </div>
      )}

      {/* 型号 */}
      <p className="font-mono text-xs tracking-widest text-ink-400 mb-3">
        {cell.model}
      </p>

      {/* 名称 */}
      <h3 className="font-serif text-xl lg:text-2xl font-medium text-ink-900 mb-2 leading-tight">
        {cell.name}
      </h3>

      {/* 化学体系 + 形态 标签 */}
      <div className="flex flex-wrap gap-2 mb-8">
        <span className="text-[10px] tracking-wider px-2 py-1 bg-ink-100 text-ink-600 font-mono">
          {cell.chemistry}
        </span>
        <span className="text-[10px] tracking-wider px-2 py-1 bg-ink-100 text-ink-600 font-mono">
          {cell.format}
        </span>
      </div>

      {/* 关键规格：2 列 */}
      <div className="grid grid-cols-2 gap-x-6 gap-y-5 mb-6">
        <SpecRow label={t('table.capacity')} value={cell.capacity} />
        <SpecRow label={t('table.voltage')} value={cell.voltage} />
        <SpecRow label={t('table.density')} value={cell.density} highlight={isFlagship} />
        <SpecRow label={t('table.cycles')} value={cell.cycles} highlight={isFlagship} />
        <SpecRow label="DIMENSIONS" value={cell.dimensions} />
        <SpecRow label={t('table.tempRange')} value={cell.tempRange} />
      </div>

      {/* 充放电（占两列） */}
      <div className="pt-6 border-t border-ink-100 space-y-3">
        <SpecRow label="CHARGE" value={cell.charge} />
        <SpecRow label="DISCHARGE" value={cell.discharge} />
        <SpecRow label="WEIGHT" value={cell.weight} />
      </div>
    </div>
  );
}

function SpecRow({
  label,
  value,
  highlight = false,
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div>
      <p className="eyebrow text-ink-400 mb-1">{label}</p>
      <p
        className={`text-sm font-mono tracking-wide leading-snug ${
          highlight ? 'text-teal-500 font-semibold' : 'text-ink-900'
        }`}
      >
        {value}
      </p>
    </div>
  );
}
