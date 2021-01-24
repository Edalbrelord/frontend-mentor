module.exports = {
  purge: ['./pages/**/*.js', './components/**/*.js', './pages/**/*.tsx', './components/**/*.tsx'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "faq-accordion": {
          dark: 'hsl(237, 12%, 33%)',
          light: 'hsl(240, 6%, 50%)',
        },
        "four-card": {
          dark: 'hsl(234, 12%, 34%)',
          DEFAULT: 'hsl(229, 6%, 66%)',
          light: 'hsl(0, 0%, 98%)',
          primary: {
            cyan: 'hsl(180, 62%, 55%)',
            red: 'hsl(0, 78%, 62%)',
            orange: 'hsl(34, 97%, 64%)',
            blue: 'hsl(212, 86%, 64%)',
          }
        },
        "huddle-curved": {
          "blue": 'hsl(207, 100%, 98%)',
          "cyan": 'hsl(192, 100%, 9%)',
          primary: {
            "pink": 'hsl(322, 100%, 66%)',
            "light-pink": 'hsl(321, 100%, 78%)',
            "light-red": 'hsl(0, 100%, 63%)',
          }
        }
      },
      fontFamily: {
        'faq-accordion': ['Kumbh\ Sans', 'Arial', 'sans-serif'],
        'four-card': ['Poppins', 'Arial', 'sans-serif'],
        'huddle-curved-header': ['Poppins', 'Arial', 'sans-serif'],
        'huddle-curved-body': ['Open\ Sans', 'Arial', 'sans-serif'],
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
