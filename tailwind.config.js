module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
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
