import js from '@eslint/js';
import prettier from 'eslint-config-prettier';
import eslintPluginImport from 'eslint-plugin-import';
import eslintPluginReact from 'eslint-plugin-react';
import eslintPluginReactHooks from 'eslint-plugin-react-hooks';
import tseslint from 'typescript-eslint';

export default [
	{
		ignores: ['node_modules', 'dist', 'build'],
	},
	js.configs.recommended,
	...tseslint.configs.recommended,
	{
		files: ['**/*.{ts,tsx,js,jsx}'],
		plugins: {
			import: eslintPluginImport,
			react: eslintPluginReact,
			'react-hooks': eslintPluginReactHooks,
		},
		rules: {
			'react/react-in-jsx-scope': 'off',
			'import/order': [
				'warn',
				{
					groups: ['builtin', 'external', 'internal'],
					alphabetize: { order: 'asc', caseInsensitive: true },
					'newlines-between': 'always',
				},
			],
		},
		settings: {
			react: {
				version: 'detect',
			},
		},
	},
	prettier,
];
