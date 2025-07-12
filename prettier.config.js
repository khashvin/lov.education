//  @ts-check

/** @type {import('prettier').Config} */
const config = {
  plugins: [
    'prettier-plugin-tailwindcss',
    '@ianvs/prettier-plugin-sort-imports',
  ],
  semi: true,
  singleQuote: true,
  trailingComma: 'all',
  endOfLine: 'lf',
  tabWidth: 2,
  importOrder: [
    '<BUILTIN_MODULES>',
    '',
    '<THIRD_PARTY_MODULES>',
    '',
    '^(@/.*)$',
    '^[.]',
  ],
};

export default config;
