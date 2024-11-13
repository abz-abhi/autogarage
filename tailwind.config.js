/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xxs: "320px", 
        xs:"425px",
        sm: "626px", 
        md: "768px", 
        lg: "1024px", 
        xl: "1440px", 
        "2xl": "1536px", 
      },
    },
  },
  plugins: [],
};
