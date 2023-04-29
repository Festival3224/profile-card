const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./*.html',],
  theme: {
    extend: {
      colors: {
        primary: {
          darkCyan: "#19a2ae",
          DEFAULT: "#414868",
          grayishBlue: "#6a6f81",
        },
        neutral: {
          DEFAULT: "#969696",
        },
      },

      backgroundImage: {
        'card-head': "url('../images/bg-pattern-card.svg')",
        'decor-top': "url('../images/bg-pattern-top.svg'), url('../images/bg-pattern-bottom.svg')",
      },

      fontFamily: {
        Kumbh: ['"Kumbh Sans"', ...defaultTheme.fontFamily.sans]
      },

    },
  },
  plugins: [],
}

