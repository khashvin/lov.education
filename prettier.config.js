//  @ts-check

/** @type {import('prettier').Config} */
const config = {
  semi: true,
  singleQuote: true,
  trailingComma: 'all',
  endOfLine: 'lf',
  tabWidth: 2,
  plugins: ['prettier-plugin-tailwindcss'],
};

export default config;
