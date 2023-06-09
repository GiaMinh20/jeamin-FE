const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/pages/mobile/*.{js,ts,jsx,tsx}",
    "./src/forms/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  // đổi màu ở đây thì vào globals đổi màu theo (nếu có)
  theme: {
    colors: {
      main: "#404040",
      sec: "#aa8200",
      label: "#6B6F82",
      warning: "#F44336",
      warningBold: "#f14f04",
      success: "#388E3C",
      ["important-pending"]: "#D32F2F",
      active: "#f14f04",
      orange: "#f14f04",
      pending: "#f57c00",
      gray: "#e6e6e6",
      purple: "#a0f",
      white: "#f5f5f5",
      gold: "#ff9100",
      blue: "#2196F3",
      green: "#388E3C",
      red: "#F44336",
      black: "#000",
      blueLight: "#0084ff",
      lightGray: "#E4E6EB",
    },
    extend: {
      colors: {},
      boxShadow: {
        custom:
          "0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.12), 0 1px 5px 0 rgba(0,0,0,.20)",
        sidebar:
          "0 16px 16px 0 rgba(0,0,0,.04), 0 1px 5px 0 rgba(0,0,0,.02), 0 3px 1px -2px rgba(0,0,0,.02)",
        input: "0 0 0 2px rgba(246,67,2,.2)",
      },
      backgroundImage: {
        custom:
          "repeating-linear-gradient(-45deg, transparent 0px, transparent 7px, rgba(24,169,249,0.1) 7px, rgba(24,169,249,0.1) 9px)",
      },
    },
    screens: {
      // => @media (min-width: 640px) { ... }
      xs: "480px",
      ...defaultTheme.screens,
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant("optional", "&:optional");
    }),
  ],
};
