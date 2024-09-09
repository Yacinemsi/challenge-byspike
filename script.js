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
      fontSize: {
        xxs: "9px",
        xs: "10px",
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
        radius: "38px",
      },

      gridTemplateRows: {
        "10-fixed": "repeat(10, 170px)",
        "5-fixed": "repeat(5, 230px)",
      },
      screens: {
        sm: "680px",
      },
      borderWidth: {
        1: "1px",
      },
    },
    backgroundPosition: {
      bottomCenter6: "center bottom -6rem",
    },
  },
};

document.getElementById("sendButton").addEventListener("click", function () {
  const icon = document.getElementById("sendIcon");
  icon.classList.remove("fade-in");
  icon.classList.add("fade-out");

  setTimeout(() => {
    icon.classList.remove("fade-out");
    icon.classList.add("fade-in");
  }, 100);
});

document.getElementById("menu-button").addEventListener("click", function () {
  var menu = document.getElementById("mobile-menu");
  menu.classList.toggle("hidden");
});
