/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.stories.@(js|jsx|ts|tsx)", // Storybook 스토리 인식
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

