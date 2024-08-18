import typescriptEslintParser from '@typescript-eslint/parser';
import tseslint from 'typescript-eslint';
import eslint from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import { fixupPluginRules } from '@eslint/compat';

export default tseslint.config(
  { ignores: ['**/.vscode/*', '**/node_modules/*', '**/dist/*'] },
  {
    files: ['**/*.{js,cjs,mjs}'],
    ...eslint.configs.recommended,
  },
  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      react,
      'react-hooks': fixupPluginRules(reactHooks),
      'jsx-a11y': jsxA11y,
    },
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser: typescriptEslintParser,
      parserOptions: {
        project: [
          './tsconfig.json',
          './tsconfig.app.json',
          './tsconfig.node.json',
        ],
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
        React: 'readonly',
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {},
  },
  ...tseslint.configs.recommended
);
