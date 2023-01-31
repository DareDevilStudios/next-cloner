/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      body: ['Cinzel', 'serif'],
      display: ['Fauna One', 'serif'],
    },
    backgroundSize: {
      'auto': 'auto',
      'cover': 'cover',
      'contain': 'contain',
      '50%': '50%',
      '16': '4rem',
    },

    extend: {
      dropShadow: {
        '3xl': '0px 0px 20px  rgba(255,255,255,0.1)',
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'shipy': '#D4AE83',
        'shipblue': '#061138',
      },
      keyframes: {
        grow: {
          '0%, 20%': {
            transform: "scale (1)"
          },
          '35%, 100%': {
            transform: "scale (1.15)"
          }
        }
      }
      
    },
  },
  plugins: [
    require('tailwind-scrollbar')({ nocompatible: true }),
    require("flowbite/plugin"),
  ],
};
