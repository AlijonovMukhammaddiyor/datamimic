import type { Config } from "tailwindcss";
const { fontFamily } = require("tailwindcss/defaultTheme");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-main": "#0F1212",
        "jala-red": "#ff595e",
        "jala-white": "#FFFFFF",
        "jala-gray-1": "#D3D3D3",
      },
      fontFamily: {
        sans: ["Inter", ...fontFamily.sans],
      },
      screens: {
        "3xl": "1728px",
      },
    },
  },
  plugins: [],
};
export default config;
