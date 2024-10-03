/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        btn: '2px 2px 12px 0px #FECDDE inset, -6px -6px 16px 0px #FF669A inset, 2px 8px 32px 0px rgba(255, 102, 154, 0.16)',
      },
    },
  },
  plugins: [],
};
