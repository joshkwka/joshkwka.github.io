import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      minHeight: {
        'custom' : '600px',
      },
      fontFamily: {
        bodoni: ['"Bodoni Moda"', 'serif']
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        xs: '500px',
        sm: '640px',
        md: '735px',
        reg: '925px',
        lg: '1024px',
        xl: '1280px',
      },
      spacing: {
        '20': '5rem',
        '36': '9rem',
        '72': '18rem',
      },
    },
  },
  plugins: [],
} satisfies Config;
