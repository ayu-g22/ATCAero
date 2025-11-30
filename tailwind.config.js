/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: "#C49A60",
        gold2: "#D3AF6B",
        goldSoft: "#E7C88F",
        blackDeep: "#0D0D0D",
        blackSoft: "#171717",
        whiteSoft: "#F6F4EF",
      },
      fontFamily: {
        cormorant: "var(--font-cormorant)",
      },
    }

  },
  plugins: [require("tailwindcss-animate")],
};
