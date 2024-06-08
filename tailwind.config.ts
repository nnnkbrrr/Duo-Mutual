import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'media',
  theme: {
    colors: {
      'foreground': 'var(--foreground)',
      'foreground-secondary': 'var(--foreground-secondary)',
      'primary': 'var(--primary)',
      'secondary': 'var(--secondary)',
      'tertiary': 'var(--tertiary)',
    },
  },
};

export default config;