/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'dm-sans': ['"DM Sans"', 'sans-serif'],
        'ibm-plex-mono': ['"IBM Plex Mono"', 'monospace'],
      },
      colors: {
        'violet': '#7b4b94',
        'white': '#ffffff',
        'light-green': '#d6f7a3',
        'blue': '#7d82b8', 
        'turquoise': '#b7e3cc',

      }
    },
  },
  plugins: [],
}

