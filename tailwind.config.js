/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-montserrat)', 'sans-serif'],
        serif: ['var(--font-playfair)', 'serif'],
      },
      colors: {
        primary: {
          light: '#f8c8dc',
          DEFAULT: '#f8c8dc',
          dark: '#e8a4c4',
        },
        secondary: '#f0e6ef',
        textColor: '#5a4a42',
        light: '#fff9fb',
      },
    },
  },
  plugins: [],
};
