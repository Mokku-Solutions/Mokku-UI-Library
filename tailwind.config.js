/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./app/**/*.{ts,tsx,js,jsx}",
		"./components/**/*.{ts,tsx,js,jsx}",
		"./stories/**/*.{ts,tsx,js,jsx,mdx}",
		"./.storybook/**/*.{ts,tsx,js,jsx}", // opcional, si hay algo ahí
	],
	theme: {
		extend: {},
	},
	plugins: [],
	safelist: ["w-full", "w-[95%]", "w-[90%]", "w-[80%]"],
	corePlugins: {
		preflight: false, // opcional si querés evitar resets
	},
};
