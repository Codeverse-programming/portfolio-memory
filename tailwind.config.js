/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
    colors:{
      'body': '#F6F5F1',
      'box1': '#FF843F',
      'box2': '#5398FF',
      'bg1': '#EADFD8',
      'box3': '#31D4AD',
      'box4': '#F46F6F',
      'box5': '#D1A4FF',
      'selected-text': '#F46F6F',
    },
    fontFamily:{
      'gantari':['Poppins','sans-serif'],
      'text-font': ['Instrument Sans', 'sans-serif'],
      'logo-font': ['Audiowide', 'cursive'],
    },
    },
  },
  plugins: [],
}

