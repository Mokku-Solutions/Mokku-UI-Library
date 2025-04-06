import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import dts from 'rollup-plugin-dts'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'

const rollupConfigs = [
    {
        input: ['components/index.ts', 'components/library/structure/index.ts'],
        output: {
            dir: 'dist',
            format: 'esm',
            preserveModules: true,
            preserveModulesRoot: 'components',
            sourcemap: true
        },
        plugins: [
            peerDepsExternal(),
            resolve(),
            commonjs(),
            typescript({
                tsconfig: './tsconfig.json',
                exclude: ['**/*.stories.tsx', '**/*.test.tsx']
            }),
            babel({
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
                babelHelpers: 'bundled',
                exclude: 'node_modules/**'
            })
        ]
    },
    {
        input: ['components/index.ts', 'components/library/structure/index.ts'],
        output: {
            dir: 'dist',
            format: 'esm',
            preserveModules: true,
            preserveModulesRoot: 'components'
        },
        plugins: [dts()]
    }
]

export default rollupConfigs
