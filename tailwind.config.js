/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "3xl": " 0px 4px 20px 1px rgba(0, 0, 0, 0.03)",
      },
    },
  },
  plugins: [
    require("daisyui")
  ],
  daisyui: {
    themes: ["light"],
    mytheme: {
      primary: "#f8f9fb",
    },
  },
};
