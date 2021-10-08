const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.blueGray,
      blue: colors.sky,
      purple: colors.purple,
    },
    extend: {
      animation: {
        swing: 'swing 1.5s ease-in-out infinite',
      },
      keyframes: {
        swing: {
          '20%': {
            transform: 'rotate3d(0, 0, 1, 15deg)',
          },

          '40%': {
            transform: 'rotate3d(0, 0, 1, -10deg)',
          },

          '60%': {
            transform: 'rotate3d(0, 0, 1, 5deg)',
          },

          '80%': {
            transform: 'rotate3d(0, 0, 1, -5deg)',
          },

          to: {
            transform: 'rotate3d(0, 0, 1, 0deg)',
          },
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
