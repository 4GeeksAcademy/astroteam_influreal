/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/front/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "influencer-gradient": "linear-gradient(to right, #fcfcfc, #e0e0e0)",
      },
    },
  },
  plugins: [],
};
