/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        maroon: {
          50: '#FDF7F7',
          100: '#F9ECEE',
          200: '#F3D4D8',
          300: '#E7ACB4',
          400: '#D57987',
          500: '#B84E60',
          600: '#9B394A',
          700: '#7B2836',
          800: '#5F1B26',
          900: '#48131C',
          950: '#2A070D',
        },
        gold: {
          50: '#FDFCF7',
          100: '#FBF8EB',
          200: '#F5EECB',
          300: '#ECDD9E',
          400: '#DEC56A',
          500: '#C5A059',
          600: '#AB8341',
          700: '#8A6430',
          800: '#6F4E27',
          900: '#583D21',
        },
        cream: {
          50: '#FFFDF9',
          100: '#FDFBF7',
          200: '#FAF6EE',
          300: '#F5EFEB',
          400: '#EDE4DB',
          500: '#DDD1C3',
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'Cormorant Garamond', 'serif'],
        cinzel: ['Cinzel', 'serif'],
        telugu: ['"Noto Serif Telugu"', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      boxShadow: {
        'luxury': '0 10px 30px -5px rgba(72, 19, 28, 0.08), 0 4px 10px -2px rgba(197, 160, 89, 0.05)',
        'luxury-hover': '0 20px 40px -10px rgba(72, 19, 28, 0.16), 0 8px 16px -4px rgba(197, 160, 89, 0.12)',
      }
    },
  },
  plugins: [],
}
