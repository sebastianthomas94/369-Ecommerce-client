/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: {
          50: "#f8fafc",
          100: "#f5f5f5",
          200: "#e5e7eb",
          900: "#111827",
          "50_01": "#f8f8f8",
          "200_01": "#e7e7e7",
          "200_87": "#e5e7eb87",
          "200_7f": "#e5e7eb7f",
        },
        white: { A700: "#ffffff", A700_87: "#ffffff87", A700_a2: "#ffffffa2" },
        blue_gray: {
          700: "#4b5563",
          "700_99": "#4b556399",
          300: "#94a3b8",
          "700_66": "#4b556366",
        },
        light_blue: { 600: "#0ea5e9", "600_a2": "#0ea5e9a2" },
        gray_900_cc: "#111827cc",
        gray_900_66: "#11182766",
        gray_600: "#6b7280",
        blue_gray_700_cc: "#4b5563cc",
      },
      boxShadow: {
        xs: "0px 8px 10px -6px #00000019",
        sm: "0px 8px 10px -6px #00000019",
      },
      fontFamily: { poppins: "Poppins" },

      opacity: { 0.5: 0.5, 0.8: 0.8 },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
