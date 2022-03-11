module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      keyframes: {
        animationOder: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.2)" },
        },
      },
      fontFamily: {
        fontRic: ["Bubblegum Sans", "cursive"],
      },
      backgroundImage: {
        "disCount-Image": "url('../src/assets/bg_promotion_home.jpg')",
      },
    },
  },
  plugins: [],
};
