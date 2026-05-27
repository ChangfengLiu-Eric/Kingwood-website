import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // 主色：深青色（参考效果图）
        teal: {
          DEFAULT: '#14B8B0',
          50: '#E6F7F6',
          100: '#CCF0EE',
          200: '#99E1DD',
          300: '#66D2CC',
          400: '#33C3BB',
          500: '#14B8B0',
          600: '#109690',
          700: '#0C736E',
          800: '#08504D',
          900: '#042E2B',
        },
        // 辅色：深海军蓝
        navy: {
          DEFAULT: '#0A2540',
          50: '#E7EAEF',
          100: '#C2C9D5',
          800: '#0F2D4D',
          900: '#0A2540',
          950: '#0a1220',
        },
        // 金色强调
        gold: {
          DEFAULT: '#b8923f',
          50: '#fdf5e8',
          100: '#f5e3c0',
          200: '#e8c97c',
          300: '#d4a84d',
          400: '#c49830',
          500: '#b8923f',
          600: '#9a7a35',
          700: '#7c622a',
        },
        // 中性色
        ink: {
          DEFAULT: '#0A0E14',
          50: '#F7F8FA',
          100: '#EDEFF3',
          200: '#D9DDE5',
          300: '#B5BCC9',
          400: '#8892A3',
          500: '#5C6778',
          600: '#3D4756',
          700: '#272E3A',
          800: '#161B23',
          900: '#0A0E14',
        },
      },
      fontFamily: {
        // 标题：衬线（中文思源宋体 / 英文 Cormorant 风格）
        serif: ['var(--font-serif)', 'Noto Serif SC', 'Georgia', 'serif'],
        // 正文：无衬线
        sans: ['var(--font-sans)', 'Noto Sans SC', 'system-ui', 'sans-serif'],
        // 数字与等距标签
        mono: ['var(--font-mono)', 'JetBrains Mono', 'monospace'],
      },
      fontSize: {
        // 超大数据展示
        'display-1': ['clamp(3.5rem, 8vw, 6rem)', { lineHeight: '1', letterSpacing: '-0.02em' }],
        'display-2': ['clamp(2.5rem, 6vw, 4rem)', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        'display-3': ['clamp(2rem, 4vw, 3rem)', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
        // 小标签（uppercase + tracking）
        'eyebrow': ['0.75rem', { lineHeight: '1', letterSpacing: '0.18em' }],
      },
      letterSpacing: {
        'widest-2': '0.22em',
      },
      spacing: {
        // 大留白：每个 section 上下 padding ≥ 120px
        'section': '7.5rem', // 120px
        'section-lg': '10rem', // 160px
      },
      maxWidth: {
        'content': '1200px',
        'content-wide': '1360px',
      },
      animation: {
        'fade-up': 'fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fadeIn 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-ring': 'pulseRing 3s ease-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        pulseRing: {
          '0%': { transform: 'scale(0.8)', opacity: '1' },
          '100%': { transform: 'scale(2)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
