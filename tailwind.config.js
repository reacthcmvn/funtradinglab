/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/styles/img/b6.jpg')",
        // "footer-texture": "url('/img/footer-texture.png')",
      },
    },
  },
  plugins: [],
};
