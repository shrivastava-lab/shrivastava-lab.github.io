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
        'people-hero': "url('/images/The Team.jpeg')",
        'publication-hero': "url('/images/publications.jpeg')",
        'software-hero': "url('/images/softwares.jpeg')",
        'news-hero': "url('/images/news.jpeg')",
        'blog-hero': "url('/images/blog.jpeg')",
      },
    },
  },
  plugins: [],
}
