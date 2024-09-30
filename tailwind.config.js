// tailwind.config.js

module.exports = {
  darkMode: 'class', // Enables dark mode via a class
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E40AF', // Example: Blue shade
        accent: '#F97316',  // Example: Orange shade
        secondary: '#14171A', // Dark Gray
        background: '#15202B', // Deep Blue
        darkCard: '#192734', // Dark Card Background
        text: '#FFFFFF', // White Text
        success: '#28a745', // Green for success messages
        danger: '#dc3545', // Red for error messages
        warning: '#ffc107', // Yellow for warnings
        info: '#17a2b8', // Teal for informational messages
        gray: {
          light: '#AAB8C2',
          DEFAULT: '#657786',
          dark: '#8899A6',
        },
      },
      fontFamily: {
        body: ['Arial', 'sans-serif'],
        heading: ['Helvetica', 'sans-serif'],
        
      },
      boxShadow: {
        'text-shadow': '2px 2px 4px rgba(0, 0, 0, 0.5)',}
    },
  },

  plugins: [],
}
