module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      textColor: {
        'primary': '#40D8A1',
        'secondary': 'rgb(230, 108, 108)',
        'link': '#5b7bfb'
      },
      backgroundColor: {
        'primary': '#40D8A1',
        'secondary': 'rgb(230, 108, 108)',
        'optional': '#27292c'
      },
      fontFamily: {
        'primary': ['Roboto Condensed', 'sans-serif']
      },
      boxShadow: {
        'primary': '0 0 14px rgba(0, 0, 0, .05)'
      },
      backgroundImage: {
        'border': "url('/bg-border.png')"
      },
      fontSize: {
        '5.8vw': '5.8vw',
        '5.8vw': '5.8vw',
      },
      borderColor: {
        'primary': '#40D8A1',
        'secondary': 'rgb(230, 108, 108)',
        'optional': '#27292c'
      },
      height: {
        '500px': '500px'
      },
      fontSize: {
        '110px': '110px',
        '80px': '80px'
      }
    },
  },
  variants: {
    extend: {
      margin: ['last', 'hover'],
      inset: ['hover']
    },
  },
  plugins: [],
}
