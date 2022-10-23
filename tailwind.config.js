const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: {
    content: [
      './src/pages/**/*.{js,ts,jsx,tsx}',
      './src/layouts/**/*.{js,ts,jsx,tsx}',
      './src/components/**/*.{js,ts,jsx,tsx}',
    ],
    safelist: [
      'bg-primary-light',
      'bg-primary-dark',
      'text-primary-light',
      'text-primary-dark',
    ],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontSize: {
      //text-{}
      xs: ['.75rem', '1.4'], // 12px
      ss: ['.8125rem', '1.4'], // 13px
      sm: ['.875rem', '1.5'], // 14px
      base: ['1rem', '1.5'], //16px
      bp: ['1rem', '1.6'], // 16px
      lg: ['1.125rem', '1.3'], // 18px
      xl: ['1.25rem', '1.3'], // 20px
      '2xl': ['1.5rem', '1.3'], // 24px
      '3xl': ['1.875rem', '1.3'], // 30px
      '4xl': ['2rem', '1.2'], // 32px
      '5xl': ['2.625rem', '1.2'], //42px
    },
    extend: {
      spacing: {
        1.25: '0.3125rem', // 5
        3.75: '0.9375rem', // 15
        4.5: '1.125rem', // 18
        6.25: '1.5625rem', // 25
        7.5: '1.875rem', // 30
        8.75: '2.1875rem', // 35
        11.25: '2.8125rem', // 45
        12.5: '3.125rem', // 50
        13.75: '3.4375rem', // 55
        15: '3.75rem', // 60
        16.25: '4.0625rem', // 65
        17.5: '4.375rem', // 70
        18: '4.5rem', // 72
        25: '6.25rem', // 100
        37.5: '9.375rem', // 150
        50: '12.5rem', // 200
      },
      colors: {
        primary: {
          DEFAULT: '#4B6DF3',
          dark: ' #12182D',
        },
        secondary: '#FFFFFF',
        transparent: 'transparent',

        gray: {
          lightest: '#D9DBE1',
          light: '#62616F',
          DEFAULT: '#777A84',
          dark: '#73757E',
        },
        black: {
          DEFAULT: '#000000',
        },
        white: {
          DEFAULT: '#FFFFFF',
        },
      },
      fontFamily: {
        montserrat: "Lato,'Montserrat', sans-serif",
        inter: ['Inter', 'sans-serif', ...defaultTheme.fontFamily.sans],
      },
      lineHeight: {
        none: 1,
        tight: 1.2,
        snug: 1.3,
        normal: 1.4,
        relaxed: 1.5,
        loose: 1.6,
      },
      borderRadius: {
        sm: '3px',
        DEFAULT: '5px',
        lg: '30px',
      },
      letterSpacing: {
        slight: '0.0125em',
      },
      boxShadow: {
        primary: '0px 4px 5px rgba(238, 58, 85, 0.5)',
        light: '0 5px 10px -3px rgba(0, 0, 0, 0.075)',
      },
      // checkbox: {
      // 	color: defaultTheme.colors.pink,
      // },
      backgroundImage: {
        bannerImage: "url('/public/favicon-16x16.png')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
  ],
};
