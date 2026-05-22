'use client';

import { useState, FormEvent } from 'react';
import { useTranslations } from 'next-intl';
import { Check, Send } from 'lucide-react';

/**
 * 联系表单
 * 字段：姓名 / 公司 / 职位 / 电话 / 邮箱 / 应用领域 / 留言
 * 前端验证 + 提交后显示"已收到"状态
 * 实际后端集成（Resend / EmailJS）由部署方接入
 */
export function ContactForm() {
  const t = useTranslations('contact.form');
  const applicationOptions = t.raw('applicationOptions') as string[];

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);

    // 模拟提交：实际部署时需要接入 Resend / EmailJS / API
    await new Promise((r) => setTimeout(r, 1200));

    setSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="border border-teal-500 bg-teal-50/30 p-12 lg:p-16 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-teal-500 text-white mb-6">
          <Check size={28} strokeWidth={2.5} />
        </div>
        <h3 className="font-serif text-2xl lg:text-3xl font-medium text-ink-900 mb-3">
          已收到您的合作意向
        </h3>
        <p className="text-sm text-ink-600 max-w-md mx-auto">
          {t('subtitle')}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* 表单标题 */}
      <div className="mb-8">
        <h3 className="font-serif text-2xl lg:text-3xl font-medium text-ink-900 mb-2">
          {t('title')}
        </h3>
        <p className="text-sm text-ink-500">{t('subtitle')}</p>
      </div>

      {/* 姓名 + 公司 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Field label={t('name')} name="name" required />
        <Field label={t('company')} name="company" required />
      </div>

      {/* 职位 + 电话 */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Field label={t('title_')} name="title" />
        <Field label={t('phone')} name="phone" type="tel" required />
      </div>

      {/* 邮箱 */}
      <Field label={t('email')} name="email" type="email" required />

      {/* 应用领域 */}
      <div>
        <label className="eyebrow text-ink-500 block mb-2">
          {t('applicationLabel')}
        </label>
        <select
          name="application"
          required
          className="w-full px-4 py-3 border border-ink-200 bg-white text-sm text-ink-900 focus:border-teal-500 focus:outline-none transition-colors"
          defaultValue=""
        >
          <option value="" disabled>
            —
          </option>
          {applicationOptions.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      {/* 留言 */}
      <div>
        <label className="eyebrow text-ink-500 block mb-2">{t('message')}</label>
        <textarea
          name="message"
          rows={5}
          required
          className="w-full px-4 py-3 border border-ink-200 bg-white text-sm text-ink-900 focus:border-teal-500 focus:outline-none transition-colors resize-none"
        />
      </div>

      {/* 提交按钮 + 隐私 */}
      <div className="pt-4">
        <button
          type="submit"
          disabled={submitting}
          className="btn-primary group disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span>{submitting ? '...' : t('submit')}</span>
          <Send
            size={14}
            className={`transition-transform ${
              submitting ? '' : 'group-hover:translate-x-1'
            }`}
          />
        </button>
        <p className="mt-4 text-xs text-ink-400">{t('privacy')}</p>
      </div>
    </form>
  );
}

function Field({
  label,
  name,
  type = 'text',
  required = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="eyebrow text-ink-500 block mb-2">
        {label}
        {required && <span className="text-teal-500 ml-1">*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full px-4 py-3 border border-ink-200 bg-white text-sm text-ink-900 focus:border-teal-500 focus:outline-none transition-colors"
      />
    </div>
  );
}
