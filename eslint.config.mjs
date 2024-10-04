import js from '@eslint/js';
import tsParser from '@typescript-eslint/parser';
import eslintConfigPrettier from 'eslint-config-prettier';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
	{ ignores: ['dist'] },
	{
		extends: [
			js.configs.recommended,
			...tseslint.configs.strictTypeChecked,
			...tseslint.configs.stylisticTypeChecked,
			// Отключает все правила, которые не нужны или могут конфликтовать с Prettier
			eslintConfigPrettier,
		],
		files: ['**/*.{ts,tsx}'],
		settings: { react: { version: '18.3' } },
		languageOptions: {
			parser: tsParser,
			ecmaVersion: 2020,
			globals: globals.browser,
			parserOptions: {
				projectService: true,
				tsconfigRootDir: import.meta.dirname,
			},
		},
		plugins: {
			react,
			'react-hooks': reactHooks,
			'react-refresh': reactRefresh,
		},
		rules: {
			...react.configs.recommended.rules,
			...react.configs['jsx-runtime'].rules,
			...reactHooks.configs.recommended.rules,
			'react-refresh/only-export-components': [
				'warn',
				{ allowConstantExport: true },
			],
			'react/display-name': 'off',
			'@typescript-eslint/no-misused-promises': 'off',
			'@typescript-eslint/no-non-null-assertion': 'warn',
			'@typescript-eslint/prefer-nullish-coalescing': 'warn',
		},
	},
);
