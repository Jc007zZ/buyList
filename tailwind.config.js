/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "purple-300": "#523480",
        "purple-200": "#7450AC",
        "purple-100": "#A881E6",
        "gray-600": "#0C0C0D",
        "gray-500": "#111112",
        "gray-400": "#17171A",
        "gray-300": "#252529",
        "gray-200": "#AFABB6",
        "gray-100": "#FBF9FE",
        "succeess-200": "#2F723D",
        "succeess-100": "#4E995E",
        "purple": "#af39f8",
        "pink": "#DB5BBF",
        "blue": "#7B94CB",
        "green": "#8CAD51",
        "orange": "#E07B67",
        "yellow": "#BB9F3A"
      }
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  }
}