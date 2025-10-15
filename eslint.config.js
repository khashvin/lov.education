import eslint from '@eslint/js';
import pluginTSQuery from '@tanstack/eslint-plugin-query';
import pluginTSRouter from '@tanstack/eslint-plugin-router';
import prettier from 'eslint-config-prettier/flat';
import eslintPluginReactHooks from 'eslint-plugin-react-hooks';
import { defineConfig, globalIgnores } from 'eslint/config';
import tseslint from 'typescript-eslint';

export default defineConfig([
  globalIgnores([
    './src/routeTree.gen.ts',
    './src/worker-configuration.d.ts',
    './src/drizzle/migrations/**',
  ]),
  eslint.configs.recommended,
  tseslint.configs.strict,
  tseslint.configs.stylistic,
  prettier,
  ...pluginTSRouter.configs['flat/recommended'],
  ...pluginTSQuery.configs['flat/recommended'],
  eslintPluginReactHooks.configs.flat['recommended-latest'],
  {
    rules: {
      '@typescript-eslint/no-unused-vars': 'warn',
      'no-console': ['warn', { allow: ['info', 'warn', 'error'] }],
    },
  },
]);
