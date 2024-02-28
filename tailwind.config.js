const plugin = require("tailwindcss/plugin");

const FlipCard = plugin(function ({ addUtilities }) {
  addUtilities({
    ".rotate-y": {
      "transform": "rotateY(180deg)",
    },
    ".preserve-3d": {
      "transformStyle": "preserve-3d"
    },
    ".perspective": {
      "perspective": "1000px"
    },
    ".backface-hidden": {
      "backfaceVisibility": "hidden",
    },
  });
});

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", 'sans-serif'],
        oswald: ["Oswald", 'sans-serif'],
      }
    },
  },
  plugins: [FlipCard],
}

