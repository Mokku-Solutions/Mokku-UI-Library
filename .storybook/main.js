module.exports = {
	stories: ["../components/**/*.stories.@(ts|tsx|js|jsx)"],
	addons: ["@storybook/addon-essentials"],
	framework: {
		name: "@storybook/nextjs",
		options: {},
	},
	docs: {
		autodocs: "tag",
	},
};
