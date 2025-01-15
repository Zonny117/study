/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // * 테일윈드 css에서 클래스명으로 지정할 수 있는 커스텀 값들을 여기서 정의
      colors: {
        "weather-primary": "#00668a",
        "weather-secondary": "#004e71",
      },
      fontFamily: {
        Roboto: ["Roboto, sans-serif"],
      },
      container: {
        padding: "2rem",
        center: true,
      },
      screens: {
        sm: "640px",
        md: "768px",
      },
    },
  },
  plugins: [],
};
