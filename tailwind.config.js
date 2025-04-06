/** @type {import('tailwindcss').Config} */
module.exports = {
	// Evitamos purge totalmente
	content: [],
	theme: {
		extend: {},
	},
	// Forzamos la inclusión de TODAS las clases
	// con la expresión ".*"
	safelist: [
		{
			pattern: /.*/,
		},
	],
	// No plugins
	plugins: [],
	// No preflight, lo haremos manual
	corePlugins: {
		preflight: false,
	},
};
