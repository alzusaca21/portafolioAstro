/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundImage: {
        "bg-About": "url('images/portfolio1.png')"
      },
      fontFamily: {
        'Geist': ['"Big Shoulders"', 'sans-serif'],
      },
      colors: {
        'color1': '#e7e7e9',
        'color2': '#71717A',
        'color-blue': '#122191'
      },
    },
  },
  plugins: [],
}

