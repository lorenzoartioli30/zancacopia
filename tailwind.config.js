/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main': '#a44e74',
        'dark-main': '#7f0039',
        'custom-white': '#dae1e0',
        'white1': '#adc0c6',
        'white2': '#c3ccd1',
        'white3': '#d9dfdb',
        'white4': '#e4e6e3',
      },
    },
  },
  plugins: [],
}
