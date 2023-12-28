/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        header: "#0B2027",
        accent: "#40798C",
        textColor: "#C9E4CA",
        backgroundAccent: "#B38D97",
        finalAccent: "#D5ACA9",
      },
    },
  },
  plugins: [],
};
