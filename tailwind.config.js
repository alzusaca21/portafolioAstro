/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      backgroundImage: {
        "bg-About": "url('images/portfolio1.png')"
      },
      fontFamily: {
        'Geist': ['"AR One Sans"', 'sans-serif'],
      },
      colors: {
        'color1': '#F9FAFB',
        'color2': '#71717A',
        'color-blue': '#0A1D7D'
      },
    },
  },
  plugins: [],
}

