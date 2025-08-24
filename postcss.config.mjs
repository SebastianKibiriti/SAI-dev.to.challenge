/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    // Modify the tailwindcss entry to include your theme
    '@tailwindcss/postcss': {
      config: {
        content: [
          "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
          "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
          "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        ],
        theme: {
          extend: {
            colors: {
              'base-bg': '#313032',
              'column-bg': '#3E3C3F',
              'card-bg': '#242325',
              'nav-bg': '#3B3A3C',
              'nav-btn-bg': '#242325',
              'text-primary': '#D1D0D2',
              'text-secondary': '#8A898B',
              'text-highlight': '#F5E1A4',
              'accent-yellow': '#F5D979',
            },
          },
        },
        plugins: [],
      }
    },
    autoprefixer: {},
  },
};

export default config;
