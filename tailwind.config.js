module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      ...require("tailwindcss/colors"),
      cyan: "#3fc1c9",
      snow: "#f5f5f5",
      black: "#111111",
      aqua: "#67ced4",
      teal: "#2f9fa6",
      white: "#ffffff",
      gray: "#dddddd",
      lightGray: "#f1f1f1",
      blue: "#0000ff",
      red: "#ff0000",
      darkGray: "#999999",
      green: "#388e3c",
      offWhite: "#f9f9f9",
      darkerGray: "#2a2a2a",
      transparentWhite: "hsla(0,0%,100%,0.1)",
    },
    fontFamily: {
      inter: ["Inter", "sans-serif"],
      openSans: ["Open Sans", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
};
