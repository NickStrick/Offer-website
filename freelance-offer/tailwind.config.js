module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkish: "#0f0f0f", // optional
        'purple-custom': 'var(--color-purple)',
        'purple-background': 'var(--bg-purple) ',
      },
    },
  },
  plugins: [],
};
