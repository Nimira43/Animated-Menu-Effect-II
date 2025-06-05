/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'main': '#ff4500',
        'main-light': '#c33502',
        'main-dark': '#f88a62',
        'support': '#008080',
        'dark': '#111',
        'light': '#f6ffff;',
        'grey-dark': '#333',
        'grey-medium': '#989898',
        'grey-light': '#ccc',
        'grey-light-extra': '#eee',
      },
    },
  },
  plugins: [],
}

