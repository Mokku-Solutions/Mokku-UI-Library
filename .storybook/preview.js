import '../styles/globals.css' // o el path correcto a tu archivo de Tailwind

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/,
		},
	},
	layout: 'centered',
}
