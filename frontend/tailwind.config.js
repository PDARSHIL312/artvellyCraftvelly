/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"], // Ensure Tailwind scans all files
  theme: {
    extend: {
      fontFamily: {
        serif: ["Inria Serif", "serif"],
        script: ["Lily Script One", "cursive"],
        swash: ["Macondo Swash Caps", "cursive"],
      },
      fontSize: {
        sm: "34px",
        base: "40px",
        md: "48px",
        lg: "64px",
        xl: "96px",
      },
      colors: {
        bg1: "#F3EEEA",
        bg2: "#EBE3D5",
        bg3: "#B0A695",
        bg4: "#776B5D",
      },
    },
  },
  plugins: [],
};
