/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        'Geist': ['"AR One Sans"', 'sans-serif'],
      },
      colors: {
        'color-text1': '#18181B',
        'color-text2': '#71717A',
      },
    },
  },
  plugins: [],
}

