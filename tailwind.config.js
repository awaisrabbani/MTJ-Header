const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    screens: {
    'sm': '640px',
    'md': '768px',
    'lg': '1200px',
  
  },
    extend: {},
  },
  plugins: [
    flowbite.plugin(),
  ],
}