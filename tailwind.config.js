/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Josefin Sans", "sans-serif"],
      },
      fontSize: {
        "18px": "1.125rem",
      },
      backgroundImage: {
        desktopDarkBg: "url('/images/bg-desktop-dark.jpg')",
        desktopLightBg: "url('/images/bg-desktop-light.jpg')",
        checkIcon: "url('/images/icon-check.svg')",
      },
      colors: {
        brightBlue: "hsl(220, 98%, 61%)",

        //Light Theme
        veryLightGray: "hsl(0, 0%, 98%)",
        veryLightGrayishBlue: "hsl(236, 33%, 92%)",
        lightGrayishBlueLight: "hsl(233, 11%, 84%)",
        darkGrayishBlueLight: "hsl(236, 9%, 61%)",
        veryDarkGrayishBlueLight: "hsl(235, 19%, 35%)",

        //Dark Theme
        veryDarkBlue: "hsl(235, 21%, 11%)",
        veryDarkDesaturatedBlue: "hsl(235, 24%, 19%)",
        lightGrayishBlue: "hsl(234, 39%, 85%)",
        lightGrayishBlueHover: "hsl(236, 33%, 92%)",
        darkGrayishBlue: "hsl(234, 11%, 52%)",
        veryDarkGrayishBlue1: "hsl(233, 14%, 35%)",
        veryDarkGrayishBlue2: "hsl(237, 14%, 26%)",
      },
    },
  },
  plugins: [],
};
