import {heroui} from '@heroui/theme';
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",  // Ensure this includes your app directory
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@heroui/theme/dist/components/tabs.js"
  ],
  theme: {
    extend: {
      backgroundColor: {
        DEFAULT: 'var(--background)',
      },
      colors: {
        mainbackground: 'var(--background)',
        buttonhover: 'var(--buttonhover)',
        buttonactive: 'var(--buttonactive)',
        buttonactivehover: 'var(--buttonactivehover)',  
        primary: 'var(--primary)'
      },
      fontFamily: {
        mono: ['Menlo', 'Consolas', 'Monaco', 'Liberation Mono', 'Lucida Console', 'monospace'],
        sans: ['ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', '"Helvetica Neue"', 'Arial', '"Noto Sans"', 'sans-serif', '"Apple Color Emoji"', '"Segoe UI Emoji"', '"Segoe UI Symbol"', '"Noto Color Emoji"'],
      },
    },
  },
  plugins: [heroui({
    prefix: "heroui", // prefix for themes variables
    defaultTheme: "dark", // default theme from the themes object
    defaultExtendTheme: "dark", // default theme to extend on custom themes
    themes: {
      dark: {
        layout: {}, // dark theme layout tokens
        colors: {background: "#111111", secondary: "#111111",}, // dark theme colors
      },
    },
  })],
};

export default config;

