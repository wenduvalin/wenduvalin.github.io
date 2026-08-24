/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Overrides Tailwind's default `pink` swatches so any `text-pink-*`,
      // `border-pink-*`, `ring-pink-*` utility class in the codebase renders
      // with the same burgundy scale defined in src/styles/colors.ts, without
      // needing to rename classes across components.
      colors: {
        pink: {
          25: '#FAF4F6',
          50: '#F7E8EC',
          100: '#F0CCD4',
          200: '#E495A7',
          300: '#D7476B',
          400: '#C7234C',
          500: '#AA1339',
          600: '#900629',
          700: '#800020',
          800: '#5C0018',
          900: '#3B0010',
        },
      },
      fontFamily: {
        // Tipografía A — editorial display serif (titles/headings)
        display: ['Fraunces', 'Iowan Old Style', 'Palatino Linotype', 'serif'],
        // Tipografía B — contemporary sans (body/nav/buttons/general content)
        sans: ['Manrope', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', '"Helvetica Neue"', 'Arial', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out',
        'bounce': 'bounce 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [
    require('tailwindcss-animate'),
  ],
}