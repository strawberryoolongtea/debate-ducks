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
        10: "0.625rem",
        12: "0.75rem",
        16: "1rem",
        18: "1.125rem",
        20: "1.25rem",
        24: "1.5rem",
        30: "1.875rem",
        32: "2rem",
        36: "2.25rem",
        40: "2.5rem",
        46: "2.875rem",
        48: "3rem",
        50: "3.125rem",
        52: "3.25rem",
        53: "3.313rem",
        60: "3.75rem",
        61: "3.813rem",
        70: "4.375rem",
        80: "5rem",
        90: "5.625rem",
        92: "5.75rem",
        100: "6.25rem",
        112: "7rem",
        120: "7.5rem",
        130: "8.125rem",
        140: "8.75rem",
        153: "9.563rem",
        168: "10.5rem",
        169: "10.563rem",
        170: "10.625rem",
        173: "10.813rem",
        176: "11rem",
        180: "11.25rem",
        192: "12rem",
        272: "17rem",
        274: "17.125rem",
        304: "19rem",
        320: "20rem",
        336: "21rem",
        368: "23rem",
        370: "23.125rem",
        410: "25.625rem",
        460: "28.75rem",
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
        osDefault: ["-apple-system"],
      },
      fontSize: {
        12: "0.75rem",
        14: "0.875rem",
        18: "1.125rem",
        24: "1.5rem",
        32: "2rem",
        36: "2.25rem",
        48: "3rem",
        192: "12rem",
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
          kakao: { fee500: "#fee500" },
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
        logoWhite: "url('../public/images/Logo3.png')",
        orangeduck: "url('../public/images/profile-theme-orange.png')",
        greenduck: "url('../public/images/profile-theme-green.png')",
        strawduck: "url('../public/images/profile-theme-straw.png')",
        grayduck: "url('../public/images/profile-theme-gray.png')",
        main: "url('../public/images/main.jpg')",
        mainbottom: "url('../public/images/main-bottom.jpb')",
        forum: "url('../public/images/forum.jpg')",
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
        forfun: "url('../public/images/forfun.jpg')",
        biglogo: "url('../public/images/debate-ducks-symbol.png')",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
