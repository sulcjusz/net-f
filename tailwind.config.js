/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      fontFamily: {
        exo: ['Exo', 'sans-serif'],
      },
      colors: {

        grey: {
          50: "#ECECEC",
          100: "#E8E8E8",
          200: "#E5E5DF",
          300: "#D9D9D9",
          400: "#5F5959",
          500: "#443B3B",
          600: "#1C1B1B",
          700: "#111010"
        },
        borderColor: theme => ({
          ...theme('colors.grey'),
        }),
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.border-grey-medium': {
          'border-color': '#827D7D',
        },
        '.border-grey-dark': {
          'border-color': '#443B3B',
        },
        '.text-linear-gradient-primary': {
          'background': 'linear-gradient(90deg, #CAEA71 0%, #844071 50.5%, #404F84 100%)',
          '-webkit-background-clip': 'text',
          '-webkit-text-fill-color': 'transparent',
        },
        '.bg-linear-gradient-primary': {
          'background': 'linear-gradient(90deg, #CAEA71 0%, #844071 50.5%, #404F84 100%)',
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
}