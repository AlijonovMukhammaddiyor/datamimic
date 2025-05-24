import type { Config } from "tailwindcss";

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
        "jala-red": "#f63e02",
        "jala-white": "#FFFFFF",
        "jala-gray-1": "#D3D3D3",
      },
      fontFamily: {
        tight: ["InterTight"],
      },
      screens: {
        "3xl": "1728px",
      },
    },
  },
  plugins: [],
};
export default config;
