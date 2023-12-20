/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{
        'custom-red': '#980000',
      },
      backgroundImage: {
        'research-hero': "url('/images/Spatial Organization of the Microbiome.jpeg')",
      },
    },
  },
  plugins: [],
}
