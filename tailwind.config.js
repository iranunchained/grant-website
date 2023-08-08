const defaultTheme = require("tailwindcss/defaultTheme");

// Custom color with css variable color in @grants-dao/ui/styles.css
const customColor =
  (cssVariable) =>
  ({ opacityVariable, opacityValue }) =>
    opacityValue != null
      ? `rgba(var(${cssVariable}), ${opacityValue})`
      : opacityVariable != null
      ? `rgba(var(${cssVariable}), var(${opacityVariable}, 1))`
      : `var(${cssVariable})`;

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        xl: "40px",
        "2xl": "128px",
      },
    },
    fontFamily: {
      display: ["var(--font-display)", ...defaultTheme.fontFamily.sans],
      body: ["var(--font-body)", ...defaultTheme.fontFamily.sans],
    },

    extend: {
      colors: {
        primary: {
          50: customColor("--c-primary-50"),
          100: customColor("--c-primary-100"),
          200: customColor("--c-primary-200"),
          300: customColor("--c-primary-300"),
          400: customColor("--c-primary-400"),
          500: customColor("--c-primary-500"),
          6000: customColor("--c-primary-600"),
          700: customColor("--c-primary-700"),
          800: customColor("--c-primary-800"),
          900: customColor("--c-primary-900"),
        },
        secondary: {
          50: customColor("--c-secondary-50"),
          100: customColor("--c-secondary-100"),
          200: customColor("--c-secondary-200"),
          300: customColor("--c-secondary-300"),
          400: customColor("--c-secondary-400"),
          500: customColor("--c-secondary-500"),
          6000: customColor("--c-secondary-600"),
          700: customColor("--c-secondary-700"),
          800: customColor("--c-secondary-800"),
          900: customColor("--c-secondary-900"),
        },
        neutral: {
          50: customColor("--c-neutral-50"),
          100: customColor("--c-neutral-100"),
          200: customColor("--c-neutral-200"),
          300: customColor("--c-neutral-300"),
          400: customColor("--c-neutral-400"),
          500: customColor("--c-neutral-500"),
          6000: customColor("--c-neutral-600"),
          700: customColor("--c-neutral-700"),
          800: customColor("--c-neutral-800"),
          900: customColor("--c-neutral-900"),
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
