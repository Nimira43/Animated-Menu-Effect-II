import type { Config } from 'tailwindcss'

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#ff4500',
        'dark': '#111',
        'light': '#fffcfa',
        'grey-light-extra': '#eee',
        'grey-light': '#ccc',
        'grey-medium': '#999',
        'grey-dark': '#333',
        'gold': '#ffd700'
      },
    },
  },
  plugins: [],
} satisfies Config
