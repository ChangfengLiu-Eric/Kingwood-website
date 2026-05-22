# KINGWOOD Website (广东金华达电子官网)

完整的双语 (中文 / 英文) 企业官网，基于 Next.js 14 App Router + next-intl + Tailwind CSS。

## 快速开始

```bash
npm install
npm run dev          # 本地开发：http://localhost:3000
npm run build        # 生产构建
npm start            # 启动生产服务
```

## 项目结构

```
src/
├── app/[locale]/                # i18n 路由（cn / en）
│   ├── layout.tsx               # 根布局（Header + Footer + i18n Provider）
│   ├── page.tsx                 # 首页
│   ├── about/                   # 关于
│   ├── evtol/                   # eVTOL 专题
│   ├── lto/                     # 钛酸锂专题
│   ├── sodium-ion/              # 钠离子专题
│   ├── products/                # 产品中心（8 款电芯）
│   ├── applications/            # 应用总览 + 6 个场景子页
│   └── contact/                 # 联系销售
├── components/
│   ├── layout/                  # Header / Footer / Logo / LocaleSwitcher
│   ├── home/                    # 首页 7 个模块
│   ├── about/ evtol/ lto/ sodium/ products/ applications/ contact/
│   └── ui/                      # Reveal 等通用组件
├── i18n/                        # next-intl 配置
├── middleware.ts                # locale 路由中间件
└── ...

messages/
├── cn.json                      # 中文翻译（站点所有文案）
└── en.json                      # 英文翻译
```

## 部署

- 推荐 Vercel：直接 `vercel deploy`
- 国内访问需要 ICP 备案，可部署到阿里云/腾讯云

## 表单接入

`/contact` 页的提交表单目前是前端模拟（提交后展示"已收到"状态）。
实际部署需要接入：
- Resend (https://resend.com) — 简单邮件发送
- EmailJS — 纯前端方案
- 或自建 `/api/contact` 路由 + SMTP

## 设计规范要点

- 主色 Teal：`#14B8B0`
- 辅色 Navy：`#0A2540`
- 中性灰：`#F7F8FA` / `#0A0E14`
- 衬线标题：Cormorant Garamond + Noto Serif SC
- 无衬线正文：Inter + Noto Sans SC
- 等距数字：JetBrains Mono
- Section padding ≥ 120px
- 唯一高亮色为青色，用于标题关键词

