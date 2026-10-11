import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        canvas: '#2b2622',
        surface: '#383330',
        ink: '#f7f5f0',
        primary: '#f7f5f0',
        'on-primary': '#2b2622',
        body: '#c9c0ad',
        'body-strong': '#dad2c1',
        muted: '#aea69c',
        hairline: '#3f3a36',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['var(--font-dm-mono)', 'DM Mono', 'monospace'],
      },
      borderRadius: {
        control: '3px',
        surface: '4px',
        tile: '6px',
        pill: '9999px',
      },
      transitionTimingFunction: {
        standard: 'cubic-bezier(0.2, 0, 0, 1)',
      },
    },
  },
  plugins: [],
};

export default config;
