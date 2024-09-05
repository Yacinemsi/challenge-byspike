tailwind.config = {
  theme: {
    extend: {
      colors: {
        graybg: "#141414",
        gray: "#B3B3B3",
        blackGray: "#232323",
        deepBlack: "#1D1D1D",
        bgIcon: "#171717",
        borderIcon: "#2C2C2C",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      animation: {
        "loop-scroll": "scroll 20s linear infinite",
      },
      keyframes: {
        scroll: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      borderRadius: {
        radius: "32px",
      },

      gridTemplateRows: {
        "10-fixed": "repeat(10, 160px)",
        "5-fixed": "repeat(5, 200px)",
      },
      screens: {
        sm: "680px",
      },
    },
  },
};
