/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    theme: {
      extend: {
        colors: {
          primary: "#EA5329",
        },
        fontFamily: {
          Monument: ['"Monument"', "sans-serif"],
        },
        screens: {
          desktop: { max: "1279px" },

          miniLaptop: { max: "1278px" },

          laptop: { max: "1024px" },

          tablet: { max: "768px" },

          phone: { max: "639px" },
        },
      },
    },
  },
  plugins: [],
};
