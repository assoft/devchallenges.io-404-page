module.exports = {
  purge: ['src/**/*.vue'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
        spacing: {
            '448px': '448px',
            '540px': '550px',
        },
        colors: {
            "app-gray-1": "#333333",
            "app-gray-2": "#4F4F4F"
        }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
