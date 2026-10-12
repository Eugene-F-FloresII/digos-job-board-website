import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        canvas: '#f5f7f3',
        surface: '#ffffff',
        ink: '#10223f',
        primary: '#10223f',
        'on-primary': '#ffffff',
        body: '#465365',
        'body-strong': '#304158',
        muted: '#6b7888',
        hairline: '#dce4de',
        green: '#2f6849',
        'green-soft': '#e8f1eb',
        gold: '#e3b64f',
        'gold-soft': '#fbf4df',
        'gold-border': '#ead9a8',
        'gold-ink': '#61470d',
        'info-soft': '#edf1f6',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        nunito: ['var(--font-nunito-sans)', 'Nunito Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['var(--font-dm-mono)', 'DM Mono', 'monospace'],
      },
      borderRadius: {
        control: '6px',
        surface: '10px',
        tile: '12px',
        pill: '9999px',
      },
      transitionTimingFunction: {
        standard: 'cubic-bezier(0.2, 0, 0, 1)',
      },
      boxShadow: {
        dialog: '0 24px 80px -24px rgba(16, 34, 63, 0.3)',
      },
    },
  },
  plugins: [],
};

export default config;
