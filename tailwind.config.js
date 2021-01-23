module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js', './pages/**/*.tsx', './components/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "faq-accordion": {
          dark: 'hsl(237, 12%, 33%)',
          light: 'hsl(240, 6%, 50%)',
        }
      },
      fontFamily: {
        'faq-accordion': ['Kumbh\ Sans', 'Arial', 'sans-serif'],
      },
      transitionProperty: {
        'height': 'height',
        'max-height': 'max-height'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
