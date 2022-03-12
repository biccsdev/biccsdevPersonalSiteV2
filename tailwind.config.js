module.exports = {
  content: ["./src/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        'sm': '425px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
      }
    },
    fontFamily: {
      vt323: ["VT323", "monospace"],
    },
    colors: {
      'purple': '#5d2e8c',
      'greenish': '#7ae582',
      'whitish': '#fffaff',
      'greyish': '#222823',
      'blackish': '#08090a'
    },
  },
  plugins: [],
}
