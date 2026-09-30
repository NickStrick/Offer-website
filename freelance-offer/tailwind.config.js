module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "monospace"],
      },
      colors: {
        darkish: "#0f0f0f", // optional
        'purple-custom': 'var(--color-purple)',
        'purple-background': 'var(--bg-purple) ',
      },
    },
  },
  plugins: [],
};
