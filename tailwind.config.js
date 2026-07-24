/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        orange: '#ff6a13',
        slime: '#c6d92b',
        pink: '#f28cb1',
        ink: '#1c1c1c',
        cream: '#faf9f0',
      },
      fontFamily: {
        caveat: ['Caveat', 'cursive'],
        fredoka: ['Fredoka', 'sans-serif'],
        gochi: ['"Gochi Hand"', 'cursive'],
        luckiest: ['"Luckiest Guy"', 'cursive'],
        nunito: ['Nunito', 'sans-serif'],
      },
      keyframes: {
        drip: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(6px)' },
        },
      },
      animation: {
        drip: 'drip 6s ease-in-out infinite',
        'spin-slow': 'spin 22s linear infinite',
      },
    },
  },
  plugins: [],
}
