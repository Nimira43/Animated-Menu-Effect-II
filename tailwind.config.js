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
        'prime': '#008080',
        'prime-light': '#06f8f8',
        'prime-dark': '#013737',
        'support': '#ff4500',
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

