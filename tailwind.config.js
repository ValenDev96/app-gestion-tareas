export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'neon-green': '#39ff14',
        'neon-blue': '#00f7ff',
        'neon-pink': '#ff00ff',
      },
      boxShadow: {
        'neon-green': '0px 0px 10px #39ff14',
        'neon-blue': '0px 0px 10px #00f7ff',
        'neon-pink': '0px 0px 10px #ff00ff',
      }
    }
  },
  plugins: []
};