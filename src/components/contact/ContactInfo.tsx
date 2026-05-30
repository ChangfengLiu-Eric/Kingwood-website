'use client';

import { useTranslations } from 'next-intl';
import { Reveal } from '@/components/ui/Reveal';
import { MapPin, Phone, Mail, Globe } from 'lucide-react';

/**
 * 联系信息卡
 * 工厂地址 / 营销中心 / 邮箱 / 官网
 * 适合放在表单旁边或下方
 */
export function ContactInfo() {
  const t = useTranslations('contact.info');

  return (
    <div className="lg:sticky lg:top-32 space-y-10">
      {/* 标题 */}
      <Reveal>
        <h3 className="font-serif text-2xl lg:text-3xl font-medium text-ink-900">
          {t('title')}
        </h3>
      </Reveal>

      {/* 工厂 */}
      <Reveal delay={0.1}>
        <InfoBlock
          icon={<MapPin size={18} />}
          label={t('factory.label')}
          title={t('factory.title')}
          lines={[t('factory.address'), t('factory.phone')]}
        />
      </Reveal>

      {/* 邮箱 */}
      <Reveal delay={0.3}>
        <InfoBlock
          icon={<Mail size={18} />}
          label={t('email.label')}
          lines={[t('email.value')]}
          link={`mailto:${t('email.value')}`}
        />
      </Reveal>

      {/* 官网 */}
      <Reveal delay={0.4}>
        <InfoBlock
          icon={<Globe size={18} />}
          label={t('web.label')}
          lines={[t('web.value')]}
          link={`https://${t('web.value')}`}
        />
      </Reveal>
    </div>
  );
}

function InfoBlock({
  icon,
  label,
  title,
  lines,
  link,
}: {
  icon: React.ReactNode;
  label: string;
  title?: string;
  lines: string[];
  link?: string;
}) {
  const Content = (
    <div className="border-t border-ink-200 pt-6">
      <div className="flex items-center gap-3 mb-3">
        <span className="text-[#b8923f]">{icon}</span>
        <p className="eyebrow text-ink-500">{label}</p>
      </div>
      {title && (
        <p className="font-serif text-lg font-medium text-ink-900 mb-2">
          {title}
        </p>
      )}
      <div className="space-y-1">
        {lines.map((line, i) => (
          <p key={i} className="text-sm text-ink-600 leading-relaxed">
            {line}
          </p>
        ))}
      </div>
    </div>
  );

  if (link) {
    return (
      <a
        href={link}
        className="block hover:text-[#b8923f] transition-colors group"
        target={link.startsWith('http') ? '_blank' : undefined}
        rel={link.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        {Content}
      </a>
    );
  }
  return Content;
}
