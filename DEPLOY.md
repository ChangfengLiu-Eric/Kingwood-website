# 部署指南

本项目已经过完整构建测试，22 个路由（11 页 × 2 语言）全部预渲染通过。

## 方案 1：Vercel（推荐 · 1 分钟上线）

```bash
# 1. 安装 Vercel CLI
npm i -g vercel

# 2. 在项目根目录执行
cd kingwood-website-deploy
vercel deploy

# 3. 首次会提示登录（GitHub / Email），之后自动给你一个 *.vercel.app 预览 URL
# 4. 确认无误后，发布生产版：
vercel deploy --prod
```

绑定 `www.020k.com` 自定义域名：Vercel Dashboard → Domains → Add。

## 方案 2:本地预览

```bash
cd kingwood-website-deploy
npm install
npm run dev
# 打开 http://localhost:3000，自动 redirect 到 /cn
```

## 方案 3：阿里云/腾讯云（国内备案场景）

Next.js 14 App Router 在国内云上有几种部署方式：

- 阿里云 EdgeRoutine / Serverless Devs（推荐用 Node.js 函数计算）
- 腾讯云 SCF + COS 静态托管
- 自建：任何支持 Node.js 18+ 的 VPS 上 `npm run build && npm start`

如需 ICP 备案，**域名必须备案完成**后才能解析到国内云的公网 IP。

## 项目状态确认

```bash
npm install
npm run build
```

应当看到：
- ✓ Compiled successfully
- ✓ 22 个路由全部 SSG 预渲染
- ✓ First Load JS：87.3 kB shared
