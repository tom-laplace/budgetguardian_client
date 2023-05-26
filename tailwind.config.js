/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        "blue-dark": "#192E4F",
        "blue-light": "#3483C2",
        "gray-light": "#E8E8E8",
        "gray-dark": "#4A4A4A",
        "green-light": "#64B19D",
        "red": "#D1414E",
        "orange-light": "#F08C38",
        "white-cream": "#FFFFFF",
      },
    },
  },
  plugins: [],
};
