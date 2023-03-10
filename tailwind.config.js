/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        desktop1680: { max: "1681px" },
        desktop1440: { max: "1441px" },
        desktop1366: { max: "1366px" },
        desktop: { max: "1280px" },
        miniLaptop: { max: "1278px" },
        laptop: { max: "1024px" },
        tablet: { max: "768px" },
        phone: { max: "639px" },
        phone375: { max: "375px" },
      },
    },
  },
  plugins: [],
};
