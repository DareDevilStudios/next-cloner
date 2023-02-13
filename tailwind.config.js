/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '380px',
      // => @media (min-width: 375px) { ... }
      
      'sm': '435px',
      // => @media (min-width: 640px) { ... }

      'md': '769px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1440px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    fontFamily: {
      body: ['Cinzel', 'serif'],
      display: ['Fauna One', 'serif'],
      inter: ['Inter', 'sans-serif'],
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
