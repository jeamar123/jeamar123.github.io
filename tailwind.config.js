module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'c-primary': '#2c698d',
        'c-secondary': '#bae8e8',
        'c-light': '#e3f6f5',
        'c-dark': '#272643',
        'c-white': '#fff',

        'c-5f5e5e': '#5f5e5e',
        'c-fafafa': '#fafafa',
      },
      boxShadow:  {
        'lg-reverse':  '0 -4px 6px -1px rgba(0, 0, 0, 0.1), 0 -2px 4px -1px rgba(0, 0, 0, 0.06)',
        'lg-middle':  '0 0px 6px 0px rgba(0, 0, 0, 0.1), 0 -2px 4px -1px rgba(0, 0, 0, 0.06)'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
