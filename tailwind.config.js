/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#c01a08',
          gold: '#e8a020',
          dark: '#060000',
          dark2: '#0d0000',
        }
      },
      fontFamily: {
        oswald: ['Oswald', 'sans-serif'],
        dancing: ['Dancing Script', 'cursive'],
        inter: ['Inter', 'sans-serif'],
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-33.33%)' },
        }
      }
    },
  },
  plugins: [],
}
