// /** @type {import('tailwindcss').Config} */
// export const content = ['./src/**/*.{js,jsx,ts,tsx}'];
// export const theme = {
//   extend: {},
// };
// export const plugins = [];

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};
/** @type {import('tailwindcss').Config} */
const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Ensure it includes TypeScript files
  ],
  theme: {
    extend: {},
  },
  plugins: [],
});
