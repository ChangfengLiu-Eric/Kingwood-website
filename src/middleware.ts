import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  // 匹配所有非静态资源路径
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)'],
};
