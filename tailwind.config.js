// tailwind.config.js

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBackground: '#1a202c',
        darkCard: '#2d3748',
        darkAccent: '#4a5568',
        link: '#3182ce',
        secondaryText: '#a0aec0',
      },
    },
  },
  plugins: [],
};
