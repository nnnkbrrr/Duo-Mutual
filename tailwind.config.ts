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
      'duolingo': 'var(--duolingo)',
      'accent-primary': 'var(--accent-primary)',
      'accent-secondary': 'var(--accent-secondary)',
      'foreground-primary': 'var(--foreground-primary)',
      'foreground-secondary': 'var(--foreground-secondary)',
      'primary': 'var(--primary)',
      'secondary': 'var(--secondary)',
      'tertiary': 'var(--tertiary)',
    },
  },
};

export default config;