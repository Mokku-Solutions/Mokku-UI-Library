import { FlatCompat } from '@eslint/eslintrc'
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const compat = new FlatCompat({
	baseDirectory: __dirname,
	recommendedConfig: {
		env: {
			browser: true,
			es2021: true,
		},
		parserOptions: {
			ecmaVersion: 'latest',
			sourceType: 'module',
		},
	},
})

const eslintConfig = [
	{
		ignores: ['dist/**/*', 'node_modules/**/*', 'storybook-static/**/*'],
	},
	...compat.extends(
		'next/core-web-vitals',
		'next',
		'plugin:@typescript-eslint/recommended',
		'prettier'
	),
	{
		rules: {
			// 🔕 Desactivar esta regla que espera /pages o /app
			'@next/next/no-html-link-for-pages': 'off',
		},
	},
]

export default eslintConfig
