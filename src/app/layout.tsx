// 这个文件用于满足 App Router 要求，但所有页面通过 [locale] 路由处理
// middleware 会自动 redirect / 到 /cn

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
