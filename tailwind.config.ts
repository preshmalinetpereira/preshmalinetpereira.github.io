/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        incognito: ["var(--incognito)"],
        inter: ["var(--inter)"],
      },
      colors: {
        "primary-color": "#FF7A7A",//  "#33E092",
        "secondary-color": "FFB3B3", //"#0CCE6B",
        "tertiary-color": "CC6262", //"#16a34a",
        "primary-bg": "rgba(39, 39, 43, 0.4)",
        "secondary-bg": "rgba(250, 250, 250, 0.4)",
      },
      boxShadow: {
        "line-light": "rgba(17, 17, 26, 0.1) 0px 1px 0px",
        "line-dark": "rgb(29, 29, 32) 0px 1px 0px",
      },
      gridTemplateColumns: {
        custom: "1.2fr 1fr",
      },
      backgroundImage: {
        noise:
          "url('https://drive.google.com/uc?export=view&id=1mHwcTY2cw2GC6Nv5U5PB-qEO600puGXV')",
      },
      backgroundPosition: {
        zero: "0 0",
      },
    },
  },
  plugins: [],
};
