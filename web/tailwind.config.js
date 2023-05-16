const { fontFamily } = require(`tailwindcss/defaultTheme`);

/** @type {import('tailwindcss').Config} */

module.exports = {
  theme: {
    extend: {
      colors: {
        current: `currentColor`,
        transparent: `transparent`,
        black: `black`,
        white: `white`,
        grey: `#32312F`,
        orange: {
          100: `#FDF0ED`,
          200: `#E95C32`,
          300: `#A63411`,
        },
        blue: {
          100: `#EFF5FB`,
          200: `#387FCA`,
          300: `#225588`,
        },
        green: {
          100: `#FBF5EB`,
          200: `#C7B94A`,
          300: `#A0B034`,
          400: `#819E3B`,
          500: `#1F4328`,
          600: `#132A19`,
        },
      },
      fontSize: {
        "2xs": [`11px`, `14.3px`],
        "xs": [`12px`, `24px`],
        "sm": [`14px`, `22.4px`],
        "base": [`16px`, `25.6px`],
        "lg": [`18px`, `28.8px`],
        "xl": [`20px`, `35px`],
        "2xl": [`24px`, `36px`],
        "3xl": [`32px`, `39px`],
        "4xl": [`36px`, `43.2px`],
        "5xl": [`48px`, `57.6px`],
        "6xl": [`60px`, `57px`],
        "7xl": [`72px`, `68.4px`],
        "8xl": [`96px`, `91.2px`],
        "9xl": [`108px`, `102.6px`],
        "10xl": [`160px`, `152px`],
      },
      fontWeight: {
        xthin: 100,
        thin: 200,
        light: 300,
        regular: 400,
        medium: 500,
        semi: 600,
        bold: 700,
        xbold: 800,
        black: 900,
      },
      fontFamily: {
        sans: [`var(--sans)`, fontFamily.sans],
        display: [`var(--display)`, fontFamily.display],
      },
    },
  },
};
