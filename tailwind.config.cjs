/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html', // Include HTML files
    './src/**/*.{js,ts,jsx,tsx}', // Include React component files
  ],
  theme: {
    extend: {}, // Add custom styles here if needed
  },
  plugins: [
    require('tailwind-scrollbar'), // Add the scrollbar plugin
  ],
};
