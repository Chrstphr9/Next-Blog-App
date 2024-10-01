/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xx: "320px",
        xs: "412px",
        ss: "620px",
        sm: "768px",
        md: "1020px",
        lg: "1024px",
        xl: "1700px",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: '#00204A',
        secondary: '#005792',
        tertiary: '#00BBF0',
        off: '#EFFBFF'
      },
    },
  },
  plugins: [],
};
