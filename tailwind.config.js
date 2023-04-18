/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    screens: {
      "sm": "640px",
      "md": "768px",
      "lg": "1024px",
      "xl": "1200px",
      "2xl": "1536px"
    },
    extend: {
      "rounded-full": {
        "border-radius": "50%",
      },
      colors: {
        primary: "#000",
      },
    },
  },
  plugins: [],
};
