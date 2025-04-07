import babel from '@rollup/plugin-babel'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
import dts from 'rollup-plugin-dts'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'

const rollupConfigs = [
    // JS/TS Build
    {
        input: 'components/index.ts',
        output: {
            dir: 'dist',
            format: 'esm',
            preserveModules: false,
            sourcemap: true
        },
        plugins: [
            peerDepsExternal(),
            resolve(),
            commonjs(),
            typescript({
                tsconfig: './tsconfig.json',
                exclude: ['**/*.stories.tsx', '**/*.test.tsx'],
                declaration: true,
                declarationDir: 'dist'
            }),
            babel({
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
                babelHelpers: 'bundled',
                exclude: 'node_modules/**'
            })
        ]
    },
    // Type Declarations
    {
        input: 'components/index.ts',
        output: {
            file: 'dist/index.d.ts',
            format: 'es'
        },
        plugins: [dts({ respectExternal: true, skipDiagnostics: true })],
        external: ['class-variance-authority', 'react', 'react-dom']
    }
]

export default rollupConfigs
