/** @type {import('tailwindcss').Config} */
export default {
  content: ['index.html', 'src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'color-primary': '#ed1c24',
      },
      fontFamily: {
        pretendard: ['Pretendard', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
