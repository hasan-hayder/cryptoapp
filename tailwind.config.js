/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "forest-green": "#228B22",
        "pine-green": "#01796F",
        burgundy: "#800020",
        twitter: "#4F9EED",
        facebook: "#4F66A6",
        logo: "#FDB72B",
        azul: " #4B74B0",
        "baby-blue": "#82EEFD",
        "soft-purple": "#A58FD1",
      },
    },
    fontFamily: {
      sans: ["var(--font-ubuntu)"],
    },
    plugins: [require("@tailwindcss/forms")],
  },
};
