//  @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginTSRouter from '@tanstack/eslint-plugin-router';
import pluginTSQuery from '@tanstack/eslint-plugin-query';
import prettier from 'eslint-config-prettier/flat';
import { globalIgnores } from 'eslint/config';

export default tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.strict,
  tseslint.configs.stylistic,
  prettier,
  ...pluginTSRouter.configs['flat/recommended'],
  ...pluginTSQuery.configs['flat/recommended'],
  globalIgnores([
    './src/routeTree.gen.ts',
    './src/worker-configuration.d.ts',
    './src/drizzle/migrations/**',
  ]),
  {
    rules: {
      '@typescript-eslint/no-unused-vars': 'warn',
    },
  },
);
