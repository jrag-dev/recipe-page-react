/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      colors: {
        'nutmeg-custom': 'hsl(14, 45%, 36%)',
        'dark-raspberry-custom': 'hsl(332, 51%, 32%)',
        'white-custom': 'hsl(0, 0%, 100%)',
        'rose-white-custom': 'hsl(330, 100%, 98%)',
        'eggshell-custom': 'hsl(30, 54%, 90%)',
        'light-grey-custom': 'hsl(30, 18%, 87%)',
        'wenge-brown-custom': 'hsl(30, 10%, 34%)',
        'dark-charcoal-custom': 'hsl(24, 5%, 18%)',
        'black-custom': '#212121',
      },
      fontFamily: {
        'outfit': ['"Outfit"', 'sans-serif'],
        'young-serif': ['"Young Serif"', 'sans-serif'],
      },
    },
  plugins: [],
}