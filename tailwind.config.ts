import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e8f2ed',
          100: '#c2ddd1',
          200: '#9ac7b4',
          300: '#72b197',
          400: '#4f9b7a',
          500: '#2d6250',
          600: '#25503f',
          700: '#1d3d2f',
          800: '#152b20',
          900: '#0d1810',
        },
        secondary: {
          50: '#faf9f7',
          100: '#f0ede6',
          200: '#e6e1d5',
          300: '#dcd5c4',
          400: '#d2c9b3',
          500: '#c8bda2',
          600: '#b0a07e',
          700: '#8a7d5f',
          800: '#645b44',
          900: '#3e382a',
        },
        accent: {
          lavender: '#ddd4ea',
          cream: '#e8e8d0',
          pink: '#f0e8e8',
          lightGreen: '#d4e8dd',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Georgia', 'Cambria', 'Times New Roman', 'serif'],
      },
    },
  },
  plugins: [],
};

export default config;
