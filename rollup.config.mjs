import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import peerDepsExternal from "rollup-plugin-peer-deps-external";

const rollupConfigs = [
	{
		input: "components/index.ts",
		output: [
			{
				file: "dist/index.js",
				format: "esm",
				sourcemap: true,
			},
		],
		plugins: [
			peerDepsExternal(),
			resolve(),
			commonjs(),
			typescript({
				tsconfig: "./tsconfig.json",
				declaration: true,
				declarationDir: "dist",
				jsx: "preserve",
				exclude: ["**/*.stories.tsx", "**/*.test.tsx"],
			}),
			babel({
				extensions: [".js", ".jsx", ".ts", ".tsx"],
				babelHelpers: "bundled",
				exclude: "node_modules/**",
			}),
		],
	},
	{
		input: "components/index.ts",
		output: [{ file: "dist/index.d.ts", format: "es" }],
		plugins: [dts()],
	},
];

export default rollupConfigs;
