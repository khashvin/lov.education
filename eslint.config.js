//  @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginTSRouter from '@tanstack/eslint-plugin-router';
import pluginTSQuery from '@tanstack/eslint-plugin-query';
import prettier from 'eslint-config-prettier/flat';
import eslintPluginReactHooks from 'eslint-plugin-react-hooks';
import { globalIgnores } from 'eslint/config';

export default tseslint.config(
  globalIgnores([
    './src/routeTree.gen.ts',
    'src/tanstack-start.d.ts',
    './src/worker-configuration.d.ts',
    './src/drizzle/migrations/**',
  ]),
  eslint.configs.recommended,
  tseslint.configs.strict,
  tseslint.configs.stylistic,
  prettier,
  ...pluginTSRouter.configs['flat/recommended'],
  ...pluginTSQuery.configs['flat/recommended'],
  eslintPluginReactHooks.configs['recommended-latest'],
  {
    rules: {
      '@typescript-eslint/no-unused-vars': 'warn',
      'no-console': ['warn', { allow: ['info', 'warn', 'error'] }],
    },
  },
);
