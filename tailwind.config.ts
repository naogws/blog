import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FA8072',
        secondary: '#383838',
        background: '#1E1E1E',
        text: '#f7fafc',
        border: '#505050',
        highlight: '#FF6347',
      },
    },
  },
  plugins: [],
};
export default config;
