/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'forest-green': '#228B22',
        'pine-green': '#01796F',
        'burgundy': '#800020',
        'logo': '#FDB72B'
    },
  },
  fontFamily: {
    sans: ['var(--font-ubuntu)'],
  },
  plugins: [require('@tailwindcss/forms')],
}
}