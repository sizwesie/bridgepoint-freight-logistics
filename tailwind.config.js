/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'dark-navy': '#001a4d',
        'navy': '#0f3a7d',
        'accent-blue': '#0066cc',
        'light-blue': '#e6f0ff',
      },
      fontFamily: {
        primary: ['Sora', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        secondary: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      spacing: {
        'section': 'clamp(3rem, 8vw, 6rem)',
      },
      backdropBlur: {
        glass: '10px',
      },
      boxShadow: {
        'premium': '0 10px 40px rgba(0, 0, 0, 0.08)',
        'premium-lg': '0 20px 60px rgba(0, 0, 0, 0.12)',
      },
    },
  },
  plugins: [],
}
