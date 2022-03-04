module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      screens: {
        mb: { max: "500px" },
        tb: { max: "768px" },
      },
      spacing: {
        // padding, margin, width, height
        12: "0.75rem",
        18: "1.125rem",
        20: "1.25rem",
        24: "1.5rem",
        30: "1.875rem",
        32: "2rem",
        36: "2.25rem",
        40: "2.5rem",
        46: "2.875rem",
        48: "3rem",
        60: "3.75rem",
        70: "4.375rem",
        80: "5rem",
        90: "5.625rem",
        92: "5.75rem",
        98: "6.125rem",
        112: "7rem",
        140: "8.75rem",
        274: "17.125rem",
        304: "19rem",
        320: "20rem",
        336: "21rem",
        368: "23rem",
        370: "23.125rem",
        410: "25.625rem",
        540: "33.75rem",
        560: "35rem",
        720: "45rem",
        960: "60rem",
        1200: "75rem",
      },
      borderRadius: {
        12: "0.75rem",
        16: "1rem",
        18: "1.125rem",
        20: "1.25rem",
        24: "1.5rem",
        30: "1.875rem",
        35: "2.188rem",
      },
      fontFamily: {
        poppins: ["Poppins"],
      },
      fontSize: {
        12: "0.75rem",
        14: "0.875rem",
        18: "1.125rem",
        24: "1.5rem",
        36: "2.25rem",
        48: "3rem",
      },
      lineHeight: {
        12: "0.75rem",
        14: "0.875rem",
        18: "1.125rem",
        24: "1.5rem",
        36: "2.25rem",
        48: "3rem",
      },
      colors: {
        ducks: {
          blue: { "6667ab": "#6667ab" },
          green: { cce8cc: "#cce8cc" },
          straw: { e5e366: "#e5e366" },
          yellow: { fedd00: "#fedd00" },
          orange: { ff9425: "#ff9425" },
          gray: {
            eee: "#eeeeee",
            ccc: "#cccccc",
            666: "#666666",
          },
          black: "#000000",
        },
      },
      backgroundImage: {
        logo: "url('../public/images/Logo1.png')",
        bigLogo: "url('../public/images/debate-ducks-symbol.png')",
        logoWhite: "url('../public/images/Logo3.png')",
        orangeduck: "url('../public/images/profile-theme-orange.png')",
        greenduck: "url('../public/images/profile-theme-green.png')",
        strawduck: "url('../public/images/profile-theme-straw.png')",
        grayduck: "url('../public/images/profile-theme-gray.png')",
        main: "url('../public/images/main.jpg')",
        politics: "url('../public/images/politics.jpg')",
        society: "url('../public/images/society.jpg')",
        economics: "url('../public/images/economics.jpg')",
        science: "url('../public/images/science.jpg')",
        it: "url('../public/images/it.jpg')",
        environment: "url('../public/images/environment.jpg')",
        education: "url('../public/images/education.jpg')",
        history: "url('../public/images/history.jpg')",
        sports: "url('../public/images/sports.jpg')",
        philosophy: "url('../public/images/philosophy.jpg')",
        culture: "url('../public/images/culture.jpg')",
        forfun: "url('../public/images/politics.jpg')",
      },
      keyframes: {
        colorBounce: {
          "0%, 100%": { color: "#000000", "animation-timing-function": "cubic-bezier(0.8,0,1,1)" },
          "50%": { color: "#ff9425", "animation-timing-function": "cubic-bezier(0,0,0.2,1)" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
