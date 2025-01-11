/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#f97316",
          foreground: "white",
        },
        accent: {
          DEFAULT: "rgb(243 244 246)",
          foreground: "rgb(17 24 39)",
        },
        background: "white",
        input: "rgb(229 231 235)",
      },
    },
  },
  plugins: [],
}
