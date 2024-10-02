/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    colors: {
      "b-aose": "#0f0f0f",
      "w-aose": "#f0f0f0",
      "g-aose": "#e5e5e5",
      "easy": "#7bff6a",
      "medium": "#fffb7d",
      "hard": "#ff7d7d",
    },
    extend: {
      boxShadow: {
        post: "7px 6px 9px 1px #00000025",
      },
    },
  },
  plugins: [],
};
