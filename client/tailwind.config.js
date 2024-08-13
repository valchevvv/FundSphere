/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'media', // Enables dark mode based on user's system preference
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        card: 'var(--card)',
      },
    },
  },
  plugins: [],
};